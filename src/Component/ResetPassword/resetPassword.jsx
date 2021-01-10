import React, { Component } from 'react';
import './resetPassword.css';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import UserService from '../../Services/userService.js';
import { Link } from 'react-router-dom';


const service=new UserService();
export default class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state={
            password: '',
            passwordFlag:false,
            confirm: '',
            confirmFlag:false,
              
            passwordError: "",
            confirmError: "",
            
        };
    }

     handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]:value}) 
        }
        validate=() => {
        this.setState({
                passwordFlag:false,
                passwordError:'',
                confirmFlag:false,
                confirmError:'',
                 })
            let isValid=false;
            if(this.state.password.length < 8) {
            this.setState({
                passwordFlag:true,
                passwordError:'Enter a valid password'
            })
            isValid=true;
            }
            if(this.state.confirm.length < 8) {
            this.setState({
                confirmFlag:true,
                confirmError:'Enter a valid password'
            })
            isValid=true;
            }
            if(this.state.password != this.state.confirm) {
            this.setState({
                confirmFlag:true,
                confirmError:'password does not match'
                })
                isValid=true;
            }
            return isValid;
        }
        handleSubmit = e => {
        e.preventDefault(); 
            if(this.validate()) {
                console.log('reset password failed');
            }
            else {
                console.log('reset password successful',this.state.password);
                let userdata = {  "newPassword" : this.state.password }
                const token=this.props.match.params.token;
                console.log(token);
                   service.resetpassword(userdata,token).then(response => {
                   console.log(response)
                }).catch(error => {
                   console.log(error)
               })
            }
        };

    render() {
        return (
            <div className="parent3">
            <div className="child4">
            <div className="header2">
            <span className="c1"> F </span>
            <span className="c2"> u </span>
            <span className="c3"> n </span>
            <span className="c4"> d </span>
            <span className="c5"> o </span>
            <span className="c6"> o </span>
            </div>
            <div className="form-container2">
            <span> Find your password </span>
            </div>
            <div className="mr1">
            <span> Reset your password</span>
            </div>
            <div className="form2">
            <div className="form-group2">
            <div className="flex-gap1">
            <TextField id="outlined-basic" 
            error={this.state.passwordFlag} 
            helperText={this.state.passwordError} 
            name="password" type="password" 
            label="New Password" 
            fullWidth variant="outlined" 
            size="small" 
            noValidate onChange={this.handleChange}  />
            <TextField id="outlined-basic" 
            error={this.state.confirmFlag} 
            helperText={this.state.confirmError} 
            name="confirm"  
            type="password" 
            label="Confirm New Password" 
            fullWidth variant="outlined" 
            size="small" 
            noValidate onChange={this.handleChange}  />
            </div>
            </div>
            </div>   

            <div className="showpassword">
            <div>
            <Checkbox value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }} />
            </div>
            <div>
            <FormHelperText id>  Show password </FormHelperText>
            </div>
            </div>

            <div className="button">
             <Button variant ="contained" component={ Link } to="/signin" onClick={ this.handleSubmit } color="primary" >
                Submit
            </Button>
            </div>
            </div>
            </div>
        );
    }
}

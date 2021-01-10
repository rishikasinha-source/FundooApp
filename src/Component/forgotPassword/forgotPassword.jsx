import React, {Component} from 'react';
import './forgotPassword.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserService from '../../Services/userService.js';
import { Link } from 'react-router-dom';

const service=new UserService();
class Forgotpassword extends Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            emailFlag:false,
           
                emailError: "",   
        };
    }

    handleChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            this.setState({[name]:value}) 
        }
        validate=() => {
            this.setState({
                   emailFlag:false,
                   emailError:'',
                 })
        let isValid=false;
          if(this.state.email.length === 0) {
                this.setState({
                    emailFlag:true,
                    emailError:'Enter a valid email or phone number! '
                })
                    isValid=true;
            }
            return isValid;
        }

         handleSubmit = e => {
        e.preventDefault(); 
            if(this.validate()) {
                console.log('email failed');
            }
            else {
                console.log('email successful');
                let userdata = { "email":this.state.email }
                service.forgotpassword(userdata).then(response => {
                console.log(response)
                }).catch(error => {
                   console.log(error)
               })
            }
        };



    render() {
        return(
            <div className="parent2">
            <div className="child3">
            <div className="header1">
            <span className="f"> F </span>
            <span className="u"> u </span>
            <span className="n"> n </span>
            <span className="d"> d </span>
            <span className="o"> o </span>
            <span className="o"> o </span>
             </div>
            <div className="form-container1">
            <span> Find your email </span>
            </div>
            <div className="mr">
            <span> Enter your recovery email</span>
            </div>
            <div className="form2">
            <div className="form-group2">
            <TextField id="outlined-full-width" 
            error={this.state.emailFlag} 
            helperText={this.state.emailError}
            name="email" 
            label="Email " 
            fullWidth variant="outlined"
            size="small" 
            required="@gmail.com" 
            noValidate onChange={this.handleChange} />
            </div>
            </div>

             <div className="button2">
             <Button variant ="contained" component={ Link } to="/resetpassword" onClick={ this.handleSubmit } color="primary" >
                 Submit
            </Button>
            </div>
            </div>
            </div>
        );
    }
}
 export default Forgotpassword;

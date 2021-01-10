import React, {Component} from 'react';
import './Registration.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
//  import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormHelperText from '@material-ui/core/FormHelperText';
import UserService from '../../Services/userService.js';
import Snackbar from '@material-ui/core/Snackbar';
// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const service=new UserService();
// const emailRegex = RegExp("^[0-9a-zA-Z]+([._+-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2})*$");

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state={
            firstName: '',
            firstNameFlag:false,
            lastName: '',
            lastNameFlag:false,
            email: '',
            emailFlag:false,
            password: '',
            passwordFlag:false,
            confirm: '',
            confirmFlag:false,
            
                firstNameError: "",
                lastNameError: "",
                emailError: "",
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
                   firstNameFlag:false,
                   firstNameError: '',
                   lastNameFlag:false,
                   lastNameError:'',
                   emailFlag:false,
                   emailError:'',
                   passwordFlag:false,
                   passwordError:'',
                   confirmFlag:false,
                   confirmError:'',
                 })
            let isValid=false;
            if(this.state.firstName.length === 0) {
                this.setState({
                   firstNameFlag:true,
                   firstNameError: 'First name is required'
                 })
                 isValid=true;
            }
            if(this.state.lastName.length === 0) {
                this.setState({
                    lastNameFlag:true,
                    lastNameError:'Last name is required! '
                })
                    isValid=true;
            }
            if(this.state.email.length === 0) {
                this.setState({
                    emailFlag:true,
                    emailError:'Email is required! '
                })
                    isValid=true;
            }
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
            if(this.state.password !== this.state.confirm) {
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
                console.log('registration failed');
            }
            else {
                console.log('registration successful');
                let userdata = {"firstName":this.state.firstName, "lastName":this.state.lastName, "email":this.state.email, "service":"advance", "password" : this.state.password}
                   service.registration(userdata).then(response => {
                   console.log(response)
                }).catch(error => {
                   console.log(error)
               })
            }
        };
            
    
render() {
    // const { formErrors } = this.state;
     return (
        <div className="parent">
        <div className="child1">
        <div className="header">
            <span className="f">F</span>
            <span className="u">u</span>
            <span className="n">n</span>
            <span className="d">d</span>
            <span className="o">o</span>
            <span className="o">o</span>
            </div>
             <div className="form-container">
                <span> Create your Fundoo Account </span>
             </div>
            <div className="form">
                <div className="form-group">
                <div className="flex-gap">
                <TextField id="outlined-basic" error={this.state.firstNameFlag} helperText={this.state.firstNameError} name="firstName"  label="First name" variant="outlined" size="small" noValidate onChange={this.handleChange}  />
                <TextField id="outlined-basic" error={this.state.lastNameFlag} helperText={this.state.lastNameError} name="lastName"  label="Last name" variant="outlined" size="small" noValidate onChange={this.handleChange}  />
                </div>
                </div>
                <div className="form-group">

                     <TextField id="outlined-full-width" error={this.state.emailFlag} helperText={this.state.emailError} name="email"  label="Use your email" fullWidth variant="outlined" size="small" required="@gmail.com" noValidate onChange={this.handleChange} />
                </div>
                <div>
                    <FormHelperText id> You can use letters, numbers & periods</FormHelperText>
                 </div>
                 <div className="form-group">
                 <div className="flex-gap">
                    <TextField id="outlined-basic" error={this.state.passwordFlag} helperText={this.state.passwordError} name="password" type="password" label="Password" variant="outlined" size="small" noValidate onChange={this.handleChange}  />
                    <TextField id="outlined-basic" error={this.state.confirmFlag} helperText={this.state.passwordError} name="confirm"  type="password" label="Confirm" variant="outlined" size="small" noValidate onChange={this.handleChange}  />
                   </div>
                </div>
                <div>
                <FormHelperText id> Use 8 or more characters with a mix of letters, numbers & symbols</FormHelperText>
                </div>
                <div className="flex-gap">
                <div className="showpassword">
                <div>
                 <Checkbox value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }} />
                </div>
                <div>
                <FormHelperText id> Show password </FormHelperText>
                </div>
               </div>
               </div>
            <div className="button">
             <Button variant ="contained"  onClick={ this.handleSubmit } color="primary" >
                 Submit
            </Button>
            <div className="title">
               <Button color="primary" component={Link} to="/signin">Sign in instead</Button>
              </div>
            </div>
        </div>
        </div>
        <div className="image">
        <img src="/assets/account.svg" width="244" height="244" />     
       </div>         
       <Snackbar/>
     </div>
    );
}
}
export default Registration;

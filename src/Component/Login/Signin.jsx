import React, { Component } from 'react';
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import UserService from '../../Services/userService.js';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const service=new UserService();

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            emailFlag:false,
            password: '',
            passwordFlag:false,

            emailError: "",
            passwordError: "",
        };
    }

    
        handleChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            this.setState({[name]:value}) 
        }
        validate=() =>{
            this.setState ({
                emailFlag:false,
                emailError:'',
                passwordFlag:false,
                passwordError:'',
            })
        let isValid=false;
        if(this.state.email.length === 0){
            this.setState({
                emailFlag:true,
                emailError:'Email is required'
            })
            isValid=true;
        }
         if(this.state.password.length < 4){
            this.setState({
                passwordFlag:true,
                passwordError:'Enter password'
            })
            isValid=true;
        }
        return isValid;
        }
        handleSubmit = e => {
            e.preventDefault(); 
            if(this.validate()) {
                console.log('login failed');
            }
            else {
                console.log('login successful');
                let userdata = {"email":this.state.email, "password" :this.state.password}
                   service.signin(userdata).then(response => {
                   console.log(response)
                }).catch(error => {
                   console.log(error)
               })
            }
        };

    render (){
        return (
        <div className="parent1">
         <div className="child2">
         <div className="header">
            <span className="l1">F</span>
            <span className="l2">u</span>
            <span className="l3">n</span>
            <span className="l4">d</span>
            <span className="l5">o</span>
            <span className="l6">o</span>
            <div className="signin">
            <span> Sign in </span>
            </div>
            <div className="container"> 
                Use your Fundoo Account 
             </div>
             <div className="form1">
             <div className="flex-gap1">
              <div className="form-group1">
               <TextField id="outlined-full-width"  error={this.state.emailFlag} helperText={this.state.emailError} name="email" label="Use your email" fullWidth variant="outlined" size="larger" required="@gmail.com" noValidate onChange={this.handleChange} />    
         </div>   
         <div className="form-group1">
         <TextField id="outlined-basic" error={this.state.passwordFlag} helperText={this.state.passwordError} name="password" type="password" label="Password" fullWidth variant="outlined" size="larger" noValidate onChange={this.handleChange}  />
        </div>
        </div>
         <div className="title1">
         <div className="flex-gap1">
            <Button color="primary" component={ Link } to="/forgotpassword"> Forgot password </Button>
            </div>
            </div>
            <div className="btnn">
            <Button variant ="contained" color="primary" component={ Link } to="/dashboard"> Submit </Button>
            </div>
            </div>
            </div>
        </div>
        </div>
        );
    }
}
export default Signin;
            
                
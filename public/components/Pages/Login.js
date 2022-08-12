import React, { useState, useEffect, Component } from 'react';
import { useHistory } from 'react-router-dom';
import fire from '../../fire';

const Login = (props) => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const history = useHistory();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearmessageError = () =>{
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
    clearmessageError();
    fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
        switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
        });
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            clearInputs();
            setUser(user);
            history.push("/Admin");
          } else {
            setUser("");
          }
        });
    };

    useEffect(() => {
    authListener();
    }, []);

    // const {
    //     email,
    //     setEmail,
    //     password,
    //     setPassword,
    //     handleLogin,
    //     hasAccount,
    //     setHasAccount,
    //     emailError,
    //     passwordError
    // } = props;

    // constructor(props){
    //     super(props);
    //     this.login = this.login.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.state={
    //         user : {},
    //         email : "",
    //         password : "",
    //     }
    // }

    // componentDidMount()
    // {
    //     this.authListener();
    // }

    // login(e){
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    //         console.log(u)
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }

    // handleChange(e){
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    // authListener(){
    //     fire.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             this.setState({user})
    //         }
    //         else{
    //             this.setState({user : null})
    //         }
    //     })
    // }

    // render() {
        return (
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input
                        // type="email"
                        // id="email"
                        // name="email"
                        // placeholder="enter email address"
                        // onChange={this.handleChange}
                        // value={this.state.email}
                        type = "text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                        // name="password"
                        // type= "password"
                        // onChange={this.handleChange}
                        // id="password"
                        // placeholder="enter password"
                        // value={this.state.password}
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </section>
        )
    }
// }

export default Login;
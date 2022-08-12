import React, { useState, useEffect} from 'react';
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
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input
                    type = "text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
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

export default Login;
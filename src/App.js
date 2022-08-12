import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/Pages/Home';
import ParkingLocation from './components/Pages/ParkingLocation';
import Contacts from './components/Pages/Contacts';
import Admin from './components/Pages/Admin';
import Login from './components/Pages/Login';
import LabtekVIII from './components/Pages/LabtekVIII';
import LabtekV from './components/Pages/LabtekV';
import PLN from './components/Pages/PLN';
import NotFoundPage from './components/Pages/NotFoundPage';
import fire from './fire';

function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


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
  this.props.history.push("/Admin");
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        this.props.history.push("/Admin");
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user ? (
        <>
        <Navbar handleLogout={handleLogout} user={user}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Parking-Location" component={ParkingLocation}/>
          <Route path="/Contacts" component={Contacts}/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/LabtekVIII" component={LabtekVIII}/>
          <Route path="/LabtekV" component={LabtekV}/>
          <Route path="/PLN" component={PLN}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer />
        </>
      ) : (
        <>
        <Navbar handleLogout={handleLogout} user={user}/>
        <Switch>
          <Route 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            emailError={emailError}
            passwordError={passwordError}  
            path="/Login"
            component={Login}
          />
          <Route exact path="/" component={Home}/>
          <Route path="/Parking-Location" component={ParkingLocation}/>
          <Route path="/Contacts" component={Contacts}/>
          {/* <Route path="/Admin" component={Admin}/> */}
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer />
        </>
      )}
    </div>
  );
}

export default App;

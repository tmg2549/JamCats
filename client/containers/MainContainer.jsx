import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx';
import LoginContainer from './LoginContainer.jsx';
import HomeContainer from './HomeContainer.jsx';

function MainContainer() {
  let [isAuthenticated, setAuthenticationStatus] = useState(false);
  let [userObj, setUserObj] = useState([]);

  useEffect ( () => {
    let authStatus = confirm('would you like to log in')
    setAuthenticationStatus(authStatus);
  },[])
  

  if (!isAuthenticated){
    console.log('SHOULD BE FALSE-> ', isAuthenticated)
    return (
      <div>
        <div>
          <Navbar isAuthenticated={isAuthenticated}/>
          <LoginContainer/>
        </div>
      </div>
    )
  }else{
    console.log('SHOULD BE TRUE -> ', isAuthenticated)
    return(
    <div>
        <div><Navbar isAuthenticated={isAuthenticated}/></div>
        <HomeContainer
          userJamSessions = {3}
        />
    </div>
    );
  }
}

export default MainContainer;
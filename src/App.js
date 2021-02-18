import React from 'react';
import Homepage from './pages/homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop';
import Header from './component/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';


function App() {
  return (
    <div >
     <Header/>

   <Switch>
     <Route exact path='/' component={Homepage} />
     <Route exact path ='/shop' component={ShopPage}/>
     <Route exact path ='/signin' component={SignInAndSignUp}/>
   </Switch>
    </div>
  );
}

export default App;

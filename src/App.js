import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Signup from './Signup'
import { login, logout } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import TeslaAccount from './TeslaAccount';
import block_data from './data';
function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <section>

              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              {isMenuOpen && <Menu />}
              {
                block_data.map((block) => (
                  <HeaderBlock
                    img={block.img}
                    model={block.model}
                    name={block.name}
                    btn1={block.btn1}
                    btn2={block.btn2}
                    isShow={block.isShow}
                  />
                ))
              }
            </section>


          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
                <>
                  <TeslaAccount
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                </>
              )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

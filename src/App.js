import React from 'react';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  isLoaded
} from 'react-redux-firebase';
import store from './redux/store';
import { rrfProps } from './config/firebase';
import Todos from './components/Todos';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Mian from './components/Mian';
// import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthIsLoaded >
            <Switch>
              <PublicRoute exact path="/home"  restricted={false} component={Home}/>
              <PublicRoute path="/login" restricted={true} component={LoginPage}/>
              <PrivateRoute path="/private" component={Mian} />
              <Redirect to="/home"/>

            <Todos />
            <div>
              Ready
            </div>
            </Switch>
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
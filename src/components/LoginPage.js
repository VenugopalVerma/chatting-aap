import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect, useHistory } from 'react-router-dom'; // if you use react-router
// import GoogleButton from 'react-google-button' // optional
import db from '../config/firebase';

export default function LoginPage() {
  const firebase = useFirebase()
  const auth = useSelector(state =>{ console.log('state',state); return state.firebase.auth})
  const history = useHistory();
  return (
  <div className={"some-name"}>
  {  !auth.uid ?
    <StyledFirebaseAuth
      uiConfig={{
        signInFlow: 'popup',
        signInSuccessUrl: '/private',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
          }],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl = 'private') => {
            console.log('successful sign in');
            firebase.handleRedirectResult(authResult).then(() => {
                console.log('redirect url',redirectUrl,authResult,auth);
                
                localStorage.setItem('redirected url',redirectUrl);
                if (authResult.additionalUserInfo.isNewUser || authResult.additionalUserInfo.providerId === 'google.com') {
                  console.log('authresult',authResult);
                  db.collection('profiles').doc(authResult.user.uid).set({
                  displayName: authResult.user.displayName,
                  email: authResult.user.email,
                  friends: [],
                  friendReq: [],
                  rooms: []
                  }).then(some => {
                    console.log('Profile created',some);
                  }).catch (error => {
                    console.log("Some error",error);
                  })
                }
                
                history.push(redirectUrl);
            });
            
            return false;
          },
          customCallback: (temp) => {
            console.log('custom call back',temp);
            return false;
          }
        },
      }}
      firebaseAuth={firebase.auth()}
        />
        : <Redirect to="/private"/>}
    <div>
        <h2>Auth</h2>
        {
          !isLoaded(auth)
          ? <span>Loading...</span>
          : isEmpty(auth)
            ? <span>Not Authed</span>
            : <pre>{JSON.stringify(auth, null, 2)}</pre>
        }
    </div>
  </div>
  )
}
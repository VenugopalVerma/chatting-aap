// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// import { createStore, combineReducers, compose } from 'redux'
// import {
//   ReactReduxFirebaseProvider,
//   firebaseReducer
// } from 'react-redux-firebase'
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// const firebaseConfig = {}

// react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users'
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// Initialize firebase instance
// firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer // <- needed if using firestore
// })

// Create store with reducers and initial state
// const initialState = {}
// const store = createStore(rootReducer, initialState)

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance // <- needed if using firestore
// }

// Setup react-redux so that connect HOC can be used
// function App() {
//   return (
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <Todos />
//       </ReactReduxFirebaseProvider>
//     </Provider>
//   )
// }

// -----------------------------------------------------X-------------------------------------------------


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import store from '../redux/store';

const firebaseConfig = {
    apiKey: "AIzaSyBbPlpLlnpGYwH_pQbDreuxdZUNOEJVBEs",
    authDomain: "fir-e2ff3.firebaseapp.com",
    databaseURL: "https://fir-e2ff3.firebaseio.com",
    projectId: "fir-e2ff3",
    storageBucket: "fir-e2ff3.appspot.com",
    messagingSenderId: "818044498841",
    appId: "1:818044498841:web:9d78b78c2f0a9359d45908",
    measurementId: "G-QHRCQZ3BBD"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
const db = firebase.firestore() // <- needed if using firestore


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}



// db.collection('/users').get().then((res) => {
//   // console.log(res);
//   res.forEach((doc) => {
//     console.log(doc.data());
//   })
// }).catch((e) => console.error("Error getting",e))
export {rrfProps};
export default db;
import { combineReducers } from 'redux';
import {
//   ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { 
    // createFirestoreInstance,
    firestoreReducer,
} from "redux-firestore"; // <- needed if using firestore

const demoReducer = (state = null,action) => {
  switch (action.type) {
    case "some action":
      console.log("Inside action of demo reducer");
      break;

    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  demoReducer: demoReducer
});


export default rootReducer;
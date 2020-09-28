import React from 'react';
import firebase from 'firebase/app';
import db from '../config/firebase';

function Mian() {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('freind request',e);
        const email = "test2@test.com";
        let id = null;
        // db.collection('profiles').where('email', '==', email).get().then(snapshot => snapshot.forEach(doc => {console.log(doc.id,' -> ',doc.data()); id = doc.id}));
        const ref = db.collection('profiles').doc('otM44aLjmrSERx4EIUgVto0vv362');
        db.runTransaction(transaction => transaction.get(ref).then(doc => {
          if (!doc.exists) {
            throw new Error("Document does not exists");
          }
          transaction.update(ref,{friendReq: firebase.firestore.FieldValue.arrayUnion('sender email')});
        }))
        .then(() => console.log('Transaction successful'))
        .catch(e => console.error("Transaction failed",e));
    }

    return (
        <>
            <div>Private content</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter email of your friend"/>
                <button type="submit">Send Request</button>
            </form>
        </>
    )
}

export default Mian;
import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'

function Todos() {
    // const count = useSelector(state => console.log(state));
    useFirestoreConnect([
        { collection: 'someCollection' } // or 'todos'
      ])
    const todos = useSelector(state => console.log(state));
    console.log(todos);
    return (
        <div>
            this is todo
        </div>
    )
}

export default Todos;
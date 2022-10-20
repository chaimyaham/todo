import React from 'react'
import { ACTIONS } from '../App'

export default function Todo({todo,dispatch}) {
  return (
    <div className={`alert  mt-4 ${todo.complete?'alert-dark':'alert-success'}`}>

        <h6 className="text-capitalize">{todo.name}</h6>
        <button className="btn btn-sm btn-primary" onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>
            toggle
        </button>
        <button className="btn mx-2 btn-sm btn-danger" onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>
            Delete
        </button>
        
        
    </div>
  )
}

import './App.css';
import {useState,useReducer} from 'react';
import Todo from './components/Todo';
export const ACTIONS={
  ADD_TODO:'add-todo',
  TOGGLE_TODO:'toggle',
  DELETE_TODO:'delete'

}
function reducer(todos,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo=>{
        if(todo.id===action.payload.id){
          return { ...todo,complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
     return todos.filter(todo=>todo.id!=action.payload.id)
    default :
    return todos
  }
}
function newTodo(name){
  console.log('hi')
  return {id:Date.now(),name:name,complete:false}
  
}


function App() {
  const [name,setName]=useState('')
  const [todos,dispatch]=useReducer(reducer,[])


function handleOnSubmit(e){
    e.preventDefault()
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
    setName('');


  }
console.log(todos)
  return (
    <div className="container p-5" >
      <h1 className="text-capitalize text-center alert alert-dark">to-do list</h1>
      <form className='mt-5 p-2' onSubmit={handleOnSubmit}>
        <label htmlFor="todo" className="form-label text-capitalize">Add to to-do list : </label>
        <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} />
       

      </form>
      {todos.map(todo=>{
       return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
})}
   
   
     
    </div>
  );
}

export default App;

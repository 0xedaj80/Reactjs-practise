import { useState } from "react";
import { useEffect } from "react";


function useTodo(){
 const [todo, settodo] = useState([]);
 
 useEffect(()=>{
  
  fetch("http://localhost:3000/todo").then((resp)=>{
     resp.json().then((data)=>{
        settodo(data); 
     })
  });
  
  setInterval(()=>{
    fetch("http://localhost:3000/todo").then((resp)=>{
       resp.json().then((data)=>{
        settodo(data)
       })
    }) 
  }, 1000)

   

 }, [])

 return todo;
}



function App(){
   
  const todo = useTodo() 
   return(
     <div>
      <br />
       {todo.map((todo)=>{
          return <Todo title={todo.title} description={todo.description}></Todo> 
       })} 
     </div>
   ) 
}

function Todo(props){
   return (
    <> 
    {props.title} 
    {props.description} 
    <button>delete</button>
    <br />
    </>
   )
}

export default App;

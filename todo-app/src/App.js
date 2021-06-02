import React, { useReducer,useCallback, useState,useRef } from 'react'
import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'



function createBulkTodos(){
  const array=[];
  for(let i=1; i <= 15; i++){
    array.push({
      id:i,
      text:`할 일 ${i}`,
      checked:false,
    });
  }
  return array;
}



function App() {
  const [todos,setTodos]=useState(createBulkTodos);

  
 

  //고윳값을 사용될 id
  //ref를 사용하여 변수담기
  const nextId = useRef(4);

  const onInsert=useCallback(
    text=>{
      const todo={
        id:nextId.current,
        text,
        checked:false,
      };
      setTodos(todos=>todos.concat(todo));
      nextId.current += 1 ; //nextId 1씩 더하기
    },
    [],
  );

  const onRemove=useCallback(
    id=>{
      setTodos(todos=>todos.filter(todo=>todo.id !== id));
    },
    [],
  )

  const onToggle=useCallback(
    id=>{
      setTodos(todos=>
        todos.map(todo=>
          todo.id  === id ? {...todo,checked: !todo.checked}:todo,
        )
      );
    },
    []
  );
  return(
    <div>
     <TodoTemplate> 
     <TodoInsert onInsert={onInsert}/>
     
     <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
     </TodoTemplate>
    </div>
  )
}

export default App;

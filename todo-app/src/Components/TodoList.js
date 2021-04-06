//todos 배열을 props로 받아 온 후 이를 배열 내장 함수 map 을 사용해서 여러개의 TodoListItem 컴포넌트로 변환하여 보여준다
import React from 'react';
import TodoListltem from './TodoListltem';
// import './TodoLit.scss';

const TodoList=({todos,onRemove,onToggle})=>{
  return(
      <div className="TodoList">
          {todos.map(todo=>(
              <TodoListltem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
          ))}
      </div>
  )
}

export default TodoList
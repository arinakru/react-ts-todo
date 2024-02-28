import { ITodo } from "../types/data";

interface ITodoItem extends ITodo{
  removeTodo: (id: number)  => void;
  toggleTodo: (id: number)  => void;
}

const TodoItem: React.FC <ITodoItem> = (props) => {
  const {id, title, complete, removeTodo, toggleTodo} = props
  return <div>
    <input 
    style={{ 
      padding: '5px',
      border: '0.2px solid #ccc',
      outline: 'none',
       }} 
    type = "checkbox" 
    checked = {complete} 
    onChange={() => toggleTodo(id)}
     />
      <span style={{
        display: 'inline-block',
        margin: '0 10px',
      }
      }>
        {title}
        </span>
      <button 
      onClick={() => removeTodo(id)}
      style = {{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: 'red'
      }}
      >x</button>
  </div>
}

export {TodoItem}
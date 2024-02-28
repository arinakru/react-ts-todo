import React, {useState, useEffect, useRef} from "react"
import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue('');
    }
  }

  const removeTodo = (id : number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        complete: !todo.complete
      }
    }))
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <div>
    <div>
    <input style={{ 
      padding: '8px',
      border: '0.5px solid #ccc',
      borderRadius: '5px'
       }} 
        value={value} 
        onChange={handleChange} 
        onKeyDown={handleKeyDown} 
        ref={inputRef} />
       
      <button style={{ 
        backgroundColor: '#0000FF', 
        color: 'white', 
        padding: '8px 12px', 
        border: 'none', 
        cursor: 'pointer',
        margin: '0 10px'
       }} 
        onClick={addTodo}>Add</button>
    </div>
    <TodoList items={todos} removeTodo = {removeTodo} toggleTodo = {toggleTodo}/>
  </div>
}

export {App}
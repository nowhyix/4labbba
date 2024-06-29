import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  // useState хук для хранения состояния списка задач
  const [todos, setTodos] = useState([]);

  // useEffect хук для загрузки задач из localStorage при монтировании компонента
  //Загружает сохраненные задачи из localStorage и обновляет состояние todos.
  useEffect(() => {

    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // useEffect хук для сохранения задач в localStorage при каждом изменении списка задач
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Функция для добавления новой задачи
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Функция для удаления задачи по индексу
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Функция для переключения состояния выполнения задачи по индексу
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Рендеринг основного интерфейса приложения
  return (
      <div className="app-container">
        <h1>Планировщик задач</h1>
        {/* Передача функции addTodo в компонент TodoForm */}
        <TodoForm addTodo={addTodo} />
        {/* Передача списка задач и функций для удаления и переключения состояния задач в компонент TodoList */}
        <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      </div>
  );
}

export default App;

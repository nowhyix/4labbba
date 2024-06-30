// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, removeTodo, toggleComplete }) {
    return (

        <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <span>
        <input //флаг для отметки завершенности
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleComplete(index)} // Вызываем функцию toggleComplete при изменении состояния флажка
        />
          {todo.text}
      </span>
            <button onClick={() => removeTodo(index)}>Удалить</button>  {/* Кнопка для удаления задачи */}
        </li>
    );
}

export default TodoItem;

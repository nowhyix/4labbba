// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

// Компонент TodoList принимает три пропса: todos, removeTodo, toggleComplete
function TodoList({ todos, removeTodo, toggleComplete }) {

    return (
        <ul className="todo-list">
            {/* Перебираем массив todos и для каждого элемента создаем компонент TodoItem */}
            {todos.map((todo, index) => (
                <TodoItem
                    key={index} // Уникальный ключ для каждого элемента списка
                    index={index} // Индекс текущего элемента
                    todo={todo} // Текущий объект задачи
                    removeTodo={removeTodo} // Функция для удаления задачи
                    toggleComplete={toggleComplete} // Функция для переключения состояния завершенности задачи
                />
            ))}
        </ul>
    );
}

export default TodoList;

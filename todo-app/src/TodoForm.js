// src/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState(''); // Состояние для хранения текущего значения поля ввода

    const handleSubmit = (e) => { // Функция обработки отправки формы
        e.preventDefault(); //Предотвращает стандартное поведение отправки формы (по умолчанию)
        if (!value) return;
        // Вызываем функцию addTodo, передавая объект с текстом задачи и флагом завершенности
        addTodo({
            text: value,
            isCompleted: false,
        });
        setValue(''); // Очищаем значение поля ввода после добавления задачи
    };

    // Возвращаем JSX формы для ввода новой задачи
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={(e) => setValue(e.target.value)} // Обновляем значение при изменении в поле ввода
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default TodoForm;

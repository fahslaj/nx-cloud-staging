'use client';

import { useState } from 'react';

export default function Index() {
  const [todos, setTodos] = useState<{ title: string }[]>([]);

  const todoDivs = todos.map((todo) => (
    <div className="flex flex-row" key={todo.title}>
      <div>{todo.title}</div>
    </div>
  ));

  const addTodo = (title: string) => {
    setTodos([...todos, { title }]);
  };

  return (
    <div id="todosContainer" className="flex flex-col">
      {todoDivs}
      <form
        className="flex flex-row"
        onSubmit={(e) => {
          addTodo(
            (
              e.currentTarget.elements.namedItem(
                'todoInput'
              ) as HTMLInputElement
            ).value
          );
          e.preventDefault();
          (
            e.currentTarget.elements.namedItem('todoInput') as HTMLInputElement
          ).value = '';
        }}
      >
        <input id="todoInput" type="text" placeholder="Add a todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

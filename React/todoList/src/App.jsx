import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoLi from "./components/TodoLi";

function App() {
  const [todos, setTodos] = useState([]);

  const handleNewItems = (itemName, itemDate) => {
    setTodos([...todos, { name: itemName, date: itemDate }]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="border-2 border-gray-600 w-[40rem] h-[40rem] rounded-xl bg-blue-100 flex flex-col">
        <h1 className="text-3xl font-bold text-center pt-4">Todo List App</h1>
        <AddTodo handleNewItems={handleNewItems} />
        <div className="flex-grow overflow-y-auto">
          <ul>
            {todos.map((todo, index) => (
              <TodoLi
                key={index}
                name={todo.name}
                date={todo.date}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

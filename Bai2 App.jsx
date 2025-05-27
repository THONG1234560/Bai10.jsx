import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <TodoForm />
    </div>
  );
};

export default App;

import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import { TodoProvider } from './TodoContext';
import TodoList from "./TodoList"
import { loggin } from "../constant/data"

const ProtectedRoute = ({ element }) => {
  return loggin.loggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<TodoProvider><TodoList /></TodoProvider>} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

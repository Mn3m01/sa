import './App.css';
import { Outlet } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/login/LoginPage';
function App() {

  return (
    <div className="App">
      <Outlet />
    </div>  
);
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./pages/MainRoutes";

// import logo from "./Images/logo.png";
import "./App.css";
// import Dashboard from "./Admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />

      {/* <h1>This is Our Logo</h1>
      <h1>Just demo Test</h1>

      <Dashboard/>  */}
    </div>
  );
}

export default App;

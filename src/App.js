import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

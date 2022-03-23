import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

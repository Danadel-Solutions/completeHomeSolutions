import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;

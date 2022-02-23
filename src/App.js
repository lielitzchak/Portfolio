import "./app.css";
import FooterComponent from "./components/Footer/FooterComponent";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Projects />
      <FooterComponent />
    </div>
  );
}

export default App;

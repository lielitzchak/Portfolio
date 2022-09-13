import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { ROUTES } from "./routes/routes";

function App() {
  return (
    <section className="App">
      <SideBar />
      <Routes>
        {ROUTES.map((singleRoute) => (
          <Route
            key={singleRoute.path}
            exact
            element={singleRoute.element}
            path={singleRoute.path}
          />
        ))}
      </Routes>
    </section>
  );
}

export default App;

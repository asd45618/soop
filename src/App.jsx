import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomeView from "./views/HomeView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
      </Route>
    </Routes>
  );
}

export default App;

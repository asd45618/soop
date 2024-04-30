import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import CompanyView from "./views/CompanyView";
import ContactUsView from "./views/ContactUsView";
import ArtistView from "./views/ArtistView";
import ProductView from "./views/ProductView";
import CommunityView from "./views/CommunityView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/company" element={<CompanyView />} />
        <Route path="/contactUs" element={<ContactUsView />} />
        <Route path="/artist" element={<ArtistView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/community" element={<CommunityView />} />
      </Route>
    </Routes>
  );
}

export default App;

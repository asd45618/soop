import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import CompanyView from "./views/CompanyView";
import ContactUsView from "./views/ContactUsView";
import ArtistView from "./views/ArtistView";
import ProductView from "./views/ProductView";
import ProductDetailView from '@/views/ProductDetailView'
import ProductModifyView from '@/views/ProductModifyView'
import ProductInsertView from '@/views/ProductInsertView'
import CommunityView from "./views/CommunityView";
import CommunityWriteView from "./views/CommunityWriteView";
import LoginView from "./views/LoginView";
import JoinView from "./views/JoinView";
import CartView from '@/views/CartView'
import CommunityDetailView from "./views/CommunityDetailView";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityModifyView from "./views/CommunityModifyView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/company" element={<CompanyView />} />
        <Route path="/contactUs" element={<ContactUsView />} />
        <Route path="/artist" element={<ArtistView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/product/:id" element={ <ProductDetailView />} />
        <Route path="/productModify" element={ <ProductModifyView /> } />
        <Route path="/productInsert" element={ <ProductInsertView />} />
        <Route path="/community" element={<CommunityView />} />
        <Route path="/communityWrite" element={<CommunityWriteView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/join" element={<JoinView />} />
        <Route path="/cart" element={ <CartView />} />
        <Route
          path="/communityDetail/:subject"
          element={<CommunityDetailView />}
        />
        <Route
          path="/communityModify/:subject"
          element={<CommunityModifyView />}
        />
      </Route>
    </Routes>
  );
}

export default App;

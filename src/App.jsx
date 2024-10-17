import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Designs from './pages/Design Style/Designs'
import Feedback from "./pages/Feedback/Feedback";
import Contact from "./pages/Contact/Contact";
import Sitemap from "./pages/Sitemap/SiteMap";
import ProductsList from "./pages/Products list/ProductsList";
import Detail from "./components/Detail";
import DesignerProfile from "./components/DesignerProfile";
import ScrollToTop from "./components/ScrollToTop";
import Wishlist from "./components/Wishlist";
import DesignDetail from "./components/DesignDetail";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="designs" element={<Designs/>}/>
      <Route path="feedback" element={<Feedback/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="sitemap" element={<Sitemap/>}/>
      <Route path="design-detail/:category/:id" element={<DesignDetail/>}/>
      <Route path="design-style/:category/:id" element={<Designs/>}/>
      <Route path="designer-profile/:id" element={<DesignerProfile/>}/>
      <Route path="product-detail/:category/:id" element={<Detail/>}/>
      <Route path="product-list/:category/:id" element={<ProductsList/>}/>
    </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

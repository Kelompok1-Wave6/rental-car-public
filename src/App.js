import { Route, Routes, useLocation, Outlet, Navigate } from "react-router-dom";
import CariMobil from "./components/pages/CariMobil";
import DetailMobil from "./components/pages/DetailMobil";
import FaqSection from "./components/pages/FaqSection";
import FooterSection from "./components/pages/FooterSection";
import HasilCariMobil from "./components/pages/HasilCariMobil";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import OurserSection from "./components/pages/OurserSection";
import TestiSection from "./components/pages/TestiSection";
import WhyUs from "./components/pages/WhyUs";
import Pembayaran from "./components/pages/Pembayaran";
import PembayaranTransfer from "./components/pages/Pembayaran_Tf";
import Upload from "./components/Upload";
import ETiket from "./components/ETiket";
import SignUp from "./components/pages/Login/SignUp";
import SignIn from "./components/pages/Login/SignIn";


const WithAuth = () => {
  const isAuth = window.localStorage.getItem('access_token');
  return (
    <>
      {!isAuth && <Navigate to={'/sign-up'}/>}  
      <Outlet/>
    </>
  );
}


function App() {

  const location = useLocation();

  return (
   <>
    
    {location.pathname !== '/sign-in'  && location.pathname !== '/sign-up' &&  <Navbar/>}
      
        <Routes>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/ourservis" element={<OurserSection/>} />
          <Route path="/whyus" element={<WhyUs/>} />
          <Route path="/testi" element={<TestiSection/>} />
          <Route path="/faq" element={<FaqSection/>} />

        <Route element={<WithAuth/>} >
          <Route path="/carimobil" element={<CariMobil/>}/>
          <Route path="/hasilmobil" element={<HasilCariMobil/>}/>
          <Route path="/detailmobil/:id" element={<DetailMobil/>}/>
          <Route path="/pembayaran" element={<Pembayaran/>}/>
          <Route path="/transfer" element={<PembayaranTransfer/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/etiket" element={<ETiket/>}/>
        </Route>
        </Routes>

    {location.pathname !== '/sign-in'  && location.pathname !== '/sign-up' &&  <FooterSection/>}
   </>
  );
}

export default App;

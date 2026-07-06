import React, { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Welcome from "./pages/Welcome";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Chatbot from "./components/Chatbot";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import CancellationPolicy from "./pages/CancellationPolicy";
import UserHome from "./pages/UserHome";
import ServiceDetails from "./pages/ServiceDetails";
import Meeting from "./pages/Meeting";
import Dashboard from "./pages/Dashboard";
import {Toaster} from "react-hot-toast"
import ProtectedRoute from "./components/Protected";
import Appointment from "./pages/Appointment";
import BookingDashboard from "./pages/BookingDashboard";
import Setting from "./pages/Setting";
import PaymentPage from "./pages/PaymentPage";
const App = () => {
const [curr,setata]=useState(true)
  const location = useLocation();
  const isMeetingPage = location.pathname.startsWith("/meeting");
  const isdashboard=location.pathname.startsWith("/dashboard")
  const isappointment=location.pathname.startsWith("/appointment")
  const isbookingdashboard=location.pathname.startsWith("/bookings")
  const issetting=location.pathname.startsWith("/settings")
   const ispaymentpage=location.pathname.startsWith("/payment")
  function checkopen() {
    setata(!curr);
  }

useEffect (function(){
  
},[curr]);
  return (

<PageWrapper> 
  <Toaster position="top-center" />
     <div
  onClick={checkopen}
  className={
    isMeetingPage
      ? "w-screen h-screen bg-black"
      : "responsive bg-gray-950 min-h-screen text-white overflow-hidden"
  }
>

      {!isMeetingPage && !isdashboard && !isappointment && !isbookingdashboard && !issetting &&(
  <Nav curr={curr} setata={setata} />
)}
      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/store"
            element={<Store />}
          />

<Route path="/privacy" element={<Privacy />} />
<Route path="/refund" element={<RefundPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/cancellation-policy" element={<CancellationPolicy />} />
<Route path="/User" element={<UserHome />} />
<Route path="/explore/:id" element={<ServiceDetails />}/>
<Route path='/meeting/:id' element={<ProtectedRoute>{<Meeting />}</ProtectedRoute>} />
      <Route path='/dashboard' element={<ProtectedRoute>{<Dashboard />}</ProtectedRoute> }/>
<Route  path ='/appointment' element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
<Route path="/bookings" element={<ProtectedRoute>{<BookingDashboard />}</ProtectedRoute>}/>
<Route path='/settings'  element={<ProtectedRoute>{<Setting />}</ProtectedRoute>}/>
<Route path='/payments'  element={<ProtectedRoute>{< PaymentPage/>}</ProtectedRoute>}/>

       </Routes>


      </AnimatePresence>

     {!isMeetingPage && !isdashboard &&<Footer />}
      

    </div>
    </PageWrapper>

  );
};

export default App;
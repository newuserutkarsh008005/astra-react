import React, { useState } from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import CancellationPolicy from "./pages/CancellationPolicy";

import UserHome from "./pages/UserHome";
import ServiceDetails from "./pages/ServiceDetails";
import Meeting from "./pages/Meeting";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import BookingDashboard from "./pages/BookingDashboard";
import Setting from "./pages/Setting";
import PaymentPage from "./pages/PaymentPage";

import ProtectedRoute from "./components/Protected";

const App = () => {
  const [curr, setata] = useState(true);

  const location = useLocation();

  const isMeetingPage =
    location.pathname.startsWith("/meeting");

  const isDashboard =
    location.pathname.startsWith("/dashboard");

  const isAppointment =
    location.pathname.startsWith("/appointment");

  const isBookingDashboard =
    location.pathname.startsWith("/bookings");

  const isSetting =
    location.pathname.startsWith("/settings");

  const isPaymentPage =
    location.pathname.startsWith("/payments");

  const isWelcome =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/welcome" ||
    location.pathname.startsWith("/Welcome");

  const isContactPage =
    location.pathname === "/contact";

  const hideNavbar =
    isMeetingPage ||
    isDashboard ||
    isAppointment ||
    isBookingDashboard ||
    isSetting ||
    isPaymentPage;

  return (
    <>
      {/* =====================================================
          TOASTER
      ====================================================== */}

      <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
  }}
  containerStyle={{
    top: "90px",
  }}
/>


      {/* =====================================================
          NAVBAR

          IMPORTANT:
          Navbar is OUTSIDE the animated page content.
          This prevents Framer Motion transforms from
          affecting the fixed navbar.
      ====================================================== */}

      {!hideNavbar && (
        <div
          className="
            fixed
            top-0
            left-0
            right-0
            z-[999999]
            w-full
            pointer-events-auto
          "
        >
          <Nav
            curr={curr}
            setata={setata}
          />
        </div>
      )}


      {/* =====================================================
          MAIN APPLICATION
      ====================================================== */}

      <div
        className={
          isMeetingPage
            ? "w-screen h-screen bg-black"
            : `
              relative
              z-0
              min-h-screen
              w-full
              bg-gray-950
              text-white
              overflow-hidden
            `
        }
      >

        {/* ===================================================
            PAGE TRANSITIONS

            The animation is ONLY around the routes.
            Navbar is NOT inside this transform.
        ==================================================== */}

        <AnimatePresence
          mode="wait"
        >
          <Routes
            location={location}
            key={location.pathname}
          >

            {/* ================= HOME ================= */}

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/home"
              element={<Home />}
            />


            {/* ================= PUBLIC ================= */}

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

            <Route
              path="/privacy"
              element={<Privacy />}
            />

            <Route
              path="/refund"
              element={<RefundPolicy />}
            />

            <Route
              path="/terms"
              element={<Terms />}
            />

            <Route
              path="/cancellation-policy"
              element={<CancellationPolicy />}
            />

            <Route
              path="/User"
              element={<UserHome />}
            />

            <Route
              path="/explore/:id"
              element={<ServiceDetails />}
            />


            {/* ================= PROTECTED ================= */}

            <Route
              path="/meeting/:id"
              element={
                <ProtectedRoute>
                  <Meeting />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/appointment"
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/bookings"
              element={
                <ProtectedRoute>
                  <BookingDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Setting />
                </ProtectedRoute>
              }
            />

            <Route
              path="/payments"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />

          </Routes>
        </AnimatePresence>


        {/* ===================================================
            FOOTER
        ==================================================== */}

        {!isMeetingPage &&
          !isDashboard &&
          !isPaymentPage &&
          !isWelcome &&
          !isContactPage && (
            <Footer />
          )}

      </div>
    </>
  );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthCommunication from "./pages/HealthCommunication";
import Empowerment from "./pages/Empowerment";
import HumanRight from "./pages/HumanRight";
import HealthPromotion from "./pages/HealthPromotion";
import UnitedNationsDays from "./pages/UnitedNationsDays";
import Volunteer from "./pages/Volunteer";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/health-communication"
          element={
            <MainLayout>
              <HealthCommunication />
            </MainLayout>
          }
        />
        <Route
          path="/empowerment"
          element={
            <MainLayout>
              <Empowerment />
            </MainLayout>
          }
        />
        <Route
          path="/human-rights"
          element={
            <MainLayout>
              <HumanRight />
            </MainLayout>
          }
        />
        <Route
          path="/health-promotion"
          element={
            <MainLayout>
              <HealthPromotion />
            </MainLayout>
          }
        />
        <Route
          path="/un-days"
          element={
            <MainLayout>
              <UnitedNationsDays />
            </MainLayout>
          }
        />
        <Route
          path="/volunteer"
          element={
            <MainLayout>
              <Volunteer />
            </MainLayout>
          }
        />
      
      </Routes>
    </Router>
  );
}

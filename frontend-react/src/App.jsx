import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthCommunication from "./pages/HealthCommunication";
import Empowerment from "./pages/Empowerment";
import HumanRight from "./pages/HumanRight";
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
        {/* <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}

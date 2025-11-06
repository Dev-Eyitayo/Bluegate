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
import MedicalOutreach from "./pages/MedicalOutreach";
import VolunteerForm from "./pages/VolunteerForm";
import ContactUs from "./pages/ContactUs";
import Persor from "./pages/Persor";
import BlogPage from "./pages/BlogPage";
import Publications from "./pages/Publications";
import TrainingForm from "./pages/TrainingForm";
import Training from "./pages/Training";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VolunteerDetail from "./pages/admin/VolunteerDetail";
import AdminRoute from "./components/AdminRoute";
import TrainingPrograms from "./pages/TrainingPrograms";
import AdminBlogList from "./pages/admin/AdminBlogList";
import AdminBlogForm from "./pages/admin/AdminBlogForm";
import BlogDetailPage from "./pages/BlogDetailPage";
import ToastContainer from "./components/ToastContainer";
import CommunicableDiseases from "./pages/CommunicableDiseases";
import NonCommunicableDiseases from "./pages/NonCommunicableDiseases";
import MaternalChildHealth from "./pages/MaternalChildHealth";
import EnvironmentalHealth from "./pages/EnvironmentalHealth";
import Research from "./pages/Research";
import MEL from "./pages/MEL";

// import Research from "./pages/Research";

export default function App() {
  return (
    <>
    {/* <ToastContainer toasts={toasts} removeToast={removeToast} /> */}
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
          path="outreach/un-days"
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
        <Route
          path="/volunteer-form"
          element={
            <MainLayout>
              <VolunteerForm />
            </MainLayout>
          }
        />
        <Route
          path="/medical-outreach"
          element={
            <MainLayout>
              <MedicalOutreach />
            </MainLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
        <Route
          path="/persor-project"
          element={
            <MainLayout>
              <Persor />
            </MainLayout>
          }
        />
        <Route
          path="/outreach"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />
        <Route
          path="/publications"
          element={
            <MainLayout>
              <Publications />
            </MainLayout>
          }
        />
        <Route
          path="/training"
          element={
            <MainLayout>
              <Training />
            </MainLayout>
          }
        />
        <Route
          path="/training-programs"
          element={
            <MainLayout>
              <TrainingPrograms />
            </MainLayout>
          }
        />
        <Route
          path="/training-form"
          element={
            <MainLayout>
              <TrainingForm />
            </MainLayout>
          }
        />
        {/* <Route
          path="/research"
          element={
            <MainLayout>
              <Research />
            </MainLayout>
          }
        /> */}

        {/* Admin auth */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin protected area */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/volunteers/:id"
          element={
            <AdminRoute>
              <VolunteerDetail />
            </AdminRoute>
          }
        />
        <Route path="/admin/outreach" element={<AdminBlogList />} />
        <Route path="/admin/outreach/create" element={<AdminBlogForm />} />
        <Route path="/admin/outreach/edit/:id" element={<AdminBlogForm />} />
        <Route path="/outreach/:slug" element={<BlogDetailPage />} />

        <Route path="/health-promotion/communicable-diseases" element={<MainLayout><CommunicableDiseases /></MainLayout>} />
        <Route path="/health-promotion/non-communicable-diseases" element={<MainLayout><NonCommunicableDiseases /></MainLayout>} />
        <Route path="/health-promotion/maternal-child-health" element={<MainLayout><MaternalChildHealth /></MainLayout>} />
        <Route path="/health-promotion/environmental-health" element={<MainLayout><EnvironmentalHealth /></MainLayout>} />
        <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
        <Route path="/mel" element={<MainLayout><MEL /></MainLayout>} />
      
      </Routes>
      </>
  );
}

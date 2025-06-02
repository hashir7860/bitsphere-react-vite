import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Hero from "./Layout/Hero";
import ClientsSection from "./components/ClientSection";
import ServicesSection from "./components/ServicesSection";
import Projects from "./components/Projects";
import TeamSection from "./components/TeamSection";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";

import { Toaster } from "react-hot-toast";
// import {
//   database,
//   ref,
//   onDisconnect,
//   onValue,
//   set,
//   serverTimestamp,
// } from "./Firebase";

//What We Do Pages
import ProductEngineering from "./pages/ProductEngineering";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import DataAndAi from "./pages/DataAndAi";
import DevOpsAndCloud from "./pages/DevOpsAndCloud";
import EmergingTechnologies from "./pages/EmergingTechnologies";
import BlockChainAndWeb3 from "./pages/BlockChainAndWeb3";

//Who We Serve Pages
import StartUp from "./pages/whoWeServe/StartUp";
import Enterprises from "./pages/whoWeServe/Enterprises";
import RescueProjects from "./pages/whoWeServe/RescueProjects";

//How We Engage Pages
import ProductDevelopment from "./pages/howWeEngage/ProductDevelopment";
import ManagedItSystems from "./pages/howWeEngage/ManagedItSystems";
import TeamAugmentation from "./pages/howWeEngage/TeamAugmentation";

//Hire Dev Pages
import DedicatedDevelopers from "./pages/hireDev/DedicatedDevelopers";
import RemoteTeams from "./pages/hireDev/RemoteTeams";
import StaffAugmentation from "./pages/hireDev/StaffAugmentation";

//Company Pages
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Team from "./pages/company/Team";

//Contact Pages
import GetInTouch from "./pages/contact/GetInTouch";
import Sales from "./pages/contact/Sales";
import Support from "./pages/contact/Support";
import Location from "./pages/contact/Location";
import ScheduleDemo from "./pages/contact/ScheduleDemo";
import Feedback from "./pages/contact/Feedback";
import Counter from "./components/Counter";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import Portfolio from "./pages/company/Portfolio";

function App() {
  const [onlineCount, setOnlineCount] = useState(0);

  // useEffect(() => {
  //   const userId = `user_${Date.now()}`;
  //   const userRef = ref(database, `onlineUsers/${userId}`);

  //   set(userRef, {
  //     online: true,
  //     timestamp: serverTimestamp(),
  //   });

  //   onDisconnect(userRef).remove();

  //   const allUsersRef = ref(database, "onlineUsers");

  //   onValue(allUsersRef, (snapshot) => {
  //     const users = snapshot.val();
  //     const activeUsersCount = users ? Object.keys(users).length : 0;
  //     setOnlineCount(activeUsersCount);
  //   });

  //   return () => {
  //     set(userRef, null);
  //   };
  // }, []);

  return (
    <Router>
      {/* Global Components */}
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesSection />
                <ClientsSection />
                <Counter/>
                <About/>
                <Projects />
                {/* <TeamSection /> */}
                <Expertise />
                <CallToAction/>
                <Testimonials />
                <FaqSection />
              </>
            }
          />
          {/* What We Do Pages */}
          <Route path="/product-engineering" element={<ProductEngineering />} />
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/data-&-ai" element={<DataAndAi />} />
          <Route path="/devops-&-cloud" element={<DevOpsAndCloud />} />
          <Route
            path="/emerging-technologies"
            element={<EmergingTechnologies />}
          />
          <Route path="/blockchain-&-web3.0" element={<BlockChainAndWeb3 />} />

          {/* Who We Serve Pages */}
          <Route path="/startups" element={<StartUp />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/rescue-projects" element={<RescueProjects />} />

          {/* How We Engage Pages */}
          <Route path="/product-development" element={<ProductDevelopment />} />
          <Route path="/managed-it-systems" element={<ManagedItSystems />} />
          <Route path="/team-augmentation" element={<TeamAugmentation />} />

          {/* Hire Dev Pages */}
          <Route
            path="/dedicated-developers"
            element={<DedicatedDevelopers />}
          />
          <Route path="/remote-teams" element={<RemoteTeams />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />

          {/* Company Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/portfolio" element={<Portfolio/>} />

          {/* Contact Pages */}
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/support" element={<Support />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Always Visible Components */}
      {/* <Contact /> */}
      <Footer />

      <Toaster position="top-right" reverseOrder={false} />

      <div className="text-center my-4">
        <h1 className="text-2xl sm:text-md">
          👀 {onlineCount} {onlineCount === 1 ? "person is" : "people are"}{" "}
          viewing this site right now
        </h1>
      </div>
    </Router>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default App;

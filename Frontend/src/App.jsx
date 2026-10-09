import CustomCursor from "/src/components/CustomCursor/CustomCursor.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import NavBar from "/src/components/NavBar/NavBar.jsx";
import Accommodation from "/src/pages/Accommodation/Accommodation.jsx";
import Competitions from "/src/pages/Competitions/Competitions.jsx";
import Nexus from "/src/pages/Nexus/Nexus.jsx";
import Events from "/src/pages/Events/Events.jsx";
import Home from "/src/pages/Home/Home.jsx";
import SocialCause from "/src/pages/Social Cause/SocialCause.jsx";
import Team from "/src/pages/Team/Team.jsx";
import Workshops from "/src/pages/Workshops/Workshops.jsx";
import CampusAmbassador from "/src/pages/CampusAmbassador/CampusAmbassador.jsx";
import AboutUs from "/src/pages/AboutUs/AboutUs.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/socials_icons/icons";
import "./App.css";
// random comment for deployment
import Form from "/src/components/Form/Form.jsx";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    if (lenis) {
      lenis.options.lerp = 0.2;
      lenis.options.duration = 0.4;
    }
  }, [lenis]);

  return (
    <ReactLenis root>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/events"
            element={
              <>
                <NavBar />
                <Events />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/competitions"
            element={
              <>
                <NavBar />
                <Competitions />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/nexus"
            element={
              <>
                <NavBar />
                <Nexus />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/workshops"
            element={
              <>
                <NavBar />
                <Workshops />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/socialcause"
            element={
              <>
                <NavBar />
                <SocialCause />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/accommodation"
            element={
              <>
                <NavBar />
                <Accommodation />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/team"
            element={
              <>
                <NavBar />
                <Team />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/nexus-registration"
            element={
              <>
                <NavBar />
                <Form />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/ca"
            element={
              <>
                <NavBar />
                <CampusAmbassador />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/campus-ambassador"
            element={
              <>
                <NavBar />
                <CampusAmbassador />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/about"
            element={
              <>
                <NavBar />
                <AboutUs />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/about-us"
            element={
              <>
                <NavBar />
                <AboutUs />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;

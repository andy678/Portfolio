import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ErrorPage from "./pages/error";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function PageRoutes() {
  
  //Routes
  return (
     <Router>
             <Routes>
                 <Route exact path="/portfolio" element={<HomePage />} />
                 <Route path="/portfolio/projects" element={<ProjectsPage />} />
                 <Route path="/portfolio/about" element={<AboutPage />} />
                 <Route path="/404" element={<ErrorPage />} />
                 <Route path="*" element={<ErrorPage />} />
             </Routes>
     </Router>
 )
  }
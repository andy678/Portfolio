import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ErrorPage from "./pages/about/error";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function PageRoutes() {
  
  return (
     <Router>
             <Routes>
                 <Route exact path="" element={<HomePage />} />
                 <Route path="/projects" element={<ProjectsPage />} />
                 <Route path="/about" element={<AboutPage />} />
                 <Route path="*" element={<ErrorPage />} />
             </Routes>
     </Router>
 )
  }
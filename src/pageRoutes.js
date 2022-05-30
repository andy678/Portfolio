import HomePage from "./pages/home";
import ClassToolsPage from "./pages/classTools"
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";

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
                 <Route path="/class-tools" element={<ClassToolsPage />} />
                 <Route path="/projects" element={<ProjectsPage />} />
                 <Route path="/about" element={<AboutPage />} />
                 <Route path="/contact" element={<ContactPage />} />
                 <Route path="*" element={<HomePage />} />
             </Routes>
     </Router>
 )
  }
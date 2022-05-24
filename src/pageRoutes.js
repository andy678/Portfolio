import HomePage from "./pages/home";
import ClassToolsPage from "./pages/classTools"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function PageRoutes() {
  
  return (
     <Router>
             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/class-tools" element={<ClassToolsPage />} />
                 <Route path="*" element={<HomePage />} />
             </Routes>
     </Router>
 )
  }
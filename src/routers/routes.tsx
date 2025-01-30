import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CalendarPage from "../pages/CalendarPage";
import { BenefitsPage } from "../pages/BenefitsPage";
import FormPasswordRecovery from "../components/FormPasswordRecovery";
import NotFound404 from "../pages/NotFound404";
import { SidebarItem, SideBar } from "../components/SideBar";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsCalendar4Week } from "react-icons/bs";
import { LuHandHelping } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { EmployePage } from "../pages/EmployePage";
import { DiVim } from "react-icons/di";
import LentesPage from "../pages/LentesPage";

const Layout: React.FC = () => {
  const location = useLocation();
  const hideSideBar = location.pathname === "/";

  return (
    <section className="flex">
      {!hideSideBar && (
        <SideBar>
          <SidebarItem
            to="/home"
            icon={<BiHomeAlt2 size={20} />}
            text="Inicio"
          />
          <SidebarItem
            to="/calendario"
            icon={<BsCalendar4Week size={20} />}
            text="Calendario"
          />
          <SidebarItem
            to="/benefits"
            icon={<LuHandHelping size={20} />}
            text="Prestaciones"
          />
          <SidebarItem
            to="/employe"
            icon={<PiUsersThree size={20} />}
            text="Empleados"
          />
          <hr className="my-3" />
        </SideBar>
      )}
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/benefits" element={<BenefitsPage />}>
          <Route path="lentes" element={<LentesPage />} />
          <Route path="utiles" element={<div>Utiles</div>} />
          <Route path="guarderia" element={<div>Guarderia</div>} />
          <Route path="canastilla" element={<div>Canastillas</div>} />
          <Route path="diaSindical" element={<div>Dia Sindical</div>} />
          <Route path="apoyoProdep" element={<div>Ayuda Prodep</div>} />
          <Route path="residencias" element={<div>Residencias</div>} />
          <Route path="ayudaEstudios" element={<div>Ayuda Estudios</div>} />
          <Route
            path="aparatosOrtopedicos"
            element={<div>Aparatos ortopedicos</div>}
          />
          <Route path="lactancia" element={<div>Lactancia</div>} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </section>
  );
};

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default MyRoutes;

import BenefitsGrid from "../components/BenefitsGrid";
import Container from "../components/Container";
import NavBar from "../components/ui/NavBar";
import { Outlet, useLocation } from "react-router-dom";

export function BenefitsPage() {
  const location = useLocation();

  const isRootPath = location.pathname === "/benefits";

  return (
    <Container title="Prestaciones">
      <NavBar />
      {isRootPath && <BenefitsGrid />}
      <Outlet />
    </Container>
  );
}

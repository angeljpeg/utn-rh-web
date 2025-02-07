import BenefitsGrid from "../components/BenefitsGrid";
import Container from "../components/Container";
import NavBar from "../components/ui/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { BenefitsItems } from "../data/Benefits/Navigation/BenefitsItems";

export function BenefitsPage() {
  const location = useLocation();

  const benefit = BenefitsItems.find((item) => item.URL === location.pathname);

  const title = benefit ? "Prestaciones - " + benefit.title : "Prestaciones";

  return (
    <Container title={title}>
      <NavBar />
      {location.pathname === "/benefits" && <BenefitsGrid />}
      <Outlet />
    </Container>
  );
}

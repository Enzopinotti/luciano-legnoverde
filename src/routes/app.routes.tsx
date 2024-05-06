import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";

import {
  HomeContainer,
  PersonalContainer,
  EnterpriseContainer,
  PressContainer,
  FinancialContainer,
  ContactContainer,
} from "../containers/";
import ScrollToTopOnLocationChange from "../utils/ScrollToTop";
import Landing from "../containers/landing/Landing";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main id="main_LucianoLegnoverde">
          <ScrollToTopOnLocationChange />
          <Routes>
            <Route path="/" index element={<HomeContainer />} />
            <Route
              path="/finanzas-personales"
              element={<PersonalContainer />}
            />
            <Route
              path="/finanzas-empresas"
              element={<EnterpriseContainer />}
            />
            <Route path="/prensa" element={<PressContainer />} />
            <Route
              path="/educacion-financiera"
              element={<FinancialContainer />}
            />
            <Route path="/contacto" element={<ContactContainer />} />
            <Route path="/cardcontacto" element={<Landing />}></Route>
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

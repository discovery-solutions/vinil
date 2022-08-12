import Wrapper from "components/Wrapper";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import Home from "pages/Home";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Wrapper component={ <Home/> } /> }/>
        <Route path="*" element={ <Navigate to="/" replace /> }/>
      </Routes>
    </BrowserRouter>
  );
}

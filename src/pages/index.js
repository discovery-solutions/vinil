import Wrapper from "components/Wrapper";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "pages/Home";
import NotFound from "pages/NotFound";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Wrapper component={ <Home/> } /> }/>
        <Route path="*" element={ <Wrapper component={ <NotFound/> } /> }/>
      </Routes>
    </BrowserRouter>
  );
}

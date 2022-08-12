import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Wrapper({ children, component }) {
  return (
    <>
      <Navbar/>
      { component ? component : children }
      <Footer/>
    </>
  )
}

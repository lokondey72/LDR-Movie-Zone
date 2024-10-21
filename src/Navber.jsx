import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  SideContent,
  SideItems,
  DropDown,
} from "responsive-navigation";

const Navber = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <NavbarBrand>
          <Link to="/" className="w-20 h-20">
            <img className="w-full h-full" src="LDR-logo.png" alt="LDR-logo" />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/">About</a>
          </NavItem>
          <DropDown style={{ width: "150px" }} label="Services">
            <NavItem>
              <a href="/">Service 1</a>
            </NavItem>
            <NavItem>
              <a href="/">Service 2</a>
            </NavItem>
            <NavItem>
              <a href="/">Service 3</a>
            </NavItem>
          </DropDown>
          <NavItem>
            <a href="/">Contact</a>
          </NavItem>
        </NavbarContent>
        <SideContent>
          <button>Sign In</button>
          <button>Sign Up</button>
        </SideContent>
      </Navbar>
    </>
  );
};

export default Navber;

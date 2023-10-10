import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav
} from "@material-tailwind/react";

const Tracker_Navigation = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
      await logout();
      navigate("/"); // Redirect to the login page after logout
    };


  const [shareURL] = useState("https://github.com/krm-aadil/BudgetBuddy.git");
  const shareBudgetBuddy = async () => {
    try {
      await navigator.share({
        title: "Budget Buddy :)",
        text: "Check out Budget Buddy - Your Pocket Budget Tracker!",
        url: shareURL,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };



  const [openNav, setOpenNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= 960) {
          setOpenNav(false);
          setIsMobileMenuOpen(false);
        }
      }
    );
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/login" className="flex items-center">
          Login
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/signup" className="flex items-center">
          Signup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="big"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/howto" className="flex items-center">
          How to use the App
        </a>
      </Typography>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-0 px-4 lg:px-8 lg:py-2 bg-gradient-to-r from-blue-200 to-blue-400 border-cyan-400 mb-1 mt-0.5">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <a href="/">
      {/* <img
          src="https://static.vecteezy.com/system/resources/previews/009/383/173/original/dollar-coin-3d-illustration-png.png"
          alt="Logo"
          className="h-12 w-12 lg:h-16 lg:w-16"
        /> */}
          <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-gray-800 text-xl"
        >
          Budget-Buddy
        </Typography>
      </a>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block onClick={shareBudgetBuddy}">
          <span>SHARE NOW</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>

        <div className="container mx-auto ">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={handleLogout}>
            <span>LOG OUT</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={shareBudgetBuddy}>
            <span>SHARE NOW</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Tracker_Navigation;

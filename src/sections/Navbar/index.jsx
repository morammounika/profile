import { useEffect, useRef, useState } from "react";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";

function Navbar({ showLoaderAnimation }) {
  const [mobile, setMobile] = useState(() => {
    return window.innerWidth <= 800;
  });
  const [showNavbar, setShowNavbar] = useState(0);
  const myScrollY = useRef(window.scrollY || 0);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 800);
    };
    const style = getComputedStyle(document.body);
    const navbarHeightRem = parseInt(style.getPropertyValue("--nav-height"));
    const remValue = parseInt(style.getPropertyValue("font-size"));
    const navbarHeight = navbarHeightRem * remValue;
    function onScrollHandler() {
      const scrollY = window.scrollY;
      if (myScrollY.current < navbarHeight) {
        myScrollY.current = scrollY;
        return setShowNavbar(0);
      }
      const isUpSide = myScrollY.current > scrollY;
      if (isUpSide) {
        myScrollY.current = scrollY;
        return setShowNavbar(1);
      } else {
        myScrollY.current = scrollY;
        return setShowNavbar(2);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);
  const clsMap = {
    0: "without-shadow",
    1: "with-shodow",
    2: "hide",
  };
  const activeCls = clsMap[showNavbar] || "with-shadow";
  return mobile ? (
    <MobileNavbar
      activeCls={activeCls}
      showLoaderAnimation={showLoaderAnimation}
    />
  ) : (
    <DesktopNavbar
      activeCls={activeCls}
      showLoaderAnimation={showLoaderAnimation}
    />
  );
}

export default Navbar;

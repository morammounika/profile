import { FixedNavbar, LeftLogo } from "../Desktop/styles";
import Dsvg from "../../../assets/svgs/d-svg";
import { RightBurgerMenu } from "./styles";
import { useEffect, useState } from "react";
import MobileSidebar from "./Sidebar";

function MobileNavbar({ activeCls, showLoaderAnimation }) {
  const [animate, setAnimate] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const handleMenu = (show = false) => {
    setShowMenu(show);
  };
  useEffect(() => {
    let hide = "";
    if (showMenu) {
      hide = "hidden";
    }
    document.body.style.overflow = hide;
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);
  return (
    <FixedNavbar className={activeCls}>
      <LeftLogo>
        <button onClick={showLoaderAnimation} className="letter-v lazy-load">
          <Dsvg />
        </button>
      </LeftLogo>
      <RightBurgerMenu
        onClick={() => handleMenu(true)}
        className={animate ? "lazy-load move" : "lazy-load"}
      >
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </RightBurgerMenu>
      {showMenu && <MobileSidebar setShowMenu={setShowMenu} />}
    </FixedNavbar>
  );
}

export default MobileNavbar;

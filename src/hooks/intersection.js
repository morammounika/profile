import { useEffect, useState } from "react";

function useOnIntersect(elem, threshold = 0.4) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let elemObserver;
    if (window.IntersectionObserver) {
      if (elem?.current) {
        const options = {
          threshold: threshold,
        };
        elemObserver = new IntersectionObserver((entries) => {
          const currentImage = entries[0];
          if (!currentImage.isIntersecting) return;
          setShow(true);
          elemObserver.unobserve(currentImage.target);
        }, options);
        elemObserver.observe(elem?.current);
      }
    } else {
      setShow(true);
    }
    return () => {
      if (elem?.current) {
        elemObserver?.unobserve(elem.current);
      }
    };
  }, [elem]);
  return show;
}

export default useOnIntersect;

import { useEffect, useState } from "react";

type Sizes = {
  width: number;
  height: number;
  isMobile: boolean;
};

const UseWindowSize = (): Sizes => {
  const [size, setSize] = useState<Sizes>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
  });

  useEffect(() => {
    const updateSize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      });

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
export default UseWindowSize;

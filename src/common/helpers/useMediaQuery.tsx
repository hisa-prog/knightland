import {useEffect, useState} from 'react';
import { Breakpoints } from "common/constants/Breakpoints";

const MOBILE_QUERY = `(max-width: ${Breakpoints.md}px)`;
const TABLET_QUERY = `(min-width: ${Breakpoints.md}px) and (max-width: ${Breakpoints.lg}px)`;
const DESKTOP_QUERY = `(min-width: ${Breakpoints.lg}px)`;

export const useMatchMediaQuery = (query) => {
  const [isRealizeQuery, setIsRealizeQuery] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlerOnResize);
      handlerOnResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlerOnResize);
      }
    }
  }, [])

  const handlerOnResize = () => {
    if(typeof window !== 'undefined') {
      setIsRealizeQuery(window.matchMedia(query).matches);
    }
  }

  return isRealizeQuery;
};

export function useMediaQuery() {
  const isMobile = useMatchMediaQuery(MOBILE_QUERY);
  const isTablet = useMatchMediaQuery(TABLET_QUERY);
  const isDesktop = useMatchMediaQuery(DESKTOP_QUERY);

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
import { useEffect, useState, useRef, useMemo } from "react";

/**
 * Hook to detect if the user is on a mobile device
 */
function useMediaQuery(query) {
  const getMatches = (query) => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(false);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export const useIsMobile = () => {
  const matches = useMediaQuery("(max-width: 580px)");
  return matches;
};

export const useIsSmallDesktop = () => {
  const matches = useMediaQuery("(max-width: 1367px)");
  return matches;
};

// export default useIsMobile;

function useOnScreen(ref, threshold = 0.3) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
export default useOnScreen;

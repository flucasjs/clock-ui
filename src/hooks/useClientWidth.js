import React from "react";

function debounce(f, delay) {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(f, delay);
  };
}

export function useClientWidth(ref, f, delay) {
  React.useEffect(() => {
    const observer = new ResizeObserver(
      debounce(() => f(ref.current.clientWidth), delay)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, f, delay]);
}
import { useInView } from "react-intersection-observer";

function useInViewScroll(value) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    rootMargin: "65%",
  });
  value = ref;
  return [value, inView];
}

export default useInViewScroll;

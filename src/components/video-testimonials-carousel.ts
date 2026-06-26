export function initVideoTestimonialsCarousel(): void {
  const carouselContainer = document.getElementById(
    "video-testimonials-carousel",
  );
  const dots = document.querySelectorAll(
    "#video-testimonials-pagination-dots .video-carousel-dot",
  );

  if (!(carouselContainer instanceof HTMLElement) || dots.length === 0) {
    return;
  }

  const getSlides = () =>
    Array.from(
      carouselContainer.querySelectorAll<HTMLElement>(".video-carousel-slide"),
    );

  const setActiveDot = (activeIndex: number) => {
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.className =
          "video-carousel-dot h-[2px] w-9 bg-white rounded-full transition-all duration-300";
      } else {
        dot.className =
          "video-carousel-dot h-[2px] w-5 bg-gray-500 rounded-full transition-all duration-300 hover:bg-gray-400";
      }
    });
  };

  /** Trailing padding only — no left gap on the first card */
  const updateCarouselPadding = () => {
    const slides = getSlides();
    const firstSlide = slides[0];
    if (!firstSlide) return;

    const endPad = Math.max(
      0,
      carouselContainer.clientWidth - firstSlide.clientWidth,
    );

    carouselContainer.style.paddingLeft = "0";
    carouselContainer.style.paddingRight = `${endPad}px`;
  };

  const getMaxScroll = () =>
    Math.max(0, carouselContainer.scrollWidth - carouselContainer.clientWidth);

  const scrollToIndex = (index: number) => {
    const slides = getSlides();
    const slide = slides[index];
    if (!slide) return;

    const maxScroll = getMaxScroll();
    let targetScroll = 0;

    if (index === 0) {
      targetScroll = 0;
    } else if (index === slides.length - 1) {
      targetScroll = maxScroll;
    } else {
      targetScroll = slide.offsetLeft;
    }

    carouselContainer.scrollTo({
      left: Math.max(0, Math.min(maxScroll, targetScroll)),
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  const getActiveIndex = () => {
    const slides = getSlides();
    if (slides.length === 0) return 0;

    const scrollLeft = carouselContainer.scrollLeft;
    const maxScroll = getMaxScroll();

    if (scrollLeft <= 2) return 0;
    if (scrollLeft >= maxScroll - 2) return slides.length - 1;

    let activeIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    return activeIndex;
  };

  const updateDotsState = () => {
    setActiveDot(getActiveIndex());
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => scrollToIndex(index));
  });

  carouselContainer.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateDotsState);
  });

  window.addEventListener("resize", () => {
    updateCarouselPadding();
    updateDotsState();
  });

  updateCarouselPadding();
  updateDotsState();
}

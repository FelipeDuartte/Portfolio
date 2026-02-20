import { Star } from "./Star.js";
import { Meteor } from "./Meteor.js";

export async function initGalaxyAnimation() {
  const canvas = document.getElementById("galaxyCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", {
    alpha: true,
    desynchronized: true,
  });

  let animationId;
  let isVisible = true;

  const isLowPerformance =
    navigator.hardwareConcurrency <= 2 ||
    (/Android/i.test(navigator.userAgent) && window.innerWidth < 768);

  await Meteor.preloadImage();

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Meteor.clearGradientCache();
  }

  resize();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 150);
  }, { passive: true });

  const isMobile = window.innerWidth < 768;
  const starCount = isLowPerformance ? (isMobile ? 40 : 80) : (isMobile ? 80 : 160);
  const stars = Array.from({ length: starCount }, () => new Star(canvas));

  const meteor = new Meteor(canvas, ctx);

  const FPS = isLowPerformance ? 24 : 30;
  const interval = 1000 / FPS;
  let lastTime = 0;

  function animate(time) {
    if (!isVisible) return;

    if (time - lastTime < interval) {
      animationId = requestAnimationFrame(animate);
      return;
    }

    lastTime = time;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update(time);
      stars[i].draw(ctx);
    }

    meteor.update(time);
    if (meteor.isVisible()) meteor.draw();

    animationId = requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastTime = performance.now();
          animate(lastTime);
        } else {
          cancelAnimationFrame(animationId);
        }
      });
    },
    { threshold: isLowPerformance ? 0.25 : 0.1 }
  );

  observer.observe(canvas);
  animate(performance.now());

  return {
    destroy() {
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      Meteor.clearGradientCache();
    },
  };
}
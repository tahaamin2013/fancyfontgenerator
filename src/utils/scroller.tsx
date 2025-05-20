// utils.ts
export function handleSmoothScroll(element: string) {
  if (typeof document === "undefined") return; // ⛔️ Prevent on server

  const targetElement = document.getElementById(element);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

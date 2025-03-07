////////

// Cursor trail effect
document.addEventListener("mousemove", function (e) {
  function hasClass(element, className) {
    while (element) {
      if (element.classList && element.classList.contains(className)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  let elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
  // if (hasClass(elementUnderCursor, "crosshair")) return;

  let trail = document.createElement("div");
  trail.className = "cursor-trail";

  if (hasClass(elementUnderCursor, "text")) {
    return;
  } else if (hasClass(elementUnderCursor, "pointer")) {
    trail.classList.add("pointer-cursor-trail");
  } else {
    trail.classList.add("default-cursor-trail");
  }

  trail.style.left = e.pageX + 1 + "px";
  trail.style.top = e.pageY - 2 + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});

function removeAllCursorTrails() {
  const trails = document.querySelectorAll(".cursor-trail");
  trails.forEach((trail) => trail.remove());
}
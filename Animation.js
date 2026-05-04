function moveBoxes() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.style.transform = "translateY(-60px) rotate(360deg)";

    setTimeout(() => {
      box.style.transform = "translateY(0)";
    }, 600);
  });
}
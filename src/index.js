import "./styles.css";

const main = () => {
  console.log("main");
  document.body.addEventListener("pointerdown", handler, false);
  document.body.addEventListener("pointermove", handler, false);
};

const handler = e => {
  e.preventDefault();
  const { pointerType, pressure, tiltX, tiltY, twist, tangentialPressure } = e;
  console.log({
    pointerType,
    pressure,
    tangentialPressure,
    tiltX,
    tiltY,
    twist
  });
};

main();

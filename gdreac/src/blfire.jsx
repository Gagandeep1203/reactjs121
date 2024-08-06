function Blfire() {
  window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const v = event.clientY;
    console.log(x + " " + v);
    let c = document.querySelector(".pos");
    c.innerHTML = x + " " + v;
    let circles = document.querySelectorAll(".circle");
    circles.forEach((circl, index) => {
      circl.style.left = x - 7 + "px";
      circl.style.top = v + -4 + "px";
      circl.style.scale = (17 - index) / 17;
      circl.style.transitionDuration = index * 0.01 + "s";
    });
  });
  window.addEventListener("click", (event) => {
    const x = event.clientX;
    const v = event.clientY;
    let circles = document.querySelectorAll(".circle");
    circles.forEach((circl, index) => {
      circl.style.scale = 0;
    });
    let spreadc = document.createElement("div");
    spreadc.className = "spread";
    spreadc.style.left = x - 8 + "px";

    spreadc.style.top = v - 5 + "px";
    document.body.appendChild(spreadc);

    spreadc.addEventListener("animationend", () => {
      spreadc.remove();
    });
  });

  return (
    <>
      <h1 className="pos"></h1>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </>
  );
}
export default Blfire;

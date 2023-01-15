import "./styles.css";
// skill bar

(() => {
  const skillBar = document.getElementById("skill-bar");
  const value = skillBar.innerHTML;
  console.log("value", value);
  skillBar.style.width = value;
})();

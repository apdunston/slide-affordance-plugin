function slideAffordanceKeyDown(e) {
  if (e.key == "ArrowUp") {
    console.log("arrow up");
  } else if (e.key == "ArrowDown") {
    console.log("arrow down");
  } else {
    console.log("nope");
  }
}

(function() {
  document.addEventListener('keydown', slideAffordanceKeyDown);
})();

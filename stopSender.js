(function() {
  console.log("Stopping Slide Affordance", slideAffordanceKeyDown);
  document.removeEventListener('keydown', slideAffordanceKeyDown);
})();

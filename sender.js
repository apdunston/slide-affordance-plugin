var url = "https://slide-affordance-server.gigalixirapp.com/";

// var url="http://localhost:4000/";

function slideAffordanceKeyDown(e) {
  if (e.key == "ArrowUp") {
    console.log("arrow up");
    fetch(url + 'back')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      }).catch(err => {
        console.log("Error: ", err)
      });
  } else if (e.key == "ArrowDown") {
    console.log("arrow down");
    fetch(url + 'forward')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      }).catch(err => {
        console.log("Error: ", err)
      });;    
  }
}

(function() {
  console.log("Starting Slide Affordance");

  fetch(url + 'reset')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    }).catch(err => {
      console.log("Error: ", err)
    });

  addEventListener('keydown', slideAffordanceKeyDown);
})();

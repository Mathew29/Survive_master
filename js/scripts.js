function MoralCompass(candy, bus, crime, startUp) {
  this.candy = candy;
  this.bus = bus;
  this.crime = crime;
  this.startUp = startUp;
}

MoralCompass.prototype.recMoral = function(candy, bus, crime, startUp) {
  this.candy += candy;
  this.bus += bus;
  this.crime += crime;
  this.startUp += startUp;
}

MoralCompass.prototype.thesholds = function(candy, bus, crime, startUp) {
  if (this.candy <= 0) {
    window.location.replace(gameover/html)
  } else if (this.bus <= 0) {
    window.location.replace(gameover/html)
  } else if (this.crime) {
    window.location.replace(gameover/html)
  } else if (this.startUp) {
    window.location.replace(gameover/html)
  }
};

$(document).ready(function() {
  var newMoralCompass;
  $("#moralForm").submit(function(event) {
    event.preventDefault();
    newMoralCompass = new MoralCompass(3,3,3,3);
    
  });
});

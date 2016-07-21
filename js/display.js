/*
Interface Driver{
  function drawFrame();
}
*/

function DisplayDriver(driver){
  this.driver = driver;
  this.fps = 50
  this.running = false;
  this.context = 0;
}

DisplayDriver.prototype.start = function(){
  if (!this.running){
    running = true;
    this.context = setInterval(function(){driver.drawFrame();},1000/this.fps);
  }
};

DisplayDriver.prototype.halt = function(){
  if (this.running){
    running = false;
    clearInterval(this.context);
  }
};

DisplayDriver.prototype.changeDriver = function(driver){
  if (this.running){
    clearInterval(this.context);
  }
  this.driver = driver;
  if (this.running){
    this.context = setInterval(function(){driver.drawFrame();},1000/this.fps);
  }
};

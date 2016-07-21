/*
Interface Driver{
  function executeStep();
}
*/

function TimeDriver(driver,fps){
  this.driver = driver;
  this.fps = fps;
  this.running = false;
  this.context = 0;
}

TimeDriver.prototype.start = function(){
  if (!this.running){
    running = true;
    this.context = setInterval(function(){driver.executeStep();},1000/this.fps);
  }
};

TimeDriver.prototype.halt = function(){
  if (this.running){
    running = false;
    clearInterval(this.context);
  }
};

TimeDriver.prototype.changeDriver = function(driver){
  if (this.running){
    clearInterval(this.context);
  }
  this.driver = driver;
  if (this.running){
    this.context = setInterval(function(){driver.executeStep();},1000/this.fps);
  }
};

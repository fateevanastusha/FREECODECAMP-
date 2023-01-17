function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('how how how');
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};
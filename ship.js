function Ship() {
	this.x = width/2;
	this.xdir=0;
	
	this.show = function(){
	imageMode(CENTER);
	image(ship0, this.x, height-40);
	}
	
	this.setDir = function(dir){
		this.xdir = dir;
	}
	
	this.move = function(dir){
		this.x += this.xdir*5;
	}
}
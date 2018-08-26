function Alien(x, y) {
	this.x = x;
	this.y = y;
	this.r = 30;
	this.toDelete = false;
	this.xdir = 1;
	
	this.die = function(){
		this.toDelete = true;
	}
	
	this.shiftDown = function() {
		this.xdir *= -1;
		this.y += this.r;
	}
	
	this.move = function(){
		this.x = this.x + this.xdir;

	}
	
	this.show = function(){
		imageMode(CENTER);
		image(alien0, this.x, this.y);
	}

}
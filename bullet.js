function Bullet(x, y) {
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete = false;
	
	this.show = function(){
		noStroke();
		fill(255, 255, 255);
		ellipse(this.x, this.y, 16, 16);
	}
	
	this.move = function(){
		this.y = this.y - 5;
	}
	
	this.die = function(){
		this.toDelete = true;
	}
	
	this.hits = function(alien){
		var d = dist(this.x, this.y, alien.x, alien.y);
		if (d < this.r + alien.r) {
			return true;
		}else{
			return false;
		}
	}
}
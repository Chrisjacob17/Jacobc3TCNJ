function Box(x, y, w, h){
  var options = {
    friction: 1,
    restitution: 0.001
  }
    this.body = Bodies.rectangle (x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);



    this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(255);
      fill(127);
      rect (0,0, this.w, this.h);
      pop();

if (this.body.position.y <= 50) {
gameState = 2;
  gameWon = true;


} else if (this.body.position.y >= 760){
  gameState = 2;
      gameWon = false;

  }
}

}

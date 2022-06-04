class Balls{
    constructor(){
        this.ball_array = [];
    }

    run(){
        for (var r of this.ball_array){
          r.allForces(this.ball_array);
          r.friction();
          r.edges();
          r.move();
          r.display();
        }
    }

    addBall(r){
        this.ball_array.push(r);
    }
  
  clickActions(x, y){
    var insideBall = false;
    for (var b of this.ball_array){
      if (b.inside(x,y)){
        insideBall = true;
        b.openLink();
      }
    }
    
    if (insideBall == false){
      this.addBall(new ball(createVector(x, y), 5));
    }
  }
  
//   openLinks(){
//     for (var r of this.ball_array){
//       r.openLink();
//     }
    
//   }

}
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


}
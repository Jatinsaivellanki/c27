class Chain  {

    constructor(bodyA,bodyB){
        var opts = {
            bodyA : bodyA ,
            bodyB : bodyB ,
            length : 15 ,
            stiffness : 1
        }

        this.chain = Constraint.create(opts);
        World.add(world,this.chain);


    }

    display(){
        var pointA   = this.chain.bodyA.position;
        var pointB   = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);


    }

}
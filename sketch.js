var ball;
var database
var position
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballpositionref = database.ref("ball/position")
    ballpositionref.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        wirtePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        wirtePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        wirtePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        wirtePosition(0,+1);
    }
    drawSprites();
}

function wirtePosition(x,y){
database.ref("ball/position").set({
    'x':position.x + x,
    'y':position.y + y
})
}
function readposition(data){
position = data.val()
ball.x = position.x
ball.y = position.y

}
function showerror (){
    console.log("error in database")
}
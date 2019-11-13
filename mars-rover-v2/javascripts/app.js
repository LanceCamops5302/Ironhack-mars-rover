
// Rover Object Goes Here
// ======================
let rover = {
  direction:'N', x:0, y:0, travelLog: []
}
// ======================


function turnLeft(rover){

console.log("turnLeft was called!");

if (rover.direction == 'N'){
 rover.direction = 'W';
} 
else if (rover.direction == 'W'){
 rover.direction = 'S';
} 
else if (rover.direction == 'S'){
 rover.direction = 'E';
} 
else if (rover.direction == 'E'){
 rover.direction = 'N';
  }
}


function turnRight(rover){
 
  console.log("turnRight was called!");

  if (rover.direction == 'N'){
    rover.direction = 'E';
  } 
  else if (rover.direction == 'E'){
    rover.direction = 'S';
  } 
  else if (rover.direction == 'S'){
    rover.direction = 'W';
  } 
  else if (rover.direction == 'W'){
    rover.direction = 'N';
  }
}


function moveForward(rover){

  console.log("moveForward was called")

  if(rover.direction == 'N'){
    rover.travelLog.push(rover.x , rover.y);
    rover.y = rover.y + 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'E'){
    rover.travelLog.push(rover.x , rover.y);
    rover.x = rover.x + 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'S'){
    rover.travelLog.push(rover.x , rover.y);
    rover.y = rover.y - 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'W'){
    rover.travelLog.push(rover.x , rover.y);
    rover.x = rover.x - 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  }
}


function moveBackwards(rover){

  console.log("moveBackwards was called")

  if(rover.direction == 'N'){
    rover.travelLog.push(rover.x , rover.y);
    rover.y = rover.y - 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'E'){
    rover.travelLog.push(rover.x , rover.y);
    rover.x = rover.x - 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'S'){
    rover.travelLog.push(rover.x , rover.y);
    rover.y = rover.y + 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  } 
  else if (rover.direction == 'W'){
    rover.travelLog.push(rover.x , rover.y);
    rover.x = rover.x + 1;
    console.log( `The rover moved to ${rover.x}, ${rover.y}`);
  }
}


function action(command){
  for (i = 0; i < command.length; ++i) {
    if (command.charAT(i) == 'f') {
      moveForward(rover);
    }
    else if (command.charAT(i) == 'l'){
      turnLeft(rover);
    }
    else if (command.charAT(i) == 'r'){
      turnRight(rover);
    }
    else if (command.charAT(i) == 'b'){
      moveBackwards(rover);
    }
  }
}
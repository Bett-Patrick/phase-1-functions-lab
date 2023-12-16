// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42
    const distance = Math.abs(pickupLocation - hqLocation)
    return distance
}

//function to convert distance in blocks to feet
//Calling a named function(concept).
function distanceFromHqInFeet(distanceInBlocks){
   return distanceFromHqInBlocks(distanceInBlocks)*264
}

//function to calculate distance travelled in feet
function distanceTravelledInFeet(start,destination){
    return Math.abs((destination - start)*264)
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start,destination)
    if (distanceInFeet >=0 && distanceInFeet<=400) {
        return (0)
    }
    else if (distanceInFeet>400 && distanceInFeet<=2000) {
        return ((distanceInFeet-400)*0.02)
    }
    else if(distanceInFeet>2000 && distanceInFeet<2500){
        return (25)
    }
    else{
        return ("cannot travel that far")
    }
}



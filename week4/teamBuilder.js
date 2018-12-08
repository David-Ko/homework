//Below is just a reference file for my teamBuilder function
//This is embedded inside my cohorts.js file
function teamBuilder (strOfMembers, quantity, method){
    let names = strOfMembers.split(', ');
    let shuffledMembers = [];
    while (names.length > 0 ){
      random = Math.floor(Math.random()* names.length)
      shuffledMembers.push(names.splice(random, 1)[0])
    }
  if (method === "numberPerTeam") {
    let numOfTeamNeeded = Math.ceil(shuffledMembers.length/quantity)
    let teamsArray = [];
    for (let i = 0; i < numOfTeamNeeded; i++){
      teamsArray.push([])
    }   
  
    while (shuffledMembers.length > 0){
      for (let i = 0; i < teamsArray.length; i++){
        if (shuffledMembers.length > 0){
          for (let j = 0; j < quantity; j++){
            if(shuffledMembers.length > 0) {
          teamsArray[i].push(shuffledMembers.pop())
            } else {break}
          }
        } else {
          break
        }
      }
    }
    return teamsArray
  }
  } 
  
  if (method === "teamCount") {
  
    let teamsArray = [];
    for (let i = 0; i < quantity; i++){
      teamsArray.push([])
    }   
    
    while (shuffledMembers.length > 0){
      for (let i = 0; i < teamsArray.length; i++){
        if (shuffledMembers.length > 0){
          teamsArray[i].push(shuffledMembers.pop())
        } else {
          break
        }
      }
    }
    return teamsArray
  
  }
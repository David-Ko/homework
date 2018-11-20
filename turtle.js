// worked on it on Monday Nov 19, 2018 at 930pm
class Turtle {

    constructor (x, y){
        this.x = x;
        this.y = y;
        this.face = 'east';
        this.coordinates = [];
        this.coordinates.push([this.x, this.y])
        
   }

   allPoints(){
       
         return this.coordinates
        
   }
   
   forward(steps) {

     if (this.face === 'east'){
          for (let i = 0; i < steps; i++) {
          this.x += 1;
          this.coordinates.push([this.x, this.y])
          }
     } else if (this.face === 'south') {
          for (let i = 0; i < steps; i++) {
          this.y += 1;   
          this.coordinates.push([this.x, this.y])
          }
     } else if (this.face === 'west') {
          for (let i = 0; i < steps; i++) {
          this.x += -1;
          this.coordinates.push([this.x, this.y])
          }
     } else if (this.face === 'north') {
          for (let i = 0; i < steps; i++) {
          this.y += -1
          this.coordinates.push([this.x, this.y])
          }
     }
   }
   right(){
        if (this.face === 'east') {
             this.face = 'south'
        } else if (this.face === 'south') {
             this.face = 'west'
        } else if (this.face === 'west') {
             this.face = 'north'
        } else if (this.face === 'north') {
             this.face = 'east'
        }
     }

   left(){
     if (this.face === 'east') {
          this.face = 'north'
     } else if (this.face === 'north') {
          this.face = 'west'
     } else if (this.face === 'west') {
          this.face = 'south'
     } else if (this.face === 'south') {
          this.face = 'east'
     }
   }  

   myPrint(){
     let allCoordinates = this.coordinates;
     let finalArray = [];
     function toSortArray (x){
       let biggestX = 0
       let biggestY = 0
       for (let i = 0; i < x.length; i++){
          if(x[i][0] > biggestX){
            biggestX = x[i][0]
          }
         }
 
       for (let j = 0; j < x.length; j++){
          if(x[j][1] > biggestY){
            biggestY = x[j][1]
          }
         }
      
        finalArray.push([biggestX, biggestY])
        
     }
      toSortArray(allCoordinates)
      return(finalArray)
   }
  
}

let Sonic = new Turtle (0,0)
Sonic
Sonic.forward(5)
Sonic.right()
Sonic.forward(5)
Sonic.right()
Sonic.forward(5)
Sonic.right()
Sonic.forward(5)
Sonic.myPrint()


 
#!/Users/davidko/.nvm/versions/node/v11.1.0/bin/node

/**S T R E T C H #1
 * step 1: In command line, type 'which node' to find the path
 * step 2: add the path in the first line of the file with the syntax in line 1 of this file
 * step 3: In command line, type chmod +x boxIt_final_node_stretch.js
 * step 4: In command line, run the file by typing ./boxIt_final_node_stretch.js 
 */

 /**S T R E T C H #2
  * 
  * NoOoooOOoo idea.
  */

let i = 2
let arr = []

while (typeof process.argv[i] !== 'undefined'){ 
    //how come it doesn't work if i wrote (typeof porcess.argv[i] === String)
let x = process.argv[i]
arr.push(x);
i++;
}
function boxIt (x) {
  let length = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i].length > length){
        length = x[i].length 
    } 
  }
    //top border
    let top = function drawTopBorder(x){
        if(x){
            return '┏' + '-'.repeat(x) +'┓'+'\n'
        } else if (x === 0) {
            return '┏┓' + '\n'
        }
    }
    //middle border
    let middle = function drawMiddleBorder(x) {
        if (x){
            return '┣' + '-'.repeat(x) + '┫'+'\n'
        } else if (x === 0) {
            return '┣┫'
        }
    }
    //bottom border
    let bottom = function drawBottomBorder(x){
        if (x){
            return '┗' + '-'.repeat(x) + '┛'
        } else if (x === 0) {
            return '┗┛'
        }
    }
    //around border
    let around = function drawBarsAround(x){
        let m = '';
        let j = String.fromCharCode(160) 
        for (let i of x){ 
        let k = length - i.length
          if (x.indexOf(i) !== x.length-1){
        m += `┃${i}${j.repeat(k)}┃`+'\n' + middle(length) 
        }else{
        m += `┃${i}${j.repeat(k)}┃`+'\n'
        }
        }
        return m 
    }

    if (length === 0){
        return top(length) + bottom(length)
    } else {
        return top(length) + around(x) + bottom(length)
    }
}


console.log(boxIt(arr))
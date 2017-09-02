for(var i = 1; i < 26; i++){
	if (i === 1){
		console.log("I am " + i + " a strange loop...")
	}
	else{
		console.log("I am " + i + " strange loops...")
	}
}


function whileLoop(number){
  while(number > 0){
    console.log(--number)
  }
}
whileLoop(100)

function maybeTrue(){
  return Math.random() >= 0.5
}

newArray = [12, 34, 56, 78, 90]
console.log(newArray)
function doWhileLoop(array){
  array.push()
  console.log(array)
}

do{
  doWhileLoop(newArray)
}while(maybeTrue && array.length > 0)

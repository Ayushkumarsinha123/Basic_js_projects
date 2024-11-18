// do the chores in order 
// 1. Walk the Dog
// 2. Clean the kitchen
// 3. take out the trash 

function walkDog(callback){
    
  return new promise((resolve,reject) => {
    setTimeout(() => {
      resolve("you walk the dog");
      }, 1500);
  })
  
}  

function cleanKitchen(callback){

  return new promise((resolve, reject))
  setTimeout(() => {
    console.log("you clean the kitchen");
    }, 2500);
}

function trashOut(callback) {

  setTimeout(() => {
    console.log("you take out the trash");
    callback();
  })
}

walkDog(() => {
  cleanKitchen(() => {
    trashOut(() => {
      console.log("you finished all the chores!");
    })
  })
})
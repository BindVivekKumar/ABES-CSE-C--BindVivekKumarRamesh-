function dosomething(){
  throw new Error("a error is shown thrown from dosomething ");
}
function init(){
  try{
    dosomething();
  }
  catch(e){
    console.log(e);
  }
  console.log("after succesful error handling");
}
init();
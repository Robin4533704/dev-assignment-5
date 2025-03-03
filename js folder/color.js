 const colors = [
     'lightblue', 'lightgreen','lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightskyblue'];

   let currentColorIndex  = 0;
document.getElementById('colorButton').addEventListener('click', function (){
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex++;
  if(currentColorIndex>=colors.length){
    currentColorIndex=0;
  }
  this.style.backgroundColor = colors[currentColorIndex];

})

  // button add
  document.getElementById('Discover-box').addEventListener('click', function(){
window.location.href = "./secend.html";

  })
  document.getElementById('back-btn').addEventListener('click', function(){
    window.location.hre= "./index.html"
  })

const colors = [
    'bg-red-500','bg-blue-100','bg-green-500','bg-yellow-500','bg-purple-500','bg-pink-500'
  ];

  let colorButton = 0;
  const button = document.getElementById('colorButton') 
  button.addEventListener('click',function () {
 button.classList.remove(colors[colorButton]);

colorButton = (colorButton+ 1) % colors.length;
button.classList.add(colors[colorButton]);
  });

  // button add
  document.getElementById('Discover-box').addEventListener('click', function(){
window.location.href = "./secend.html";

  })
  document.getElementById('back-btn').addEventListener('click', function(){
    window.location.href = "./index.html";
  })

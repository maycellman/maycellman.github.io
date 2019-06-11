function removeProjectSelect(){
  document.getElementById('project1').style.color='#ffffff';
  document.getElementById('project2').style.color='#ffffff';
  document.getElementById('project3').style.color='#ffffff';
  document.getElementById('project4').style.color='#ffffff';
}
function project1(){
  removeProjectSelect();
  document.body.style.backgroundImage="url('https://i.ibb.co/kJ7zXKJ/compiler.jpg')no-repeat center center fixed";
  document.getElementsByClassName('background')[0].style.background='rgba(76, 211, 186, 0.7)';
  document.getElementById('project1').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Mini Java Compiler";
}
function project2(){
  removeProjectSelect();
  document.body.style.backgroundImage="url('https://i.ibb.co/xLFqS3d/mirror.jpg')no-repeat center center fixed";
  document.getElementsByClassName('background')[0].style.background='rgba(220, 199, 170, 0.7) ';
  document.getElementById('project2').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Smart Mirror";
}
function project3(){
  removeProjectSelect();
  document.getElementsByClassName('background')[0].style.background='#F7882F';
  document.getElementById('project3').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Chat Server";
}
function project4(){
  removeProjectSelect();
  document.getElementsByClassName('background')[0].style.background='#F7C331';
  document.getElementById('project4').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Kinect Data Analysis";
}
window.onload=function(){
  project1();
  document.getElementById('project1').addEventListener('click',project1);
  document.getElementById('project2').addEventListener('click',project2);
  document.getElementById('project3').addEventListener('click',project3);
  document.getElementById('project4').addEventListener('click',project4);
}
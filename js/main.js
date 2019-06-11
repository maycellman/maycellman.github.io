function removeProjectSelect(){
  document.getElementById('project1').style.color='#ffffff';
  document.getElementById('project2').style.color='#ffffff';
  document.getElementById('project3').style.color='#ffffff';
  document.getElementById('project4').style.color='#ffffff';
}
function removeNavSelect(){
  document.getElementById('projects').style.borderBottom="5px solid lightGrey";
  document.getElementById('simple').style.borderBottom="5px solid lightGrey";
}
function project1(){
  removeProjectSelect();
  document.body.style.backgroundImage="url('https://i.ibb.co/kJ7zXKJ/compiler.jpg')";
  document.getElementsByClassName('background')[0].style.transition="background-color 2s ease"
  document.getElementsByClassName('background')[0].style.background='rgba(76, 211, 186, 0.7)';
  document.getElementById('project1').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Mini Java Compiler";
}
function project2(){
  removeProjectSelect();
  document.body.style.backgroundImage="url('https://i.ibb.co/xLFqS3d/mirror.jpg')";
  document.getElementsByClassName('background')[0].style.transition="background-color 2s ease"
  document.getElementsByClassName('background')[0].style.background='rgba(220, 199, 170, 0.7) ';
  document.getElementById('project2').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Smart Mirror";
}
function project3(){
  removeProjectSelect();
  document.body.style.backgroundImage="url('https://i.ibb.co/rx2kj7P/chat.jpg')";
  document.getElementsByClassName('background')[0].style.transition="background-color 2s ease"
  document.getElementsByClassName('background')[0].style.background="rgba(247, 136, 47, 0.7)";
  document.getElementById('project3').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Chat Server";
}
function project4(){
  removeProjectSelect();
   document.body.style.backgroundImage="url('https://i.ibb.co/PwJtPpb/kinect.jpg')";
   document.getElementsByClassName('background')[0].style.transition="background-color 2s ease"
  document.getElementsByClassName('background')[0].style.background='rgba(247, 195, 49, 0.7)';
  document.getElementById('project4').style.color='#000000';
  document.getElementById('projectName').innerHTML= "Kinect Data Analysis";
}
function projects(){
  removeNavSelect()
  project1();
  document.getElementById('projects').style.borderBottom="5px solid #000000";
}
function simple(){
  removeNavSelect()
  document.getElementById('simple').style.borderBottom="5px solid #000000";
}
window.onload=function(){
  projects();
  document.getElementById('simple').addEventListener('click',simple);
  document.getElementById('projects').addEventListener('click',projects);
  document.getElementById('project1').addEventListener('click',project1);
  document.getElementById('project2').addEventListener('click',project2);
  document.getElementById('project3').addEventListener('click',project3);
  document.getElementById('project4').addEventListener('click',project4);
}

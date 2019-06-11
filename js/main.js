function removeProjectSelect(){
  $('#project1').css("color", '#ffffff');
  $('#project2').css("color", '#ffffff');
  $('#project3').css("color", '#ffffff');
  $('#project4').css("color", '#ffffff');
  
}
function removeNavSelect(){
  $('#projects').css("borderBottom","5px solid lightGrey");
  $('#simple').css("borderBottom","5px solid lightGrey");
  
}
function project1(){
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/kJ7zXKJ/compiler.jpg')no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $('.background').css("transition","background-color 2s ease");
  $('.background').css("background","rgba(76, 211, 186, 0.7)");
  $('#project1').css("color",'#000000');
  $('#projectName').text("Mini Java Compiler");
}
function project2(){
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/xLFqS3d/mirror.jpg') no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $(".background").css("transition","background-color 2s ease");
  $(".background").css("background-color","rgba(220, 199, 170, 0.7)");
  $('#project2').css("color","#000000");
  $('#projectName').text("Smart Mirror");
}
function project3(){
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/rx2kj7P/chat.jpg')no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $('.background').css("transition","background-color 2s ease");
  $('.background').css("background","rgba(247, 136, 47, 0.7)");
  $('#project3').css("color",'#000000');
  $('#projectName').text("Chat Server");
}
function project4(){
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/PwJtPpb/kinect.jpg')no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $(".background").css("transition","background-color 2s ease");
  $(".background").css("background",'rgba(247, 195, 49, 0.7)');
  $('#project4').css("color",'#000000');
  $('#projectName').text( "Kinect Data Analysis");
}
function projects(){
  removeNavSelect()
  project1();
  $('#projects').css("borderBottom","5px solid #000000");
}
function simple(){
  removeNavSelect()
  $('#simple').css("borderBottom","5px solid #000000");
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

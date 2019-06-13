var currentProject;
var scrollPos = 0;
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
function getSlideDirection(project){
  if(currentProject<project){
    slideDown();
  }else if(currentProject>project){
    slideUp();
  }
}
function getScrollDirection(e){
 if (e.deltaY < 0) {
    console.log('scrolling up');
    document.getElementById('status').innerHTML = 'scrolling up';
  }
  if (e.deltaY > 0) {
    console.log('scrolling down');
    document.getElementById('status').innerHTML = 'scrolling down';
  }
   
}
function project1(){
  getSlideDirection(1);
  currentProject=1;
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/kJ7zXKJ/compiler.jpg')no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $('.background').css("transition","background-color 2s ease");
  $('.background').css("background","rgba(76, 211, 186, 0.7)");
  $('#project1').css("color",'#000000');
  $('#projectName').text("Mini Java Compiler");
}
function project2(){
  getSlideDirection(2);
  currentProject=2;
  removeProjectSelect();
  
  
  $("body").css("background","url('https://i.ibb.co/xLFqS3d/mirror.jpg') no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $(".background").css("transition","background-color 2s ease");
  $(".background").css("background-color","rgba(220, 199, 170, 0.7)");
  $('#project2').css("color","#000000");
  $('#projectName').text("Smart Mirror");
}
function project3(){

  getSlideDirection(3);
  currentProject=3;
  removeProjectSelect();
  $("body").css("background","url('https://i.ibb.co/rx2kj7P/chat.jpg')no-repeat center center fixed");
  $("body").css("background-size", "cover");
  $('.background').css("transition","background-color 2s ease");
  $('.background').css("background","rgba(247, 136, 47, 0.7)");
  $('#project3').css("color",'#000000');
  $('#projectName').text("Chat Server");
}
function project4(){
  getSlideDirection(4);
  currentProject=4;
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
  
}

function slideDown(){
  var elem = document.getElementById("projectName"); 
  elem.style.display="none";
  var pos = 250;
  var id = setInterval(frame, 5);
  function frame() {

    if (pos == 350) {
      
      clearInterval(id);
    } else if(pos>200) {
      
      elem.style.display="block";
      pos++; 
      elem.style.top = pos + 'px'; 
      
    }else{
      
      
      pos++; 
      elem.style.top = pos + 'px'; 
      
    }
  }
}
function slideUp(){
  var elem = document.getElementById("projectName"); 
  elem.style.display="none";
  var pos = 450;
  var id = setInterval(frame, 5);
  function frame() {

    if (pos == 350) {
      
      clearInterval(id);
    } else if(pos<500) {
      
      elem.style.display="block";
      pos--; 
      elem.style.top = pos + 'px'; 
      
    }else{
      
      
      pos--; 
      elem.style.top = pos + 'px'; 
      
    }
  }
}  


function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}




window.onload=function(){
  projects();
  
  document.getElementById('project1').addEventListener('click',project1);
  document.getElementById('project2').addEventListener('click',project2);
  document.getElementById('project3').addEventListener('click',project3);
  document.getElementById('project4').addEventListener('click',project4);
  
  window.addEventListener('wheel',  throttle(function(e){
    if (e.deltaY < 0) {
    switch(currentProject){
      case 4:
        project3();
        break;
      case 3:
        project2();
        break;
      case 2:
        project1();
        break;
    }
    
  }
  if (e.deltaY > 0) {
    switch(currentProject){
      case 1:
        project2();
        break;
      case 2:
        project3();
        break;
      case 3:
        project4();
        break;
    }
    
  }



  },1000));
  
  
  

}

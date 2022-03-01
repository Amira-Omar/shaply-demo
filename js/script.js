$(document).ready(function(){
    $(".navbar .navbar-light .container-fluid .navbar-collapse .navbar-nav .nav-item .nav-link i")
    .hover(function(){
      $(".search").toggle("500");
    });
$('.portfolio .container .row .col .p1').on('mouseover', function() { $('.portfolio .container .row .col .o1').fadeIn("1000"); });
$('.portfolio .container .row .col .p1').on('mouseout', function() { $('.portfolio .container .row .col .o1').fadeOut("5000"); });

$('.portfolio .container .row .col .p2').on('mouseover', function() { $('.portfolio .container .row .col .o2').fadeIn("1000"); });
$('.portfolio .container .row .col .p2').on('mouseout', function() { $('.portfolio .container .row .col .o2').fadeOut("5000"); });

$('.portfolio .container .row .col .p3').on('mouseover', function() { $('.portfolio .container .row .col .o3').fadeIn("1000"); });
$('.portfolio .container .row .col .p3').on('mouseout', function() { $('.portfolio .container .row .col .o3').fadeOut("5000"); });

$('.portfolio .container .row .col .p4').on('mouseover', function() { $('.portfolio .container .row .col .o4').fadeIn("1000"); });
$('.portfolio .container .row .col .p4').on('mouseout', function() { $('.portfolio .container .row .col .o4').fadeOut("5000"); });

$('.portfolio .container .row .col .p5').on('mouseover', function() { $('.portfolio .container .row .col .o5').fadeIn("1000"); });
$('.portfolio .container .row .col .p5').on('mouseout', function() { $('.portfolio .container .row .col .o5').fadeOut("5000"); });

$('.portfolio .container .row .col .p6').on('mouseover', function() { $('.portfolio .container .row .col .o6').fadeIn("1000"); });
$('.portfolio .container .row .col .p6').on('mouseout', function() { $('.portfolio .container .row .col .o6').fadeOut("5000"); });

$('.portfolio .container .row .col .p7').on('mouseover', function() { $('.portfolio .container .row .col .o7').fadeIn("1000"); });
$('.portfolio .container .row .col .p7').on('mouseout', function() { $('.portfolio .container .row .col .o7').fadeOut("5000"); });

$('.portfolio .container .row .col .p8').on('mouseover', function() { $('.portfolio .container .row .col .o8').fadeIn("1000"); });
$('.portfolio .container .row .col .p8').on('mouseout', function() { $('.portfolio .container .row .col .o8').fadeOut("5000"); });

$('.portfolio .container .row .col .p9').on('mouseover', function() { $('.portfolio .container .row .col .o9').fadeIn("1000"); });
$('.portfolio .container .row .col .p9').on('mouseout', function() { $('.portfolio .container .row .col .o9').fadeOut("5000"); });

$('.portfolio .container .row .col .p10').on('mouseover', function() { $('.portfolio .container .row .col .o10').fadeIn("1000"); });
$('.portfolio .container .row .col .p10').on('mouseout', function() { $('.portfolio .container .row .col .o10').fadeOut("5000"); });

$('.portfolio .container .row .col .p11').on('mouseover', function() { $('.portfolio .container .row .col .o11').fadeIn("1000"); });
$('.portfolio .container .row .col .p11').on('mouseout', function() { $('.portfolio .container .row .col .o11').fadeOut("5000"); });

$('.portfolio .container .row .col .p12').on('mouseover', function() { $('.portfolio .container .row .col .o12').fadeIn("1000"); });
$('.portfolio .container .row .col .p12').on('mouseout', function() { $('.portfolio .container .row .col .o12').fadeOut("5000"); });

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  });
  //Js
  var body=document.body;
  var redColor=document.getElementById("red");
  redColor.onclick=function(){
  var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
 buttons[i].style.backgroundColor="red";
 buttons[i].style.border="1px solid #f00";
}
  }
  var greenColor=document.getElementById("green");
  greenColor.onclick=function(){
  var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
 buttons[i].style.backgroundColor="green";
 buttons[i].style.border="1px solid green";
}
  }
  var blueColor=document.getElementById("blue");
  blueColor.onclick=function(){
  var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
 buttons[i].style.backgroundColor="blue";
 buttons[i].style.border="1px solid blue";
}
  }
  var blueColor=document.getElementById("defult");
  blueColor.onclick=function(){
  var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
 buttons[i].style.backgroundColor="#745cf9";
 buttons[i].style.border="1px solid #745cf9";
}
  }
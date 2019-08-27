$(document).ready(function(){


// Audio
const audio6= document.querySelector("audio.E6");
const audio5= document.querySelector("audio.A5");
const audio4= document.querySelector("audio.D4");
const audio3= document.querySelector("audio.G3");
const audio2= document.querySelector("audio.B2");
const audio1= document.querySelector("audio.E1");

// Strings
const e6= document.querySelector("li.E6");
const a5= document.querySelector("li.A5");
const d4= document.querySelector("li.D4");
const g3= document.querySelector("li.G3");
const b2= document.querySelector("li.B2");
const e1= document.querySelector("li.E1");

const all = document.getElementsByTagName('li');

for (let i = 0; i< all.length; i+=1){
  all[5].style.color='orange';
  all[4].style.color='red';
  all[3].style.color='brown';
  all[2].style.color='green';
  all[1].style.color='purple';
  all[0].style.color='silver';
}

function color(x){
  all[x].style.transition='all 0s linear .5s';
  all[x].style.color='#000';
  all[x].style.backgroundColor='yellow';
  all[x].style.borderRadius='5px';
}
function removeColor(x,y){
  all[x].style.color= y;
  all[x].style.backgroundColor='';
  all[x].style.borderRadius='';
}


const string6 = all[0];

// Strings
$('.E6').click(function(){
  audio6.play();
  color(0);
  $(this).addClass('shake');

  setTimeout(bye, 3500);

  function bye(){
    removeColor(0,'teal');
    $('.E6').removeClass('shake');
  }
});

$('.A5').click(function(){
  audio5.play();
  color(1);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(1,'blue');
    $('.A5').removeClass('shake');
  }
});

$('.D4').click(function(){
  audio4.play();
  color(2);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(2,'green');
    $('.D4').removeClass('shake');
  }
});

$('.G3').click(function(){
  audio3.play();
  color(3);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(3,'brown');
    $('.G3').removeClass('shake');
  }
});

$('.B2').click(function(){
  audio2.play();
  color(4);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(4,'orange');
    $('.B2').removeClass('shake');
  }
});

$('.E1').click(function(){
  audio1.play();
  color(5);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(5,'red');
    $('.E1').removeClass('shake');
  }
});


}); // end Jquery

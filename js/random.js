function generate(){
var randomm = Math.random()*10;
randomm = Math.floor(randomm)+1;

if (randomm == 1)
{document.querySelector(".img").style.background = "coral";}
else if (randomm == 2){document.querySelector(".img").style.background = "peachpuff";}
else if (randomm == 3){document.querySelector(".img").style.background = "palegreen";}
else if (randomm == 4){document.querySelector(".img").style.background = "violet";}
else if (randomm == 5){document.querySelector(".img").style.background = "orange";}
else if (randomm == 6){document.querySelector(".img").style.background = "chartreuse";}
else if (randomm == 7){document.querySelector(".img").style.background = "black";}
else if (randomm == 8){document.querySelector(".img").style.background = "red";}
else if (randomm == 9){document.querySelector(".img").style.background = "orangered";}
else
{document.querySelector(".img").style.background = "peru";}
    }
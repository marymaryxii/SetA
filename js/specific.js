function specific(){
    if (document.querySelector("#colorchanger").value == "blue")
    {
        document.querySelector(".img").style.background = "blue";
    }
    else if (document.querySelector("#colorchanger").value =="grey")
    {
        document.querySelector(".img").style.background = "grey";
    }
    else if (document.querySelector("#colorchanger").value == "green")
    {
        document.querySelector(".img").style.background = "green";
    }
    else if (document.querySelector("#colorchanger").value == "yellow")
    {
        document.querySelector(".img").style.background = "yellow";
    }
    else if (document.querySelector("#colorchanger").value == "lblue")
    {
        document.querySelector(".img").style.background = "lightblue";
    }
    else if (document.querySelector("#colorchanger").value == "black")
    {
        document.querySelector(".img").style.background = "black";
    }
}
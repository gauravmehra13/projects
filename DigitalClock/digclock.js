function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    document.getElementById("t1").innerText = HH;
    document.getElementById("t2").innerText = MM;
    document.getElementById("t3").innerText = SS;
    setTimeout(getTime, 1000);
}
getTime();

let now = new Date();
let hour = now.getHours();
let msg1 = document.getElementById("message")
let msg2 = document.getElementById("message1")
let picture = document.getElementById("imgchange")
let am = document.getElementsByClassName("format")

if(6 <=hour && hour <= 12){
   document.getElementById("message").innerHTML = "GOOD MORNING!! WAKE UP!!";
    document.getElementById("message1").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("imgchange").src = "./goodnight_img.svg";
} 
if(12 <=hour && hour <= 17){
    document.getElementById("message").innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!";
    document.getElementById("message1").innerHTML = "LET'S HAVE SOME LUNCH !!";
    document.getElementById("imgchange").src = "./goodnight_img.svg";
} 
if(17 <= hour && hour <= 19){
    document.getElementById("message").innerHTML = "GOOD EVENING !!";
    document.getElementById("message1").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("imgchange").src = "./evening_img.png";
}
if(19 <= hour && hour < 6){
    document.getElementById("message").innerHTML = "GOOD NIGHT !!";
    document.getElementById("message1").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("imgchange").src = "./goodnight_img.svg";
}
if(12 <= hour && hour < 24){
    format.innerText = "PM"
}

  document.getElementById("t1").innerText = HH;
  document.getElementById("t2").innerText = MM;
  document.getElementById("t3").innerText = SS;

  setTimeout(getTime, 1000);

getTime();
function hover() {
    let drop1 = document.getElementsByClassName("time")[0]
    let output1 = drop1.options[drop1.selectedIndex].innerText
    document.getElementById("val1").innerText = output1 

    let drop2 = document.getElementsByClassName("time")[1]
    let output2 = drop2.options[drop2.selectedIndex].innerText
    document.getElementById("val2").innerText = output2 

    let drop3 = document.getElementsByClassName("time")[2]
    let output3 = drop3.options[drop3.selectedIndex].innerText
    document.getElementById("val3").innerText = output3 

    let drop4 = document.getElementsByClassName("time")[3]
    let output4 = drop4.options[drop4.selectedIndex].innerText
    document.getElementById("val4").innerText = output4 

    let party=document.getElementById("alarm")
    party.innerText="Party Time"
    
}



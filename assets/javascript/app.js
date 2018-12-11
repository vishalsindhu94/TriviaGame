var questions = ["Q1","Q2","Q3","Q4"];
var game=0;
var correct=0;
var wrong=0;
var blank=0;
var currentQ=0;
var timer=60;
var clock;
var counter=0;
var time=0;
var G1;
var G2;
var G3;
var G4;
var Q1= [{
    question: "Is my favorite basketball team the lakers?",
   answer: true,
    
}];
var Q2= [{
    question: "Are there 4 questions on this test?",
     answer:true,
}];
var Q3= [{
    question: "Is this assignment called Test?",
     answer:false,
}];
var Q4= [{
    question: "Is my favorite color pink?",
    answer:false,
}];

$(document).ready(function(){
     $("#Q1").append(questions[0]);
     $("#Q2").append(questions[1]);
     $("#Q3").append(questions[2]);
     $("#Q4").append(questions[3]);

function resetgame(){
     game=0;
     correct=0;
     wrong=0;
     blank=0;
     timer=60;
     counter=0;
     time=0;
};
function startgame(){
$("#correct").empty();
$("#wrong").empty();
$("#blank").empty();
correct=0;
wrong=0;
blank=0;
answers();
time();
};
$("#startbtn").on("click",function(){
     startgame();
})
$("#resetbtn").on("click",function(){
     resetgame();
});
function time(){
     $("#timer").text("time-remaining:"+timer);
     timer= setInterval(countdown,1000);
     $("#timer").append(timer);
};
function countdown(){
timer--;
if(timer<1){
     clearInterval(timer);
}
};
function answers(){
$("#Q1").text(Q1);
$("#Q2").text(Q2);
$("#Q3").text(Q3);
$("#Q4").text(Q4);
G1=promt("Is Q1 true");
if(G1 !== true){
     wrong++;
}else{
     correct++;
}
G2=promt("wIs Q1 true");
if(G2 !== true){
     wrong++;
}else{
     correct++;
}
G3=promt("Is Q1 true");
if(G3 !==false){
     wrong++;
}else{
     correct++;
}
G1=promt("Is Q1 true");
if(G4 !== false){
     wrong++;
}else{
     correct++;
}
};
});
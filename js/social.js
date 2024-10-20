var toggel=document.querySelector(".toggel");
var check=document.getElementById("check");
var circle=document.querySelector(".circle");
var bgtop=document.querySelector(".bg-top");
var facebook=document.querySelector(".facebook");
var twitter=document.querySelector(".twitter");
var instgram=document.querySelector(".instgram");
var youtube=document.querySelector(".youtube");
var pageviews=document.querySelector(".page-views");
var likes=document.querySelector(".likes");
var likes_1=document.querySelector(".likes_1");
var likes_2=document.querySelector(".likes_2");
var likes_3=document.querySelector(".likes_3");
var profileviews=document.querySelector(".profileviews");
var totalviews=document.querySelector(".totalviews");
var retweets=document.querySelector(".retweets");
var white=document.querySelectorAll(".white");
toggel.addEventListener("input",()=>{
    if(check.checked == true){
        document.body.style.backgroundColor ="hsl(230, 17%, 14%)";
        bgtop.style.backgroundColor="hsl(232, 19%, 15%)";
        facebook.style.backgroundColor="hsl(228, 28%, 20%)";
        twitter.style.backgroundColor="hsl(228, 28%, 20%)";
        instgram.style.backgroundColor="hsl(228, 28%, 20%)";
        youtube.style.backgroundColor="hsl(228, 28%, 20%)";
        pageviews.style.backgroundColor="hsl(228, 28%, 20%)";
        likes.style.backgroundColor="hsl(228, 28%, 20%)";
        likes_1.style.backgroundColor="hsl(228, 28%, 20%)";
        likes_2.style.backgroundColor="hsl(228, 28%, 20%)";
        likes_3.style.backgroundColor="hsl(228, 28%, 20%)";
        profileviews.style.backgroundColor="hsl(228, 28%, 20%)";
        retweets.style.backgroundColor="hsl(228, 28%, 20%)";
        totalviews.style.backgroundColor="hsl(228, 28%, 20%)";
        white.forEach((whit)=>{
            whit.style.color="hsl(0, 0%, 100%)";
        })
    }else{
        document.body.style.backgroundColor ="hsl(0, 0%, 100%)";
        bgtop.style.backgroundColor="hsl(225, 100%, 98%)";
        facebook.style.backgroundColor="hsl(227, 47%, 96%)";
        twitter.style.backgroundColor="hsl(227, 47%, 96%)";
        instgram.style.backgroundColor="hsl(227, 47%, 96%)";
        youtube.style.backgroundColor="hsl(227, 47%, 96%)";
        pageviews.style.backgroundColor="hsl(227, 47%, 96%)";
        likes.style.backgroundColor="hsl(227, 47%, 96%)";
        likes_1.style.backgroundColor="hsl(227, 47%, 96%)";
        likes_2.style.backgroundColor="hsl(227, 47%, 96%)";
        likes_3.style.backgroundColor="hsl(227, 47%, 96%)";
        profileviews.style.backgroundColor="hsl(227, 47%, 96%)";
        retweets.style.backgroundColor="hsl(227, 47%, 96%)";
        totalviews.style.backgroundColor="hsl(227, 47%, 96%)";
        white.forEach((whit)=>{
            whit.style.color="hsl(230, 17%, 14%)";
        })
    }
})
/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var styleScore = calculateStyle(q1Input)
        var musicScore = calculateMusic(q2Input)
        console.log(styleScore)
        console.log(musicScore)
        var totalScore;
    });

});


function calculateStyle (style){
    console.log(style)
    if (style==="Modern"){
        return 1
    } else if (style ==="Bold"){
        return 2
    } else if(style === "Normal"){
        return 3
        
    }else if(style ==="Vintage"){
        return 4
    } 
    
}


function calculateMusic(music){
    console.log(music)
    if (music==="Pop Music"){
        return 1
    } else if(music==="80's Rock"){
      return 2
    
    } else if(music==="90's Hip Hop"){
      return 3

   }else if (music==="classical"){
    return 4 
  }
  
}
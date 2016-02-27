$(document).ready(function(){
    $(document).keyup(function(e){
        console.log(e);
        if(e.keyCode === 37){
            $('#player').animate({"left": "-=20px"}, "fast")   
        } 
        if (e.keyCode === 39){
            $('#player').animate({"left": "+=20px"}, "fast")   
        }
    })

    window.setInterval(function(){
        $('.cloud').animate({"right": "+=20px"}, 'fast')
    }, 20)
    
    $('#play-btn').on('click', function(){
      $('#start-modal').css('visibility', 'hidden');  
    $('#background').prepend('<object data="images/comet.svg" type="image/svg+xml" height="150px" style="z-index:99;margin-top:-200px;"></object>')
    })
}); //Closing Document Ready tags

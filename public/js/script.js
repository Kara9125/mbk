$(document).ready(function(){
    console.log('hello');
    
    happyVid = ['m5yCOSHeYn4', 'keibTBgigQ8', 'kZlXWp6vFdE'];
    happySongs = ['']
    
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/58831841&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
    $('div.emotion').on('click', function(e){
        e.preventDefault();
        var emotion = $(this)[0].id;
        $('#inspo-content').css('visibility', 'visible');
        $('#video-pill').on('click', function(e){
            e.preventDefault;
            $('#inspo-content').empty();
            if (emotion === 'happy'){
                for(i=0; i < happyVid.length; i++){
                    console.log(happyVid[i]);
                    if(i === 0){
                        $('#video-content').append('<div class="col-xs-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/'+ happyVid[i]+'" frameborder="0" allowfullscreen></iframe></div>');
                    }
                    else{
                        $('#video-content').append('<div class="col-xs-12 col-sm-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/'+ happyVid[i]+'" frameborder="0" allowfullscreen></iframe></div>')
                    }
                }
            }
        })
        console.log(emotion);
        

    })
    
    
    
    
    
}); //Closing Document Ready tags

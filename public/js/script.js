$(document).ready(function(){
    console.log('hello');
    
    $('div#happy').on('click', function(e){
            e.preventDefault();
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
    //            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/m5yCOSHeYn4" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/keibTBgigQ8" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div>');
            })
            $('#song-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191075103&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/keibTBgigQ8" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div>');
            })
        })

        $('div#sad').on('click', function(e){
            e.preventDefault();
            var emotion = $(this)[0].id;
            console.log(emotion);
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#video-content').empty();
                e.preventDefault;
            //            $('#video-content').empty();
                $('#video-content').append('<div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/FMtcB9Oa7cI" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/zU58h3bAb6I" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe></div>');
                })
        })

        $('div#turnt-down').on('click', function(e){
            e.preventDefault();
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#video-content').empty();
                e.preventDefault;
        //            $('#video-content').empty();
                $('#video-content').append('<div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/keibTBgigQ8" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div>');
                })
        })
    }) //Closing Document Ready tags


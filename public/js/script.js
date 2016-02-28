$(document).ready(function(){
    console.log('hello');
    
    $('#logo').on('click', function(e){
        e.preventDefault();
        console.log(';helo');
        $('#content').css('visibility', 'visible');
    })
    
    $('div#happy').on('click', function(e){
            e.preventDefault();
            $('#content').empty();
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/m5yCOSHeYn4" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/keibTBgigQ8" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div>');
            })
            $('#song-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
//                            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191075103&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"&amp;show_artwork=false></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177568701&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/m5TwT69i1lU" frameborder="0" allowfullscreen></iframe></div>');
            })
            $('#quote-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //            $('#video-content').empty();
                $('#content').append('<div id="happy-quote1" class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 text-center">“Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.”<br>-Unknown<br><br></div><div id="happy-quote2" class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 text-center">"Dream as if you will live forever, live as if you will die today."<br>-James Dean</div>');
            })
        })

        $('div#sad').on('click', function(e){
            e.preventDefault();
            $('#content').empty();
            var emotion = $(this)[0].id;
            console.log(emotion);
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
            //            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/FMtcB9Oa7cI" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/zU58h3bAb6I" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kZlXWp6vFdE" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe></div>');
                })
            $('#song-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //                            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/73474396&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/113517655&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div>');
            })
            $('#quote-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //            $('#video-content').empty();
                $('#content').append('<div id="sad-quote1" class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 text-center">“When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.” ― Mahatma Gandhi<br><br></div><div id="sad-quote2" class="col-xs-10 col-xs-offset1 col-sm-6 col-sm-offset-3 text-center">"Never be sad for what is over,just be glad that it was once yours…"<br>-Unknown</div><div id="sad-quote3" class="col-xs-10 col-xs-offset1 col-sm-6 col-sm-offset-3 text-center">“We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.”<br>- Frederick Keonig</div>');
            })
        })

        $('div#turnt-down').on('click', function(e){
            e.preventDefault();
            $('#content').empty();
            $('#inspo-content').css('visibility', 'visible');
            $('#video-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
        //            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/PsO6ZnUZI0g" frameborder="0" allowfullscreen></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="315" src="https://www.youtube.com/embed/cd_YsXGYsbo" frameborder="0" allowfullscreen></iframe></div>');
                })
            $('#song-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //                            $('#video-content').empty();
                $('#content').append('<div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/73474396&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div><div class="col-xs-12 col-sm-6 col-sm-offset-3 video-container"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/113517655&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div>');
            })
            $('#quote-pill').on('click', function(e){
                $('#content').empty();
                e.preventDefault;
                //            $('#video-content').empty();
                $('#content').append('<div id="turnt-quote1" class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 text-center">"If you are not willing to risk the usual you will have to settle for the ordinary."<br>-Jim Rohn<br><br></div><div id="turnt-quote2" class="col-xs-10 col-xs-offset1 col-sm-6 col-sm-offset-3 text-center">Success is liking yourself, liking what you do, and liking how you do it."<br>-Maya Angelou</div>');
            })
        })
    }) //Closing Document Ready tags


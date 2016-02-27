$(document).ready(function(){
    console.log('hello');
    
    $('.emotion').on('click', function(e){
        e.preventDefault();
        console.log('clicked');
        $('#inspo-type').css('visibility', 'visible');
    })
    
}); //Closing Document Ready tags

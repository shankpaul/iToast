/*
*Plugin Name : iToast
*Developer : SHAN K PAUL <shanpaul06@gmail.com>
*website : www.tagprof.com/shan, www.dreamwebz.in
*
*/

var itoast={
    calback:'',
    time:2000,
    create:function()
    {
         $(document).find('body').append('<div id="itoast_frame"></div>');
         $('#itoast_frame').click(function(){
            $(this).hide(); 
         });
    },
    show:function(msg,tm,theme)
    {
       $('#itoast_frame').hide();
         delay=tm||this.time;
	theme= theme||'theme_green';
        if($('#itoast_frame').length==0)
            {
               this.create();
            }
           this.center();
	   $('#itoast_frame').removeClass();
		$('#itoast_frame').addClass(theme);
           $('#itoast_frame').html(msg).show().delay(delay).fadeOut('slow');
    },
    center:function()
    {
       //$('#itoast_frame').css("top", ( $(window).width() -   $('#itoast_frame').width() ) / 2);
       $('#itoast_frame').css("left", ( $(window).width() -   $('#itoast_frame').width() ) / 2);
    }
    
    
}

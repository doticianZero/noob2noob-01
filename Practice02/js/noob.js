$(document).ready(function(){

        var div01 = $("div").eq(0);
        var div02 = $("div").eq(1);
        var div03 = $("div").eq(2);
        

        div01.append ("<p>Please push the button </p>");
        
        div02.append ("<a href='#' data-guid='123' >Click here and go now</a>")
       
                
        $("a[data-guid='123']").click(PushThebutton);
        //chosen$.data('guid','567')

        
        function PushThebutton (){
                var chosen$ = $("p[data-guid='567']");
                if (chosen$.length === 0){
                        div03.append ("<p data-guid='567'>You pressed the button!</p>")
                };  
        }
        
        
        $("body").append ("<div data-guid='222'></div>");
        var div04 = $("div[data-guid='222']");
        div04.append ("<p>hello</p>");

        
        /*
        CORS ERROR - need to activate a local server and load / get the document from it.
        
        div04.load("https://github.com/doticianZero/noob2noob-01/blob/master/Practice01/external.html");
        */

});




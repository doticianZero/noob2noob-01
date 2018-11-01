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



        $("body").append (<div data-guid='222'></div>)
        var div04 = $("div[data-guid=222'");
        div04.load("external.html");

        //$.get("external.html", function(data, status){
          //      alert("Data: " + data + "\nStatus: " + status);




});




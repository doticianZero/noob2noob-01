$(document).ready(function(){

var div01 = $("div").eq(0);
var div02 = $("div").eq(1);
var div03 = $("div").eq(2);

div01.append ("<p data-guid=007>Please push the button </p>");
   
div02.append ("<a href=# data-guid=123 >Click here and go now</a>")
 
var chosen$ = $("a[data-guid=123]");

chosen$.click(PushThebutton);


function PushThebutton (){
        if (($("p[data-guid=007]").data(data-guid)=='007')){
        div03.append ("<p>You pressed the button!</p>")
        
        };
        $("p[data-guid=123]").data (data-guid, '008');   

           }



});

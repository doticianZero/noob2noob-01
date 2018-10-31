$(document).ready(function(){

var div01 = $("div").eq(0);
var div02 = $("div").eq(1);
var div03 = $("div").eq(2);

div01.append ("<p data-clicked=0>Please push the button </p>");
   
div02.append ("<a href=# data-guid=123 >Click here and go now</a>")
 
var chosenA$ = $("a[data-guid=123]");
var chosenP$ = $("p[data-clicked=0");

chosenA$.click(PushThebutton);

function PushThebutton (){
        if (chosenP$.data(data-clicked)==0){
        div03.append ("<p>You pressed the button!</p>")
        };
        chosenP$.data (data-clicked, 1);   
           }
});

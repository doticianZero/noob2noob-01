$(document).ready(function(){

var div01 = $("div").eq(0);
var div02 = $("div").eq(1);
var div03 = $("div").eq(2);
var appendedA = false;


div01.append ("<p>Please push the button</p>");
   
div02.append ("<a href=# data-guid=123 >Click here and go</a>")

 
var chosen$ = $("a[data-guid=123]");

chosen$.click(PushThebutton);



function PushThebutton (){
        if (oneClickOnly == false){
        div03.append ("<p>You pressed the button!</p>")    
        };
        oneClickOnly=true;

           }



});

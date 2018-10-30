$(document).ready(function(){

var div01 = $("div").eq(0);
var div02 = $("div").eq(1);
var div03 = $("div").eq(2);
var appendedA = false;


   div01.append ("<p>Please push the button</p>");
   div02
        .append ("<a href=#>Click here and go </a>") 
        .data ("guid", "LukeIamyourfather")
        .children("a");   

var PushThebutton = function (){
    if (appendedA === false){
        div03.append ("<p>You pressed the button!</p>")
    }
    appendedA === true;
}
   
var theChosenOne = $("a").data( "guid", "LukeIamyourfather");      
    theChosenOne.click (PushThebutton);

});



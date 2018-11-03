$(document).ready(function(){
       
        // Create UI

        function createUI (){
                createDiv01();
                createDiv02();
                createDiv03();
        }

        // Create DIVs

        function createDiv01 (){
                $("body").append ("<div data-guid='div01'></div>");
                $("div[data-guid='div01']").append ("<p>first div</p>")
        }

        function createDiv02 (){
                $("body").append ("<div data-guid=dv02></div>");
                $("div[data-guid='dv02']").append ("<p>second div</p>")
        }

        function createDiv03 (){
                $("body").append ("<div data-guid=div03></div>");
                $("div[data-guid='dv03']").append ("<p>third dv</p>")
        }

       
});




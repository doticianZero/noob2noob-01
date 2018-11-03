$(document).ready(function(){
       
        // Create UI

        createUI();

        function createUI (){
                createDiv00();
                createDiv01();
                createDiv02();
                createDiv03();
        }

        // Create DIVs

        function createDiv00 (){
                $("body").append ("<div data-guid='div00'></div>");
                $("div[data-guid='div00'")
                        .append ("<a href=# class='hidden'> tab 1 </a>")
                        .append ("<a href=# class='hidden'> tab 2 </a>")
                        .append ("<a href=# class='hidden'> tab 3 </a>")
        }

        function createDiv01 (){
                $("body").append ("<div data-guid='div01' class='hidden'></div>");
                $("div[data-guid='div01']").append ("<p>first div</p>")
        }

        function createDiv02 (){
                $("body").append ("<div data-guid=dv02 class='hidden'></div>");
                $("div[data-guid='dv02']").append ("<p>second div</p>")
        }

        function createDiv03 (){
                $("body").append ("<div data-guid=div03 class='hidden'></div>");
                $("div[data-guid='div03']").append ("<p>third div</p>")
        }

       
});




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
                        .append ("<a href='#' data-target='div01' data-targettype='tab'> tab 1 </a>")
                        .append ("<a href='#' data-target='div02' data-targettype='tab'> tab 2 </a>")
                        .append ("<a href='#' data-target='div03' data-targettype='tab'> tab 3 </a>")
        }

        function createDiv01 (){
                $("body").append ("<div data-guid='div01' data-type='tab' class='hidden'></div>");
                $("div[data-guid='div01']").append ("<p>first div</p>")
        }

        function createDiv02 (){
                $("body").append ("<div data-guid='div02' data-type='tab' class='hidden'></div>");
                $("div[data-guid='div02']").append ("<p>second div</p>")
        }

        function createDiv03 (){
                $("body").append ("<div data-guid='div03' data-type='tab' class='hidden'></div>");
                $("div[data-guid='div03']").append ("<p>third div</p>")
        }


        // Business

        handleTargets();
        

        function handleTargets (){
                $("a[data-targettype='tab']").off().on ("click", handleTab);
                
        }

        function handleTab (e){
                tabcontent$=parent(element$).prop("data.guid");
                hideAllTabs();
        }

        function hideAllTabs (){
                $("a[data-targettype='tab'").addClass("hidden");
        }


});




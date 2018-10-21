$(document).ready(function () {

    $("#page1").click(function () {
      showContent(1);
        $(this)
            .toggleClass("selected")
            .siblings('.child'+this.id).slideToggle(1000);
    });
    $("#page2").click(function () {
       showContent(2);
        $(this)
            .toggleClass("selected")
            .siblings('.child'+this.id).slideToggle(1000);
    });
    $("#page3").click(function () {
      showContent(3);
        $(this)
            .toggleClass("selected")
            .siblings('.child'+this.id).slideToggle(1000);
    });
    $("#page4").click(function () {
        showContent(4);
        $(this)
            .toggleClass("selected")
            .siblings('.child'+this.id).slideToggle(1000);
    });

    function showContent(num) {
        for(var i=1;i<5;i++)
            if(i==num)
            {
             $("#content"+i).slideDown(1000);
            }else
            {
                $("#content"+i).slideUp(1000);
            }
    }

});


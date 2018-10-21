$(document).ready(function () {

    $("#page1").click(function () {
        showContent(1);
    });
    $("#page2").click(function () {
        showContent(2);
    });
    $("#page3").click(function () {
        showContent(3);
    });
    $("#page4").click(function () {
        showContent(4);
    });
    $("#page5").click(function () {
        showContent(5);
    });

    function showContent(num) {
        for(var i=1;i<6;i++)
            if(i==num)
            {
                $("#content"+i).slideDown(1000);
            }else
            {
                $("#content"+i).slideUp(1000);
            }
    }
});
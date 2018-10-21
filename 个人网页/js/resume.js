$(function () {
    $("#term li").click(
        function () {
            $(this).addClass("selected")
                .siblings().removeClass("selected");
            $("#"+this.id+"1").fadeIn(1000)
                .siblings().fadeOut(1000)
        }
    )    
})
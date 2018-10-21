// 电子钟
function clock() {

    var tm = new Date();
    var hu = tm.getHours() + 100 + "";
    var mt = tm.getMinutes() + 100 + "";
    var sc = tm.getSeconds() + 100 + "";
    var dy=tm.getDay()+"";
    var week= new Array(7);
    week[0]="星期日";
    week[1]="星期一";
    week[2]="星期二";
    week[3]="星期三";
    week[4]="星期四";
    week[5]="星期五";
    week[6]="星期六";
    var day=week[dy];
    $("#dgtlClock").text(hu.substr(1) + ":" + mt.substr(1) + ":" + sc.substr(1)+" "+day);
}

setInterval("clock()", 1000);
// 更换皮肤
$(function () {
    var $li =$("#skin li");
    $li.click(function(){
        switchSkin( this.id );
    });
});
function switchSkin(skinName) {
    $("#" + skinName).addClass("selected")                //当前<li>元素选中
        .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
    $("#cssfile").attr("href", "css/skin/" + skinName + ".css"); //设置不同皮肤
}
// 导航栏
$(function () {
    $("#signin a").hover(function () {
        $(this).find("#details").show();
    },function () {
        $(this).find("#details").hide();
    })
});
$(function () {
    //鼠标移入显示左右箭头和关闭按钮
    var timer = '';
    $('.Cooldog_container').mouseover(function () {
        $('.btn_left').show('1000');
        $('.btn_right').show('1000');
        clearInterval(timer);
    }).mouseleave(function () {
        $('.btn_left').hide('1000');
        $('.btn_right').hide('1000');
        // $('.btn_close').hide('1000');
        timer = setInterval(btn_right, 5000);
    });


    var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    var index = 0;

    //上一张
    $('.btn_left').on('click', function () {
        btn_left();
    });

    //下一张
    $('.btn_right').on('click', function () {
        btn_right();
    });

    //图片自动轮播
    timer = setInterval(btn_right, 5000);

    //点击上一张的封装函数
    function btn_left() {
        arr.unshift(arr[6]);
        arr.pop();
        $('.Cooldog_content li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index--;
        if (index < 0) {
            index = 6;
        }
    }

    //点击下一张的封装函数
    function btn_right() {
        arr.push(arr[0]);
        arr.shift();
        $('.Cooldog_content li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index++;
        if (index > 6) {
            index = 0;
        }
    }


    $('.p1,.p2,.p3,.p4,.p5,.p6').dblclick(function () {

    }

    )
});

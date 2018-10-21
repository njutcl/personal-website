function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.onload = function checkCookie() {
    var t1 = document.getElementById("text1"),
        t2 = document.getElementById("t2");
    var username = getCookie("username");
    var password = getCookie("password");
    if (username!= "" &&username != null&& password!=null&& password!= "") {
        t1.value = username;
        t2.value = password;
    }
}

    function getinfo() {
        var t1 = document.getElementById("text1").value,
            t2 = document.getElementById("t2").value;
        if (t1 == "")
            alert("请输入用户名！");
        if (t2 == "")
            alert("请输入密码！");
        if (t1 == "messi" && t2 == "123456") {
            if (Checkbox1.checked) {
                setCookie("text1", t1, 30);
                setCookie("text2", t2, 30);
            }
            window.location = "welcome.html";

        } else if (t1 == "abc" && t2 == "123")
            window.location = "http://www.4399.com";
        else alert("用户名或者密码错误，请重新输入！");

    }
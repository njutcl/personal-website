window.onload = function() {
    imgLocation("container", "box");

//     var imgData = {
//         "data": [
//             {"src": "1.jpg"},
//             {"src": "2.jpg"},
//             {"src": "3.jpg"},
//             {"src": "4.jpg"},
//             {"src": "5.jpg"},
//             {"src": "6.jpg"},
//             {"src": "7.jpg"},
//             {"src": "8.jpg"},
//             {"src": "9.jpg"},
//             {"src": "10.jpg"}
//         ]
//     }
//
//     window.onscroll = function () {
//         if (checkflag()) {
//             var cparent = document.getElementById("container");
//             for (var i = 0; i < imgData.data.length; i++) {
//                 var ccontent = document.createElement("div");
//                 ccontent.className = "box";
//                 cparent.appendChild(ccontent);
//                 var boximg = document.createElement("div");
//                 boximg.className = "img";
//                 ccontent.appendChild(boximg);
//                 var img = document.createElement("img");
//                 img.src = "image/" + imgData.data[i].src;
//                 boximg.appendChild(img);
//             }
//             imgLocation("container", "box");
//         }
//     }
// }
// function checkflag() {
//     var cparent = document.getElementById("container");
//     var ccontent = getChildElement(cparent, "box");
//     var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
//     var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
//     var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
//     if (lastContentHeight < scrollTop + pageHeight) return true;
 }

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * num + "px;margin:0 auto";
    getMinHeightOfCols(ccontent, num);
}


function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {

        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}

function getMinHeightOfCols(chirdArr, num) {

    var boxHeightArr = [];
    for (var i = 0; i <chirdArr.length; i++) {
        if (i < num) {
            boxHeightArr[i] =chirdArr[i].offsetHeight;
        } else {
            var minHeight = Math.min.apply(null, boxHeightArr);
            var minIndex = getminheightlocation(boxHeightArr, minHeight);
            chirdArr[i].style.position = "absolute";
            chirdArr[i].style.top = minHeight + "px";
           chirdArr[i].style.left = chirdArr[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + chirdArr[i].offsetHeight;
        }
    }

}



function getminheightlocation(boxHeightArr, minHeight) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == minHeight) {
            return i;
        }
    }
}
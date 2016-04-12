/**
 * Created by Administrator on 2016/1/12 0012.
 */
$(function () {

    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k == "opacity") {
                    var target = json[k] * 100;
                    var leader = Math.round(getStyle(obj, k) * 100) || 100;
                } else {
                    var target = json[k];
                    var leader = parseInt(getStyle(obj, k)) || 0;
                }
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                if (k == "opacity") {
                    obj.style[k] = leader / 100;
                    obj.style.filter = "alpha(opacity=" + leader + ")"
                } else if (k == "zIndex") {
                    obj.style.zIndex = target;
                }
                else {
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15)

    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }


    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var left = arrow.children[0];
    var right = arrow.children[1];
    var ul = slide.children[0];
    var lis = ul.children;

    var json = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        },
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        },
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        }
    ];

    slide.onmouseover = function () {
        animate(arrow, {opacity: 1});
    }
    slide.onmouseout = function () {
        animate(arrow, {opacity: 0});
    }

    assign();
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], {
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].zIndex
            }, function () {
                flag = true;
            })
        }
    }
    right.onclick = function () {
        if (flag) {
            json.push(json.shift());
            assign();
            flag = false;
        }
    }
    left.onclick = function () {
        if (flag) {
            json.unshift(json.pop());
            assign();
            flag = false;
        }
    }
    var flag = true;

    var liss = $(".s-banner").find("li");
    liss.mouseenter(function () {
        $(this).css("opacity", 1).siblings("li").css("opacity", 0.7);
    });

    $(".s-banner").mouseleave(function () {
        $(".s-banner>ul>li").css("opacity", 0.7);
    });

    $("#box-top>ul>li").mouseenter(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        var index=$(this).index();
        $("#box-bottom>.sbox").eq(index).addClass("show").siblings().removeClass("show");
    });
})

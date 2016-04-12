//品牌推荐的mask
$(".band-mask").mouseenter(function () {
    $(this).css("opacity",0.5);
})
$(".band-mask").mouseleave(function () {
    $(this).css("opacity",0);
})


//商品选中效果
$(".good-wine-bottom li").mouseenter(function () {
    $(this).addClass("li-shadow");
    $(this).children(".price-label").addClass("label-mask");//商品标签(价格等)mask
})
$(".good-wine-bottom li").mouseleave(function () {
    $(this).removeClass("li-shadow");
    $(".price-label").removeClass("label-mask");//商品标签(价格等)mask
})

//Ʒ���Ƽ���mask
$(".band-mask").mouseenter(function () {
    $(this).css("opacity",0.5);
})
$(".band-mask").mouseleave(function () {
    $(this).css("opacity",0);
})


//��Ʒѡ��Ч��
$(".good-wine-bottom li").mouseenter(function () {
    $(this).addClass("li-shadow");
    $(this).children(".price-label").addClass("label-mask");//��Ʒ��ǩ(�۸��)mask
})
$(".good-wine-bottom li").mouseleave(function () {
    $(this).removeClass("li-shadow");
    $(".price-label").removeClass("label-mask");//��Ʒ��ǩ(�۸��)mask
})

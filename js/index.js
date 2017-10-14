/**
 * Created by Administrator on 2017/10/14.
 */
//轮播图的实现
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
//    顶部隐藏导航栏的淡出淡入
$(function () {
    $("#tom-hidden").addClass("hidecss");
    $("main").click(function () {
        $("#tom-hidden").addClass("hidecss");
    });
    $("#tom-hidden").click(function () {
        $("#tom-hidden").addClass("hidecss");
    });
    $("#navbar-header").click(function () {
        var haveThat = $("#tom-hidden").hasClass("hidecss");
        if (haveThat) {
            $("#tom-hidden").removeClass("hidecss");
        } else {
            $("#tom-hidden").addClass("hidecss");
        }
    });
//顶部头像的放大功能
    $("#tomPhotoBig").addClass("hidecss");
    $("#tomPhotoSmall").click(function () {
        var haveIt = $("#tomPhotoBig").hasClass("hidecss");
        if (haveIt) {
            $("#tomPhotoBig").removeClass("hidecss");
        } else {
            $("#tomPhotoBig").addClass("hidecss");
        }
    });
    // 解决a标签无法精确跳转到指定分页面的BUG；
    var getsome = function(ele1,ele2,maths){
        ele1.click(function(){
            var dd =ele2.offset().top;
            $('html,body').animate({
                scrollTop: dd - maths
            },1000);
        });
    };
    getsome($("#tom-findMain"),$("#tom-main-container"),150);
    getsome($("#tom-findMain2"),$("#tom-main-container"),150);
    getsome($("#tom-findExp"),$("#tom-experience"),150);
    getsome($("#tom-findExp2"),$("#tom-experience"),150);
    getsome($("#tom-findSkill"),$("#tom-skill"),0);
    getsome($("#tom-findSkill2"),$("#tom-skill"),0);
    //这是一个demo，
    //$("#tom-findMain").click(function () {
    //    $('html,body').animate({
    //        scrollTop: $("#tom-main-container").offset().top -150
    //    }, 1000);
    //    console.log($("#tom-main-container").offset());
    //});


});
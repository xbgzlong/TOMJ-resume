/**
 * Created by Administrator on 2017/10/14.
 */
//�ֲ�ͼ��ʵ��
var swiper = new Swiper('.tom-pics-li .swiper-container', {
    pagination: '.tom-pics-li .swiper-pagination',
    nextButton: '.tom-pics-li .swiper-button-next',
    prevButton: '.tom-pics-li .swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.tom-work .swiper-container', {
    scrollbar: '.tom-work .swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true
});


//    �������ص������ĵ�������
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
//����ͷ��ķŴ���
    $("#tomPhotoBig").addClass("hidecss");
    $("#tomPhotoSmall").click(function () {
        var haveIt = $("#tomPhotoBig").hasClass("hidecss");
        if (haveIt) {
            $("#tomPhotoBig").removeClass("hidecss");
        } else {
            $("#tomPhotoBig").addClass("hidecss");
        }
    });
    // ���a��ǩ�޷���ȷ��ת��ָ����ҳ���BUG��
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
    getsome($("#tom-findSkill"),$("#tom-skill"),100);
    getsome($("#tom-findSkill2"),$("#tom-skill"),100);
    getsome($("#tom-findwork"),$("#tom-work"),50);
    getsome($("#tom-findwork2"),$("#tom-work"),50);

    //����һ��demo��
    //$(".tom-skillPic canvas").addClass("hidecss");
    //$("#tom-findSkill").click(function () {
    //    $(".tom-skillPic canvas").removeClass("hidecss");
    //});

    //$("#tom-findSkill2").click(function () {
    //    setTimeout(tomMove(),1000);
    //});
    //$("#tom-findSkill").click(function () {
    //    setTimeout(tomMove(),1000);
    //});
    //window �����¼���
    //$(window).scroll(function(){
    //    var tomBig = $(window).scrollTop() - $("#tom-skill").offset().top + 150;
    //    if(tomBig > 0){
    //        tomTimer= setInterval(
    //            tomMove(),1000);
    //    }
    //});
});
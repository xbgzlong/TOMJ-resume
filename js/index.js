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



let Progress = function(init){
    this.init(init)
};
Progress.prototype= {
    init:function (init) {
        this.el = init.el;//元素ID
        let cvsElement = document.getElementById(this.el),//获取元素
            ctx=cvsElement.getContext("2d"),//获取画笔
            width = cvsElement.width,//元素宽度
            height=cvsElement.height,//元素高度
            degActive=0;//动态线条
        var timers=null;//定时器
        //停止时的角度
        init.deg>0&&init.deg<=100?
            this.deg = init.deg:this.deg = 100;
        //线宽
        init.lineWidth !== undefined?
            this.lineWidth = init.lineWidth : this.lineWidth =20;
        //判断宽高较小者
        this.wh = width>height?height:width;

        //设置圆的半径，默认为宽高较小者
        init.circleRadius>0&&init.circleRadius<=this.wh/2-this.lineWidth/2?
            this.circleRadius = init.circleRadius:this.circleRadius = this.wh/2-this.lineWidth/2;

        //绘制线的背景颜色
        init.lineBgColor !==undefined?
            this.lineBgColor = init.lineBgColor:this.lineBgColor='#ccc';

        //绘制线的颜色
        init.lineColor !==undefined?
            this.lineColor = init.lineColor:this.lineColor='#009ee5';

        //绘制文字颜色
        init.textColor !==undefined?
            this.textColor = init.textColor:this.textColor='#009ee5';

        //绘制文字大小
        init.fontSize !==undefined?
            this.fontSize = init.fontSize:this.fontSize=parseInt(this.circleRadius/2);

        //执行时间
        this.timer = init.timer;

        //清除锯齿
        if (window.devicePixelRatio) {
            cvsElement.style.width = width + "px";
            cvsElement.style.height = height + "px";
            cvsElement.height = height * window.devicePixelRatio;
            cvsElement.width = width * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        //设置线宽
        ctx.lineWidth=this.lineWidth;

        clearInterval(timers);

        //启动定时器
        timers = setInterval(function(){
            ctx.clearRect(0,0,width,height);//清除画布
            ctx.beginPath();//开始绘制底圆
            ctx.arc(width/2,height/2,this.circleRadius,1,8);
            ctx.strokeStyle=this.lineBgColor;
            ctx.stroke();
            ctx.beginPath();//开始绘制动态圆
            ctx.arc(width/2,height/2,this.circleRadius,-Math.PI/2,degActive*Math.PI/180-Math.PI/2);
            ctx.strokeStyle=this.lineColor;
            ctx.stroke();
            //let txt=(parseInt(degActive*100/360)+"%");//获取百分比
            var txt;
            if(degActive*100/360>61){
                txt="nice";
            }else{
                txt="fighting";
            };
            ctx.font=this.fontSize+"px SimHei";
            let w=ctx.measureText(txt).width;//获取文本宽度
            let h=this.fontSize/2;
            ctx.fillStyle=this.textColor;
            ctx.fillText(txt,width/2-w/2,height/2+h/2);
            if(degActive>=this.deg/100*360){//停止定时器
                clearInterval(timers);
                timers=null;
            }
            degActive++;
        }.bind(this),this.timer);

    }
};
var tomMove = function(){
    var p1 = new Progress({
        el:'skillMore1',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#fff',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore2',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#fff',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore3',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore4',//canvas元素id
        deg:60,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore5',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore6',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore7',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore8',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
    var p1 = new Progress({
        el:'skillMore9',//canvas元素id
        deg:80,//绘制角度
        timer:1,//绘制时间
        lineWidth:10,//线宽
        lineBgColor:'#e2e2e2',//底圆颜色
        lineColor:'#356936',//动态圆颜色
        textColor:'#000',//文本颜色
        fontSize:25,//字体大小
        circleRadius:50//圆半径
    });
};
var tomTimer= setInterval(
    tomMove()
    ,10000);
clearInterval(tomTimer);

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
    getsome($("#tom-findSkill"),$("#tom-skill"),150);
    getsome($("#tom-findSkill2"),$("#tom-skill"),150);

    //这是一个demo，
    //$(".tom-skillPic canvas").addClass("hidecss");
    //$("#tom-findSkill").click(function () {
    //    $(".tom-skillPic canvas").removeClass("hidecss");
    //});

    $("#tom-findSkill2").click(function () {
        setTimeout(tomMove(),1000);

    });
    $("#tom-findSkill").click(function () {
        setTimeout(tomMove(),1000);

    });
    //
    //$(window).scroll(function(){
    //    var tomBig = $(window).scrollTop() - $("#tom-skill").offset().top + 150;
    //    if(tomBig > 0){
    //        tomTimer= setInterval(
    //            tomMove(),1000);
    //    }
    //});
});
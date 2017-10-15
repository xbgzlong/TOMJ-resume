/**
 * Created by Administrator on 2017/10/14.
 */
//�ֲ�ͼ��ʵ��
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
        this.el = init.el;//Ԫ��ID
        let cvsElement = document.getElementById(this.el),//��ȡԪ��
            ctx=cvsElement.getContext("2d"),//��ȡ����
            width = cvsElement.width,//Ԫ�ؿ��
            height=cvsElement.height,//Ԫ�ظ߶�
            degActive=0;//��̬����
        var timers=null;//��ʱ��
        //ֹͣʱ�ĽǶ�
        init.deg>0&&init.deg<=100?
            this.deg = init.deg:this.deg = 100;
        //�߿�
        init.lineWidth !== undefined?
            this.lineWidth = init.lineWidth : this.lineWidth =20;
        //�жϿ�߽�С��
        this.wh = width>height?height:width;

        //����Բ�İ뾶��Ĭ��Ϊ��߽�С��
        init.circleRadius>0&&init.circleRadius<=this.wh/2-this.lineWidth/2?
            this.circleRadius = init.circleRadius:this.circleRadius = this.wh/2-this.lineWidth/2;

        //�����ߵı�����ɫ
        init.lineBgColor !==undefined?
            this.lineBgColor = init.lineBgColor:this.lineBgColor='#ccc';

        //�����ߵ���ɫ
        init.lineColor !==undefined?
            this.lineColor = init.lineColor:this.lineColor='#009ee5';

        //����������ɫ
        init.textColor !==undefined?
            this.textColor = init.textColor:this.textColor='#009ee5';

        //�������ִ�С
        init.fontSize !==undefined?
            this.fontSize = init.fontSize:this.fontSize=parseInt(this.circleRadius/2);

        //ִ��ʱ��
        this.timer = init.timer;

        //������
        if (window.devicePixelRatio) {
            cvsElement.style.width = width + "px";
            cvsElement.style.height = height + "px";
            cvsElement.height = height * window.devicePixelRatio;
            cvsElement.width = width * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        //�����߿�
        ctx.lineWidth=this.lineWidth;

        clearInterval(timers);

        //������ʱ��
        timers = setInterval(function(){
            ctx.clearRect(0,0,width,height);//�������
            ctx.beginPath();//��ʼ���Ƶ�Բ
            ctx.arc(width/2,height/2,this.circleRadius,1,8);
            ctx.strokeStyle=this.lineBgColor;
            ctx.stroke();
            ctx.beginPath();//��ʼ���ƶ�̬Բ
            ctx.arc(width/2,height/2,this.circleRadius,-Math.PI/2,degActive*Math.PI/180-Math.PI/2);
            ctx.strokeStyle=this.lineColor;
            ctx.stroke();
            //let txt=(parseInt(degActive*100/360)+"%");//��ȡ�ٷֱ�
            var txt;
            if(degActive*100/360>61){
                txt="nice";
            }else{
                txt="fighting";
            };
            ctx.font=this.fontSize+"px SimHei";
            let w=ctx.measureText(txt).width;//��ȡ�ı����
            let h=this.fontSize/2;
            ctx.fillStyle=this.textColor;
            ctx.fillText(txt,width/2-w/2,height/2+h/2);
            if(degActive>=this.deg/100*360){//ֹͣ��ʱ��
                clearInterval(timers);
                timers=null;
            }
            degActive++;
        }.bind(this),this.timer);

    }
};
var tomMove = function(){
    var p1 = new Progress({
        el:'skillMore1',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#fff',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore2',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#fff',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore3',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore4',//canvasԪ��id
        deg:60,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore5',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore6',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore7',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore8',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
    var p1 = new Progress({
        el:'skillMore9',//canvasԪ��id
        deg:80,//���ƽǶ�
        timer:1,//����ʱ��
        lineWidth:10,//�߿�
        lineBgColor:'#e2e2e2',//��Բ��ɫ
        lineColor:'#356936',//��̬Բ��ɫ
        textColor:'#000',//�ı���ɫ
        fontSize:25,//�����С
        circleRadius:50//Բ�뾶
    });
};
var tomTimer= setInterval(
    tomMove()
    ,10000);
clearInterval(tomTimer);

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
    getsome($("#tom-findSkill"),$("#tom-skill"),150);
    getsome($("#tom-findSkill2"),$("#tom-skill"),150);

    //����һ��demo��
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
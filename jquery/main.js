/**
 * Created by hongnhung on 09/07/2014.
 */
$(function () {

    setInterval("imgChange()", 2000);
    setInterval("imgChangeBird()", 1000);
    $("#draggable").draggable();
    $("#datepicker").datepicker();
    show_time();
    $(".photo1 .imgContent1").addClass("none");
    $(".photo2 .imgContent2").addClass("none");
    $(".photo3 .imgContent3").addClass("none");
    $(".home").fadeIn("fast");
    $(".continue").hide();
    $("#hidden5").hide();
    clickHome();
    clickMember();
    clickOrder();
    clickNew();
    $("#hidden1").click(function(){
        $(".photo1 .imgContent1").fadeOut("slow");
    });
    $("#show1").click(function(){
        $(".photo1 .imgContent1").fadeIn("slow");
    });
    $("#hidden2").click(function(){
        $(".photo2 .imgContent2").fadeOut("slow");
    });
    $("#show2").click(function(){
        $(".photo2 .imgContent2").fadeIn("slow");
    });
    $("#hidden3").click(function(){
        $(".photo3 .imgContent3").fadeOut("slow");
    });
    $("#show3").click(function(){
        $(".photo3 .imgContent3").fadeIn("slow");
    });
    $("#hidden4").click(function(){
        $(".continue").fadeOut("slow");
    });
    $("#hidden5").click(function(){
        $(".continue").fadeOut("slow");
        $("#hidden5").addClass("none");
    });
    $("#show4").click(function(){
        $(".continue").fadeIn("slow");
        $("#hidden5").show().click(function(){
            $(".continue").fadeOut("slow");
            $("#hidden5").hide();
        });
    });



    $("#right").click(function () {
        $("#theDiv").animate({ width: "700px" }, 1000);
    });
    $("#text").click(function () {
        $("#theDiv p").animate({ fontSize: "18pt" }, 1000);
    });
    $("#toggle").click(function () {
        $("#theDiv").animate({ left: "300" }, 1000, "swing");
    });
    $("#back").click(function () {
        $("#theDiv").animate({ left: "0px", width: "500px"}, 1000, "swing");
        $("#theDiv p").animate({ fontSize: "12pt" }, 1000);
    });

    function runEffect() {
        // get effect type from
        var selectedEffect = $("#effectTypes").val();

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if (selectedEffect === "scale") {
            options = { percent: 0 };
        } else if (selectedEffect === "transfer") {
            options = { to: "#button", className: "ui-effects-transfer" };
        } else if (selectedEffect === "size") {
            options = { to: { width: 200, height: 60 } };
        }

        // run the effect
        $("#effect").effect(selectedEffect, options, 500, callback);
    }

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function () {
            $("#effect").removeAttr("style").hide().fadeIn();
        }, 1000);
    }

    // set effect from select menu value
    $("#button").click(function () {
        runEffect();
        return false;
    });

    $("#fadein").click(function() {
        $("#demo-4").fadeIn("normal");
    });
    $("#fadeout").click(function() {
        $("#demo-4").fadeOut("normal");
    });
    $("#fadeto3").click(function() {
        $("#demo-4").fadeTo("slow", 0.3);
    });
    $("#fadeup").click(function() {
        $("#demo-4").fadeTo("slow", 1.0);
    });

    // food-titile
    $("#vn").click(function(){
        $("#food-title").empty().append("Việt");
    });
    $("#b").click(function(){
        $("#food-title").empty().append("miền Bắc");
    });
    $("#t").click(function(){
        $("#food-title").empty().append("miền Trung");
    });
    $("#n").click(function(){
        $("#food-title").empty().append("miền Nam");
    });
    $("#hq").click(function(){
        $("#food-title").empty().append("Hàn Quốc");
    });
    $("#tq").click(function(){
        $("#food-title").empty().append("Trung Quốc");
    });

    //login
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });
    //info
    ("#info").click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });

});



//Img_bird
function imgChangeBird() {
    var curPhoto = $("#bird div.current");
    var nextPhoto = curPhoto.next();
    if (nextPhoto.length == 0)
        nextPhoto = $("#bird div:first");
    curPhoto.removeClass("current").addClass("previous");
    nextPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function () {
        curPhoto.removeClass("previous");
    });
}
// Image Rotator
function imgChange() {
    var curPhoto1 = $(".photoShow1 div.current1");
    var nextPhoto1 = curPhoto1.next();
    if (nextPhoto1.length == 0)
        nextPhoto1 = $(".photoShow1 div:first");
    curPhoto1.removeClass("current1").addClass("previous1");
    nextPhoto1.css({opacity: 0.0}).addClass("current1").animate({opacity: 1.0}, 1000, function () {
        curPhoto1.removeClass("previous1");
    });
}
// Menu
function clickHome(){
    $("#home").click(function () {
        $(".home").fadeIn("fast");
        $(".order").hide();
        $(".member").hide();
        $(".new").hide();

    })
}
function clickOrder(){
    $("#order").click(function () {
        $(".order").fadeIn("fast");
        $(".member").hide();
        $(".new").hide();
        $(".home").hide();

    })
}
function clickNew(){
    $("#new").click(function () {
        $(".new").fadeIn("fast");
        $(".order").hide();
        $(".member").hide();
        $(".home").hide();

    })
}
function clickMember(){
    $("#member").click(function () {
        $(".member").fadeIn("fast");
        $(".order").hide();
        $(".new").hide();
        $(".home").hide();

    })
}
//Show time
function show_time() {
    var date, hour, min, sec, data;
    date = new Date();
    hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    min = date.getMinutes();
    if (min < 10) min = "0" + min;
    sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    data = hour + ":" + min + ":" + sec;
    document.clock.time.value = data;
    setTimeout("show_time()", 1000);
}
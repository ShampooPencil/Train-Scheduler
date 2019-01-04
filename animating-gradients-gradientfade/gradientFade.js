function gradientFade(delay) {
    window.setInterval(function() {
        var gradientNo = $(".gradient").index($(".gradient.active")) + 1;
        gradientNo = (gradientNo == $(".gradient").length) ? (1) : (gradientNo + 1);
        $(".gradient.active").css("opacity",0);
        $(".gradient.active").removeClass("active");
        $(".gradient:nth-of-type(" + gradientNo + ")").addClass("active");
        $(".gradient.active").css("opacity",1);
    },delay);
    return true;
}

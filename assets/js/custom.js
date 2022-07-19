$("#erp-plateform").mouseover(function() {
    $("#erp-plateform").css("background-color", "#4d78eb");

    $("#h1show1").css("color", "white");
    $("#show1").show();
    $("#erp-plateform img").attr("src", "https://www.flaticon.com/svg/vstatic/svg/4208/4208352.svg?token=exp=1618659666~hmac=e2534ab9ede5952004e9a3e7d488334b")

});
$("#erp-plateform").mouseleave(function() {
    $("#erp-plateform").css("background-color", "white");
    $("#h1show1").css("color", "black");
    $("#show1").hide();
    $("#erp-plateform img").attr("src", "assets/img/user.svg")

});
$("input[type='checkbox']").click(function(){
    $("body").toggleClass("BgBody");
    $(".topSection").toggleClass("topSectionDark");
    $(".cards").toggleClass("cardsDark");
    $(".cards2").toggleClass("cards2Dark");
    $("h4").toggleClass("heading1");
    $("#darkMode").toggleClass("darkModeToggle");
    $(".grayishBlue").toggleClass("grayishBlueDark");
    $("h1").toggleClass("h1Dark");
    $("h5").toggleClass("h5Dark");
    $("span").toggleClass("sliderDark");
    $(".buttomCardsNumb").toggleClass("buttomCardsNumbDark");
    $(".line").toggleClass("lineDark");
});
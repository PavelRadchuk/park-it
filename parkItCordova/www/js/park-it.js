$("#park").click(function () {
    alert("Set parking location");
});

$("#retrieve").click(function () {
    alert("Get parking location");
});
$("#gotIt").click(function () {
    $("#instructions").hide();
});
$("document").ready(init);
function onDiviceReady() {

    //load the correct stylesheet
    if(cordova.platformid == 'ios'){
        $('head').append('<link rel="stylesheet" href="css/park-it-ios.css" type="text/css" />');
        //prevents status bar from overlaying web view
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefult();
    } else {
        $('head').append('<link rel="stylesheet" herf="css/park-it-android.css" type="text/css" />');
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }
}
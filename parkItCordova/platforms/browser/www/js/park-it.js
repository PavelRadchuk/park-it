var storage;

$("document").ready(init);

$("#park").click(function () {
    setParkingLocation();
});

$("#retrieve").click(function () {
    alert("Get parking location");
    $("#instructions").slideUp();
    $("#directions").slideUp();
});

$("#gotIt").click(function () {
    $("#instructions").slideUp();
});

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
    storage = window.localStorage;
}

function onDeviceReady() {

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



function setParkingLocation() {
    navigator.geolocation.getCurrentPosition(setParkingLocationSuccess, setParkingLocationError, { enableHighAccuracy:true });
}

function setParkingLocationSuccess(position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    storage.setItem("parkedLatitude", latitude);
    storage.setItem("parkedLongitude", longitude);

    //Add statement to store the longitude
    navigator.notification.alert("Parking Location Saved. (Lat: " + latitude + ", Long: " + longitude + ")");

    //Display an alert that shows the latitude and longitude
    //use navigator.notification.alert(msg)

    showParkingLocation();
}

function setParkingLocationError(error) {
    navigator.notification.alert("Error Code: " + error.code + "\nError Message: " + error.message);
}

function showParkingLocation(){
    navigator.notification.alert("You are parked at lat: " + storage.getItem("parkedLatitude") + ", long: " + storage.getItem("parkedLongitude"));
    //hide directions and instructions

}
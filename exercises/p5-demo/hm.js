$.post("/deleterestaurant", {
    name: rest_name
}, function (data, status) {
    if (data != 'SUCCESS') {
        alert(data);
    } else {
        marker.setMap(null);
    }
});

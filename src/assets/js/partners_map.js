
var google;

function init() {
    var myLatlng = new google.maps.LatLng(20, 4);
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 2,
        // The latitude and longitude to center the map (always required)
        center: myLatlng,
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };


    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Brussels'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var latlng = new google.maps.LatLng(50.842807, 4.368082);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/markers/partner_marker.png'
            });
            new google.maps.Marker({
                position:  new google.maps.LatLng(20.043578, 5.194165),
                map: map,
                icon: 'images/markers/partner_small.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
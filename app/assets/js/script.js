$(document).ready(function () {
  var sliderContainer = $('.slider__container');
  if (sliderContainer.length > 0) {
    sliderContainer.slick({
      arrows: false,
      dots: true
    });
  }

  $('.menu-open').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('stop-scroll');
    $('.navigation').stop().fadeToggle();
  });

  var blogScroll = $('#blog-scroll');

  if (blogScroll.length > 0) {
    blogScroll.mCustomScrollbar();
  }

});

$(window).on('load scroll', function () {
  if ($(this).width() < 1199) {
    $("#blog-scroll").mCustomScrollbar("destroy");
  }
})

function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#afafaf"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f1f0ef"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#f3f0eb"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#efd9b5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "lightness": "2"
          },
          {
            "color": "#ffdea7"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "gamma": "1.00"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#ff0000"
          },
          {
            "saturation": "-100"
          },
          {
            "lightness": "29"
          }
        ]
      }
    ],
    { name: 'Styled Map' });
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 51.277641, lng: 1.0808963 },
    zoom: 15,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
    }
  });

  var marker = new google.maps.Marker({
    position: map.center,
    map: map,
    icon: 'assets/images/DayOne_pointer.png'
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

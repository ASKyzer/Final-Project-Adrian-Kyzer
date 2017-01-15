$(document).ready(function(){

// $('.menu-symbol').click(function(){
//   $('.drop-menu-items').show();
// });

//***************************************************************
// js for navbar
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

//************************************************************************
// js for menu and prices

// arrays and for loops for hair menu
var hairMenu = ["Haircuts", "Blow-dry", "Perm", "T-Section Colour", "Root-Colour", "All Over Colour", "Glaze", "Updo", "Partial Balayage", "Full Balayage", "Full Foil Highlights", "Partial Foil Highlights", "Accent Highlights", "Deep Conditioning Treatment", "Hair Extensions", "Yuko Japanese Relaxer"];
var hairPrice = ["$42 & up", "$42 & up", "$102 & up", "$37 & up", "$67 & up", "$92 & up", "$52 & up", "$102 & up", "$152 & up", "$202 & up", "$122 & up", "$102 & up", "$72 & up", "$27 & up", "Upon Consultaion", "Upon Consultation"];

for (var h = 0; h < hairMenu.length; h++) {
  $('#hair-menu-list').append('<li class="hair-list-items">' + hairMenu[h] + '</li>');
  $('#hair-prices').append('<li class="price-hair">' + hairPrice[h] + '</li>');
}
//end of hair menu entry

// arrays and for loops for nails menu
var nailsMenu = ["Manicure", "French Manicure", "Pedicure", "French Pedicure", "Pedicure with Reflexology", "Sugar House Manicure", "Sugar House Pedicure", "Healing Pedicure", "Sports Manicure", "Buff and Polish", "Acrylic Full Set", "Acrylic Fills", "Shellac Manicure", "Gel Overlay Fullset", "Gel Overlay Fill", "Nail Art"];
var nailsPrice = ["$32", "$37", "$47", "$52", "$77", "$42", "$57", "$62", "$27", "$22", "$72", "$47", "$47", "$72", "$47", "$7 & up"];

for (var n = 0; n < nailsMenu.length; n++) {
  $('#nails-menu-list').append('<li class="nails-list-items">' + nailsMenu[n] + '</li>');
  $('#nails-prices').append('<li class="price-nails">' + nailsPrice[n] + '</li>');
}
// end of nails menu entry

// arrays and for loops for makeup services
var makeupMenu = ["Application", "Lesson", "Bridal Makeup", "Lavish Lash Extension", "Air Brush Makeup"];
var semiPermMenu = ["Lip Liner", "Full Lips", "Eyebrow", "Eyeliner Upper", "Eyeliner Lower"];
var makeupPrice = ["$52", "$67", "$102", "$72 & up", "$127"];
var semiPermPrice = ["$400", "$600", "$400", "$250", "$200"];

for ( var m = 0; m < makeupMenu.length; m++) {
  $('.semi-perm-items').before('<li class="makeup=list-items">' + makeupMenu[m] + '</li>');
  $('.semi-perm-items').after('<li class="price-makeup">' + semiPermMenu[m] + '</li>');

  $('.semi-perm-price').before('<li class="makeup-list-items">' + makeupPrice[m] + '</li>');
  $('.semi-perm-price').after('<li class="price-makeup">' + semiPermPrice[m] + '</li>');
}
// end of makeup services entry

// arrays and for loops for skin care and facial services
var skinMenu = ["European Deep Cleansing Facial (50 min)", "Organic Facial (50 min)", "Organic Anti-Aging Facial (65 min)", "Glycolic Facial (50 min)", "Vitamin C Facial (50 min)", " Oxygenating Facial (50 min)", "Gentlemen's Facial (50 min)", "Acne Treatment", "Back Facial (45 min)", "Eyebrwo Tint", "Eyelash Tint", "HydraFacial: Face Only (45 min)", "Hydra Facial: Face & Neck (45 min)", "HydraFacial: Face, Neck & Decollate (60 min)"];
var skinPrice = ["$97", "$117", "$147", "$127", "$122", "$142", "$97", "$77", "$77", "$17", "$32", "$127", "$152", "$177"];

for (s = 0; s < skinMenu.length; s++) {
  $('#skin-menu-list').append('<li class="skin-list-items">' + skinMenu[s] + '</li>');
  $('#skin-prices').append('<li class="price-skin">' + skinPrice[s] + '</li>');
}
// end of skin care and facial services

// arrays and for loops for masssages and body treatments services
var bodyMenu = ["Swedish Massage (50 min)", "Swedish Massage (80 min)", "Aromatherapy Massage (50 min)", "Aromatherapy Massage (80 min)", "Deep Tissue Massage (50 min)", "Deep Tissue Massage (80 min)", "Pregnanacy Massage (50 min)", "Pregnanacy Massage (80 min)", "Hot Stone Massage (75 min)", "Special Knead Massage (20 min)", "Reflexology (50 min)", "Sugar House Scrub (50 min)", "Organic Chocolate Therapy (75 min)", "Cellulite Treatment w/ Mei Cupping Massage"];
var bodyPrice = ["$97", "$127", "$97", "$127", "$97", "$127", "$97", "$127", "137", "$62", "$97", "$97", "$127", "$127"];

for (b = 0; b < bodyMenu.length; b++) {
  $('#body-menu-list').append('<li class="body-list-items">' + bodyMenu[b] + '</li>');
  $('#body-prices').append('<li class="price-body">' + bodyPrice[b] + '</li>');
}
// end of massages and body treatments services

// arrays and for loops for waxing services
var waxingMenu = ["Chin", "Lip", "Sideburns", "Eyebrows", "Bikini", "French Bikini", "Brazilian Bikini", "Underarms", "Half Leg", "Half Leg & Bikini", "Full Leg", "Half Arm", "Full Arm", "Shoulder", "back"];
var waxingPrice = ["$17", "$17", "$17", "$27", "$42", "$57", "$72", "$32", "$47", "$77", "$77", "$32", "$47", "$27", "$47 & up"];

for (w = 0; w < waxingMenu.length; w++) {
  $('#waxing-menu-list').append('<li class="waxing-list-items">' + waxingMenu[w] + '</li>');
  $('#waxing-prices').append('<li class="price-waxing">' + waxingPrice[w] + '</li>');
}
// end of massages and waxing services

// arrays and for loops for waxing services
var mediSpaMenu = ["Short & Sweet", "A Sweet Treat", "Gentlemen's R & R", "Slice of Heaven", "The Sweet Life"];
var mediSpaPrice = ["$176", "$196", "$221", "$273", "$480"];
var microMenu = ["Face Only", "Face with Facial", "Face & Neck", "Face & Neck with Facial", "Face, Neck & Decollete", "Face, Neck & Decollete with Facial"]
var microPrice = ["$107", "$157", "$132", "$182", "$182", "$232"];

for (w = 0; w < mediSpaMenu.length; w++) {
  $('.spa-packages-menu').after('<li class="medi-spa-list-items">' + mediSpaMenu[w] + '</li>');
  $('.spa-packages-price').after('<li class="price-medi-spa">' + mediSpaPrice[w] + '</li>');
}
for (w = 0; w < microMenu.length; w++) {
  $('.microderm-menu').after('<li class="microderm-items">' + microMenu[w] + '</li>');
  $('.microderm-price').after('<li class="price-microderm">' + microPrice[w] + '</li>');
}
// end of massages and waxing services

// js for scrolling to service after selecting it in the option menu


// external js: isotope.pkgd.js, cells-by-column.js, cells-by-row.js, fit-columns.js, horizontal.js, masonry-horizontal.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 110
  },
  cellsByRow: {
    columnWidth: 220,
    rowHeight: 220
  },
  masonryHorizontal: {
    rowHeight: 110
  },
  cellsByColumn: {
    columnWidth: 220,
    rowHeight: 220
  }
});

var isHorizontal = false;
var $window = $( window );

$('.layout-mode-button-group').on( 'click', 'button', function() {
  // adjust container sizing if layout mode is changing from vertical or horizontal
  var $this = $(this);
  var isHorizontalMode = !!$this.attr('data-is-horizontal');
  if ( isHorizontal !== isHorizontalMode ) {
    // change container size if horiz/vert change
    var containerStyle = isHorizontalMode ? {
      height: $window.height() * 0.7
    } : {
      width: 'auto'
    };
    $grid.css( containerStyle );
    isHorizontal = isHorizontalMode;
  }
  // change layout mode
  var layoutModeValue = $this.attr('data-layout-mode');
  $grid.isotope({ layoutMode: layoutModeValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// external js: isotope.pkgd.js

// init Isotope
// var $grid = $('.grid').isotope({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows'
// });
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});









}); //end of document ready

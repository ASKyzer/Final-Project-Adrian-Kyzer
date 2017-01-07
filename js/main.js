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
var hairPrice = ["42+", "42+", "102+", "37+", "67+", "92+", "52+", "102+", "152+", "202+", "122+", "102+", "72+", "27+", "Upon Consultaion", "Upon Consultation"];

for (var h = 0; h < hairMenu.length; h++) {
  $('#hair-menu-list').append('<li class="hair-list-items">' + hairMenu[h] + '</li>');
  $('#hair-prices').append('<li class="price-hair">' + hairPrice[h] + '</li>');
}
//end of hair menu entry

// arrays and for loops for nails menu
var nailsMenu = ["Manicure", "French Manicure", "Pedicure", "French Pedicure", "Pedicure with Reflexology", "Sugar House Manicure", "Sugar House Pedicure", "Healing Pedicure", "Sports Manicure", "Buff and Polish", "Acrylic Full Set", "Acrylic Fills", "Shellac Manicure", "Gel Overlay Fullset", "Gel Overlay Fill", "Nail Art"];
var nailsPrice = ["32", "37", "47", "52", "77", "42", "57", "62", "27", "22", "72", "47", "47", "72", "47", "7 & up"];

for (var n = 0; n < nailsMenu.length; n++) {
  $('#nails-menu-list').append('<li class="nails-list-items">' + nailsMenu[n] + '</li>');
  $('#nails-prices').append('<li class="price-nails">' + nailsPrice[n] + '</li>');
}
// end of nails menu entry

// arrays and for loops for makeup services
var makeupMenu = ["Application", "Lesson", "Bridal Makeup", "Lavish Lash Extension", "Air Brush Makeup"];
var semiPermMenu = ["Lip Liner", "Full Lips", "Eyebrow", "Eyeliner Upper", "Eyeliner Lower"];
var makeupPrice = ["52", "67", "102", "72 & up", "127"];
var semiPermPrice = ["400", "600", "400", "250", "200"];

for ( var m = 0; m < makeupMenu.length; m++) {
  $('.semi-perm-items').before('<li class="makeup=list-items">' + makeupMenu[m] + '</li>');
  $('.semi-perm-items').after('<li class="price-makeup">' + semiPermMenu[m] + '</li>');

  $('.semi-perm-price').before('<li class="makeup-list-items">' + makeupPrice[m] + '</li>');
  $('.semi-perm-price').after('<li class="price-makeup">' + semiPermPrice[m] + '</li>');
}
// end of makeup services entry

// arrays and for loops for skin care and facial services
var skinMenu = ["European Deep Cleansing Facial", "Organic Facial", "Organic Anti-Aging Facial", "Glycolic Facial", "Vitamin C Facial", " Oxygenating Facial", "Gentlemen's Facial", "Acne Treatment", "Back Facial", "Eyebrwo Tint", "Eyelash Tint", "HydraFacial: Face Only", "Hydra Facial: Face & Neck", "HydraFacial: Face, Neck & Decollate"];
var skinPrice = ["50 min - $97", "50 min - $117", "65 min - $147", "50 min - $127", "50 min - $122", "50 min - $142", "50 min - $97", "$77", "45 min - $77", "$17", "$32", "45 min - $127", "45 min - $152", "60 min - $177"];

for (s = 0; s < skinMenu.length; s++) {
  $('#skin-menu-list').append('<li class="skin-list-items">' + skinMenu[s] + '</li>');
  $('#skin-prices').append('<li class="price-skin">' + skinPrice[s] + '</li>');
}
// end of skin care and facial services

// arrays and for loops for masssages and body treatments services
var bodyMenu = ["Swedish Massage", "Aromatherapy Massage", "Deep Tissue Massage", "Pregnanacy Massage", "Hot Stone Massage", "Special Knead Massage", "Reflexology", "Sugar House Scrub", "Organic Chocolate Therapy", "Cellulite Treatment w/ Mei Cupping Massage"];
var bodyPrice = ["50 min - $97, 80 min - &127", "50 min - $97, 80 min $127", "50 min - $97, 80 min $127", "50 min - $97, 80 min $127", "75 min - $137", "20 min - $62", "50 min - $97", "50 min - $97", "75 min - $127", "$127"];

for (b = 0; b < bodyMenu.length; b++) {
  $('#body-menu-list').append('<li class="body-list-items">' + bodyMenu[b] + '</li>');
  $('#body-prices').append('<li class="price-body">' + bodyPrice[b] + '</li>');
}
// end of massages and body treatments services























}); //end of document ready

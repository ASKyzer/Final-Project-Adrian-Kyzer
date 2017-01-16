$(document).ready(function(){

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







});

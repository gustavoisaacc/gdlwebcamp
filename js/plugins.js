
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }

}());

// Place any jQuery/helper plugins in here.
//paralax cuenta regresiva
$('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200)
$('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200)
$('.resumen-evento li:nth-child(3) p').animateNumber({ number:3 }, 1200)
$('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500)


// cclock cuenta regresiva
$('.cuenta-regresiva').countdown('2021/05/20 00:27:00', function(e){
  $('#dia').html(e.strftime('%D'));
  $('#hr').html(e.strftime('%H'));
  $('#min').html(e.strftime('%M'));
  $('#seg').html(e.strftime('%S'));

} )
.on('finish.countdown', function(event) {
  $(this).html('This offer has expired!')
    .parent().addClass('disabled')
  });
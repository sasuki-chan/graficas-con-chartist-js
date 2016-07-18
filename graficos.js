var chart = new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [{
    name: 'Blue series',
    data: [1, 3, 2, 6, 5, 4, 5]
  } , {
    name: 'Orange series',
    data: [2, 1, 1, 0, 3, 5.5, 3.5]
  }]
}, {
  low: 0,
  axisX: {
    offset: 25,
    labelOffset: {
      y: 10
    }
  },
  axisY: {
    offset: 35,
    labelOffset: {
      x: -10,
      y: 3
    }
  }
});

var $tooltip = $('<div class="tooltip tooltip-hidden"></div>').appendTo($('.ct-chart'));
 
$(document).on('mouseenter', '.ct-point', function() {
  var seriesName = $(this).closest('.ct-series').attr('ct:series-name'),
      value = $(this).attr('ct:value');
  
  $tooltip.text(seriesName + ': ' + value);
  $tooltip.removeClass('tooltip-hidden');
});

$(document).on('mouseleave', '.ct-point', function() {
  $tooltip.addClass('tooltip-hidden');
});

$(document).on('mousemove', '.ct-point', function(event) {
  console.log(event);
  $tooltip.css({
    left: (event.pageX) - $tooltip.width() / 2,
    top: (event.pageY) - $tooltip.height() - 20
  });
});

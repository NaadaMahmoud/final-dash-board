$(document).ready(function() {


  barChart();
  lineChart();


  $(window).resize(function() {
    window.barChart.redraw();
    window.lineChart.redraw();

  });
  });


  function test () {

    window.barChart.redraw();
    window.lineChart.redraw();
      };


  $(document).ready(function(){
    $("#mariam").click(test);
  });



  function barChart() {
  window.barChart = Morris.Bar({
    element: 'bar-chart',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    barColors:['#667eeb',' #774ba2 '],
    lineWidth: '3px',
    resize: true,
    redraw: true
  });
  }

  function lineChart() {
  window.lineChart = Morris.Line({
    element: 'line-chart',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    lineColors: ['#667eeb',' #774ba2 '],
    lineWidth: '3px',
    resize: true,
    redraw: true
  });
  }

$(function() {
  $("label.btn").change(function() {
      activated = $("label.active").children();
      if(activated.length == 2) {
        scenario = activated[1].id;
        $('#graph').attr('src', 'images/' + scenario + '_' + activated[0].id + '.png');
        $('.noss').removeClass('noss-highlighted')
        $('.ss').removeClass('ss-highlighted')
        $('.ss-bp').removeClass('ss-bp-highlighted')
        $('.ss-bh').removeClass('ss-bh-highlighted')
        $('.ss-bb').removeClass('ss-bb-highlighted')
        $('.pg').removeClass('pg-highlighted')
        $('.'+ scenario).addClass(scenario + '-highlighted');
      }
  });
})


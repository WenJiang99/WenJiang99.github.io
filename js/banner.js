$(
  $.ajax({
    url: 'http://www.wenjiang.info:7001/banner',
    success: function (res) {
      $('.bg-cover').css('background-image', `url(${res && res.data && res.data.path})`);
    }
  })
)
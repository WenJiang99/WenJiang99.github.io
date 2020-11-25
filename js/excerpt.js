$(
  $.ajax({
    url: 'http://www.wenjiang.info:7001/excerpt',
    success: function (res) {
      document.getElementById('custom-dream-title').innerText = res && res.data && res.data.title;
      document.getElementById('custom-dream-author').innerText = (res && res.data && res.data.author) || '';
      document.getElementById('custom-dream-content').innerText = res && res.data && res.data.text;
    }
  })
)
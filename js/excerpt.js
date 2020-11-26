// $(
//   $.ajax({
//     url: 'http://www.wenjiang.info:7001/excerpt',
//     success: function (res) {
//       document.getElementById('custom-dream-title').innerText = res && res.data && res.data.title;
//       document.getElementById('custom-dream-author').innerText = (res && res.data && res.data.author) || '';
//       document.getElementById('custom-dream-content').innerText = res && res.data && res.data.text;
//     }
//   })
// )

$(
  function () {
    const res = {
      data: {
        "title": "碎碎念",
        "text": "这是个喧嚣的世界，我从未觉得安静过。\n他的繁荣 他的昌盛，带给人们却只是更多的疲惫 更多的抱怨。\n于是我捂住双耳，不去听他的疲惫 不去听他的昌盛 不去听他的繁荣 也不去听他的抱怨。\n于是我以为我的世界安静了，只是这世上总有那么一人，哪怕她不曾对我讲过一言一语，但是我却听得到她的声音。"
      }
    };
    document.getElementById('custom-dream-title').innerText = res && res.data && res.data.title;
    document.getElementById('custom-dream-author').innerText = (res && res.data && res.data.author) || '';
    document.getElementById('custom-dream-content').innerText = res && res.data && res.data.text;
  }
)
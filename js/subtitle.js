// const getSubTitle = function (sub2, startDelay, typeSpeed, loop, backSpeed, showCursor) {
//     $.ajax({
//         url: 'http://www.wenjiang.info:7001/subtitle',
//         success: function (res) {
//             var typed = new Typed("#subtitle", {
//                 strings: [res && res.data && res.data.text, sub2],
//                 startDelay: startDelay,
//                 typeSpeed: typeSpeed,
//                 backSpeed: backSpeed,
//                 loop: loop,
//                 showCursor: showCursor
//             });
//         }
//     })
// };


const getSubTitle = function (sub2, startDelay, typeSpeed, loop, backSpeed, showCursor) {
    const res = {
        data: {
            "text": "人从悲哀中落落大方走出来就是艺术家。",
            "author": "木心"
        }
    }
    var typed = new Typed("#subtitle", {
        strings: [res && res.data && res.data.text, sub2],
        startDelay: startDelay,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        loop: loop,
        showCursor: showCursor
    });
};
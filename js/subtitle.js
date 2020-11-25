const getSubTitle = function (sub2, startDelay, typeSpeed, loop, backSpeed, showCursor) {
    $.ajax({
        url: 'http://www.wenjiang.info:7001/subtitle',
        success: function (res) {
            var typed = new Typed("#subtitle", {
                strings: [res && res.data && res.data.text, sub2],
                startDelay: startDelay,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                loop: loop,
                showCursor: showCursor
            });
        }
    })
};

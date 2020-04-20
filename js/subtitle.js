const getSubTitle = function (path,sub2,startDelay,typeSpeed,loop,backSpeed,showCursor) {
    $.ajax({
        url: path,
        success: function (data) {
            const sub1s = data;
            const sub1 = sub1s[Math.round(Math.random() * sub1s.length) % sub1s.length]
            var typed = new Typed("#subtitle", {
                strings: [sub1, sub2],
                startDelay: startDelay,
                typeSpeed:typeSpeed,
                backSpeed: backSpeed,
                loop:loop,
                showCursor: showCursor
            });
        }
    })
};

const getBanner = function (path) {
    $.ajax({
        url: path,
        success: function (data) {
            let images = data;
            const len = images.length;
            let random = Math.round(Math.random() * len);
            const item = images[random % len];
            $('.bg-cover').css('background-image', `url(${item})`);
        }
    })
};

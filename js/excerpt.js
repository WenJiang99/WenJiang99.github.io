const getExcerpt = function (path) {
    $.ajax({
        url: path,
        success: function (data) {
            const dream = data;
            const dreamLen = dream.length;
            const dreamItem = dream[Math.round(Math.random() * dreamLen) % dreamLen]
            document.getElementById('custom-dream-title').appendChild(document.createTextNode(dreamItem.title))
            document.getElementById('custom-dream-content').appendChild(document.createTextNode(dreamItem.text))
        }
    })
};

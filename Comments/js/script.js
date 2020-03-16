function render(data) {
    var html = `<div class="commentBox">
    <div class="leftPanelImg">
        <img src="https://i1367.photobucket.com/albums/r790/geomyck/Caper-small_zpstgdvfy1y.gif"
            alt="">
    </div>
        <div class="rightPanel">    
            <span>${data.name}</span>
            <div class="date">${data.date}</div>
            <p>${data.body}</p>
            </br>
            </br>
            Thanks
        </div>
        <div class="clear"></div>
    </div>`;

    $('#container').append(html);
}

$(document).ready(function () {
    
    var comment = [];

    if(!localStorage.commentData) {
        localStorage.commentData = [];
    } else {
        comment = JSON.parse(localStorage.commentData);
    }

    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
    }

    $('#addComment').click(function() {
        $(".toast").toast('show');
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val(),
        };
        comment.push(addObj);
        localStorage.commentData = JSON.stringify(comment);
        render(addObj);
        $('#name').val('');
        $('#date').val('');
        $('#bodyText').val('');
    });
});


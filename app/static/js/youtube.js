// Load YouTube Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Config
var YTPlayerSize = 1.3;
var YTVideoId = 'ejyLnUniV00';

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: 330 * YTPlayerSize,
        width: 640 * YTPlayerSize,
        videoId: YTVideoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var onPlayerReadyEvent;
function onPlayerReady(event) {
    onPlayerReadyEvent = event;
}

function onPlayerStateChange(event) {
}

$('#modal-video').on('shown.bs.modal', function () {
    if (onPlayerReadyEvent) {
        onPlayerReadyEvent.target.playVideo();
    }
});

$('#modal-video').on('hidden.bs.modal', function () {
    if (player) {
        player.stopVideo();
    }
});

function showVideo(url, i) {
    if(i == 0)
        var div = document.getElementById('videosContainer1');
    else  
        var div = document.getElementById('videosContainer2');
    div.innerHTML = ''; 

    const video = document.createElement('video');
    video.src = url;
    video.controls = true; 
    video.autoplay = true;
    video.muted = true;

    video.width = 640;
    video.height = 360;

    div.appendChild(video); 
}
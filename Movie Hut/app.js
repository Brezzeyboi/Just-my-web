// Sample video data (could be replaced with a database or API)
const videos = [
    { id: 'video1', title: 'Movie Title 1', thumbnail: 'thumbnail1.jpg', videoSrc: 'video1.mp4' },
    { id: 'video2', title: 'Movie Title 2', thumbnail: 'thumbnail2.jpg', videoSrc: 'video2.mp4' },
    { id: 'video3', title: 'Movie Title 3', thumbnail: 'thumbnail3.jpg', videoSrc: 'video3.mp4' },
];

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(query)
    );
    displayVideos(filteredVideos);
});

function displayVideos(videosList) {
    const videoListElement = document.getElementById('video-list');
    videoListElement.innerHTML = '';
    videosList.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        `;
        videoElement.onclick = () => playVideo(video.id);
        videoListElement.appendChild(videoElement);
    });
}

function playVideo(videoId) {
    const video = videos.find(v => v.id === videoId);
    if (video) {
        window.location.href = `video.html?id=${videoId}`;
    }
}

window.onload = function() {
    // If there's a query in the URL, play the corresponding video
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('id');
    if (videoId) {
        const video = videos.find(v => v.id === videoId);
        if (video) {
            document.getElementById('video-player').src = video.videoSrc;
            document.querySelector('.video-player h2').textContent = video.title;
            document.querySelector('.video-player p').textContent = `Description for ${video.title}`;
        }
    } else {
        displayVideos(videos);
    }
};

// On page load, fetch the username from localStorage
window.onload = function () {
    const userName = localStorage.getItem("userName"); // Retrieve username from localStorage

    if (userName) {
        // If the user is logged in, display their name
        document.getElementById("user-name").textContent = `Welcome, ${userName}`;
    } else {
        // If no user is logged in, display "Guest"
        document.getElementById("user-name").textContent = "Welcome, Guest";
    }
};

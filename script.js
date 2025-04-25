window.addEventListener('load', function () {
    const audio = document.querySelector('#audioPlayer');
    const volumeSlider = document.querySelector('#volumeSlider');

    // Set initial volume (default to 50%)
    audio.volume = volumeSlider.value || 0.5;
    volumeSlider.value = audio.volume;

    // Start playing the audio muted first (to bypass autoplay restrictions)
    audio.muted = true;
    audio.play()
        .then(() => {
            // Unmute after playback starts
            audio.muted = false;
        })
        .catch(function (error) {
            console.warn('Autoplay blocked by the browser. User interaction required:', error);
        });

    // Update the volume when the slider changes
    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });
});


const userId = '828224764086452224';
        const avatarHash = '0a22b7916a5303e251e219b266b89dc6';

        // Construct the avatar URL
        const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;

        // Set the avatar URL to the image
        document.getElementById('discordAvatar').src = avatarUrl;

        // Set the alt attribute to the user's Discord tag
        document.getElementById('discordUsername').alt = 'Discord User#0000';

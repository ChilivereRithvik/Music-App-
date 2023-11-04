const music = document.querySelector('audio');
const img = document.querySelector('img')
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const repeat = document.getElementById('repeat');
const Queue = document.getElementById('Queue');
const currentTime = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const menuBar = document.getElementById('menu');
const showMenu = document.getElementById('show');
const volumeSlider = document.getElementById("volumeSlider");
const timer = document.getElementById('timer');


let menu1 = false;
music.volume = 1;

//controlling the default music by autoplay
window.addEventListener('load', () => {
    pauseMusic();
});

//volume contolling
volumeSlider.addEventListener("input", function () {
    music.volume = parseFloat(volumeSlider.value);
});
music.addEventListener("volumechange", function () {
    volumeSlider.value = audio.volume;
});

//time of the song controlling
function updateTimer(currentTime, duration) {
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    const currentTimeString = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    const durationTimeString = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

    timer.textContent = `${currentTimeString} / ${durationTimeString}`;
}

music.addEventListener('timeupdate', () => {
    const currentTime = music.currentTime;
    const duration = music.duration;

    if (!isNaN(currentTime) && !isNaN(duration)) {
        updateTimer(currentTime, duration);
    }
});


//updating or changing play and pause icons
menuBar.addEventListener('click', () => {

    if (menu1) {
        menuBar.classList.replace('fa-bars', 'fa-xmark');
        menu1 = false;
        debugger;
        showMenu.style.display = 'block';

    } else {
        menuBar.classList.replace('fa-xmark', 'fa-bars');
        menu1 = true;
        showMenu.style.display = 'none';
    }
})



const songs = [
    {
        name: 'Alone',
        title: "Alone",
        artist: "Alan Walker",
        source: 'My-Music/music/Alone.mp4',
        image: 'My-Music/images/Alan-Walker.png'

    },
    {
        name: 'Believer',
        title: "Believer",
        artist: "Imagine Dragons",
        source: 'My-Music/music/Believer.mp4',
        image: 'My-Music/images/Believers.jpeg'

    },
    {
        name: 'Cloder',
        title: "Closer",
        artist: "The Chainsmokers",
        source: 'My-Music/music/Closer.mp4',
        image: 'My-Music/images/Closer.jpeg'

    },
    {
        name: 'Darksider',
        title: "DARKSIDE",
        artist: "Neoni",
        source: 'My-Music/music/DARKSIDE.mp4',
        image: 'My-Music/images/DARKSIDE.jpg'

    },
    {
        name: 'The Drum',
        title: "THE DRUM",
        artist: "Alan Walker",
        source: 'My-Music/music/The Drum.mp4',
        image: 'My-Music/images/The Drum.jpg'

    },
    {
        name: 'The Spactre',
        title: "THE SPACTRE",
        artist: "Alan Walker",
        source: 'My-Music/music/The Spactre.mp4',
        image: 'My-Music/images/The Drum.jpg'

    },
    {
        name: 'Thunder',
        title: "THUNDER",
        artist: "Alan Walker",
        source: 'My-Music/music/Thunder.mp4',
        image: 'My-Music/images/Believers.jpeg'

    },
    {
        name: 'Faded',
        title: "FADED",
        artist: "Alan Walker",
        source: 'My-Music/music/Faded.mp4',
        image: 'My-Music/images/Faded.jpg'

    }
]


let isPlaying = false;
//for play
const playMusic = () => {
    isPlaying = true;
    music.play();

    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
};

//for pause
const pauseMusic = () => {
    isPlaying = false;
    music.pause();

    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();

    } else {
        playMusic();

    }
});

//changing music data
const lodeSong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    // music.src = "music/" + songs.name + ".mp4";
    music.src = song.source;
    console.log(music.src);
    // img.src = "images/" + song.name + "jpg";
    img.src = song.image;

};


songsIndex = 0;

const nextSong = () => {
    songsIndex = (songsIndex + 1) % songs.length
    lodeSong(songs[songsIndex]);
    playMusic();

};
const prevSong = () => {
    songsIndex = (songsIndex - 1 + songs.length) % songs.length;
    lodeSong(songs[songsIndex]);
    playMusic();

};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

isRepeat = false;
const repeatMusic = () => {
    isRepeat = !isRepeat;
    if (isRepeat) {
        repeat.classList.replace('fa-repeat', 'fa-arrow-rotate-right');
        music.loop = true;

    } else {
        repeat.classList.replace('fa-arrow-rotate-right', 'fa-repeat');
        music.loop = false;
    }
};

repeat.addEventListener('click', repeatMusic);

const queueContainer = document.getElementById('queueContainer');
let isQueueOpen = false;

const toggleQueue = () => {
    isQueueOpen = !isQueueOpen;
    if (isQueueOpen) {
        Queue.classList.replace('fa-list', 'fa-xmark');
        queueContainer.style.display = 'block';

    } else {
        Queue.classList.replace('fa-xmark', 'fa-list');
        queueContainer.style.display = 'none';
    }
};


Queue.addEventListener('click', toggleQueue);
if (music.play()) {
    setInterval(() => {
        progress.value = music.currentTime;
    }, 1000)
}

progress.onchange = function () {
    music.currentTime = progress.value;
    playMusic()

}



// Get the mode toggle element
const modeToggle = document.getElementById('mode-toggle');
// Function to toggle dark mode
function toggleDarkMode() {
    const mainDiv = document.querySelector('.main_div');
    if (modeToggle.checked) {
        mainDiv.classList.add('dark-mode');
    } else {
        mainDiv.classList.remove('dark-mode');
    }
}

// Event listener for the mode toggle
modeToggle.addEventListener('change', toggleDarkMode);

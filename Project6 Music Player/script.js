const arr = [
    {
        songName: "Garaj Garaj Jugalbandi",
        imageURL: "./images/Garaj Garaj Jugalbandi.png",
        songURL: "./songs/Garaj Garaj Jugalbandi.mp3"
    },
    {
        songName: "Kautilya (The Echo Project)",
        imageURL: "./images/Kautilya (The Echo Project).png",
        songURL: "./songs/Kautilya (The Echo Project).mp3"
    },
    {
        songName: "Shiv Shiv",
        imageURL: "./images/Shiv Shiv.png",
        songURL: "./songs/Shiv Shiv.mp3"
    },
    {
        songName: "Shiva Shiva_ Raag Adana_ Gundecha Brothers_ Dhrupad",
        imageURL: "./images/Shiva Shiva_ Raag Adana_ Gundecha Brothers_ Dhrupad.png",
        songURL: "./songs/Shiva Shiva_ Raag Adana_ Gundecha Brothers_ Dhrupad.mp3"
    },
    {
        songName: "Vinna",
        imageURL: "./images/Vinna.png",
        songURL: "./songs/Vinna.mp3"
    },
    {
        songName: "Swami D.R. Parvatikar - Raga Nayaki Kanara and Bhopali - Rudra Veena - Rudra Vina",
        imageURL: "./images/Swami D.R. Parvatikar - Raga Nayaki Kanara and Bhopali - Rudra Veena - Rudra Vina.png",
        songURL: "./songs/Swami D.R. Parvatikar - Raga Nayaki Kanara and Bhopali - Rudra Veena - Rudra Vina.mp3"
    }
];

let audio = new Audio();

let selectedSong = 0;
let posterImg = document.querySelector("#left");
let backward = document.querySelector("#backward");
let play = document.querySelector("#play");
let forward = document.querySelector("#forward");

function mainFunction() {
    let clutter = "";
    arr.forEach((element, index) => {
        clutter += `
            <div id="songCard" data-index=${index}>
                <div id="part1">
                    <img src="${element.imageURL}"
                        alt="">
                    <h2>${element.songName}</h2>
                </div>
                <h6>3:56</h6>
            </div>
        `;
    });
    document.querySelector("#allSongs").innerHTML = clutter;

    audio.src = arr[selectedSong].songURL;
    posterImg.style.backgroundImage = `url("${arr[selectedSong].imageURL}")`;
}

document.querySelector("#allSongs").addEventListener("click", function (details) {
    selectedSong = details.target.dataset.index;
    play.innerHTML = `
        <i class="ri-pause-fill"></i>
    `;
    flag = 1;
    mainFunction();
    audio.play();
});

let flag = 0;
play.addEventListener("click", function () {
    if (flag === 0) {
        play.innerHTML = `
            <i class="ri-pause-fill"></i>
        `;
        flag = 1;
        mainFunction();
        audio.play();
    } else {
        play.innerHTML = `
            <i class="ri-play-fill"></i>
        `;
        flag = 0;
        audio.pause();
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++;
        mainFunction();
        audio.play();
    } else {
        forward.style.opacity = 0.4;
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong++;
        mainFunction();
        audio.play();
    } else {
        backward.style.opacity = 0.4;
    }
})

mainFunction();
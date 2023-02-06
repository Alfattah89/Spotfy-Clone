console.log("Welcome MadaFUka");
let AudioSong = new Audio("songs/1.mp3");
let SongIndex = 0;
let SongItems = Array.from(document.getElementsByClassName("songItem"));
let SongBar = document.getElementById("proggressBar");
let MainPlayBtn = document.getElementById("masterPlay");
let MasterSongNAme = document.getElementById("masterSongName");
let GIF = document.getElementById("gif");
let AllSongs = [
  {
    SongName: "Shay Ki Jane",
    SongSrc: "songs/1.mp3",
    SongCover: "covers/1.jpg",
  },
  {
    SongName: "Tomar Jonno",
    SongSrc: "songs/2.mp3",
    SongCover: "covers/2.jpg",
  },
  {
    SongName: "We Don't Talk",
    SongSrc: "songs/3.mp3",
    SongCover: "covers/3.jpg",
  },
  {
    SongName: "Perfect",
    SongSrc: "songs/4.mp3",
    SongCover: "covers/4.jpg",
  },
  {
    SongName: "Let Me",
    SongSrc: "songs/5.mp3",
    SongCover: "covers/5.jpg",
  },
  {
    SongName: "Srotoshini",
    SongSrc: "songs/6.mp3",
    SongCover: "covers/6.jpg",
  },
  {
    SongName: "Zara Sa",
    SongSrc: "songs/7.mp3",
    SongCover: "covers/7.jpg",
  },
  {
    SongName: "Be The One",
    SongSrc: "songs/8.mp3",
    SongCover: "covers/8.jpg",
  },
  {
    SongName: "Nai Lagda",
    SongSrc: "songs/9.mp3",
    SongCover: "covers/9.jpg",
  },
  {
    SongName: "Lovely",
    SongSrc: "songs/10.mp3",
    SongCover: "covers/10.jpg",
  },
];
SongItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = AllSongs[i].SongCover;
  element.getElementsByClassName("songName")[0].innerHTML =
    AllSongs[i].SongName;
});

MainPlayBtn.addEventListener("click", () => {
  if (AudioSong.paused || AudioSong.currentTime <= 0) {
    AudioSong.play();
    MainPlayBtn.classList.remove("fa-circle-play");
    MainPlayBtn.classList.add("fa-circle-pause");
    GIF.style.opacity = "1";
  } else {
    AudioSong.pause();
    MainPlayBtn.classList.add("fa-circle-play");
    MainPlayBtn.classList.remove("fa-circle-pause");
    GIF.style.opacity = "0";
  }
});

AudioSong.addEventListener("timeupdate", () => {
  progress = (AudioSong.currentTime / AudioSong.duration) * 100;
  SongBar.value = progress;
});

SongBar.addEventListener("change", () => {
  AudioSong.currentTime = (SongBar.value * AudioSong.duration) / 100;
});

const makeAllplay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplay();
      SongIndex = parseInt(e.target.id);
      e.target.classList.add("fa-circle-pause");
      e.target.classList.remove("fa-circle-play");
      AudioSong.src = `songs/${SongIndex + 1}.mp3`;
      MasterSongNAme.innerHTML = AllSongs[SongIndex].SongName;
      AudioSong.currentTime = 0;
      AudioSong.play();
      GIF.style.opacity = "1";
      MainPlayBtn.classList.add("fa-circle-pause");
      MainPlayBtn.classList.remove("fa-circle-play");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (SongIndex >= 9) {
    SongIndex = 0;
  } else {
    SongIndex += 1;
  }
  AudioSong.src = `songs/${SongIndex + 1}.mp3`;
  MasterSongNAme.innerHTML = AllSongs[SongIndex].SongName;
  AudioSong.currentTime = 0;
  AudioSong.play();
  GIF.style.opacity = "1";
  MainPlayBtn.classList.add("fa-circle-pause");
  MainPlayBtn.classList.remove("fa-circle-play");
});

document.getElementById("previous").addEventListener("click", () => {
    if (SongIndex <=0) {
      SongIndex = 0;
    } else {
      SongIndex -= 1;
    }
    AudioSong.src = `songs/${SongIndex + 1}.mp3`;
    MasterSongNAme.innerHTML = AllSongs[SongIndex].SongName;
    AudioSong.currentTime = 0;
    AudioSong.play();
    GIF.style.opacity = "1";
    MainPlayBtn.classList.add("fa-circle-pause");
    MainPlayBtn.classList.remove("fa-circle-play");
  });

var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const firstDiv = document.getElementById("my-div");
const olFirstDiv = document.createElement("ol");
firstDiv.appendChild(olFirstDiv);

const newPlayList = playList.map((item) => {
  return `author: ` + item.author + " song: " + item.song;
});

for (let i = 0; i < playList.length; i++) {
  const liUl = document.createElement("li");
  olFirstDiv.appendChild(liUl);
  liUl.innerHTML = newPlayList[i];
}

const btn = document.getElementById("btn");
const idDiv1 = document.getElementById("idDiv1");
const idDiv2 = document.getElementById("idDiv2");
const idDiv3 = document.getElementById("idDiv3");
let clicks = 0;
btn.addEventListener("click", () => {
  clicks = clicks + 1;
  if (clicks === 1) {
   idDiv3.style.backgroundColor = 'gray';
   idDiv1.style.backgroundColor = 'red';
  } else if (clicks === 2) {
   idDiv1.style.backgroundColor = 'gray';
   idDiv2.style.backgroundColor = 'yellow';
  } else if (clicks === 3) {
   idDiv2.style.backgroundColor = 'gray';
   idDiv3.style.backgroundColor = 'green';
       clicks = 0;
  }
});

let videoData = {
  videos: [
    
    {
      url: "https://cloud-e0gqtghip-hack-club-bot.vercel.app/0sky_diving.mp4",
      name: "Sky Diving",
      description:
        "Experience the thrill of skydiving from a bird's eye view, showcasing the breathtaking landscapes from thousands of feet in the air.",
      thumbnail: "assets/Sky_Diving_thumbnail",
      creator: "John Smith",
    },
    {
      url: "https://cloud-g3wkimcgs-hack-club-bot.vercel.app/0eagle_view.mp4",
      name: "Eagle View",
      description:
        "Soar through the skies with the majestic eagle, offering a unique perspective of landscapes from above.",
      thumbnail: "assets/Eagle_View_thumbnail",
      creator: "Alice Johnson",
    },
    {
      url: "https://cloud-jt2k6iibz-hack-club-bot.vercel.app/0st_stephens_cathedral.mp4",
      name: "St. Stephen's Cathedral",
      description:
        "A visual tour of the stunning St. Stephen's Cathedral in Vienna, a masterpiece of Gothic architecture.",
      thumbnail: "assets/St_Stephens_Cathedral_thumbnail",
      creator: "Mark Lee",
    },
    {
      url: "https://cloud-gpq91fpka-hack-club-bot.vercel.app/0charles_bridge.mp4",
      name: "Charles Bridge",
      description:
        "A walk across the historic Charles Bridge in Prague, exploring its rich history and beautiful architecture.",
      thumbnail: "assets/Charles_Bridge_thumbnail",
      creator: "Sara Kim",
    },
    {
      url: "https://cloud-qq456chyj-hack-club-bot.vercel.app/0jama_masjid.mp4",
      name: "Jama Masjid",
      description:
        "A detailed tour of the iconic Jama Masjid, one of the largest and most beautiful mosques in India, located in Delhi.",
      thumbnail: "assets/Jama_Masjid_thumbnail",
      creator: "Jane Doe",
    }
  ],
};

let container = document.getElementById("video-container");
let background = document.querySelector(".background");

videoData.videos.forEach((video) => {
  let cardHtml = `
  <div class="video-card" data-name="${video.name}" data-url="${video.url}">
    <div class="video-profile">
      <img src="${video.thumbnail}.png" alt="${video.name}" />
    </div>
    <div class="video-info">
      <div class="name">${video.name}</div>
      <div class="description">${video.description}</div>
    </div>
  </div>
  `;
  container.insertAdjacentHTML("beforeend", cardHtml);
});
let cards = document.querySelectorAll(".video-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    let videoName = card.querySelector(".video-profile img").alt;
    console.log(videoName);
    let video = videoData.videos.find((v) => v.name === videoName);
    console.log(video);
    if (video) {
      console.log(video.thumbnail);
      background.style.background = `url(${video.thumbnail}.png)`;
    }
  });
  card.addEventListener("mouseleave", () => {
    background.style.background = `url('logo.png')`;
  });
});
cards.forEach((card) => {
  card.addEventListener("click", () => {
    let name = card.getAttribute("data-name");
    let url = card.getAttribute("data-url");
    console.log("card clicked", name);
    console.log(url);
    window.location.href = `video.html?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`;
  });
});

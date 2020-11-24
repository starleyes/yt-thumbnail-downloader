const app = document.getElementById("app");

function submit() {
  app.innerHTML = null;
  let yturl = document.getElementById("yturl").value;
  let ytu = yturl.substring(yturl.length - 11);
  const img = document.createElement("img");
  let imgsrc = "https://img.youtube.com/vi/" + ytu + "/maxresdefault.jpg"
  img.setAttribute("src", imgsrc);
  app.appendChild(img);
}
function drawViz(data, config) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const row = data.tables.DEFAULT[0];
  const imageUrl = row["image_url"];

  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.width = "100%";
  container.appendChild(img);
}

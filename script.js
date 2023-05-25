//your code here
const bands = ["The Rolling Stones", "Pink Floyd", "The Beatles", "Led Zeppelin", "Nirvana"];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

const ul = document.querySelector("#bands");
sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});

// Return the sorted band names without articles
sortedBands;

const bands = ["The Rolling Stones", "Pink Floyd", "The Beatles", "Led Zeppelin", "Nirvana"];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

// Return the sorted band names without articles
sortedBands;
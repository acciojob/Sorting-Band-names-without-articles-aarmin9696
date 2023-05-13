//your code here

let bandNames = ["The Beatles", "Led Zeppelin", "The Rolling Stones", "Pink Floyd", "The Who", "Radiohead", "Aerosmith", "The Beach Boys", "The Doors", "Queen"];

let cleanBandNames = bandNames.map(name => name.replace(/^(a |an |the )/i, ''))
                              .sort();

let ulTag = document.getElementById('band');
ulTag.innerHTML = cleanBandNames.map(name => `<li>${name}</li>`).join('');

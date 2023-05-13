//your code here

let bandNames = ["The Beatles", "Led Zeppelin", "The Rolling Stones", "Pink Floyd", "The Who", "Radiohead", "Aerosmith", "The Beach Boys", "The Doors", "Queen"];

// Remove articles 'a', 'an', 'the' from band names
let cleanBandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

// Sort the clean band names in lexicographic order
cleanBandNames.sort();

// Create a list of li tags for each band name
let listItems = cleanBandNames.map(name => `<li>${name}</li>`);

// Add the list items to the ul tag with id='band'
let ulTag = document.getElementById('band');
ulTag.innerHTML = listItems.join('');

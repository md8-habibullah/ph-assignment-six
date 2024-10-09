console.log(12345);

let urlCate = "https://openapi.programming-hero.com/api/peddy/categories";

function categoryTab() {
  fetch(urlCate)
    .then(response => response.json())
    .then(data => catBack(data.categories[0])) // Removed space before parentheses
    .catch(error => console.log(error));
}

function catBack(categoryTab) { // Added semicolon
  const xyz = category;
  categoryTab.forEach(categoryTab => {
    
  });
  console.log(xyz);
  const btn1 = document.createElement("button")
  
}

category();
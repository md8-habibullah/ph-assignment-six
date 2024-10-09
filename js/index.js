let url1 = "https://openapi.programming-hero.com/api/peddy/categories"




const catagortFun = () => {
  fetch(url1)
  .then (response => response.json())
  .then (data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
  // console.log(categories)
  const categorynm = document.getElementById("category-name")
  categories.forEach(petCategory => {
    // console.log(petCategory)
    const button = document.createElement("button")
    button.classList = "btn btn-accent"
    button.innerText = petCategory.category
    categorynm.append(button)
  }
);
}

catagortFun()
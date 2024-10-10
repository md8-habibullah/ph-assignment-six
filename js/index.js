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
    const icon = document.createElement("img")
    icon.src = petCategory.category_icon

    button.classList = "btn text-3xl my-4"

    // button.innerHTML = petCategory.category_icon
    button.innerText = petCategory.category
    button.appendChild(icon)

    categorynm.appendChild(button)
  }
);
}

catagortFun()



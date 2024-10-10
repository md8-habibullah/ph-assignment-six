let url1 = "https://openapi.programming-hero.com/api/peddy/categories"




const catagortFun = () => {
  fetch(url1)
  .then (response => response.json())
  .then (data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
  // console.log(categories)
  const categorynm = document.getElementById("category-name")

  // for eatch lllllllllloooooooooooooppppppppppppeeeeeeeee

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


// setTimeout(() => {
//     document.getElementById("my_modal_adopt").close();
// }, 3000);






// fetch all pets data vai api
// https://openapi.programming-hero.com/api/peddy/pets

let petsUrl = "https://openapi.programming-hero.com/api/peddy/pets"



const allPets = () => {
  fetch(petsUrl)
  .then (response => response.json())
  .then (data => displayAllPets(data.pets))
  .catch (error => console.log("Somthing is error: ", error))
}

const displayAllPets = (petsItem) => {
  console.log(petsItem)
  petsItem.forEach = (singalPet) => {
    console.log(singalPet)

    const carderBap = document.getElementById("carder-bap")
    const cards = document.createElement("div")
    cards.classList = "bg-gray-200 w-72 m-3 rounded-xl"

    cards.innerHTML = `

    `

    carderBap.appendChild(cards)

  }
}



displayAllPets()

// allPets()
// // carder bap setup here now  =>>>>>>>>>>>>>>>>>>>>>>>>>



// const carderBap = document.getElementById("carder-bap")
// const cards = document.createElement("div")
// cards.classList = "bg-gray-200 w-72 m-3 rounded-xl"

// cards.innerHTML = ` 
//                 <figure>
//                   <img
//                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                     alt="" />
//                 </figure>
//                 <div class="card-body">
//                   <h2 class="card-title">Mister Tartosh</h2>
//                   <div class="space-y-1">
//                     <!-- for iconsssssssssssss -->
//                      <div class="flex justify-start">
//                       <img src="./add-img/grid.png" alt="" class="w-5 mr-2">
//                       <h3 class="font-bold">Breed</h3>
//                       <h5 class="mx-2 font-bold">:</h5>
//                       <h4 class="font-bold">Golder retriver</h4>
//                      </div>
//                      <div class="flex justify-start">
//                       <img src="./add-img/calendar.png" alt="" class="w-5 mr-2">
//                       <h3 class="font-bold">Birth</h3>
//                       <h5 class="mx-2 font-bold">:</h5>
//                       <h4 class="font-bold">2024</h4>
//                      </div>                   
//                      <div class="flex justify-start">
//                       <img src="./add-img/gender.png" alt="" class="w-5 mr-2">
//                       <h3 class="font-bold">Gender</h3>
//                       <h5 class="mx-2 font-bold">:</h5>
//                       <h4 class="font-bold">Female</h4>
//                      </div>                   
//                      <div class="flex justify-start">
//                       <img src="./add-img/dollar.png" alt="" class="w-5 mr-2">
//                       <h3 class="font-bold">Price</h3>
//                       <h5 class="mx-2 font-bold">:</h5>
//                       <h4 class="font-bold">199$</h4>
//                      </div>                
//                     </div>
//                   <div class="flex justify-between px-4">
//                     <button>
//                       <img src="./add-img/like.png" class="w-7"">
//                     </button>
//                     <div>
//                       <!-- Open the modal using ID.showModal() method -->
//                       <button id="my_modal_adopt" class="btn btn-accent" onclick="my_modal_1.showModal()">Adopt</button>
//                       <dialog id="my_modal_1" class="modal">
//                         <div class="modal-box">
//                           <h3 class="text-4xl items-center font-bold">Congrarualtion
//                           </h3>
//                           <h2 class="py-4 text-xl">Adoption process is start for your pet
//                         </h2>
//                           <div class="modal-action">
//                             <form method="dialog">
//                               <!-- if there is a button in form, it will close the modal -->
//                               <button class="btn">Close</button>
//                             </form>
//                           </div>
//                         </div>
//                       </dialog>
//                     </div>
//                     <button class="btn btn-accent">Details</button>
//                   </div> 
//                 </div> `

// carderBap.appendChild(cards)






































// <div class="bg-gray-200 w-72 m-3 rounded-xl">
// <figure>
//   <img
//     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//     alt="" />
// </figure>
// <div class="card-body">
//   <h2 class="card-title">Mister Tartosh</h2>
//   <div class="space-y-1">
//     <!-- for iconsssssssssssss -->
//      <div class="flex justify-start">
//       <img src="./add-img/grid.png" alt="" class="w-5 mr-2">
//       <h3 class="font-bold">Breed</h3>
//       <h5 class="mx-2 font-bold">:</h5>
//       <h4 class="font-bold">Golder retriver</h4>
//      </div>
//      <div class="flex justify-start">
//       <img src="./add-img/calendar.png" alt="" class="w-5 mr-2">
//       <h3 class="font-bold">Birth</h3>
//       <h5 class="mx-2 font-bold">:</h5>
//       <h4 class="font-bold">2024</h4>
//      </div>                   
//      <div class="flex justify-start">
//       <img src="./add-img/gender.png" alt="" class="w-5 mr-2">
//       <h3 class="font-bold">Gender</h3>
//       <h5 class="mx-2 font-bold">:</h5>
//       <h4 class="font-bold">Female</h4>
//      </div>                   
//      <div class="flex justify-start">
//       <img src="./add-img/dollar.png" alt="" class="w-5 mr-2">
//       <h3 class="font-bold">Price</h3>
//       <h5 class="mx-2 font-bold">:</h5>
//       <h4 class="font-bold">199$</h4>
//      </div>                
//     </div>
//   <div class="flex justify-between px-4">
//     <button>
//       <img src="./add-img/like.png" class="w-7"">
//     </button>
//     <div>

//       <button id="my_modal_adopt" class="btn" onclick="my_modal_1.showModal()">Adopt</button>
//       <dialog id="my_modal_1" class="modal">
//         <div class="modal-box">
//           <h3 class="text-4xl items-center font-bold">Congrarualtion
//           </h3>
//           <h2 class="py-4 text-xl">Adoption process is start for your pet
//         </h2>
//           <div class="modal-action">
//             <form method="dialog">
//               <!-- if there is a button in form, it will close the modal -->
//               <button class="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//     <button class="btn btn-primary">Details</button>
//   </div>
// </div>
// </div>
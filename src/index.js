let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
const URL = "http://localhost:3000/toys";

fetch(URL)
  .then(function (res) {
    return res.json();
  })
  .then((toyArray) => toyArray.forEach((toyObj) => renderToy(toyObj)));

function renderToy(toyObj) {
  const toyDiv = document.createElement("div");
  toyDiv.className = "card";

  const toyName = document.createElement("h2");
  toyName.innerText = toyObj.name;

  const toyImg = document.createElement("img");
  toyImg.src = toyObj.image;
  toyImg.className = "toy-avatar";

  const toyLikes = document.createElement("p");
  toyLikes.innerText = "Like: " + toyObj.likes;
  // toyLikes.id = `toy-${toyObj.id}`

  const likeBtn = document.createElement("button");
  likeBtn.innerText = "❤️";
  likeBtn.addEventListener("click", () => {
    // increment objectName.likes
    ++toyObj.likes;

    toyLikes.innerText = `Like: ${toyObj.likes}`;
  });

  // put the card together
  toyDiv.append(toyName, toyImg, toyLikes, likeBtn);

  // add it to the toy-collection div
  //finding the toy collection div
  const toyCollection = document.getElementById("toy-collection");
  // appending the card to the div
  toyCollection.appendChild(toyDiv);
}
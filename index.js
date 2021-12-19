const btn = document.getElementById('btn')
const foodHolder = document.getElementById('foodHolder')
const prevDesserts = document.getElementById('prev-desserts')
btn.addEventListener('click', getDessert)

const apiUrl = 'https://foodish-api.herokuapp.com/api/images/dessert'
const dessertsArr = []

async function getDessert() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    displayDessert(data.image)
    dessertsArr.push(data.image)
    displayPrevDesserts()
  } catch (error) {
    console.log(error.message)
  }
}

function displayDessert(imgUrl) {
  const imgEl = document.createElement('img')
  imgEl.src = imgUrl
  imgEl.className = 'large-dessert-img'
  foodHolder.textContent = ''
  foodHolder.appendChild(imgEl)
}

function displayPrevDesserts() {
  console.log(dessertsArr)
  prevDesserts.textContent = ''
  dessertsArr.forEach((dessert) => {
    const imgEl = document.createElement('img')
    imgEl.src = dessert
    imgEl.className = 'prev-dessert-img'
    prevDesserts.appendChild(imgEl)
  })
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

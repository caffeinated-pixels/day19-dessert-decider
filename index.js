const btn = document.getElementById('btn')
const foodHolder = document.getElementById('foodHolder')
btn.addEventListener('click', getDessert)

const apiUrl = 'https://foodish-api.herokuapp.com/api/images/dessert'

async function getDessert() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    displayDessert(data.image)
  } catch (error) {
    console.log(error.message)
  }
}

function displayDessert(imgUrl) {
  const imgEl = document.createElement('img')
  imgEl.src = imgUrl
  foodHolder.textContent = ''
  foodHolder.appendChild(imgEl)
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

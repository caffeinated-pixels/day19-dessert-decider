# JavaScriptmas Day 19 - Dessert Decider

My effort for [Scrimba's JavaScriptmas 2021](https://scrimba.com/learn/javascriptmas2021) Day 19 challenge.

The main task was to:

- Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

I also added a container to display all previous desserts, which can be clicked on to revisit. No dessert should be displayed more than once.

The API host 36 desserts. To reduce spamming the API with sequentially calls (i.e. if it keeps returning the same images), I've limited the max number of desserts to 10. After that, pressing the button doesn't do anything!

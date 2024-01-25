
// Vazifa data olib kelish 
document.addEventListener('DOMContentLoaded', function() {
  const statsList = document.querySelector(".summary-box__stats"),
        listItem = document.createElement("li")
  const dataJson = "./data.json";
  let resData;
  fetchApp(dataJson)
  function fetchApp(dataJson) {
  fetch(dataJson)
    .then(res => res.json())
    .then(data => {
      resData = data.data;
      resData.forEach(item => {
        listItem.classList.add("stats-list__item" ,"stats-list__item--reaction")
        listItem.innerHTML = `
          <img src="${item.icon}" alt="reation" class="stats-list__item-icon" width="20" height="20" aria-hidden="true">
          <span class="stats-list__item-title">${item.category}</span>
          <span class="stats-list__item-result">${item.score}</span>
          <span class="stats-list__item-max"> / 100</span>
        `
        statsList.appendChild(listItem)
      })
    })
    .catch(err => console.log(err))
  return; 
  }
})
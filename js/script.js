const profileClick = document.querySelector('.action-profile');
const actionMenu = document.querySelector('.action-menu');



profileClick.addEventListener("click", () => {

    actionMenu.classList.toggle('active');

})
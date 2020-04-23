const register = document.getElementById('register');
const login = document.getElementById('login');
const logiRegiContainer = document.getElementById('logiRegiContainer');

register.addEventListener('click', () => {
	logiRegiContainer.classList.add("panel-active");
});

login.addEventListener('click', () => {
	logiRegiContainer.classList.remove("panel-active");
});




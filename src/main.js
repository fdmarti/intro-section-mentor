import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const hamburguerMenu = document.querySelector('.hamburguer');
const navOptions = document.querySelector('.nav-options');

hamburguerMenu.addEventListener('click', () => {
    navOptions.classList.toggle('active');
})



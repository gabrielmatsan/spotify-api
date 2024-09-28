const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const loginButton = document.getElementById('login-button'); // ID do botão de login
const sidebarLinks = document.querySelectorAll('.sidebar ul li a'); // Seleciona todos os links da sidebar
const profileSection = document.querySelector('.profile'); // Seleciona a seção do perfil
const extraOption = document.querySelector('.extra-option'); // Seleciona a opção extra

let isLoggedIn = false; // Variável para controlar o estado de login

toggleButton.addEventListener('click', () => {
    // Alterna entre as classes 'dark-mode' e 'light-mode'
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Ajusta o texto do botão de acordo com o tema atual
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});

// Adiciona evento de clique para o botão de login
loginButton.addEventListener('click', () => {
    isLoggedIn = true; // Atualiza o estado para logado
    loginButton.style.display = 'none'; // Oculta o botão de login
    profileSection.classList.remove('hidden'); // Mostra a seção do perfil
    extraOption.classList.remove('hidden'); // Mostra a opção extra
});

// Adiciona evento de clique para os links da sidebar
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        if (!isLoggedIn) {
            event.preventDefault(); // Impede o clique se não estiver logado
            alert('Você precisa fazer login antes de acessar esta opção.'); // Alerta de login
        }
    });
});

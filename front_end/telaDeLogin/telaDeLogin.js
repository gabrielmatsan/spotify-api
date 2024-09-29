// Array para armazenar os usuários
const users = [
    { username: 'admin', password: '1234' },
    { username: 'felps', password: 'senha123' },
    { username: 'user', password: 'pass' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos de username e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Função para verificar se o usuário e a senha existem na array
    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        alert('Login bem-sucedido!');
    } else {
        alert('Login falhou! Verifique seu username e senha.');
    }
});

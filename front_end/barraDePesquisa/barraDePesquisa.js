document.getElementById('searchBar').addEventListener('keyup', function(event) {
    // Verifica se o usuário pressionou "Enter"
    if (event.key === 'Enter') {
        var inputText = this.value.toLowerCase();

        // Esconder todas as divs de resultados
        document.getElementById('music1').style.display = 'none';
        document.getElementById('music2').style.display = 'none';
        document.getElementById('music3').style.display = 'none';

        // Exibir a div correspondente ao texto digitado
        if (inputText === "nirvana") {
            document.getElementById('music1').style.display = 'flex';
        } else if (inputText === "michael jackson" || inputText === "michael") {
            document.getElementById('music2').style.display = 'flex';
        } else if (inputText === "jazz") {
            document.getElementById('music3').style.display = 'flex';
        } else if (inputText === "all" || inputText === "") {
            document.getElementById('music1').style.display = 'flex';
            document.getElementById('music2').style.display = 'flex';
            document.getElementById('music3').style.display = 'flex';
        }        
        else {
            alert('Música não encontrada');
        }
    }
});

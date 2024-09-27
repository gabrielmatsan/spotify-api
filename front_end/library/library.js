function dropdown(){
    document.getElementById("drop-content").classList.toggle("show");
  
    if(document.getElementById('drop-content').innerHTML === null || document.getElementById('drop-content').innerHTML.trim() === ""){
      nothing = document.createElement('ul');
      nothing.textContent = "Não há nenhuma playlist...";
      nothing.className = 'nothing-list';
      list = document.getElementById('drop-content');
      list.appendChild(nothing);
    }
    
  }

contador = 0;
function adicionarPlaylist(){
 
  input = prompt("Insira o nome da playlist");


  if (input == null) {
    alert("Por favor, insira um nome.");
    return;
} else if(input == ""){
  alert("Por favor, insira um nome.");
  return;
}

  list = document.getElementById('drop-content');
  novaPlay = document.createElement('ul');
  novaPlay.className = 'play-list';
  
  novaPlay.textContent = input;
  
  list.appendChild(novaPlay);
  input.value = "";

if(contador == 0){
  nothing = document.getElementById('drop-content');
  
  nothing.removeChild(nothing.children[0]);
  contador = 1;
}else{
  //:3
}

}
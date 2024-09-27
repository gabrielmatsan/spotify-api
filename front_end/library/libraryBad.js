function dropdown(){
    document.getElementById("drop-content").classList.toggle("show");
  
    if(document.getElementById('drop-content').innerHTML === null || document.getElementById('drop-content').innerHTML.trim() === ""){
      nothing = document.createElement('ul');
      nothing.textContent = "Crie uma conta para criar playlists";
      nothing.className = 'nothing-list';
      list = document.getElementById('drop-content');
      list.appendChild(nothing);
    }
    
  }

contador = 0;
function adicionarPlaylist(){
 
  alert("Para criar uma playlist, faça login");

}
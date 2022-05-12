let area = document.getElementById('area') 

area.addEventListener('click',clicar)
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout',sair)

function clicar(){
    area.innerText = 'clicou'
    area.style.background = 'rgb(0, 20, 20)'
}
function entrar(){
   area.innerText = 'entrou'
   area.style.background = 'rgb(0, 90, 60)'
}
function sair(){
    area.innerText = 'saiu'
    area.style.background = 'rgb(20, 10, 50)'  
}
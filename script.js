const contenidorRecompenses = document.getElementById('contenidor-recompenses');

async function mostrarllista(){
    const resposta = await fetch('https://onepieceapi.com/api/characters?page=1?limit=10');
    const dades = await resposta.json();
    for(const personatges of dades){
        const nom = document.createElement('li');
        nom.textContent= dades.name.en;
        const imatge = document.createElement('img');
        imatge.src = dades.image_url;
        const bounties = document.create
    }
}
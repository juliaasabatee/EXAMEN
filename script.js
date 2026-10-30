const contenidorRecompenses = document.getElementById('contenidor-recompenses');
const contenidorLlista = document.getElementById('contenidor-llista');
const botoAnterior = document.getElementById('boto-endarrere');
const botoSeguent = document.getElementById('boto-endavant');


async function mostrarllista(){
    const resposta = await fetch('https://bn9ct5dd-3000.uks1.devtunnels.ms/');
    const dades = await resposta.json();
    for(const personatges of dades){
        const nom = document.createElement('li');
        nom.textContent= personatges.name.en;
        const imatge = document.createElement('img');
        const respostaIm = await fetch('https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/pandora.webp')
        const imatge = await respostaIm.json();
        imatge.src = personatges.image_url;
        const bounties = document.createElement('li');
        bounties.textContent = personatges.bounties[1];
    }
    botoAnterior.addEventListener('click', ()=> {
    const resposta = await fetch('https://bn9ct5dd-3000.uks1.devtunnels.ms/');
    const dades = await resposta.json();
    for(const personatges of dades){
        const nom = document.createElement('li');
        nom.textContent= personatges.name.en;
        const imatge = document.createElement('img');
        imatge.src = personatges.image_url;
        const bounties = document.createElement('li');
        bounties.textContent = personatges.bounties[1];
    }

    })
    nom.appendChild(contenidorLlista);
    imatge.appendChild(contenidorLlista);
    bounties.appendChild(contenidorLlista);

}
mostrarllista();
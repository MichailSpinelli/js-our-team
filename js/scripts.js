/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
Consigli del giorno:
*/

const team = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', image: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', image: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', image: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg'},		         
];

const container = document.querySelector('.container');

let dati = '';

team.forEach ((element)  => {
    dati += `il nome è  ${element.name} il ruolo è  ${element.role}, ${element.image}`;
});

document.getElementById('persone').innerHTML = dati;



/** MILESTONE 1
Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach
 */

console.log("js-oggetti-studenti")
const studenti = [
    {
        nome: "Alessandro",
        cognome: "Leanza",
        età: 32
    },
    {
        nome: "Riccardo",
        cognome: "Marino",
        età: 26
    },
    {
        nome: "Luca",
        cognome: "Cannavò",
        età: 21
    },
    {
        nome: "Luigi",
        cognome: "Mirabella",
        età: 38
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        età: 35
    }
]

// for (let i = 0; i < studenti.length; i++) {
//     currentStudent = studenti[i]
//     const nome = currentStudent.nome
//     const cognome = currentStudent.cognome
//     console.log(nome, cognome)
// }
studenti.forEach(function (studente) {
    console.log(studente.nome, studente.cognome)
})


/** MILESTONE 2
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età.
Aggiungere il nuovo studente all’array di studenti
Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach
 */

const nome = prompt("Inserisci il nome del nuovo oggetto studente:")
const cognome = prompt(`Inserisci il cognome di ${nome}:`)
const età = parseInt(prompt(`Inserisci l'età di ${nome} ${cognome}:`))
const nuovoStudente = {
    nome: nome,
    cognome: cognome,
    età: età
}
console.log(nuovoStudente);
studenti.push(nuovoStudente)
console.log(studenti);
// for (let i = 0; i < studenti.length; i++) {
//     currentStudent = studenti[i]
//     const nome = currentStudent.nome
//     const cognome = currentStudent.cognome
//     const età = currentStudent.età
//     console.log(nome, cognome, età)
// }
studenti.forEach(function (studente) {
    console.log(studente.nome, studente.cognome, studente.età)
})

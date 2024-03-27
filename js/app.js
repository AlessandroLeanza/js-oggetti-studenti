/** MILESTONE 1
Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach.

Milestone 1.0
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome, cognome, 
età tramite sfruttando i componenti bootstrap (ad es. in tabella).
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
    const nome = studente.nome
    const cognome = studente.cognome
    const età = studente.età
    console.log(nome, cognome, età)

    appendTableHtml(studente)
})
function appendTableHtml(member) {
    const tBodyElement = document.getElementById('table-body')
    const trHTMLString = `
	<tr>
	  <td>${member.nome}</td>
	  <td>${member.cognome}</td>
	  <td>${member.età}</td>
	</tr>
	`
    // BONUS
    // Mostrare solo gli studenti maggiorenni filtrando gli elementi dell’array
    //  prima di stampare la nuova lista in pagina
    if (member.età > 18) {
        tBodyElement.innerHTML += trHTMLString
    }
}


/** MILESTONE 2
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età.
Aggiungere il nuovo studente all’array di studenti
Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach

Milestone 2.0
Dare la possibilità all’utente di aggiungere un nuovo oggetto studente inserendo 
nome, cognome ed età tramite form.
Aggiungere il nuovo studente all’array di studenti.
Aggiornare l’interfaccia con il nuovo studente.
 */

const form = document.getElementById('form-add-members')
console.log(form)
form.addEventListener('submit', aggiungiStudente)

function aggiungiStudente(e) {
    //Disabilitare la propagazione del submit
    console.log(e)
    e.preventDefault()
    //Recuperiamo i singoli input per recuperare il valore che viene inserito
    //alla compilazione del form
    const nome = document.getElementById('nome').value // string
    const cognome = document.getElementById('cognome').value // string
    const età = document.getElementById('età').value // string
    //con i valori si costruisce il nuovo membro

    // const nuovoMembro = {
    //     name: name,
    //     job: job,
    //     email: email,
    // }
    const nuovoStudente = {
        nome: nome,
        cognome: cognome,
        età: età
    }
    console.log(nuovoStudente)
    //Deve pushare il nuovo membro nell'array
    studenti.push(nuovoStudente)
    console.log(studenti)
    const isValid = validateMember(nome, cognome, età)
    if (isValid) {
        appendTableHtml(nuovoStudente)
    }
}
function validateMember(nome, cognome, età) {
    console.log(nome)
    console.log(cognome)
    console.log(età)
    if (nome == '') {
        console.log("il nome non è valido")
        return false
    } else if (cognome === '') {
        console.log("il cognome non è valido")
        return false
    } else if (età === '') {
        console.log("L'età non è valida")
        return false
    }
    // if (nomee === '' || cognome === '' || età === '') {
    // 	return false
    // }
    return true
}


// const nome = prompt("Inserisci il nome del nuovo oggetto studente:")
// const cognome = prompt(`Inserisci il cognome di ${nome}:`)
// const età = parseInt(prompt(`Inserisci l'età di ${nome} ${cognome}:`))
// console.log(nuovoStudente);
// studenti.push(nuovoStudente)
// console.log(studenti);
// for (let i = 0; i < studenti.length; i++) {
//     currentStudent = studenti[i]
//     const nome = currentStudent.nome
//     const cognome = currentStudent.cognome
//     const età = currentStudent.età
//     console.log(nome, cognome, età)
// }
// studenti.forEach(function (studente) {
//     console.log(studente.nome, studente.cognome, studente.età)
// })

function retirerSymboles(chaine) {
    return chaine.replace(/\€\/kg|\€|kg/g, '').trim();
  }
  
function liste(element) {
    let liste = [[], [], [], [], []]
    for (let i = 0; i < element.length; i++) {
        for (let j = 0; j < element[i].length; j++) {
            liste[j].push(retirerSymboles(element[i][j]))
        }
    }
    return liste
}

function sort(liste) {
    let numeroSauvegarde = []
    let listeSauvegarde = liste.slice()
    let temp1 = 0
    let temp2 = 0

    if (ordre === 0) {
      ordre = 1
    } else {
      ordre = 0
    }

    for (let i = 0; i < listeSauvegarde.length; i++) {
        numeroSauvegarde.push(i)
    }

    if (ordre === 0) {
      for (let i = 0; i < listeSauvegarde.length; i++) {
        for (let j = i+1; j < listeSauvegarde.length; j++) {
          if (parseFloat(listeSauvegarde[j]) > parseFloat(listeSauvegarde[i])) {
            temp1 = listeSauvegarde[i]
            listeSauvegarde[i] = listeSauvegarde[j]
            listeSauvegarde[j] = temp1
            temp2 = numeroSauvegarde[i]
            numeroSauvegarde[i] = numeroSauvegarde[j]
            numeroSauvegarde[j] = temp2
          }
        }
      } 
    } else {
      for (let i = 0; i < listeSauvegarde.length; i++) {
        for (let j = i+1; j < listeSauvegarde.length; j++) {
          if (parseFloat(listeSauvegarde[j]) < parseFloat(listeSauvegarde[i])) {
            temp1 = listeSauvegarde[i]
            listeSauvegarde[i] = listeSauvegarde[j]
            listeSauvegarde[j] = temp1
            temp2 = numeroSauvegarde[i]
            numeroSauvegarde[i] = numeroSauvegarde[j]
            numeroSauvegarde[j] = temp2
          }
        }
      } 
    }

    return [numeroSauvegarde, listeSauvegarde]
}

function updateAllLists(liste) {
  let sortList = sort(liste);
  let sortedIndices = sortList[0];

  let sortedLocalisation = [];
  let sortedQuantite = [];
  let sortedPoids = [];
  let sortedPrixAuKilo = [];
  let sortedPrix = [];

  for (let i = 0; i < sortedIndices.length; i++) {
      sortedLocalisation.push(listeLocalisation[sortedIndices[i]]);
      sortedQuantite.push(listeQuantite[sortedIndices[i]]);
      sortedPoids.push(listePoids[sortedIndices[i]]);
      sortedPrixAuKilo.push(listePrixAuKilo[sortedIndices[i]]);
      sortedPrix.push(listePrix[sortedIndices[i]]);
  }

  for (let i = 0; i < localisation.length; i++) {
      let j = 0
      localisation[i].textContent = sortedLocalisation[i]
      quantite[i].textContent = sortedQuantite[i];
      poids[i].textContent = sortedPoids[i] + "kg";
      prix[i].textContent = sortedPrix[i] + "€";
      if (window.location.href.includes("SecheLinge")) {
        prixAuKilo[i].textContent = sortedPrixAuKilo[i] + "€/min";
      } else {
        prixAuKilo[i].textContent = sortedPrixAuKilo[i] + "€/kg";
      }

      try { if (valenciennes.includes(sortedLocalisation[i])) {
        ligne[i].id = "valenciennes"
        localisation[i].style.color = "blue"
      }
      if (aulnoy.includes(sortedLocalisation[i])) {
        ligne[i].id = "aulnoy"
        localisation[i].style.color = "green"
      }
      if (beuvrages.includes(sortedLocalisation[i])) {
        ligne[i].id = "beuvrages"
        localisation[i].style.color = "orangered"
      } } catch {
        console.log("sortedLocalisation[i] n'est pas enregistré")
      }

      try { 
        while (laverie[j][0] != sortedLocalisation[i]) {
          j++
        }
      } catch {
        console.log(sortedLocalisation)
        console.log(`Il manque : "${sortedLocalisation[i]}" dans le tableau "laverie" dans le fichieir "dataLaverie"`)
      }

      localisation[i].innerHTML += `<details><summary><img src='info.svg' class='info-button'></summary><div class="info">
      <div><img src="position.svg" style="background:grey">Ville : ${laverie[j][1]}</div><div><img src="clock.svg" style="background:grey">
      Ouvert ${laverie[j][2]}</div><div style="font-weight:bold; margin-top: 10px; margin-bottom: 10px; text-decoration:underline;">Services :</div>
      <div><img src="wash.svg" style="background:grey">${laverie[j][3]}</div><div><img src="dry.svg" style="background:grey">${laverie[j][4]}</div>
      <div><img src="check.svg" style="background:grey">Statut Machine : <a target="_blank" href=${laverie[j][5]}>lien</a></div></div></details>`   // crée les détails de chaque laveries
  }
}

function colorRank (choix) {
  let degrade = ["100%"]
  if (ordre===0) {
    for (i=1; i<data.length; i++) {
      degrade.push((retirerSymboles(tableau[choix][i].textContent))/retirerSymboles(tableau[choix][0].textContent)*100 + "%")
    }
  } else {
    for (i=1; i<data.length; i++) {
      degrade.push(retirerSymboles(tableau[choix][0].textContent)/retirerSymboles(tableau[choix][i].textContent)*100 + "%")
    }
  }

  for (i=0; i<data.length; i++) {
    ligne[i].style.background = `linear-gradient(90deg, #e8f4fc ${degrade[i]}, white ${degrade[i]})`
  }
}

function classement () {
  let j = 1
  for (i=0; i<ligne.length; i++) {
    if (ligne[i].style.display !== "none") {
      numero[i].textContent = j
      j++
    }
}
}

function highlight () {
  for (i=0; i<localisation.length; i++) {
    if (localisation[i].textContent.includes(recherche)) {
      ligne[i].style.display = "flex"
    } else {
      ligne[i].style.display = "none"
    }
  }
}

function changeURL () {
  params.set('recherche', recherche); 
  url.search = params.toString()
  window.history.pushState({}, '', url)
}

function numLaverieVille () {
  let v1 = 0
  let v2 = 0
  let v3 = 0
  for (i=0; i<liste.length; i++) {
    if (localisation[i].textContent.includes("Valenciennes")) {
      v1++    ///   A rebosser pcq ça fonctionne pas
      console.log(localisation[i].textContent)
    }
    if (localisation[i].textContent.includes("Aulnoy-lez-Valenciennes")) {
      v2++
      console.log(localisation[i].textContent)
    }
    if (localisation[i].textContent.includes("Beuvrages")) {
      v3++
      console.log(localisation[i].textContent)
    }
  }
  textCheckbox[0].textContent += v1
  textCheckbox[1].innerHTML +=  v2
  textCheckbox[2].innerHTML += v3
}
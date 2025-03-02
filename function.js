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
      localisation[i].innerHTML = sortedLocalisation[i]
      quantite[i].textContent = sortedQuantite[i];
      poids[i].textContent = sortedPoids[i] + "kg";
      prixAuKilo[i].textContent = sortedPrixAuKilo[i] + "€/kg";
      prix[i].textContent = sortedPrix[i] + "€";

      if (valenciennes.includes(sortedLocalisation[i])) {
        ligne[i].id = "valenciennes"
        localisation[i].style.color = "blue"
      }
      if (aulnoy.includes(sortedLocalisation[i])) {
        ligne[i].id = "aulnoy"
        localisation[i].style.color = "green"
      }
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
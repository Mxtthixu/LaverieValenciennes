let localisation = document.querySelectorAll(".adresse")
let quantite = document.querySelectorAll(".quantite")
let prix = document.querySelectorAll(".prix")
let poids = document.querySelectorAll(".poids")
let prixAuKilo = document.querySelectorAll(".prixkilo")

let tableau = [prix, poids, prixAuKilo]

let button = document.querySelectorAll(".sort-button")

let listeLocalisation = liste(data)[0]
let listeQuantite = liste(data)[1]
let listePrix = liste(data)[2]
let listePoids = liste(data)[3]
let listePrixAuKilo = liste(data)[4]

let ordre = 1

let numero = document.querySelectorAll(".numero")

const ligne = document.querySelectorAll(".donnee")

let checkboxvalenciennes = document.querySelector(".checkboxvalenciennes")
let checkboxaulnoy = document.querySelector(".checkboxaulnoy")
let checkboxbeuvrages = document.querySelector(".checkboxbeuvrages")

button[0].addEventListener("click", function() {
  updateAllLists(listePrix)
  colorRank(0)
})

button[1].addEventListener("click", function() {
  updateAllLists(listePoids)
  colorRank(1)
})

button[2].addEventListener("click", function() {
  updateAllLists(listePrixAuKilo)
  colorRank(2)
})

checkboxvalenciennes.addEventListener("change", function() {
  if (checkboxvalenciennes.checked) {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "valenciennes") {
        ligne[i].style.display = "flex"
      }
    }
  } else {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "valenciennes") {
        ligne[i].style.display = "none"
      }
    }
  } classement()
})

checkboxaulnoy.addEventListener("change", function() {
  if (checkboxaulnoy.checked) {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "aulnoy") {
        ligne[i].style.display = "flex"
      }
    }
  } else {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "aulnoy") {
        ligne[i].style.display = "none"
      }
    }
  } classement()
})

checkboxbeuvrages.addEventListener("change", function() {
  if (checkboxbeuvrages.checked) {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "beuvrages") {
        ligne[i].style.display = "flex"
      }
    }
  } else {
    for (i=0; i<ligne.length; i++) {
      if (ligne[i].id === "beuvrages") {
        ligne[i].style.display = "none"
      }
    }
  } classement()
})

updateAllLists(listePrix)
colorRank(0)
classement()
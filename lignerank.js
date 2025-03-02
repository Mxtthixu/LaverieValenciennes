function creerligne() {

    let lignes = document.querySelector(".lignerank")

    lignes.innerHTML = ""

    for (i=0; i<data.length; i++) {
        lignes.innerHTML += `
                    <ul class="donnee">
                        <li class="numero" style="margin-left: 30px;"></li>
                        <li class="adresse"></li>
                        <li class="quantite"></li>
                        <li class="prix"></li>
                        <li class="poids"></li>
                        <li class="prixkilo" style="margin-right: 30px;"></li>
                    </ul>
                `
    }
}

creerligne()
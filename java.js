var tousLesid = ["conserve", "bouteille", "journal", "pile", "restes", "bouteillevin", "magazine", "coca", "pastis", "potyaourt"];

var support = document.getElementById("dechetAlea");

var rdmId = tousLesid[Math.floor(Math.random() * tousLesid.length)];

var bonneRep = 0;
var essais = 0;

support.id = rdmId;



document.getElementById("boutonJaune").addEventListener("click", function () {

    if (support.id == "conserve" || support.id == "bouteille" || support.id == "coca") {

        bonneRep++;

        alert("Bonne réponse, vous avez placé le déchet dans la bonne poubelle");
        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        console.log(bonneRep);
        console.log(essais);

    }  else  {



        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        alert("Mauvaise réponse, ce n'est pas la bonne poubelle");
        console.log(bonneRep);
        console.log(essais);
    }

    essais++;
});



document.getElementById("boutonBleu").addEventListener("click", function () {

    if (support.id == "journal" || support.id == "magazine") {

        bonneRep++;

        alert("Bonne réponse, vous avez placé le déchet dans la bonne poubelle");
        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        console.log(bonneRep);
        console.log(essais);

    }  else {



        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        alert("Mauvaise réponse, ce n'est pas la bonne poubelle");
        console.log(bonneRep);
        console.log(essais);
    }

    essais++;
});




document.getElementById("boutonVert").addEventListener("click", function () {

    if (support.id == "bouteillevin" || support.id == "pastis") {

        bonneRep++;

        alert("Bonne réponse, vous avez placé le déchet dans la bonne poubelle");
        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        console.log(bonneRep);
        console.log(essais);

    }  else  {


        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        alert("Mauvaise réponse, ce n'est pas la bonne poubelle");
        console.log(bonneRep);
        console.log(essais);
    }

    essais++;

});



document.getElementById("boutonMarron").addEventListener("click", function () {

    if (support.id == "pile" || support.id == "restes" || support.id == "potyaourt") {

        bonneRep++;

        alert("Bonne réponse, vous avez placé le déchet dans la bonne poubelle");
        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        console.log(bonneRep);
        console.log(essais);

    }  else  {


        document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        alert("Mauvaise réponse, ce n'est pas la bonne poubelle");
        console.log(bonneRep);
        console.log(essais);
    }

    essais++;

});



function nextBtn() {

    rdmId = [Math.floor(Math.random() * tousLesid.length)];
    document.getElementById("nextButton").innerHTML = " ";
    support.id = tousLesid[rdmId];

    if (essais == 10) {

        alert("Bien joué, vous avez réussi a jouer avec une série de 10 déchets ! Appuyer sur Ok pour voir votre score");
        document.getElementById("containerJeu").style.display = "none";
        document.getElementById("containerScores").style.display = "block";

        document.getElementById("scoreAffich").innerHTML = "Bravo, vous avez " + bonneRep + " bonnes réponses, sur 10.";
        document.getElementById("scoreAffich").style.border = "3px black solid";
        document.getElementById("scoreAffich").style.width = "500px";
        document.getElementById("scoreAffich").style.backgroundColor = "white";
        document.getElementById("scoreAffich").style.fontSize = "50px";
        document.getElementById("scoreAffich").style.marginTop = "15%";
        document.getElementById("scoreAffich").style.marginLeft = "30%";

    }
}




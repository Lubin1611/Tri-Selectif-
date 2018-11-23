var tousLesid = ["conserve", "bouteille", "journal", "pile", "restes", "bouteillevin", "magazine", "coca", "pastis", "potyaourt"];

var support = document.getElementById("dechetAlea");

var rdmId = tousLesid[Math.floor(Math.random() * tousLesid.length)];

var bonneRep = 0;
var essais = 0;

support.id = rdmId;



document.getElementById("boutonJaune").addEventListener("click", function () {

    if (support.id == "conserve" || support.id == "bouteille" || support.id == "coca") {

        essais++;

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
});



document.getElementById("boutonBleu").addEventListener("click", function () {

    if (support.id == "journal" || support.id == "magazine") {

        essais++;

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

});




document.getElementById("boutonVert").addEventListener("click", function () {

    if (support.id == "bouteillevin" || support.id == "pastis") {

        essais++;

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
});



document.getElementById("boutonMarron").addEventListener("click", function () {

    if (support.id == "pile" || support.id == "restes" || support.id == "potyaourt") {

        essais++;

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

    if (essais == 3) {

        alert("Bien joué, vous avez réussi a ranger 10 déchets correctement ! Appuyer sur Ok pour voir votre score");
        document.getElementById("containerJeu").style.display = "none";
    }

});



function nextBtn() {

    rdmId = [Math.floor(Math.random() * tousLesid.length)];
    document.getElementById("nextButton").innerHTML = " ";
    support.id = tousLesid[rdmId];

}



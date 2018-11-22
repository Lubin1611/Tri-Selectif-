var srcdechet = ["conserve.png", "bouteille.jpg", "pile.jpg", "journal.jpg"];

var rdmSrc = srcdechet[Math.floor(Math.random() * srcdechet.length)];


var imgDechet = document.createElement("img");
imgDechet.src = "bouteille.jpg";
imgDechet.id = "bouteille";
imgDechet.style.width = "100px";
imgDechet.style.height = "100px";
document.getElementById("liste_dechets").appendChild(imgDechet);




  function verifDechet() {

      if (imgDechet.id == "bouteille") {

          alert("Bonne réponse");
          document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn() id = \"placement\">Suivant</button>";

      }
  }




function nextBtn() {

    document.getElementById("nextButton").innerHTML = "";
    imgDechet.src = rdmSrc;
}

console.log(srcdechet);

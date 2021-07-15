import {default as Suitclass} from "./oop-suit.js";


// const Suit = require("./oop-suit");

// input (gunting, kertas, batu);

const suitan = new Suitclass();


const batuP1 = document.getElementById("batu-player1");
const guntingP1 = document.getElementById("gunting-player1");
const kertasP1 = document.getElementById("kertas-player1");

// if pool[rand] == "kertas"  set .set-bg-grey to class kertas-com

batuP1.addEventListener("click", () => {
    let inputan = suitan.suit("batu");
    console.log(inputan);
   if ( inputan === "seri") {
       document.getElementById("batu-com").classList.remove("set-bg-grey");
       document.getElementById("batu-com").classList.add("set-bg-grey");
       setTimeout(() => {
        document.getElementById("batu-com").classList.remove("set-bg-grey");
       }, 500)
   } else if (inputan === "gunting") {
       document.getElementById("gunting-com").classList.add("set-bg-grey");
   } else if (inputan === "kertas")  {
    document.getElementById("kertas-com").classList.add("set-bg-grey");
   }
});
// guntingP1
// kertasP1
// alert(suitan.suit("batu"));
// const Suit = require("./oop-suit");

// input (gunting, kertas, batu);

class SuitClass {


    suit(inputUser) {
        let pool = ["gunting", "batu", "kertas"];
        let rand = Math.floor(Math.random() * pool.length);
        let result;
        if (inputUser == "gunting") {
            if (pool[rand] == inputUser) {
                result = "seri";
            } else if (pool[rand] == "kertas") {
                result = "menang"
            } else if (pool[rand] == "batu") {
                result = "kalah"
            }
        } else if (inputUser == "batu") {
            if (pool[rand] == inputUser) {
                result = "seri";
            } else if (pool[rand] == "kertas") {
                result = "kalah"
            } else if (pool[rand] == "gunting") {
                result = "menang"
            }
        } else if (inputUser == "kertas") {
            if (pool[rand] == inputUser) {
                result = "seri";
            } else if (pool[rand] == "gunting") {
                result = "kalah"
            } else if (pool[rand] == "batu") {
                result = "menang"
            }
        }
        return result;
    }
}

// class Suit
let suit = new SuitClass();


/* ON OFF hovering element
    onmouseover = "getId(this)"
    onmouseout = "getOutId(this)"
*/
function getId (obj) {
    document.getElementById(obj.id).classList.add("set-bg-grey")
}
function getOutId(obj) {
    setTimeout( () => {
        document.getElementById(obj.id).classList.remove("set-bg-grey")
     }, 500 );
   
}

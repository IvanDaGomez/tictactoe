document.addEventListener("DOMContentLoaded", function() {

    var turno;
    const turnos = ["X", "O"];
    var button = document.querySelector(".comenzar");
    var llenas =0;
    comienzo = (e) => {


        e.preventDefault();
        turno = turnos[Math.round(Math.random())];
        button.innerText = `Turno de ${turno}`;
        button.removeEventListener("click", comienzo);
        
        // Add event listeners to casillas after game starts
        for (let casilla of casillas) {
            casilla.style.color = "black";
            casilla.addEventListener("click", select);
            casilla.addEventListener("mouseover", () => {
                if (casilla.innerText == ""){
                casilla.innerText = turno;
                casilla.style.color = "gray"; // Corrected typo here, should be casilla.style.color
                }
            });
            casilla.addEventListener("mouseout", () => {
                if (casilla.style.color != "black"){
                    casilla.innerText = "";
                }
            });
        }




    }

    select = (event) => {


        let casilla = event.target;
        casilla.innerText = turno;
        casilla.style.color ="black";
        casilla.removeEventListener("click",select);

        if (verificarGanador()) {
            reiniciarJuego();
            alert(`¡${turno} ha ganado!`);
            return
        } else if (llenas == 8) {
            reiniciarJuego();
            alert("Hay Empate");
            return
        }


    
        if (turno == "X") {
            turno = "O";
            button.innerText = `Turno de ${turno}`;
            
        } else {
            turno = "X";
            button.innerText = `Turno de ${turno}`;
        }
        llenas++;
        




    }



    function reiniciarJuego() {
        button.innerText = "";
        button.innerText = "Comenzar Juego";
        for (let casilla of casillas) {
            casilla.innerText = "";
            
        }
        
        llenas = 0;
        
        button.addEventListener("click", comienzo);
    }


    function verificarGanador() {
        const lineasGanadoras = [
            // Combinaciones horizontales
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            // Combinaciones verticales
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            // Combinaciones diagonales
            [0, 4, 8], [2, 4, 6]
        ];
    
        for (let linea of lineasGanadoras) {
            const [a, b, c] = linea;
            if (casillas[a].innerText !== "" &&
                casillas[a].innerText === casillas[b].innerText &&
                casillas[a].innerText === casillas[c].innerText) {
                return true; // Hay un ganador
            }
        }
    
        return false; // No hay ganador
    }
    
    let casillas = document.querySelectorAll(".casilla");
    
    button.addEventListener("click", comienzo);
    
});


    






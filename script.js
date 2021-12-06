var speedPedro = 0;
var speedJuca = 0;
var speedMaria = 0;

var quantVoltas = 0;

var lap_winner_pedro = 0;
var lap_winner_juca = 0;
var lap_winner_maria = 0;

var carPedro = new Object();
var carJuca = new Object();
var carEdna = new Object();



function race() {
    document.getElementById("lap_winner").style.display = 'flex';
    document.getElementById("race_winner_box").style.display = 'flex';
    quantVoltas = document.querySelector('input[name="track"]:checked').value;
    lap_winner_pedro = 0;
    lap_winner_juca = 0;
    lap_winner_maria = 0;
    console.log(quantVoltas);
    laps(quantVoltas);

     if(lap_winner_pedro >= lap_winner_maria) {
         if(lap_winner_pedro >= lap_winner_juca){
             if((lap_winner_pedro == lap_winner_maria)||(lap_winner_pedro == lap_winner_juca)){
                while((lap_winner_pedro == lap_winner_maria)||(lap_winner_pedro == lap_winner_juca)){
                    laps(1);
                }

                if(lap_winner_pedro > lap_winner_maria){
                    if(lap_winner_pedro > lap_winner_juca){
                        document.getElementById("race_winner").innerHTML = 'Pedro';
                    }else{
                        document.getElementById("race_winner").innerHTML = 'Juca';
                    }
                }else{
                    if(lap_winner_juca > lap_winner_maria){
                        document.getElementById("race_winner").innerHTML = 'Juca';
                    }else{
                        document.getElementById("race_winner").innerHTML = 'Edna';
                    }
                }
                
             }else{
                document.getElementById("race_winner").innerHTML = 'Pedro';
             }
         }else{
            if(lap_winner_juca == lap_winner_maria){
                while(lap_winner_juca == lap_winner_maria){
                    laps(1);
                }

                if(lap_winner_juca > lap_winner_maria){
                    document.getElementById("race_winner").innerHTML = 'Juca';
                }else{
                    document.getElementById("race_winner").innerHTML = 'Edna';
                }


            }else{
                document.getElementById("race_winner").innerHTML = 'Juca';
            }
         }
     }else{
         if(lap_winner_maria >= lap_winner_juca){
            if(lap_winner_maria == lap_winner_juca){
                while(lap_winner_maria == lap_winner_juca){
                    laps(1);
                }

                if(lap_winner_maria > lap_winner_juca){
                    document.getElementById("race_winner").innerHTML = 'Edna';
                }else{
                    document.getElementById("race_winner").innerHTML = 'Juca';
                }

            }else{
                document.getElementById("race_winner").innerHTML = 'Edna';
            }
         }else{
            document.getElementById("race_winner").innerHTML = 'Juca';

         }
     }



    document.getElementById("lap_pedro").innerHTML = lap_winner_pedro;
    document.getElementById("lap_juca").innerHTML = lap_winner_juca;
    document.getElementById("lap_maria").innerHTML = lap_winner_maria;

  }


 function speedLap(min, max, der) {

    let speed = (Math.random() * (max - min) + min) * ((100 - der)/100);


    return speed;


  }

  function speedPerLap(){
    speedPedro = speedLap(carPedro.velMin, carPedro.velMax, carPedro.derrapagem);
    speedJuca = speedLap(carJuca.velMin, carJuca.velMax, carJuca.derrapagem);
    speedMaria = speedLap(carEdna.velMin, carEdna.velMax, carEdna.derrapagem);

  }

function laps(numberLaps) {

    geraCarro(carPedro);
    geraCarro(carJuca);
    geraCarro(carEdna);

    for (var i = 0; i < numberLaps; i++) {
        speedPerLap();
        if(speedPedro > speedMaria) {
            if(speedPedro > speedJuca){
                lap_winner_pedro = lap_winner_pedro + 1;
            }else{
                lap_winner_juca = lap_winner_juca + 1;
            }
        }else {
            if(speedMaria > speedJuca) {
                lap_winner_maria = lap_winner_maria + 1;
            }else{
                lap_winner_juca = lap_winner_juca + 1;
            }
        }

     }
}

function geraCarro(obj) {

    obj.rar = rarityCar();
    obj.velMax = velMax(obj.rar);
    obj.velMin = velMin(obj.rar);
    obj.derrapagem = derrap(obj.rar);



}


function rarityCar() {
    var rarity = Math.random * 100;

    if(rarity <=60) {
        return "popular";
    }else{
        if(rarity <= 95) {
            return "sport";
        }else{
            return "super sport";
        }
    }

}

function velMax(type) {

    switch (type) {
        case "popular":
            return (Math.random() * 20 + 180);
        case "sport":
            return (Math.random() * 20 + 195);
        case "super sport":
            return (Math.random() * 20 + 210);            
    
        default:
            break;
    }

}

function velMin(type) {

    switch (type) {
        case "popular":
            return (Math.random() * 20 + 110);
        case "sport":
            return (Math.random() * 20 + 125);
        case "super sport":
            return (Math.random() * 20 + 140);            
    
        default:
            break;
    }

}

function derrap(type) {

    switch (type) {
        case "popular":
            return (Math.random() + 3);
        case "sport":
            return (Math.random() + 2);
        case "super sport":
            return (Math.random() * 0.75 + 1);            
    
        default:
            break;
    }

}


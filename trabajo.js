function comprobarTemperatura() {

    let temperatura = document.querySelector("#temperatura").value;

    if (temperatura > 30) {

        document.querySelector("#resultado").innerHTML =
            "🥵 Ya está haciendo calor";

   
        } else {

        document.querySelector("#resultado").innerHTML =
            "🥶 No está haciendo calor";
    }
}
/*escribir un algoritmo que nos pida una clave y verifique que sea la correcta.
la clave correcta es "eureka". Solo tenemos 3 intentos para acertar,
si fallamos los 3 intentos, el sistema nos mostrara un mensaje
indicandonos que hemos agotado todas las oportunidades.
si acertamos la clave, saldremos directamente del programa */
import "./styles.css";
let claveUsuario: string = "eureka";
let veces: number = 0;
let intento: number = 3;

do {
  let ingreseClave: string = String(prompt(" ingrese clave"));
  if (ingreseClave === claveUsuario) {
    alert(" Su clave es correcta.   Bienvenidx !");
    veces = 3;
  } else {
    alert(
      "Clave incorrecta." + " Intente nuevamente." + "Intento nº" + intento
    );
    veces = veces + 1;
    intento = intento - 1;
    if (veces === 3) {
      alert(" Acceso restringido. Haz agotado todas las oportunidades");
    }
  }
} while (veces < 3);

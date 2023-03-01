let escuderia = prompt("Introducir escuderia");
let motor = prompt("Introducir motor");
let pais = prompt("Introducir pais");
let color = prompt("Introducir color");
let campeonatos = prompt("Introducir campeonatos");

const busqueda = {
  escuderia: escuderia,
  pais: pais,
  color: color,
  motor: motor,
  campeonatos: campeonatos,
};

function mostrarAutos(resultado) {
  resultado.forEach((auto) => {
    console.log(
      " Escuderia: " +
        auto.escuderia +
        " " +
        " Pais: " +
        auto.pais +
        " " +
        " Color: " +
        auto.color +
        " " +
        " Motor: " +
        auto.motor +
        " " +
        " Campeonatos: " +
        auto.campeonatos
    );
  });
}

function sinResultados() {
  console.log("Sin resultados");
}

function filtrarEscuderia(auto) {
  if (busqueda.escuderia) {
    return auto.escuderia === busqueda.escuderia;
  }
  return auto;
}

function filtrarPais(auto) {
  if (busqueda.pais) {
    return auto.pais === busqueda.pais;
  }
  return auto;
}

function filtrarColor(auto) {
  if (busqueda.color) {
    return auto.color === busqueda.color;
  }
  return auto;
}

function filtrarMotor(auto) {
  if (busqueda.motor) {
    return auto.motor === busqueda.motor;
  }
  return auto;
}
function filtrarCampeonatos(auto) {
  if (busqueda.campeonatos) {
    return auto.campeonatos === +busqueda.campeonatos;
  }
  return auto;
}

function filtrarAuto() {
  console.log(busqueda);
  let resultado = autos
    .filter(filtrarEscuderia)
    .filter(filtrarPais)
    .filter(filtrarColor)
    .filter(filtrarMotor)
    .filter(filtrarCampeonatos);
  console.log(resultado);
  if (resultado) {
    mostrarAutos(resultado);
  } else {
    sinResultados();
  }
}

filtrarAuto();

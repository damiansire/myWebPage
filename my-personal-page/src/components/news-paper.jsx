import * as React from "react"
import diarioImg from "../images/foto_diario.png"
import plataformaImg from "../images/plataforma.jpg"
import yoImg from "../images/yo.jpg"
import CardsWithoutTitle from "../components/cardsWithoutTitle"

const NewsSpaper = () => (

  <div>
    <h2>Participacion en la prensa</h2>

    <CardsWithoutTitle img={yoImg}
      tag={"Seguridad Informatica"}
      text="Damian Sire detecta y reporta agujero de seguridad en la
                        Universidad de la Republica (Udelar) que exponia datos personales
                        de cientos de miles de estudiantes, docentes y egresados." />


    <CardsWithoutTitle img={diarioImg}
      tag={"Seguridad Informatica"}
      text="Jovenes Hackers Uruguayos Encuentran vulnerabilidades en Udelar,
              UTU, Cancilleria y Aeropuerto." />

    <CardsWithoutTitle img={plataformaImg}
      tag={"Seguridad Informatica"}
      text="Fallo en la plataforma educativa Uruguaya vulnera cuentas de sus
              estudiantes." />

  </div >
)

export default NewsSpaper

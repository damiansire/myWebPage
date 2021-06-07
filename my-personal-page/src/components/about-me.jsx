import * as React from "react"
import CardsWithTitle from "./cardsWithTitle"

const AboutMe = () => (
  <div>
    <CardsWithTitle
      title={"Welcome my life :)"}
      tag={"Introduccion"}
      text=" Mi nombre Damian Sire y en las proximas lineas tratare de contarte quien soy y que es lo que hago." />

    <CardsWithTitle
      title={"¿Que es lo que me gusta?"}
      tag={"Pasiones"}
      text=" Mis mayores pasiones son la programación, la automatizacion y la visualización de datos. Me encanta aprender y si lo que aprendo esta relacionado con programacion, me gusta aun mas.
" />

    <CardsWithTitle
      title={"La comunidad"}
      tag={"Comunidad"}
      text="Hace años que concurro activamente a las meetups, ya sea presencial o virtualmente. Siempre las habia considerado como un espacio increible, donde podia estar en contactos con otros desarrolladores y aprender mucho. Pero hoy en dia, se volvieron un espacio,
                                        para compartir con la comunidad y para tambien yo poder ayudar a crezca.
" />

    <CardsWithTitle
      title={"Compartir conocimiento"}
      tag={"Sobre mi"}
      text="A lo largo de mi vida he descubierto que el mejor metodo para aprender, es hacerlo con la intencion de compartir el conocimiento con los demas. Mediante el intercambio, se llega a el verdadero conocimiento. Eso me ha llevado a ser muy activo en las distintas
comunidades de desarrollo." />

    <CardsWithTitle
      title={"¿Que es lo que me mueve dia a dia?"}
      tag={"Motivacion"}
      text=" Es una sensacion increible que las personas te envien mensajes de cuanto les ha servido lo que has creado, que te apoyen a seguir adelante, que les gusta lo que haces o compartes. Esos pequeños momentos, son invaluables. El hecho de compartir lo que se,
                                        de crear algo que los demas usen, el poder analizar mi entorno mediante los datos y mejorar mi alrededor, esas cosas son las que me mueven dia a dia.
" />


  </div>
)

export default AboutMe

/*
<div>
  <iframe id="videoFrame" src="https://www.youtube.com/embed/-fZPNaBQhtc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
*/

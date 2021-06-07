import React from "react"
import Talk from "./talk"

const Talks = props => {
  const talksData = [
    {
      communityName: "AngularMVD",
      talkLink: "https://www.meetup.com/es/Angular-MVD/events/ktqljlybchbbc/",
      talkTitle: "Visualización de datos en angular con PrimeNg",
    },
    {
      communityName: "PyLadies",
      talkLink: "https://www.meetup.com/es/PyLadiesUy/events/269044767/",
      talkTitle: "Persiguiendo al COVID-19 por Damián Siré",
    },
    {
      communityName: "Python Argentina",
      talkLink:
        "https://www.meetup.com/es/Buenos-Aires-Python-Meetup/events/271011152/",
      talkTitle: "Introduccion a Numpy y Pandas por Damián Siré",
    },
    {
      communityName: "Javascript Montevideo",
      talkLink: "https://www.meetup.com/es/montevideojs/events/271022594/",
      talkTitle: "RxJs - Observables y Operadores",
    },
    {
      communityName: "NgPanama",
      talkLink: "https://www.meetup.com/es/Ng-Panama/events/271661906/",
      talkTitle: "Programacion Reactiva en Angular con RxJs y Observables",
    },
    {
      communityName: "Python Pereira - Colombia",
      talkLink: "https://www.meetup.com/es/pythonpereira/events/272743156/",
      talkTitle: "Inteligencia artificial con Python",
    },
    {
      communityName: "Python Bolivia",
      talkLink: "https://www.facebook.com/pyconbolivia/posts/768130157334550",
      talkTitle: "Introducción al machine learning",
    },
    {
      communityName: "Dominicode",
      talkLink: "https://www.youtube.com/watch?v=56535Sf6sgE",
      talkTitle: "Inteligencia artificial en Angular con Damian Sire",
    },
    {
      communityName: "Deveteam504",
      talkLink: " https://www.youtube.com/watch?v=TaI9eqRgqMI",
      talkTitle: "Machine Learning Visual en Javascript con P5Js y Ml5",
    },
    {
      communityName: "JavascriptMontevideo",
      talkLink: "https://www.meetup.com/es/montevideojs/events/264156360/",
      talkTitle: "Programación Dinámica + ML con JS por Damián Siré",
    },
  ]

  return (
    <div>
      {talksData.map(talk => (
        <Talk
          communityName={talk.communityName}
          talkLink={talk.talkLink}
          talkTitle={talk.talkTitle}
        />
      ))}
    </div>
  )
}

export default Talks

/*
year
[{communityImg,communityName,talkLink,talkTitle}]
*/

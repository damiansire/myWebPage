import React from "react"
import CardsWithTitle from "./cardsWithTitle"
const Talk = props => {
  return (
    <div>
      <CardsWithTitle
        title={props.talkTitle}
        tag={props.communityName}
        text={props.talkLink}
      />
    </div>
  )
}

export default Talk

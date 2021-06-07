import React from "react"

const CardsWithTitle = props => {
  return (
    <div class="container mt-4 mx-auto">
      <div
        class="
card
cursor-pointer
border border-gray-400
rounded-lg
hover:shadow-md
hover:border-opacity-0
transform
hover:-translate-y-1
transition-all
duration-200
p-2
"
      >
        <div>
          <h2 class="text-lg mb-2">
            {props.title}
            <span
              class="
text-sm text-teal-800
font-mono
bg-teal-100
inline
rounded-full
px-2
align-top
float-right
animate-pulse
"
            >
              {props.tag}
            </span>
          </h2>
          <p
            class="
font-light font-mono
text-sm text-gray-700
hover:text-gray-900
transition-all
duration-200
"
          >
            <p>{props.text} </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsWithTitle

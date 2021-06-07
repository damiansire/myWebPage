import * as React from "react"

const CardsWithoutTitle = (props) => (
    <div className="container mt-4 mx-auto">
        <div>
            <div
                className="
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
flex items-center
"
            >
                <div>
                    <img
                        className="w-60 h-15 rounded-full mr-4"
                        src={props.img}
                        alt="El observador foto"
                    />
                </div>
                <div>
                    <span
                        className="
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
                    <p
                        className="
font-light font-mono
text-sm text-gray-700
hover:text-gray-900
transition-all
duration-200
"
                    >
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default CardsWithoutTitle

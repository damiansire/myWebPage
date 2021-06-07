import * as React from "react"
import profileImg from "../images/profile.jpg"
import SocialMedias from "./social-medias"
const Sidebar = () => (
  <div
    className="h-screen sticky top-0 text-center"
    style={{ backgroundImage: 'url("https://i.imgur.com/icFY0WL.jpg")' }}
  >
    <div>
      <a
        href="#"
        class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600"
      >
        <span class="font-bold">@AngularMVD</span> Co-Organizer
      </a>
    </div>
    <div class="my-5">
      <a
        href="#"
        class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600"
      >
        <span class="font-bold">@JavaScriptMVD</span> Co-Organizer
      </a>
    </div>

    <div className="w-4/6 mt-2 mx-auto">
      <img src={profileImg} className="rounded-full" />
    </div>
    <h1 width="24" height="24" class="text-white text-4xl my-4 text-a ">
      Damian Sire
    </h1>
    <h2 class="text-red-800 text-lg my-4 text-2xl  font-bold ">
      Full Stack Dev | Youtuber
    </h2>
    <h2 class="text-red-800 text-lg my-4 text-2xl  font-bold "></h2>
    <SocialMedias />
    <div>
      <div>
        <div class="p-2 my-4">
          <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">
              Mis guias
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://angular.damiansire.com/"
        >
          <div class="flex items-center p-4 bg-red-500 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 272"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
                fill="#E23237"
              />
              <path
                d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"
                fill="#B52E31"
              />
              <path
                d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
                fill="#FFF"
              />
            </svg>
            <div>
              <p class=" text-xs font-medium text-uppercase ml-2 ">Angular</p>
            </div>
          </div>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://javascript.damiansire.com/"
        >
          <div class="flex items-center p-4 bg-yellow-300 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
            <svg
              class="h-6 fill-current hover:text-gray-100"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>JavaScript icon</title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
            <div>
              <p class=" text-xs font-medium text-uppercase ml-2 ">
                Javascript
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
)

export default Sidebar

/*

    <div>
      <a
        className="link"
        id="SuggestMeLink"
        rel="noreferrer"
        target="_blank"
        href="https://forms.gle/Qq8j2Zy7FgFcL7dM7/"
      >
        Click aqui para dejar una sugerencia :)
      </a>
    </div>
*/

import * as React from "react"
import Sidebar from "../components/sidebar"
import AboutMe from "../components/about-me"

const IndexPage = () => (
  <div className="grid grid-cols-9 gap-4 justify-items-center">
    <div className="col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-4">
      <AboutMe />
    </div>
  </div>
)

export default IndexPage

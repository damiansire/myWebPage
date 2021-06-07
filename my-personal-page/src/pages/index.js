import * as React from "react"
import Sidebar from "../components/sidebar"
import AboutMe from "../components/about-me"
import NewsSpaper from "../components/news-paper"
import Talks from "../components/talks"

const IndexPage = () => (
   <div className="grid grid-cols-9 gap-4 h-screen justify-items-center">
    <div className="col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-4">
      <AboutMe />
    </div>
    <div className="col-span-3">
      <NewsSpaper />
      <Talks />
    </div>
  </div>
)

export default IndexPage

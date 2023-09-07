import { useEffect, useState } from "react"
import "./portofolio.scss"
import PortofolioList from "../portofolioList/PortofolioList"
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
  contentPortfolio,
  mobilePortfolio,
} from "../../data"

export default function Portofolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
        break
      case "mobile":
        setData(mobilePortfolio)
        break
      case "design":
        setData(designPortfolio)
        break
      case "content":
        setData(contentPortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
  }, [selected])
  return (
    <div id="portofolio" className="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList
            key={item.id}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

import "./portofolioList.scss"

export default function PortofolioList({ title, id, active, setSelected }) {
  return (
    <li
      key={id}
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

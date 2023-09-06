import "./portofolio.scss"

export default function Portofolio() {
  return (
    <div id="portofolio" className="portofolio">
      <h1>Portofolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.dribbble.com/userupload/8787332/file/original-e6b8606978a143b14106f001b790a2b0.png?resize=1504x1128"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/userupload/8787332/file/original-e6b8606978a143b14106f001b790a2b0.png?resize=1504x1128"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/userupload/8787332/file/original-e6b8606978a143b14106f001b790a2b0.png?resize=1504x1128"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/userupload/8787332/file/original-e6b8606978a143b14106f001b790a2b0.png?resize=1504x1128"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/userupload/8787332/file/original-e6b8606978a143b14106f001b790a2b0.png?resize=1504x1128"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

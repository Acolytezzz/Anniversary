import "./Carousel.css"

function Carousel() {
  return (
    <div id="carousel">
      <div id="container">
        <div>
          <div className="content desktop">
            <h2>HOT</h2>
            <span>Unstoppable allure</span> 
          </div>
          <div className="content mobile">
            <h2>HOT</h2>
            <span>Unstoppable</span> 
            <span>allure</span> 
          </div>
        </div>
        <div>
          <div className="content">
            <h2>CHARMING</h2>
            <span>Winning hearts</span>
          </div>
        </div>
        <div>
          <div className="content desktop">
            <h2>SASSY</h2>
            <span>Bringing the spice</span>
          </div>
          <div className="content mobile">
            <h2>SASSY</h2>
            <span>Bringing the</span>
            <span>spice</span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>COMPOSED</h2>
            <span>Cool and calm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
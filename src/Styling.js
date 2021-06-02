import React from 'react'
import "./SectionOne.css"

const Styling = () => {

  return (
    <div className="container">

      <div className="sectionOne">
        <span className="region">Malpur, IN</span>
        {/* <span className="country">IN</span> */}
      </div>

      <div className="sectionTwo">

        <span className="icon"><img src="https://img.icons8.com/ios/100/000000/cloud.png" /></span>
        <div>
          <span className="temp">30°c</span>
          {/* <span className="unit">°C</span> */}
        </div>
        <span className="feels">feels like 30°C | Sunny</span>
      </div>

      <div className="sectionThree">
        <div className="sectionThree-1">

          <div><span>Wind</span>12 KM</div>
          <div><span>Wind Dir.</span>NE</div>
          <div><span>Humidity</span>25 %</div>
        </div>
        <div className="sectionThree-2">
          <div><span>Pressure</span>1000 MB</div>
          <div><span>UV Index</span>6</div>
          <div><span>Visibility</span>20 KM</div>
        </div>
      </div>

    </div>
  )
}

export default Styling

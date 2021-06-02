import React from 'react'
import "./SectionOne.css"

const SectionOne = ({ data }) => {

  const code = data.data[0].weather?.code
  var imgUrl = null

  var day = new Date();
  var hr = day.getHours();

  switch (true) {
    case (code === 200 || code === 201 || code === 202):
      imgUrl = "https://img.icons8.com/ios/100/000000/storm--v1.png"
      break;
    case (code === 230 || code === 231 || code === 232 || code === 233):
      imgUrl = "https://img.icons8.com/ios/100/000000/cloud-lighting--v1.png"
      break;
    case (code === 300 || code === 301 || code === 302):
      imgUrl = "https://img.icons8.com/ios/100/000000/light-rain--v2.png"
      break;
    case (code === 501 || code === 502 || code === 500 || code === 511 || code === 520 || code === 521 || code === 522):
      if (hr <= 6 || hr >= 18) {
        imgUrl = "https://img.icons8.com/ios/100/000000/partly-cloudy-rain--v1.png"
      } else {
        imgUrl = "https://img.icons8.com/ios/100/000000/heavy-rain.png"
      }
      break;
    case (code === 601 || code === 602 || code === 610 || code === 621 || code === 622 || code === 623):
      imgUrl = "https://img.icons8.com/ios/100/000000/snow.png"
      break;
    case (code === 611 || code === 612):
      imgUrl = "https://img.icons8.com/ios/100/000000/sleet.png"
      break;
    case (code === 700 || code === 711 || code === 721 || code === 621 || code === 631 || code === 641 || code === 651):
      if (hr <= 6 || hr >= 18) {
        imgUrl = "https://img.icons8.com/ios/100/000000/fog-day--v1.png"
      } else {
        imgUrl = "https://img.icons8.com/ios/100/000000/fog-night--v1.png"
      }
      break;
    case (code === 800):
      if (hr <= 6 || hr >= 18) {
        imgUrl = "https://img.icons8.com/ios/100/000000/bright-moon.png"
      } else {
        imgUrl = "https://img.icons8.com/ios/100/000000/sun--v1.png"
      }
      break;
    case (code === 801 || code === 802 || code === 803):
      if (hr <= 6 || hr >= 18) {
        imgUrl = "https://img.icons8.com/ios/100/000000/partly-cloudy-night--v1.png"
      } else {
        imgUrl = "https://img.icons8.com/ios/100/000000/partly-cloudy-day--v1.png"
      }
      break;
    case (code === 804):
      imgUrl = "https://img.icons8.com/ios/100/000000/cloud.png"
      break;
    default:
      imgUrl = "https://img.icons8.com/ios/100/000000/error--v1.png"
      break;
  }



  return (
    <div className="container">

      <div className="sectionOne">
        <span className="region">{`${data.data[0].city_name},   ${data.data[0].country_code}`}</span>
        {/* <span className="country">{data.data[0].country_code}</span> */}
      </div>

      <div className="sectionTwo">
        <span className="icon"><img src={imgUrl} /></span>
        <div>
          <span className="temp">{`${data.data[0].temp}°C`}</span>
        </div>
        <span className="feels">feels like {data.data[0].app_temp}°C | {data.data[0].weather?.description}</span>
      </div>

      <div className="sectionThree">
        <div className="sectionThree-1">
          <div><span>Wind</span>{data.data[0].wind_spd} m/s</div>
          <div><span>Wind Dir.</span>{data.data[0].wind_cdir}</div>
          <div><span>Humidity</span>{data.data[0].rh} %</div>
        </div>
        <div className="sectionThree-2">

          <div><span>Pressure</span>{data.data[0].pres} mb</div>
          <div><span>UV Index</span>{data.data[0].uv}</div>
          <div><span>Visibility</span>{data.data[0].vis} km</div>
        </div>

      </div>

    </div>
  )
}

export default SectionOne

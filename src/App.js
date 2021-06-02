import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';
// import Styling from "./Styling"
import SectionOne from './SectionOne';

function App() {

  const [details, setDetails] = useState(null)
  const [url, setUrl] = useState("https://api.weatherbit.io/v2.0/current?city=newdelhi&key=24d74085081e4ec7b4971bec0a1f2ef3")


  const fetchWeather = async () => {
    const { data } = await Axios.get(url)

    // const details = data.data[0]
    console.log(data)
    setDetails(data)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    fetchWeather()

  }
  return (

    <div className="App">
      <form onSubmit={handleSubmit} >
        <div>

          <input
            style={{ color: "black", fontSize: "18px" }}
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter City Name"
            onChange={e => setUrl(`https://api.weatherbit.io/v2.0/current?city=${e.target.value}&key=24d74085081e4ec7b4971bec0a1f2ef3`)}
          ></input>
          <button type="submit"><img src="https://img.icons8.com/ios/50/000000/search--v1.png" /></button>
        </div>
      </form>
      { details && <SectionOne data={details} />}
      {/* <Styling /> */}
    </div>
  );

}

export default App;

// const successCallback = (position) => {
//   // setUrl(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude.toFixed(4)}&lon=${position.coords.longitude.toFixed(4)}&appid=a557589542b4ad2625da746cf86ac6d8`)

//   setUrl(`https://api.weatherbit.io/v2.0/current?&lat=${position.coords.latitude.toFixed(3)}&lon=${position.coords.longitude.toFixed(3)}&key=24d74085081e4ec7b4971bec0a1f2ef3`)
//   console.log(position);
// }

// const failCallback = () => {
//   alert("Give Location Permission for currect Location.")
// }

// if (window.navigator.geolocation) {
//   window.navigator.geolocation.getCurrentPosition(successCallback, failCallback)
// } else {
//   alert("Geolocation is not supported by this browser.")
// }
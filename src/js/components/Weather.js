import React from 'react'
import axios from 'axios'

export default class Weather extends React.Component {
  constructor(){
    super()

    this.state = {
      weather: null
    }
  }

  componentWillAppear(){
    console.log('appear');
  }

  getWeather(city){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d9230125f6b73ceaadb79f7d89c6c31`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          weather: response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  imageWeather(){
    let weather = this.state.weather
    if (weather) {
      switch (weather.weather[0].main) {
        case 'Clouds':
          return '/images/cloud.png'
        case 'Clear':
          return '/images/sun.png'
        case 'Rain':
          return '/images/rain.png'
        case 'Storm':
          return '/images/storm.png'
      }
    }
  }

  temperature(){
    return (this.state.weather.main.temp - 273.15).toFixed(2)
  }

  findWeather(event){
    if (event.charCode == 13) {
      this.getWeather(event.target.value)
    }
  }

  detailWeather(){
    if (this.state.weather) {
      return (
        <div className="weather text-center">
          <img src={this.imageWeather()} alt="weather icon" />
          <div>
            <h3>{this.state.weather.name}</h3>
            <h4>Temp: { this.temperature() }ᵒC</h4>
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="weather-container">
        <input type="text" placeholder="Your city..." className="form-control" onKeyPress={this.findWeather.bind(this)}
          ref={ input => input && input.focus() } />

        { this.detailWeather() }
      </div>
    )
  }
}

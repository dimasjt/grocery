import React from 'react'

export default class Temperature extends React.Component {
  constructor(){
    super()

    this.state = {
      temperature: 0
    }
  }
  updateTemperature(event){
    let value = event.target.value || 0

    this.setState({
      temperature: parseFloat(value)
    })
  }

  calculateTemperature(temperature){
    switch (temperature) {
      case 'K':
        return this.state.temperature + 273.15
      case 'F':
        return this.state.temperature + 1.8 + 32
      default:
        return this.state.temperature
    }
  }

  render(){
    return (
      <div>
        <h2>Temperature Calculation</h2>

        <div className="form-group">
          <label>Input Temperature</label>
          <input type="text" onChange={this.updateTemperature.bind(this)} placeholder="Temperature"
            className="form-control" autoComplete="off" value={this.temperature} />
        </div>

        <div className="row text-center">
          <div className="col-xs-4">
            <h3>{this.calculateTemperature('C')}ᵒC</h3>
          </div>
          <div className="col-xs-4">
            <h3>{this.calculateTemperature('F')}ᵒF</h3>
          </div>
          <div className="col-xs-4">
            <h3>{this.calculateTemperature('K')}ᵒK</h3>
          </div>
        </div>
      </div>
    )
  }
}

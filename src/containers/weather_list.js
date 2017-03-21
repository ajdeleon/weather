import React, { Component } from "react"
import { connect } from "react-redux"
import { Sparklines, SparklinesLine } from "react-sparklines"

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps)

    return (
      <tr key={name}>
        <td>{name}
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-cover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) { // ES6 same as const weather = state.weather below
  return { weather } // ES6 weather: weather
}

export default connect(mapStateToProps)(WeatherList)
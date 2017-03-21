import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchWeather } from "../actions/index"

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ""}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  } //constructor

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  } //onInputChange

  onFormSubmit(event) {
    event.preventDefault()
    // Get weather from API
    this.props.fetchWeather(this.state.term)
    this.setState({ term: "" })
  } //onFormSubmit so that enter and pushing submit don't submit form

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit!</button>
        </span>
      </form>
    ) //return use form so that enter and click Submit use same eventhandler
  } //render
} //SearchBar

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
} // gives access to this.props.fetchWeather

export default connect(null, mapDispatchToProps)(SearchBar)

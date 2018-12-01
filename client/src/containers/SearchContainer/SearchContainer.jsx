/**
 * ClusterContainer
 */
import * as React from 'react'

import * as axios from 'axios'
import { Search } from '../../components/Search/Search.jsx'

let ranks = [
  {
    name: 'single word search - word frequency metric',
    slug: 'sws-wfm'
  }
]

export class SearchContainer extends React.Component {

  constructor (props) {
    super(props)

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
  }

  /**
   * The render method
   */
  render () {
    return (
      <div className='display'>
        {ranks.map((rank, i) => (
           <Search
            key = {i}
            header = {rank.name}
            rank = {rank.slug}
            term = {this.state['term-' + rank.slug]}
            results = {this.state['results-' + rank.slug]}
            handleChange = {this.handleChange} 
            getSearchResults = {this.getSearchResults}
          />
        ))}
      </div>
    )
  }

  /**
   * Handles change to state.
   */
  handleChange (name) {
    return (event, value) => {
      this.setState({
        [name]: value,
      });
    };
  }

  /**
   * Retrieves result for the search term.
   */
  getSearchResults (rank, term) {
    return new Promise((resolve, reject) => {
      axios.get('http://127.0.0.1:5002/search/' + rank + '?' + term)
      .then((result) => {
        resolve(result)
      })
    })
  }
}

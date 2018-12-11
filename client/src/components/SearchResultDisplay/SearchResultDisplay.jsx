/**
 * SearchResultDisplay component
 */

import * as React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * Display class
 */
export class SearchResultDisplay extends React.Component {
  /**
   * The render method
   */
  render () {
    return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Link</TableHeaderColumn>
          <TableHeaderColumn>Score</TableHeaderColumn>
          {this.props.pages[0].content && <TableHeaderColumn>Content</TableHeaderColumn>}
          {this.props.pages[0].location && <TableHeaderColumn>Location</TableHeaderColumn>}
          {this.props.pages[0].pagerank && <TableHeaderColumn>PageRank</TableHeaderColumn>}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {this.props.pages.map((page, i) => <React.Fragment key={i}>
        <TableRow>
          <TableRowColumn><a href={'http://en.wikipedia.org' + page.url}>{page.url}</a></TableRowColumn>
          <TableRowColumn>{page.score.toFixed(2)}</TableRowColumn>
          {page.content && <TableRowColumn>{page.content.toFixed(2)}</TableRowColumn>}
          {page.location && <TableRowColumn>{page.location.toFixed(2)}</TableRowColumn>}
          {page.pagerank && <TableRowColumn>{page.pagerank.toFixed(2)}</TableRowColumn>}
        </TableRow>
        </React.Fragment>)}
      </TableBody>
    </Table>
    )
  }
}
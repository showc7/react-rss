import React, { Component } from 'react'

export default class FeedView extends Component {
  render() {
    const { item } = this.props;
    {/*console.log(item);*/}
    return <div>
      { item.title }
      { item.contentSnippet }
      <a href={ item.link }>more</a>
    </div>
  }
}

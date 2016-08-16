import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import User from '../components/User'
//import Page from '../components/Page'
import FeedsList from '../components/FeedsList'
import FeedsView from '../components/FeedsView'
//import * as pageActions from '../actions/PageActions'
import * as feedsListActions from '../actions/FeedsListActions'
import { Link } from 'react-router'

class App extends Component {

  componentWillMount() {
    console.log('willMount');
  }

  componentDidMount() {
    console.log('didMount');
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(prevState, prevProps);
  }

  render() {
    const { /*user, page,*/ feeds } = this.props;
    //const { getPhotos } = this.props.pageActions;
    const { getNews } = this.props.feedsListActions;

    console.log('sourceID: ' + this.props.params.sourceId);
    console.log(this.props.location);

    return (
      <div className='row'>
        <Link to='settings'>Settings</Link>
        <FeedsList sources={feeds.feedsURLs} getNews={getNews} getNow={this.props.params.sourceId} initLoading={feeds.initLoading}/>
        <FeedsView data={feeds.feedSourceInfo} fetching={feeds.fetching} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //user: state.user,
    //page: state.page,
    feeds: state.feeds
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //pageActions: bindActionCreators(pageActions, dispatch),
    feedsListActions: bindActionCreators(feedsListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

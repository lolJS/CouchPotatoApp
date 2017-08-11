/* global fetch */
import React, { Component, PropTypes } from 'react';
import { ListView, View } from 'react-native';
import queryString from 'query-string';

import Error from '../components/Error';
import MovieListItem from '../components/MovieListItem';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      snatchedMovies: null,
      error: false
    };
  }

  componentDidMount() {
    const url = `${this.props.couchPotatoUrl}/api/${this.props.apiKey}/media.list/`;
    const params = {
      type: 'movie',
      status: 'active',
      limit_offset: '50,0'
    };

    fetch(`${url}?${queryString.stringify(params)}`, {
      method: 'GET',
      headers: {
        Host: `${this.props.couchPotatoUrl}/movies/`,
        Accept: 'application/json',
      },
    })
    .then(res => res.json())
    // t:zV8oz7Dg
    // type:movie
    // release_status:snatched,missing,available,downloaded,done,seeding
    // with_tags:recent
    .then(({ movies }) => {
      console.info(movies);
      this.setState({ snatchedMovies: this.ds.cloneWithRows(movies) });
    });
  }

  render() {
    const { error, snatchedMovies } = this.state;
    const { couchPotatoUrl, apiKey } = this.props;

    return (
      <View style={{ backgroundColor: '#2d2d2d' }}>
        {error &&
          <Error
            error={error}
            couchPotatoUrl={couchPotatoUrl}
            apiKey={apiKey}
          />}
        {this.state.snatchedMovies &&
          <ListView
            contentContainerStyle={{
              paddingTop: 15,
              paddingBottom: 70,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            dataSource={snatchedMovies}
            renderRow={({
              title,
              releases,
              info: { year, imdb },
              files: { image_poster: [poster] }
            }) =>
              <MovieListItem
                img={`${couchPotatoUrl}/api/${apiKey}/file.${poster.match(/cache.+/g)[0]}`}
                title={title}
                releases={releases}
                year={year}
                url={`http://www.imdb.com/title/${imdb}`}
              />}
          />}
      </View>
    );
  }
}

MovieList.propTypes = {
  couchPotatoUrl: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default MovieList;

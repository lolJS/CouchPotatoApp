/* global fetch, URL */

class Client {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  couchPotatoRequest(action, params, method = 'GET') {
    const url = new URL(`${this.baseUrl}/api/${this.apiKey}/${action}/`);

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url.href, {
      method,
      headers: {
        Host: `${this.baseUrl}/movies/`,
        Accept: 'application/json',
      },
    })
    .then((response) => {
      if (response.status !== 200) throw response;

      return response.json();
    })
    .catch((error) => {
      this.setState({ error });
    });
  }

  // getSnatchedAvailable() {
  //
  // }
  //
  // getIMDBBoxOffice() {
  //
  // }
  //
  // getSuggestions() {
  //
  // }
  //
  // getBluRayNewReleases() {
  //
  // }

  getWantedMovies() {
    const params = {
      type: 'movie',
      status: 'active',
      limit_offset: '50,0'
    };

    return this.couchPotatoRequest('media.list', params);
  }
}

export default Client;

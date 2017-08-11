const GET_SNATCHEDAVAIL = 'couchPotatoApp/user/GET_SNATCHEDAVAIL';
const SAVE_URL = 'couchPotatoApp/user/SAVE_URL';

const initialState = {
  isLoggedIn: false,
  couchPotatoUrl: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_URL:
      return { ...state, couchPotatoUrl: action.payload };

    case GET_SNATCHEDAVAIL:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
}

// Action Creators
export function login() {
  return { type: GET_SNATCHEDAVAIL };
}

export function saveUrl(couchPotatoUrl) {
  return { type: SAVE_URL, payload: couchPotatoUrl };
}

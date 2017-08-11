const LOG_IN = 'couchPotatoApp/user/LOG_IN';
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

    case LOG_IN:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
}

// Action Creators
export function login() {
  return { type: LOG_IN };
}

export function saveUrl(couchPotatoUrl) {
  return { type: SAVE_URL, payload: couchPotatoUrl };
}

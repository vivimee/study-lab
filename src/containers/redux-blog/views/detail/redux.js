import createReducer from "../../utils/createReducer";

const initalState = {
  loading: false,
  article: {}
};

const LOADING = 'LOADING';
const LOADING_SUCCESS = 'LOADING_SUCCESS';

export const detailActions = {
  getArticle: (id) => async (dispatch) => {
    dispatch({ type: LOADING });
    const res = await fetch(`/api/article/${id}.json`);
    const article = await res.json();
    dispatch({ type: LOADING_SUCCESS, payload: { article } });
  }
}

const detail = createReducer(initalState, {
  [LOADING]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [LOADING_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      article: action.payload.article
    }
  }
});

export default detail;

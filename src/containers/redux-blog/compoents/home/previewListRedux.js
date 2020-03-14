import createReducer from "../../utils/createReducer";

const initalState = {
  loading: true,
  error: false,
  articleList: []
};

const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

export const previewListActions = {
  loadArticles: () => async dispatch => {
    dispatch({ type: LOAD_ARTICLES });

    const res = await window.fetch("/api/articles.json");
    const articleList = await res.json();
    dispatch({ type: LOAD_ARTICLES_SUCCESS, payload: { articleList } });
  }
};

export const previewListReducers = createReducer(initalState, {
  [LOAD_ARTICLES]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: false
    };
  },
  [LOAD_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
      articleList: action.payload.articleList
    };
  },
  [LOAD_ARTICLES_ERROR]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true
    };
  }
});

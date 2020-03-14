import { combineReducers } from "redux";

import { previewListActions, previewListReducers } from "../../compoents/home/previewListRedux";

export default combineReducers({
  previewList: previewListReducers
});

export const actions = {
  ...previewListActions
};

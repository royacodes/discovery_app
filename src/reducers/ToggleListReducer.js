const initialState = {
  isListVisible: false,
};

const toggleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIST":
      return {
        ...state,
        isListVisible: true,
      };
    case "HIDE_LIST":
      return {
        ...state,
        isListVisible: false,
      };
    case "SHOW_LIST":
      return {
        ...state,
        isListVisible: true,
      };
    default:
      return state;
  }
};

export default toggleListReducer;

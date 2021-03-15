const defaultState = {
  pages: "/",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...defaultState,
        pages: action.payload,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default reducer;

const defaultState = {
  isLogin: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOGIN": {
      return {
        ...defaultState,
        isLogin: true,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default reducer;

let initialState = {
  contactList: [],
  searchList: [],
  searched: false,
};

function reducer(state = initialState, action) {
    const {type,payload}=action; //코딩 단순화 위해 es6 destructuring 문법 사용
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {name: payload.name, phoneNumber: payload.phoneNumber},
        ],
      };
    case "SET_SEARCH_LIST":
        return{
            ...state, searchList:payload
        }
    case "SEARCHED_COMPLETE":
        return{
            ...state, searched:payload
        }
    default:
        return {...state};
  }
}

export default reducer;

//reducer는 기능에 따라 여러개 만들 수 있어서 폴더로 만든다.

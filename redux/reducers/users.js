import { USERS_POST_STATE_CHANGE, USERS_DATA_STATE_CHANGE, CLEAR_DATA } from "../constants";

const initialState = {
  users: [],
  usersLoaded: 0,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_DATA_STATE_CHANGE:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case USERS_POST_STATE_CHANGE:
      return {
        ...state,
        posts: action.posts,
        usersLoaded: state.usersLoaded + 1,
        users: state.users.map((user) =>
          user.uid === action.uid
            ? {
                ...user,
                posts: action.posts,
              }
            : user
        ),
      };
    case CLEAR_DATA: 
      return {
        
      }
    default:
      return state;
  }
};

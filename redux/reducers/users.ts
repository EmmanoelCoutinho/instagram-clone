const inititalState = {
  currentUser: null
}

export const user = (state = inititalState, action: any) => {
  return {
    ...state,
    currentUser: action.currentUser
  }
};
export default AppNavigator => (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

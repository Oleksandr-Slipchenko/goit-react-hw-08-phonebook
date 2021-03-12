// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
// export default authSelectors;

const getIsAuthenticated = state => !!state.auth.token;

const getUsername = state => state.auth.user.name;

export default {
  getIsAuthenticated,
  getUsername,
};

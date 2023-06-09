export const authSelector = state => state.auth.user.name;
export const tokenSelector = state => state.auth.token;
export const isAuth = state => state.auth.isAuth;
export const selectIsRefreshing = state => state.auth.isRefreshing
export const authEmail = state=>state.auth.user.email;
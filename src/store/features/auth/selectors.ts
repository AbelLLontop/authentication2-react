import { RootState } from '@/store/store';
export const selectIsLogged = (state:RootState) => state.auth.user;
export const selectHasRole = (state:RootState,role?:string) => state.auth.user?.role === role;
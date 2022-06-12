import { useAppSelector } from './redux-hooks';

export function useAuth() {
    const { email, token, id }: any = useAppSelector<any>(state => state.user);
    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}
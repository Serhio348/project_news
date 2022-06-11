
import { useDispatch } from 'react-redux'
import { Form } from '../ui/formAuthorization/authForm'
import { setUser } from '../../store/auth/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useAppDispatch } from '../hooks/redux-hooks';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/')
      })
      .catch(console.error)
  }
  return (

    <Form
      title="register"
      handleClick={handleRegister}
    />
  )
}

export default SignUp
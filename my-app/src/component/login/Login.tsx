import { Form } from '../ui/formAuthorization/authForm'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import { Link } from 'react-router-dom';
import Storage from '../../helpers/Storage';
import { useActions } from '../hooks/useActions';

import '../ui/formCard/FormCard.scss'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { setUser } = useActions()
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        Storage.set("access", user)
        navigate('/')
      })
      .catch(() => alert("invalid user!"))
  }
  return (
    <div>
      <Form
        title="Log in"
        handleClick={handleLogin}
      />
      <p className='textbuttom'> <Link to="/registration">Register</Link></p>
    </div>
  )
}
export default Login
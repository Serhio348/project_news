
import { setUser } from '../../store/auth/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import { FormRegin } from '../ui/formAuthorization/reginForm';
import { Link } from 'react-router-dom';

const Registration = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const handleRegin = (email: string, password: string) => {
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
      .catch(() => alert("invalid user!"))
  }
  return (
    <div>
      <FormRegin
        title="register"
        handleClick={handleRegin}
      />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>

    </div>


  )
}

export default Registration
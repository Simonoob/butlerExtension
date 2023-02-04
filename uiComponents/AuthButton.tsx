import { useFirebase } from "~firebase/hook"

const AuthButton = () => {
  const { user, onLogin, onLogout } = useFirebase()
  return (
    <>
      {!user ? (
        <button onClick={() => onLogin()}>Log in</button>
      ) : (
        <button onClick={() => onLogout()}>Log out</button>
      )}
    </>
  )
}

export default AuthButton

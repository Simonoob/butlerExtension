import { useFirebase } from "~firebase/hook"

const WelcomeMessage = () => {
  const { user, isLoading } = useFirebase()

  return (
    <>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>

      <div>
        {isLoading ? "Loading..." : ""}
        {!!user ? (
          <div>
            Welcome to Plasmo, {user.displayName} your email address is{" "}
            {user.email}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default WelcomeMessage

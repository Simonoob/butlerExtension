import AppSkeleton from "~layout/AppSkeleton"
import AuthButton from "~uiComponents/AuthButton"
import WelcomeMessage from "~uiComponents/WelcomeMessage"

export default function IndexPopup() {
  return (
    <AppSkeleton>
      <WelcomeMessage />
      <AuthButton />
    </AppSkeleton>
  )
}

import { QueryClient, QueryClientProvider } from "react-query"

import { useFirebase } from "~firebase/hook"
import AuthButton from "~uiComponents/AuthButton"

const queryClient = new QueryClient()

const AppSkeleton = ({ children }) => {
  const { user, isLoading } = useFirebase()

  if (isLoading) return <div>Loading...</div>
  if (!user && !isLoading) return <AuthButton />

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default AppSkeleton

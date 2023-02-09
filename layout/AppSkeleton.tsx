import { QueryClient, QueryClientProvider } from "react-query"

import { useFirebase } from "~firebase/hook"
import AuthButton from "~uiComponents/AuthButton"

import "../style.css"

import PageLayout from "./PageLayout"

const queryClient = new QueryClient()

const AppSkeleton = ({ children }) => {
  const { user, isLoading } = useFirebase()

  if (isLoading) return <div>Loading...</div>
  if (!user && !isLoading) return <AuthButton />

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>{children}</PageLayout>
    </QueryClientProvider>
  )
}

export default AppSkeleton

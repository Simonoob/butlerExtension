import { QueryClient, QueryClientProvider } from "react-query"

import { useFirebase } from "~firebase/hook"
import AuthButton from "~uiComponents/AuthButton"
import LoadingSpinner from "~uiComponents/LoadingSpinner"

import "../style.css"

import PageLayout from "./PageLayout"

const queryClient = new QueryClient()

const AppSkeleton = ({ children }) => {
  const { user, isLoading } = useFirebase()

  if (isLoading) return <LoadingSpinner />
  if (!user && !isLoading) return <AuthButton />

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>{children}</PageLayout>
    </QueryClientProvider>
  )
}

export default AppSkeleton

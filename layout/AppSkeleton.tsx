import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const AppSkeleton = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default AppSkeleton

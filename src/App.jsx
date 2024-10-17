import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from './contexts/SearchContext'
import Header from './components/Header/Header'
import StaysList from './components/Stays/StaysList'
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className="min-h-screen px-4 md:px-6 lg:px-24 py-8">
          <Header />
          <main className="mt-8">
            <StaysList />
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default App
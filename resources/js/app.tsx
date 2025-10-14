import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

import '../css/app.css'
import { Icon } from '@/components/ui/icon'

function App() {
    const queryClient = new QueryClient()
    return (
        <Suspense
            fallback={
                <div className='w-full min-h-screen flex items-center justify-center'>
                    <Icon name='LoaderIcon' className='animate-spin' size={32} />
                </div>
            }
        >
            <QueryClientProvider client={queryClient}>
                {useRoutes(routes)}
            </QueryClientProvider>
        </Suspense>
    )
}

const app = createRoot(document.getElementById('root')!)

app.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)

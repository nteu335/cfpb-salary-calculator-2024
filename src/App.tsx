import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Calculator = lazy(async () => import('pages/Calculator'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path='/' element={<Calculator />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Providers } from './Providers'
import { Home } from '@/presentation/pages/Home'
import { NotFound } from '@/presentation/pages/NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  )
}

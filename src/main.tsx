import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { App } from './App.tsx'
import { FirebaseContextProvider } from './lib/firebase/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </FirebaseContextProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import { AppliedJobsProvider } from './components/Contexts/AppliedJobsContext'; // Import the context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppliedJobsProvider>
      <App />
    </AppliedJobsProvider>
    </BrowserRouter>
  </StrictMode>
)

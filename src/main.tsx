import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'ag-grid-enterprise';
import './index.css'

createRoot(document.getElementById('root')!).render(
    <App />
)

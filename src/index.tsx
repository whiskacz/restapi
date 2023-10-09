import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const RestApi = () => {
    return(
    <App />
)}


const root = createRoot(document.getElementById('root')!);
root.render(<RestApi />)
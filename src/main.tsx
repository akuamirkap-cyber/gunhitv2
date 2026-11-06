import { createRoot } from 'react-dom/client';
import PerfectShotLite from './App';
import './fonts.css';

const container = document.getElementById('root') || document.getElementById('app');
if (!container) throw new Error('Root container is missing.');
createRoot(container).render(<PerfectShotLite />);

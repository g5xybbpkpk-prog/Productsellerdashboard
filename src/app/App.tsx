import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import '../styles/brand-dashboard.css';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" theme="dark" />
    </>
  );
}

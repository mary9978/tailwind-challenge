import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CompleteProfile from './pages/CompleteProfile';
import './App.css'
import Auth from './pages/Auth'
import { Navigate, Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import Owner from './pages/OwnerDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import Projects from './pages/Projects';
  const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <div className="container xl:max-w-screen-xl"> */}
      <Toaster/>
        <Routes>
          <Route path='/' element={<h2 className={'text-2xl bg-pink-200'}>Home page</h2>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      {/* </div> */}
     </QueryClientProvider>
  );
}

export default App

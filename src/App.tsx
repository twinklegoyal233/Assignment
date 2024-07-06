

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import UserForm from './Compoents /Userform';
import SecondPage from './Compoents /SecondPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userDetails = localStorage.getItem('userDetails');
  return userDetails ? children : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
  },
  {
    path: "/second-page",
    element: (
      <ProtectedRoute>
        <SecondPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

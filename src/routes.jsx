import { lazy } from 'react';
import { Navigate } from 'react-router';
import LandingPage from './pages/home/LandingPage';


const NotFound = lazy(() => import('./pages/404/NotFound'));


export const routes = [
  {
    path: '/',
    element: <LandingPage /> ,
    name: 'Home',
    showInNav: true,
    protected: false,
  },
  // {
  //   path: '/dashboard',
  //   element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  //   name: 'Dashboard',
  //   showInNav: true,
  //   protected: true,
  // },
  // {
  //   path: '/users',
  //   element: <ProtectedRoute> <Users /> </ProtectedRoute>,
  //   name: 'Users',
  //   showInNav: true,
  //   protected: true,
  // },
  //   {
  //   path: '/login',
  //   element: <Login />,
  //   name: 'Login',
  //   showInNav: false,
  //   protected: false,
  // },
  // {
  //   path: '/game-reports',
  //   element: <ProtectedRoute> <Reports /> </ProtectedRoute>,
  //   name: 'Reports',
  //   showInNav: true,
  //   protected: true,
  // },
  // {
  //   path: '/admins',
  //   element: <ProtectedRoute> <Admins /> </ProtectedRoute>,
  //   name: 'Admins',
  //   showInNav: true,
  //   protected: true,
  // },
  //   {
  //   path: '/chats',
  //   element: <ProtectedRoute> <Chats /> </ProtectedRoute>,
  //   name: 'Chats',
  //   showInNav: true,
  //   protected: true,
  // },
  // {
  //   path: '/transactions',
  //   element: <ProtectedRoute> <Transactions /></ProtectedRoute>,
  //   name: 'Transactions',
  //   showInNav: true,
  //   protected: true,
  //   children: [
  //     {
  //       index: true,
  //       element: <DepositsTable />,
  //     },
  //     {
  //       path: 'withdrawals',
  //       element: <WithdrawalsTable />,
  //     },
  //     {
  //       path: 'bills',
  //       element: <BillsTable />,
  //     },
  //     {
  //       path: 'bonus',
  //       element: <BonusTable />,
  //     },
  //   ],
  // },
  {
    path: '*',
    element: <NotFound />,
    name: 'Not Found',
    showInNav: false,
    protected: false,
  },
];
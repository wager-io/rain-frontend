import { lazy } from 'react';
import { Navigate } from 'react-router';


const NotFound = lazy(() => import('./pages/404/NotFound'));
const LandingPage = lazy(() => import('./pages/home/LandingPage'));
const ComingSoon = lazy(() => import('./pages/sport/Index'));
const CasinoIndex = lazy(() => import('./pages/casino/Index'));
const Favourite = lazy(() => import('./pages/Favourite/Index'));
const Recents = lazy(() => import('./pages/recent/Index'));


export const routes = [
  {
    path: '/',
    element: <LandingPage /> ,
    name: 'Home',
    showInNav: true,
    protected: false,
  },
  {
    path: '/sport',
    element: <ComingSoon />,
    name: 'Sport',
    showInNav: true,
    protected: true,
  },
  {
    path: '/casino',
    element: <CasinoIndex /> ,
    name: 'Casino',
    showInNav: true,
    protected: true,
  },
  {
    path: '/favourite',
    element: <Favourite /> ,
    name: 'Favourite',
    showInNav: true,
    protected: true,
  },

    {
    path: '/recent',
    element: <Recents /> ,
    name: 'Favourite',
    showInNav: true,
    protected: true,
  },
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
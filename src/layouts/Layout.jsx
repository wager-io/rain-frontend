import { Outlet, useLocation } from 'react-router-dom';
import { lazy, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { routes } from '../routes';

const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const NavBottomTabs = lazy(() => import('./components/NavBottomTabs'));
const PublicChats = lazy(() => import('./public-chat/PublicChats'));

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1100);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1100);
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getCurrentRoute = () => {
    let currentRoute = routes.find(route => route.path === location.pathname);
    if (!currentRoute) {
      currentRoute = routes.find(route => {
        if (route.children && location.pathname.startsWith(route.path)) {
          return true;
        }
        return false;
      });
    }
    
    if (!currentRoute) {
      currentRoute = routes.find(route => route.path === '*');
    }
    
    return currentRoute;
  };
  
  const currentRoute = getCurrentRoute();
  
  const showNavigation = currentRoute?.showInNav !== false && user;
  
  const toggleSidebar = () => {
    if (isDesktop) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setMobileSidebarOpen(!mobileSidebarOpen);
    }
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-grey">
       <Navbar 
         sidebarOpen={sidebarOpen} 
         onToggleSidebar={toggleSidebar} 
         onToggleChat={toggleChat}
         chatOpen={chatOpen}
         isDesktop={isDesktop}
       />
       {(isDesktop || mobileSidebarOpen) && <Sidebar isDesktop={isDesktop} isMobile={isMobile} sidebarOpen={isDesktop ? sidebarOpen : true} />}
       <PublicChats isOpen={chatOpen}  onToggleChat={toggleChat}  isDesktop={isDesktop} isMobile={isMobile} />
      <main 
        className={`mx-auto px-0 sm:px-1 py-0 pt-16 `}
        style={{
          paddingLeft: isDesktop && (sidebarOpen ? '250px' : '75px'),
          paddingBottom: !isDesktop ? '50px' : '0',
          transition: 'padding 0.3s ease-in-out',
          paddingRight: chatOpen && isDesktop ? "320px" : "0"
        }}
      >
        <Outlet />
        <Footer />
      </main>
      {!isDesktop && <NavBottomTabs onToggleSidebar={toggleSidebar} onToggleChat={toggleChat} isDesktop={isDesktop} />}
    </div>
  );
};

export default Layout;
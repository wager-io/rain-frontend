import { Outlet, useLocation } from 'react-router-dom';
import { lazy, useState, useEffect, Suspense } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { routes } from '../routes';
import Preloader from '../components/loader/Preloader';

const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const NavBottomTabs = lazy(() => import('./components/NavBottomTabs'));
const PublicChats = lazy(() => import('./public-chat/PublicChats'));
const LiveSupport = lazy(() => import('../modals/live-support/Index'));

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1100);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [liveSupportOpen, setLiveSupportOpen] = useState(false);

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

  const toggleLiveSupport = () => {
    setLiveSupportOpen(!liveSupportOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-grey">
      <Suspense fallback={<Preloader />}>
        <Navbar 
          sidebarOpen={sidebarOpen} 
          onToggleSidebar={toggleSidebar} 
          onToggleChat={toggleChat}
          chatOpen={chatOpen}
          isDesktop={isDesktop}
        />
        {(isDesktop || mobileSidebarOpen) && <Sidebar isDesktop={isDesktop} isMobile={isMobile} sidebarOpen={isDesktop ? sidebarOpen : true} onToggleLiveSupport={toggleLiveSupport} />}
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

        {/* Live Support Button */}
        <button
          onClick={toggleLiveSupport}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-[1999] transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, var(--accent-purple), #8b5cf6)',
            boxShadow: '0 4px 20px rgba(106, 13, 173, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 6px 25px rgba(106, 13, 173, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = '0 4px 20px rgba(106, 13, 173, 0.4)';
          }}
        >
          <FiMessageCircle className="w-6 h-6 text-white m-auto" />
        </button>

        {liveSupportOpen && <LiveSupport onClose={() => setLiveSupportOpen(false)} />}
        {!isDesktop && <NavBottomTabs onToggleSidebar={toggleSidebar} onToggleChat={toggleChat} isDesktop={isDesktop} />}
      </Suspense>
    </div>
  );
};

export default Layout;
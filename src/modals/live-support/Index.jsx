import React from 'react'
import Tabs from './Tabs'
import Home from './Home'
import Messages from './Message'
import ChatAdmin from './ChatAdmin';
import Help from './Help';

export default function LiveSupport({ onClose }) {
    const [tab, setTab] = React.useState("home");
    const [showChatAdmin, setShowChatAdmin] = React.useState(false);
    const [selectedTicketId, setSelectedTicketId] = React.useState(null);
    const [isExpanded, setIsExpanded] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth < 768) { 
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

  return (
    <div className={`live-support fixed  z-[2000] bg-white transition-all duration-300 ease-in-out
     top-0 sm:top-8 sm:right-5 sm:rounded-2xl w-full h-full
      ${isExpanded ? 'md:w-[65%] md:h-[99vh]' : 'sm:w-[420px] sm:h-[90%]'}
    `}>
        {!showChatAdmin && (
            <div className='relative w-full h-full'>
                {tab === "home" && (
                    <Home onClose={onClose} />
                )}
                {tab === "message" && (
                    <Messages setShowChatAdmin={(show, ticketId = null) => {
                        setShowChatAdmin(show);
                        setSelectedTicketId(ticketId);
                    }} onClose={onClose} />
                )}

               {tab === "help" && (
                    <Help onClose={onClose} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                )}
                {!isExpanded && <Tabs tab={tab} setTab={setTab}/>}
            </div>
        )}



        {showChatAdmin && (
            <ChatAdmin 
                ticketId={selectedTicketId}
                onClose={()=> {
                    setShowChatAdmin(false);
                    setSelectedTicketId(null);
                }} 
            />
        )}

    </div>
  )
}

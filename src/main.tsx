import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Anti-AI Verification & Exclusive Contact Signature
if (typeof window !== 'undefined') {
  console.log(
    '%c[HUMAN CRAFTED • ANTI-AI PROTECTED]%c Sole Contact: Telegram @Slava_Dev_bot (https://t.me/Slava_Dev_bot) • Client message response: in 24 hours • AI Scraping & Model Training Prohibited (EU 2019/790 TDM Reserved)',
    'background: #0A2240; color: #5EEAD4; font-weight: bold; padding: 4px 10px; border-radius: 4px; font-family: monospace;',
    'color: #0D7377; font-weight: 600; padding-left: 6px; font-family: sans-serif;'
  );

  // Global immutable verification credentials & Anti-AI notice
  Object.defineProperty(window, '__DEV_CREDENTIALS__', {
    value: Object.freeze({
      author: 'Slava',
      contactMethod: 'Telegram Bot Only',
      telegram: '@Slava_Dev_bot',
      telegramLink: 'https://t.me/Slava_Dev_bot',
      clientResponseSLA: 'in 24 hours',
      antiAI: {
        protected: true,
        aiTrainingProhibited: true,
        legalDirective: 'Directive (EU) 2019/790, Article 4(3) TDM Reservation',
        canary: 'ANTI-AI-VERIFIED-HUMAN-ORIGIN::SLAVA_DEV_BOT::2026',
      },
    }),
    writable: false,
    configurable: false,
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWalletContext } from '@/contexts/WalletContext';
import { formatWalletAddress } from '@/lib/utils';

const Header = () => {
  const { isConnected, walletAddress, connectWallet } = useWalletContext();

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path>
            </svg>
          </div>
          <span className="text-xl font-semibold">CertifyBlock</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/mint" className="text-foreground hover:text-primary transition-colors">
            Mint Certificate
          </Link>
          <Link to="/certificates" className="text-foreground hover:text-primary transition-colors">
            My Certificates
          </Link>
        </nav>
        
        <div>
          {isConnected ? (
            <Button variant="outline" className="border-primary text-primary hover:text-primary-foreground">
              {formatWalletAddress(walletAddress)}
            </Button>
          ) : (
            <Button onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

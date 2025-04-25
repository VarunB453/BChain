
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWalletContext } from '@/contexts/WalletContext';

// Sample certificate data (to be replaced with actual blockchain data)
const sampleCertificates = [
  {
    id: '1',
    tokenId: '1234',
    title: 'Certificate of Completion',
    course: 'Advanced Blockchain Development',
    issueDate: '2023-04-15',
    recipient: '0x1234...5678',
    imageUrl: 'https://i.imgur.com/hZkMSk4.png',
    ipfsHash: 'QmXR1t6trY6aPqH4bQv5ZVnaV2wA5YrMy9mGN3LXcvYCR7',
    txHash: '0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef',
  },
  {
    id: '2',
    tokenId: '1235',
    title: 'Certificate of Achievement',
    course: 'Smart Contract Security',
    issueDate: '2023-03-22',
    recipient: '0x1234...5678',
    imageUrl: 'https://i.imgur.com/kPAtZ9q.png',
    ipfsHash: 'QmXR1t6trY6aPqH4bQv5ZVnaV2wA5YrMy9mGN3LXcvYCR7',
    txHash: '0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef',
  },
  {
    id: '3',
    tokenId: '1236',
    title: 'Certificate of Excellence',
    course: 'Web3 Frontend Development',
    issueDate: '2023-01-10',
    recipient: '0x1234...5678',
    imageUrl: 'https://i.imgur.com/mKwgMJF.png',
    ipfsHash: 'QmXR1t6trY6aPqH4bQv5ZVnaV2wA5YrMy9mGN3LXcvYCR7',
    txHash: '0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef',
  },
];

const MyCertificates = () => {
  const { isConnected, connectWallet } = useWalletContext();
  const [certificates, setCertificates] = useState<typeof sampleCertificates>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading certificates from blockchain
    const loadCertificates = async () => {
      if (isConnected) {
        setIsLoading(true);
        try {
          // In a real app, fetch certificates from blockchain
          await new Promise(resolve => setTimeout(resolve, 1500));
          setCertificates(sampleCertificates);
        } catch (error) {
          console.error('Error loading certificates:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setCertificates([]);
        setIsLoading(false);
      }
    };
    
    loadCertificates();
  }, [isConnected]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
            <p className="text-muted-foreground">
              View and manage your blockchain-verified certificates
            </p>
          </div>
          
          {!isConnected ? (
            <div className="max-w-md mx-auto">
              <Card className="border-dashed border-border bg-secondary/20">
                <CardContent className="pt-10 pb-10 flex flex-col items-center justify-center">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Connect Your Wallet</h2>
                  <p className="text-muted-foreground mb-6 text-center">
                    Connect your wallet to view your certificates
                  </p>
                  <Button onClick={connectWallet} size="lg">
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground">Loading your certificates...</p>
              </div>
            </div>
          ) : certificates.length === 0 ? (
            <div className="max-w-md mx-auto">
              <Card className="border-dashed border-border bg-secondary/20">
                <CardContent className="pt-10 pb-6 flex flex-col items-center justify-center">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">No Certificates Found</h2>
                  <p className="text-muted-foreground mb-6 text-center">
                    You don't have any certificates yet. Mint your first certificate to get started.
                  </p>
                </CardContent>
                <CardFooter className="pb-8 pt-0 flex justify-center">
                  <Button asChild>
                    <Link to="/mint">Mint a Certificate</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {certificates.length} certificate{certificates.length !== 1 ? 's' : ''}
                </p>
                <Button asChild variant="outline">
                  <Link to="/mint">Mint New Certificate</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden border-border hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary/20 certificate-gradient">
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4 text-center">
                          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path>
                            </svg>
                          </div>
                          <h3 className="text-md font-semibold text-primary">{cert.title}</h3>
                        </div>
                        
                        <div className="text-center flex-grow flex flex-col justify-center">
                          <p className="text-sm text-muted-foreground mb-1">THIS CERTIFIES</p>
                          <p className="text-lg font-medium mb-4">{cert.course}</p>
                        </div>
                        
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <p>{formatDate(cert.issueDate)}</p>
                          <p className="text-xs mt-2">Token ID: #{cert.tokenId}</p>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4 border-t border-border bg-white">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">{cert.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{cert.course}</p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Issued: {formatDate(cert.issueDate)}</span>
                        <span>#{cert.tokenId}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-0 flex flex-col gap-2 bg-white">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <Button variant="outline" size="sm" className="w-full text-xs flex items-center justify-center" asChild>
                          <a href={`https://ipfs.io/ipfs/${cert.ipfsHash}`} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                              <path d="M21 2H19C18.4696 2 17.9609 2.21071 17.5858 2.58579C17.2107 2.96086 17 3.46957 17 4V20C17 20.5304 17.2107 21.0391 17.5858 21.4142C17.9609 21.7893 18.4696 22 19 22H21"></path>
                              <path d="M7 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H7"></path>
                              <path d="M17 12H7"></path>
                              <path d="M10 9l-3 3 3 3"></path>
                              <path d="M14 9l3 3-3 3"></path>
                            </svg>
                            View on IPFS
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="w-full text-xs flex items-center justify-center" asChild>
                          <a href={`https://polygonscan.com/tx/${cert.txHash}`} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                              <path d="M14 4h6v6"></path>
                              <path d="M10 4H4v16h16v-6"></path>
                              <path d="M20 10 4 4"></path>
                              <path d="m14 10 6-6"></path>
                            </svg>
                            View on Polygonscan
                          </a>
                        </Button>
                      </div>
                      <Button variant="default" size="sm" className="w-full mt-1">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyCertificates;

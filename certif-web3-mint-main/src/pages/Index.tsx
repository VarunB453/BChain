
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const steps = [
    {
      id: 1,
      title: 'Connect Wallet',
      description: 'Connect your MetaMask or other Web3 wallet to get started.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Upload Certificate',
      description: 'Upload your certificate document and enter recipient details.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 12v6"></path>
          <path d="m15 15-3-3-3 3"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Mint NFT',
      description: 'Confirm the transaction and mint a blockchain-verified certificate NFT.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12h6"></path>
          <path d="M12 9v6"></path>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Blockchain-Verified Certificates of Achievement
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-md">
                  Issue tamper-proof digital certificates as NFTs. Secure, verifiable, and always accessible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/mint">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white certificate-gradient">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-center">
                        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-primary">Certificate of Completion</h3>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-center">
                        <p className="text-sm text-muted-foreground mb-1">THIS CERTIFIES THAT</p>
                        <p className="text-xl font-medium mb-4">Jane Smith</p>
                        <p className="text-sm text-muted-foreground mb-1">HAS SUCCESSFULLY COMPLETED</p>
                        <p className="text-lg font-medium">Advanced Blockchain Development</p>
                      </div>
                      
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        <p>April 15, 2023</p>
                        <p className="text-xs mt-2">Token ID: #1234 • Verified on Polygon</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Minting a certificate NFT is simple and secure. Follow these steps to get started.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="step-gradient rounded-lg p-6 h-full shadow-sm border border-border flex flex-col">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {step.id !== steps.length && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Secure & Transparent</h2>
                <p className="text-muted-foreground mb-6">
                  Our platform leverages blockchain technology to create tamper-proof, verifiable digital certificates that can be easily shared and authenticated.
                </p>
                
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Immutable Records',
                      description: 'Once issued, certificates cannot be altered or forged.',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <path d="M7 7h10"></path>
                          <path d="M7 12h10"></path>
                          <path d="M7 17h10"></path>
                        </svg>
                      ),
                    },
                    {
                      title: 'Universal Verification',
                      description: 'Anyone can verify the authenticity of a certificate without special software.',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      ),
                    },
                    {
                      title: 'Decentralized Storage',
                      description: 'Certificates are stored on IPFS, ensuring they remain accessible indefinitely.',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex">
                      <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-8 border border-border">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Privacy & Security First</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  We prioritize your data privacy and certificate security at every step of our process.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded p-4 border border-border">
                    <h4 className="font-medium mb-2">No Personal Data Storage</h4>
                    <p className="text-sm text-muted-foreground">
                      We don't store any personal data on our servers. All certificate data is stored directly on the blockchain and IPFS.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded p-4 border border-border">
                    <h4 className="font-medium mb-2">Open Source Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      Our platform's code is open source, allowing anyone to verify its security and functionality.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded p-4 border border-border">
                    <h4 className="font-medium mb-2">Gas-Optimized Contracts</h4>
                    <p className="text-sm text-muted-foreground">
                      Our smart contracts are optimized to minimize transaction costs while maintaining security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-y border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Issue Digital Certificates?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join educational institutions, training providers, and organizations that are already using blockchain to secure their credentials.
            </p>
            <Button asChild size="lg">
              <Link to="/mint">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

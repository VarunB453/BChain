
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWalletContext } from '@/contexts/WalletContext';

const MintCertificate = () => {
  const { isConnected, connectWallet } = useWalletContext();
  
  const [formData, setFormData] = useState({
    recipientAddress: '',
    certificateTitle: '',
    courseName: '',
    issueDate: '',
    description: '',
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      handleFile(selectedFile);
    }
  };
  
  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    
    // Create a preview for images
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // For PDFs or other files, show a generic preview
      setFilePreview(null);
    }
  };
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }
    
    if (!file) {
      toast.error('Please upload a certificate file');
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Simulate upload to IPFS
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast.success('Certificate minted successfully!');
      
      // Reset form
      setFormData({
        recipientAddress: '',
        certificateTitle: '',
        courseName: '',
        issueDate: '',
        description: '',
      });
      setFile(null);
      setFilePreview(null);
    } catch (error) {
      toast.error('Error minting certificate');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Mint Certificate</h1>
            <p className="text-muted-foreground">
              Create a blockchain-verified certificate as an NFT
            </p>
          </div>
          
          {!isConnected ? (
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
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  You need to connect your wallet to mint certificates and pay gas fees.
                </p>
                <Button onClick={connectWallet} size="lg">
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipientAddress">Recipient Wallet Address</Label>
                    <Input
                      id="recipientAddress"
                      name="recipientAddress"
                      value={formData.recipientAddress}
                      onChange={handleChange}
                      placeholder="0x..."
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      The wallet address that will receive this certificate
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certificateTitle">Certificate Title</Label>
                    <Input
                      id="certificateTitle"
                      name="certificateTitle"
                      value={formData.certificateTitle}
                      onChange={handleChange}
                      placeholder="e.g., Certificate of Completion"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseName">Course or Program Name</Label>
                    <Input
                      id="courseName"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      placeholder="e.g., Advanced Blockchain Development"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issueDate">Issue Date</Label>
                    <Input
                      id="issueDate"
                      name="issueDate"
                      type="date"
                      value={formData.issueDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Additional information about this certificate..."
                      rows={4}
                    />
                  </div>
                </div>

                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Upload Certificate</CardTitle>
                      <CardDescription>
                        Upload a PDF or image of the certificate (max 10MB)
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center ${
                          dragActive ? 'border-primary bg-primary/5' : 'border-border'
                        } transition-colors`}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                      >
                        {filePreview ? (
                          <div className="space-y-4">
                            <div className="aspect-[4/3] max-w-[200px] mx-auto overflow-hidden rounded-md border border-border">
                              <img src={filePreview} alt="Certificate preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-medium truncate">{file?.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {Math.round((file?.size || 0) / 1024)} KB
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setFile(null);
                                setFilePreview(null);
                              }}
                            >
                              Remove File
                            </Button>
                          </div>
                        ) : (
                          <div className="py-4">
                            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <path d="M12 12v6"></path>
                                <path d="m15 15-3-3-3 3"></path>
                              </svg>
                            </div>
                            <p className="mb-2">Drag and drop your file here, or click to browse</p>
                            <p className="text-sm text-muted-foreground mb-4">
                              Supports PDF, PNG, JPG (max 10MB)
                            </p>
                            <Button variant="outline" asChild>
                              <label htmlFor="fileUpload" className="cursor-pointer">
                                <input
                                  id="fileUpload"
                                  type="file"
                                  className="hidden"
                                  accept=".pdf,.png,.jpg,.jpeg"
                                  onChange={handleFileChange}
                                />
                                Choose File
                              </label>
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col">
                      <div className="w-full p-4 bg-secondary/30 rounded-md mb-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-muted-foreground">
                            <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                            <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                          </svg>
                          Important Notes
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                          <li>Files are stored on IPFS for permanence</li>
                          <li>Gas fees apply for minting the NFT</li>
                          <li>This operation cannot be undone</li>
                        </ul>
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {file ? 'Minting Certificate...' : 'Uploading File...'}
                          </>
                        ) : (
                          'Mint NFT Certificate'
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MintCertificate;

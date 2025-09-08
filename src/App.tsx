import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { toast, Toaster } from 'sonner'

type Page = 'home' | 'privacy' | 'terms'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const handleComingSoon = () => {
    toast.success("Coming Soon", {
      description: "We're working hard to bring you this feature!"
    })
  }

  const handleContactUs = () => {
    window.location.href = 'mailto:phasiphonglin@gmail.com'
  }

  const renderNavigation = () => (
    <nav className="flex items-center justify-between p-6 max-w-4xl mx-auto">
      <div 
        className="text-2xl font-bold cursor-pointer" 
        onClick={() => setCurrentPage('home')}
      >
        MySwipes
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="hover:text-gray-600 transition-colors"
        >
          Features
        </button>
        <button 
          onClick={() => setCurrentPage('home')} 
          className="hover:text-gray-600 transition-colors"
        >
          Screenshots
        </button>
        <button 
          onClick={handleContactUs} 
          className="hover:text-gray-600 transition-colors"
        >
          Contact
        </button>
        <button 
          onClick={() => setCurrentPage('privacy')} 
          className="hover:text-gray-600 transition-colors"
        >
          Privacy
        </button>
        <button 
          onClick={() => setCurrentPage('terms')} 
          className="hover:text-gray-600 transition-colors"
        >
          Terms
        </button>
      </div>
    </nav>
  )

  const renderFooter = () => (
    <footer className="mt-32 py-12 border-t">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 MySwipes — All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="hover:text-gray-600 transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="hover:text-gray-600 transition-colors"
            >
              Terms
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          This site may use affiliate links.
        </p>
      </div>
    </footer>
  )

  const renderHomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MySwipes — AI Fashion Swipe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Discover women's fashion with a swipe. Personalized by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleComingSoon}
              className="black-button px-8 py-3 text-lg min-h-[44px]"
            >
              Try the Demo (Coming Soon)
            </Button>
            <Button 
              onClick={handleContactUs}
              variant="outline"
              className="glass-button px-8 py-3 text-lg min-h-[44px]"
            >
              Contact Us
            </Button>
          </div>
          <div className="mt-16">
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center min-h-[300px]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Swipe to Discover</h3>
                <p className="text-gray-600 leading-relaxed">
                  A fun, Tinder-style feed of women's fashion. Discover new styles with every swipe.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card p-8 text-center min-h-[300px]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Smart Personalisation</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI learns your style, colors, and budget to show you exactly what you'll love.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card p-8 text-center min-h-[300px]">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Wishlist & Shop</h3>
                <p className="text-gray-600 leading-relaxed">
                  Save favorites and shop via partnered retailers. Never lose track of what you love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Screenshot {num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traffic Promotion Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How We Promote Offers</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              We promote offers through our mobile app's personalized feeds and discovery modules. 
              Users swipe to like or save items before clicking through to retailer websites to 
              complete purchases. We do not use browser extensions or forced redirects. Traffic 
              originates from our app experience and owned social channels.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Merchants */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Supported Merchants</h2>
          <p className="text-sm text-gray-500 mb-6">Integrations coming soon</p>
          <div className="flex justify-center items-center gap-8 text-2xl font-semibold text-gray-600">
            <span>Shopee</span>
            <span>·</span>
            <span>Lazada</span>
            <span>·</span>
            <span>SHEIN</span>
          </div>
        </div>
      </section>

      {/* Download Buttons */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleComingSoon}
              className="black-button px-8 py-3 text-lg min-h-[44px]"
            >
              Download on iOS (Soon)
            </Button>
            <Button 
              onClick={handleComingSoon}
              className="black-button px-8 py-3 text-lg min-h-[44px]"
            >
              Download on Android (Soon)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  const renderPrivacyPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Data Collection</h2>
          <p>
            MySwipes collects basic analytics data to improve our service, including usage patterns, 
            device information, and user preferences. We comply with GDPR and PDPA regulations.
          </p>

          <h2>How We Use Your Data</h2>
          <p>
            Your data is used to personalize your fashion discovery experience, improve our AI 
            recommendations, and provide relevant content. We do not sell personal data to third parties.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            MySwipes participates in affiliate marketing programs. When you make purchases through 
            our partner links, we may receive a commission. This does not affect the price you pay 
            or our recommendations.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide our services or as required by law. 
            You can request data deletion at any time.
          </p>

          <h2>Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at{' '}
            <a href="mailto:phasiphonglin@gmail.com" className="text-blue-600 hover:underline">
              phasiphonglin@gmail.com
            </a>
          </p>

          <p className="text-sm text-gray-600 mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )

  const renderTermsPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Usage Terms</h2>
          <p>
            By using MySwipes, you agree to use our service for personal, non-commercial purposes. 
            You must not attempt to reverse engineer, copy, or misuse our platform.
          </p>

          <h2>Outbound Links</h2>
          <p>
            MySwipes contains links to external retailer websites. We are not responsible for the 
            content, privacy practices, or terms of these external sites. Please review their 
            policies before making purchases.
          </p>

          <h2>Liability Limitation</h2>
          <p>
            MySwipes is provided "as is" without warranties. We are not liable for any damages 
            arising from your use of our service, including but not limited to lost profits, 
            data loss, or service interruptions.
          </p>

          <h2>Affiliate Relationships</h2>
          <p>
            We maintain affiliate relationships with various fashion retailers. Purchases made 
            through our platform may result in commissions paid to MySwipes. This relationship 
            does not influence our content or recommendations.
          </p>

          <h2>Account Termination</h2>
          <p>
            We reserve the right to terminate accounts that violate these terms or engage in 
            fraudulent activities. Users may delete their accounts at any time.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:phasiphonglin@gmail.com" className="text-blue-600 hover:underline">
              phasiphonglin@gmail.com
            </a>
          </p>

          <p className="text-sm text-gray-600 mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      {renderNavigation()}
      
      <main>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'privacy' && renderPrivacyPage()}
        {currentPage === 'terms' && renderTermsPage()}
      </main>

      {renderFooter()}
    </div>
  )
}

export default App
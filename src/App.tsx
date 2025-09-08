import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { toast, Toaster } from 'sonner'

// Import real assets - fallback to styled divs if images fail
// import heroImage from '@/assets/images/hero.jpg'
// import screenshot1 from '@/assets/images/screenshot-1.jpg'
// import screenshot2 from '@/assets/images/screenshot-2.jpg'
// import screenshot3 from '@/assets/images/screenshot-3.jpg'

type Page = 'home' | 'privacy' | 'terms' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  
  // Contact form state - moved to top level to avoid conditional hook usage
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleComingSoon = () => {
    toast.success("Coming Soon", {
      description: "We're working hard to bring you this feature!"
    })
  }

  const handleContactUs = () => {
    window.location.href = 'mailto:phasiphonglin@gmail.com'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:phasiphonglin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\\nEmail: ${email}\\n\\nMessage:\\n${message}`)}`
    window.location.href = mailtoLink
    toast.success('Email client opened!', {
      description: 'Your email client should open with the pre-filled message.'
    })
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
          onClick={() => setCurrentPage('contact')} 
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
              onClick={() => setCurrentPage('contact')}
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
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100 rounded-xl opacity-30 blur-2xl"></div>
            <div className="hero-image relative w-full max-w-5xl mx-auto h-96 md:h-[500px] rounded-xl shadow-2xl border border-gray-200 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">MySwipes App Interface</h3>
                <p className="text-gray-600">Personalized fashion discovery with AI-powered recommendations</p>
              </div>
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
      <section id="screenshots" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">See MySwipes in Action</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Experience the intuitive swipe-based fashion discovery</p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group">
              <div className="screenshot-container relative aspect-[9/16] overflow-hidden rounded-2xl bg-white p-2 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-b from-pink-100 to-purple-100 rounded-xl flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-black rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">👗</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Swipe Interface</h4>
                  <p className="text-sm text-gray-600 text-center">Browse fashion items with intuitive swipe gestures</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold mb-2">Swipe to Discover</h3>
                <p className="text-gray-600">Intuitive Tinder-style interface for fashion discovery</p>
              </div>
            </div>
            <div className="group">
              <div className="screenshot-container relative aspect-[9/16] overflow-hidden rounded-2xl bg-white p-2 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-b from-blue-100 to-indigo-100 rounded-xl flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-black rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">AI Recommendations</h4>
                  <p className="text-sm text-gray-600 text-center">Smart AI learns your style preferences</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold mb-2">AI Personalization</h3>
                <p className="text-gray-600">Smart recommendations based on your style preferences</p>
              </div>
            </div>
            <div className="group">
              <div className="screenshot-container relative aspect-[9/16] overflow-hidden rounded-2xl bg-white p-2 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-b from-green-100 to-emerald-100 rounded-xl flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-black rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💖</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Save & Shop</h4>
                  <p className="text-sm text-gray-600 text-center">Wishlist favorites and shop with partners</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold mb-2">Save & Shop</h3>
                <p className="text-gray-600">Wishlist favorites and shop through partner retailers</p>
              </div>
            </div>
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

  const renderContactPage = () => {
    return (
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about MySwipes? Want to learn more about our affiliate program? 
                We'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm">
                    @
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:phasiphonglin@gmail.com" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      phasiphonglin@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm">
                    ⚡
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all min-h-[44px]"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all min-h-[44px]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all min-h-[44px]"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="black-button w-full py-3 text-lg min-h-[44px]"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Affiliate Program Inquiries</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in partnering with MySwipes? We work with fashion retailers and 
              brands to bring the best shopping experiences to our users. Reach out to 
              learn more about our affiliate partnership opportunities.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      {renderNavigation()}
      
      <main>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'privacy' && renderPrivacyPage()}
        {currentPage === 'terms' && renderTermsPage()}
        {currentPage === 'contact' && renderContactPage()}
      </main>

      {renderFooter()}
    </div>
  )
}

export default App
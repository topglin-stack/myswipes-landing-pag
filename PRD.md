# MySwipes Landing Site PRD

Create a polished, informative landing site for MySwipes to support affiliate program applications with complete navigation and required legal pages.

**Experience Qualities**:
1. **Professional** - Clean, credible design that establishes trust with potential affiliate partners
2. **Informative** - Clear value proposition and feature communication without overwhelming detail
3. **Accessible** - Inclusive design with proper navigation and interaction patterns

**Complexity Level**: 
- Content Showcase (information-focused) - Static informational site presenting app features and company details for affiliate partner evaluation

## Essential Features

### Landing Page
- **Functionality**: Present MySwipes app value proposition, features, and contact information
- **Purpose**: Convert visitors into app users and establish credibility for affiliate partnerships
- **Trigger**: User visits root URL
- **Progression**: Hero section → Features overview → Screenshots → Traffic disclosure → Supported merchants → Contact/Footer
- **Success criteria**: Clear understanding of app purpose, easy contact access, professional appearance

### Privacy Policy Page
- **Functionality**: Display GDPR/PDPA compliant privacy policy
- **Purpose**: Legal compliance and transparency for affiliate partnerships
- **Trigger**: User clicks Privacy link in navigation
- **Progression**: Navigate to privacy → Read policy content → Contact if needed
- **Success criteria**: Complete privacy information, contact details provided

### Terms of Service Page
- **Functionality**: Display usage terms and liability information
- **Purpose**: Legal protection and clear user expectations
- **Trigger**: User clicks Terms link in navigation
- **Progression**: Navigate to terms → Read terms content → Contact if needed
- **Success criteria**: Complete terms coverage, affiliate link disclosures

### Contact Integration
- **Functionality**: Direct email contact via mailto links
- **Purpose**: Enable communication with potential partners and users
- **Trigger**: User clicks contact buttons/links
- **Progression**: Click contact → Email client opens → Send message
- **Success criteria**: Email client opens with correct address

## Edge Case Handling
- **Navigation Errors**: All internal links resolve correctly, no 404 states
- **Button Dead-ends**: Coming soon buttons show feedback instead of breaking
- **Email Client Missing**: Mailto links gracefully handle missing email clients
- **Image Loading**: Placeholder content when images fail to load
- **Mobile Navigation**: Responsive menu for smaller screens

## Design Direction
The design should feel premium, trustworthy, and modern - similar to successful SaaS landing pages that convert both users and business partners. Clean, minimal interface serves the content without distraction.

## Color Selection
Monochromatic (black and white with glass effects)
- Clean, professional appearance emphasizing content over decoration
- High contrast ensures accessibility and readability

- **Primary Color**: Pure black (oklch(0 0 0)) - Professional, authoritative, high contrast
- **Secondary Colors**: Pure white (oklch(1 0 0)) for backgrounds, mid-grays for subtle elements
- **Accent Color**: Translucent white with blur effects for glass cards and interactive highlights
- **Foreground/Background Pairings**: 
  - Background (White): Black text (oklch(0 0 0)) - Ratio 21:1 ✓
  - Cards (Glass White): Black text (oklch(0 0 0)) - Ratio 21:1 ✓
  - Primary Buttons (Black): White text (oklch(1 0 0)) - Ratio 21:1 ✓

## Font Selection
System fonts convey reliability and performance while ensuring universal compatibility across devices and platforms.

- **Typographic Hierarchy**: 
  - H1 (Hero Title): System font stack/48px/bold/tight spacing
  - H2 (Section Headers): System font stack/32px/semibold/normal spacing
  - H3 (Card Titles): System font stack/24px/semibold/normal spacing
  - Body (Descriptions): System font stack/16px/normal/relaxed line height
  - Small (Footer/Meta): System font stack/14px/normal/normal spacing

## Animations
Subtle, purposeful motion that enhances usability without calling attention to itself - button hover effects and smooth transitions that feel native to the platform.

- **Purposeful Meaning**: Micro-interactions provide feedback and guide attention to key actions
- **Hierarchy of Movement**: Primary CTA buttons receive subtle scale effects, secondary interactions use opacity changes

## Component Selection
- **Components**: Card components for features, Button variants for different action types, responsive navigation
- **Customizations**: Glass effect cards with backdrop blur, custom button styles for black/glass variants
- **States**: Buttons show hover (scale), focus (outline), and disabled states clearly
- **Icon Selection**: Minimal icon usage, relying on clear typography and layout
- **Spacing**: Consistent 16px base unit with 32px, 64px, and 96px multiples for major spacing
- **Mobile**: Single-column stacking, collapsible navigation, touch-friendly 44px+ tap targets
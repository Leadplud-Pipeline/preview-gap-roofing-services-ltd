import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { Phone, Envelope, Clock, FacebookLogo } from "@phosphor-icons/react";
import logo from "@/assets/logo-hd.png";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const footerRef = useStaggerReveal<HTMLDivElement>(0.1, 100);

  return (
    <footer className="bg-surface border-t-4 border-secondary" role="contentinfo">
      <div className="container-content section-padding">
        {/* Columns */}
        <div ref={footerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Navigation */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Navigation</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {["Home:/", "About:/about", "Services:/services", "Locations:/locations", "Gallery:/gallery", "Reviews:/reviews", "Blog:/blog", "Contact:/contact", "Book Estimate:/book"].map(item => {
                const [label, href] = item.split(":");
                return <Link key={href} to={href} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{label}</Link>;
              })}
            </nav>
            <Link to="/" className="mt-6 hidden md:block">
              <img src={logo} alt="GAP Roofing Services Ltd logo" width={220} height={88} className="h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Services */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Services</h3>
            <nav className="space-y-2" aria-label="Footer services">
              {services.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{s.name}</Link>
              ))}
            </nav>
          </div>

          {/* Locations */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Locations</h3>
            <nav className="space-y-2" aria-label="Footer locations">
              {locations.map(l => (
                <Link key={l.slug} to={`/locations/${l.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{l.name}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Contact</h3>
            <address className="not-italic space-y-3">
              <a href="tel:+441618500602" className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} weight="bold" className="text-primary" /> +44 161 850 0602
              </a>
              <a href="mailto:info@preview.vercel.app" className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                <Envelope size={16} weight="bold" className="text-primary" /> info@preview.vercel.app
              </a>
              <a href="https://www.facebook.com/people/GAP Roofing Services-Roofing-Group/61582355876872/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                <FacebookLogo size={16} weight="bold" className="text-primary" /> Facebook
              </a>
              <div className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                <Clock size={16} weight="bold" className="text-primary mt-0.5" />
                <div>
                   <p>Mon–Fri: 06:00–18:00</p>
                    <p>Sat–Sun: 08:00–17:00</p>
                    <p>24hr Emergency Calls</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Wikipedia-style summary */}
        <div className="border-t border-border pt-8 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl font-sans">
            GAP Roofing Services Ltd is a family-run roofing company based in Manchester, Manchester. The company provides emergency roof repairs, roof replacements, flat roof installation, gutter cleaning, uPVC fascias and soffits, chimney repairs, and more to residential and commercial clients across the Manchester and Manchester. GAP Roofing Services Ltd is fully insured and offers free roof inspections and no-obligation written quotes on all work.
          </p>
        </div>

        {/* NAP + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground font-sans space-y-1">
            <p className="font-semibold text-foreground">GAP Roofing Services Ltd</p>
            <p>Manchester</p>
            <p>Tel: +44 161 850 0602</p>
            <p>Email: info@preview.vercel.app</p>
            <p>Serving: Manchester & Manchester</p>
          </div>
          <p className="text-xs text-muted-foreground font-sans">© 2025 GAP Roofing Services Ltd. All Rights Reserved.</p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "GAP Roofing Services Ltd",
            telephone: "+441618500602",
            email: "info@preview.vercel.app",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Manchester",
              addressLocality: "Manchester",
              postalCode: "FY4 4EF",
              addressRegion: "Manchester",
              addressCountry: "GB"
            },
            areaServed: ["Manchester","Manchester","Manchester","Manchester","Manchester","Ormskirk","Southport","Preston","Wigan","Skelmersdale","Chorley","Windermere","Kendal","Keswick","Lancaster"],
            description: "GAP Roofing Services Ltd is a family-run roofing company based in Manchester, Manchester, serving Manchester and surrounding areas. Services include emergency roof repairs, roof replacement, flat roofing, gutter cleaning, chimney repairs, and more. Free roof inspection on every job.",
            priceRange: "££",
            openingHours: ["Mo-Fr 06:00-18:00","Sa-Su 08:00-17:00"],
            sameAs: ["https://www.facebook.com/people/GAP Roofing Services-Roofing-Group/61582355876872/"]
          })
        }}
      />
      <div className="border-t border-secondary-foreground/10 py-3 text-center">
        <p className="text-[12px] font-light text-muted-foreground/70">
          Built with ❤️ by{' '}
          <a
            href="https://leadplug.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline transition-colors"
            style={{ color: 'inherit' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--primary))')}
            onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
          >
            LEADPLUG
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

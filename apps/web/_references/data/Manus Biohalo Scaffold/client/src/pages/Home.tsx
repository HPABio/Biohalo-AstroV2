import { Button } from "@/components/ui/button";
import { ChevronRight, Droplet, Leaf, Microscope, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * BioHalo Landing Page
 * 
 * Design Philosophy: Modern Biotech Aesthetic with Marine Elegance
 * - Ocean Blue (#003d66) and Teal (#00a896) with Cyan (#00d9ff) accents
 * - Clean, investor-ready design
 * - Sophisticated typography with Playfair Display + Inter
 * - Smooth animations and transitions
 */

export default function Home() {
  const [expandedTeamMember, setExpandedTeamMember] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-teal-500 rounded-lg flex items-center justify-center">
              <Droplet className="w-5 h-5 text-background" />
            </div>
            <span className="font-bold text-lg">BioHalo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm hover:text-accent transition">Problem</a>
            <a href="#solution" className="text-sm hover:text-accent transition">Solution</a>
            <a href="#technology" className="text-sm hover:text-accent transition">Technology</a>
            <a href="#roadmap" className="text-sm hover:text-accent transition">Roadmap</a>
            <a href="#team" className="text-sm hover:text-accent transition">Team</a>
          </div>
          <Button className="bg-accent text-background hover:bg-accent/90">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 border-b border-border animated-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="heading-display text-white mb-4">
                  Biofluorination for a Cleaner Ocean
                </h1>
                <p className="text-lg text-blue-200 leading-relaxed">
                  BioHalo develops non-biocidal, biodegradable antifouling ingredients produced by microorganisms to replace toxic PFAS and copper coatings.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-accent text-background hover:bg-accent/90 font-semibold">
                  Partner With Us
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64 bg-gradient-to-br from-accent/20 to-teal-500/10 rounded-2xl border border-accent/30 flex items-center justify-center backdrop-blur">
                <Microscope className="w-32 h-32 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">The Global Impact of Biofouling</h2>
              <p className="text-blue-200">Environmental and economic challenges driving innovation</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition">
                <div className="text-4xl font-bold text-accent mb-2">$31B</div>
                <p className="text-blue-200 text-sm">Annual cost due to hull biofouling</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-blue-200 text-sm">Increase in fuel consumption</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition">
                <div className="text-4xl font-bold text-accent mb-2">90%</div>
                <p className="text-blue-200 text-sm">Coatings rely on toxic biocides or PFAS</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-lg p-8">
              <p className="text-blue-100 leading-relaxed">
                Biofouling—the accumulation of marine organisms on ship hulls—costs the global shipping industry billions annually. Traditional antifouling coatings rely on toxic biocides and PFAS compounds that harm marine ecosystems and persist in the environment. There is an urgent need for sustainable, effective alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">A Biological Alternative</h2>
              <p className="text-blue-200">Microbial biofluorination for sustainable coatings</p>
            </div>

            <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-lg p-8 mb-8">
              <p className="text-blue-100 leading-relaxed">
                BioHalo's proprietary technology uses controlled microbial fermentation to produce biofluorinated compounds. These non-biocidal, biodegradable ingredients provide superior antifouling performance while eliminating environmental toxicity.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Leaf, title: "Non-biocidal", desc: "No toxic compounds" },
                { icon: Droplet, title: "Biodegradable", desc: "OECD 301B compliant" },
                { icon: Zap, title: "Low Fluorine", desc: "Efficient chemistry" },
                { icon: TrendingUp, title: "Compatible", desc: "Works with existing coatings" },
                { icon: Leaf, title: "Sustainable", desc: ">50% GHG reduction" },
                { icon: Microscope, title: "Proven", desc: "Lab-validated performance" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition group">
                  <feature.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">Microbial Biofluorination</h2>
              <p className="text-blue-200">Controlled fermentation for precision chemistry</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="space-y-8">
                <p className="text-blue-100 leading-relaxed">
                  BioHalo's proprietary microorganisms perform controlled mono-fluorination through fermentation. This biological approach enables stereo-selective synthesis that would be difficult and expensive to achieve through traditional chemical synthesis.
                </p>

                {/* Process Flow */}
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", label: "Feedstock", desc: "Renewable inputs" },
                    { step: "2", label: "Microbes", desc: "Proprietary strains" },
                    { step: "3", label: "Biofluorination", desc: "Fermentation process" },
                    { step: "4", label: "Products", desc: "Coatings & pharma" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-gradient-to-br from-accent to-teal-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <span className="text-background font-bold">{item.step}</span>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.label}</h4>
                      <p className="text-blue-200 text-xs">{item.desc}</p>
                      {idx < 3 && <ChevronRight className="w-4 h-4 text-accent mx-auto mt-3 opacity-50" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">2-FMA: Our Flagship Product</h2>
              <p className="text-blue-200">2-Fluoro-cis,cis-muconate for multiple applications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-accent font-semibold mb-4">Product Advantages</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>Stereo-pure structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>Difficult to synthesize chemically</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>Biodegradable and non-toxic</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>Multiple commercial applications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-accent font-semibold mb-4">Market Applications</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex gap-3">
                    <Droplet className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Marine coatings & antifouling</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Advanced polymers</span>
                  </li>
                  <li className="flex gap-3">
                    <Microscope className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Pharmaceutical intermediates</span>
                  </li>
                  <li className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Specialty chemicals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">A $10B Underwater Coatings Market</h2>
              <p className="text-blue-200">Massive addressable market with growing demand</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">Market Size</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200 text-sm mb-2">Global Coatings Market</p>
                    <p className="text-2xl font-bold text-white">$222B <span className="text-sm text-blue-300">(2025)</span></p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-blue-200 text-sm mb-2">Projected Growth</p>
                    <p className="text-2xl font-bold text-accent">$314B <span className="text-sm text-blue-300">(2032)</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">BioHalo Target</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200 text-sm mb-2">Antifouling Raw Materials Market</p>
                    <p className="text-2xl font-bold text-white">5% Target</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-blue-200 text-sm mb-2">Addressable Opportunity</p>
                    <p className="text-2xl font-bold text-accent">$10B+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">Development Roadmap</h2>
              <p className="text-blue-200">From optimization to market launch and beyond</p>
            </div>

            <div className="space-y-6">
              {[
                { year: "2026", milestone: "Strain Optimization & Production", detail: "300kg production capacity achieved" },
                { year: "2027", milestone: "Regulatory Approval", detail: "REACH dossier and EU regulatory approval" },
                { year: "2027", milestone: "Scale & Funding", detail: "Scale to 3000kg production, Series A funding" },
                { year: "2028", milestone: "Market Launch", detail: "Commercial launch of 2-FMA products" },
                { year: "2029+", milestone: "Break-Even", detail: "Profitability at 100+ tonnes production" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center text-background font-bold">
                      {idx + 1}
                    </div>
                    {idx < 4 && <div className="w-1 h-16 bg-gradient-to-b from-accent to-teal-500 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <p className="text-accent font-semibold text-sm">{item.year}</p>
                    <h3 className="text-white font-bold text-lg mb-1">{item.milestone}</h3>
                    <p className="text-blue-200">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">Leadership Team</h2>
              <p className="text-blue-200">Experienced scientists and entrepreneurs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Alberto De Maria", role: "Chief Scientific Officer", expertise: "Biotechnology & Fermentation" },
                { name: "Johann Liebeton", role: "CEO", expertise: "Biotech Leadership & Strategy" },
                { name: "Nicolas Krink", role: "Fundraising Advisor", expertise: "Venture Capital & Growth" },
                { name: "Pablo Nikel", role: "Scientific Advisor", expertise: "Microbiology & Synthetic Biology" },
                { name: "Arthur Vancolen", role: "Research Assistant", expertise: "Laboratory Operations" },
                { name: "Andreas Heyl", role: "Commercialization Advisor", expertise: "Market Development" },
              ].map((member, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-teal-500 mb-4"></div>
                  <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-blue-200 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h2 className="heading-lg text-white">Funding & Support</h2>
              <p className="text-blue-200">Backed by leading investors and institutions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-accent font-semibold mb-6">Current Funding</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-blue-100">Pre-Seed Round</span>
                    <span className="text-accent font-bold">€500K</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-blue-100">Grant Funding</span>
                    <span className="text-accent font-bold">€200K</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t-2 border-accent">
                    <span className="text-white font-semibold">Total Raised</span>
                    <span className="text-accent font-bold text-lg">€700K</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-accent font-semibold mb-6">Backed By</h3>
                <div className="space-y-3 text-blue-100">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Y Combinator (Batch S24)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Leading biotech investors
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    EU research grants
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Strategic partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 border-b border-border">
        <div className="container max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="heading-lg text-white">
              Join us in building the next generation of sustainable fluorochemicals
            </h2>
            <p className="text-blue-200 text-lg">
              We're looking for partners, investors, and talented individuals to help scale BioHalo's mission.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-accent text-background hover:bg-accent/90 font-semibold px-8 py-6 text-lg">
                Contact BioHalo
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 md:px-8 bg-black/30">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li><a href="#" className="hover:text-accent transition">2-FMA</a></li>
                <li><a href="#" className="hover:text-accent transition">Technology</a></li>
                <li><a href="#" className="hover:text-accent transition">Applications</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Team</a></li>
                <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">News</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
            <p>&copy; 2026 BioHalo. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Twitter</a>
              <a href="#" className="hover:text-accent transition">LinkedIn</a>
              <a href="#" className="hover:text-accent transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

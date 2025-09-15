import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Briefcase, 
  Star, 
  ChartLine, 
  Handshake, 
  Users, 
  UserCheck, 
  Lightbulb,
  Building,
  MapPin,
  Mail,
  Download,
  Shield,
  GraduationCap,
  Laptop,
  Quote,
  Calendar,
  Linkedin
} from "lucide-react";

export default function Home() {
  const responsibilities = [
    "Leads business development, partnerships, and funding strategy.",
    "Builds institutional relationships with universities, TVETs, and SMEs.",
    "Oversees market strategy, branding, and national scale-up roadmap."
  ];

  const skills = [
    { name: "Sales & Marketing Strategy", icon: ChartLine, description: "Strategic planning and execution" },
    { name: "Partnership Development", icon: Handshake, description: "Building strategic alliances" },
    { name: "SME & Institutional Engagement", icon: Users, description: "Stakeholder relationship management" },
    { name: "Team Leadership", icon: UserCheck, description: "Inspiring and guiding teams" },
    { name: "Brand Innovation", icon: Lightbulb, description: "Creative brand development" }
  ];

  const competencyTags = [
    "Business Development",
    "Strategic Partnerships", 
    "Market Analysis",
    "Brand Strategy",
    "Stakeholder Management",
    "Educational Innovation",
    "SME Empowerment",
    "Team Leadership"
  ];

  const handleContact = () => {
    // TODO: Implement contact form functionality
    console.log("Contact clicked");
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download functionality
    console.log("Download CV clicked");
  };

  const handleScheduleCall = () => {
    // TODO: Implement calendar scheduling
    console.log("Schedule call clicked");
  };

  const handleLinkedIn = () => {
    // TODO: Add LinkedIn profile integration
    console.log("LinkedIn clicked");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="hero-gradient text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Photo Placeholder */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30 flex items-center justify-center overflow-hidden">
                <User className="w-24 h-24 text-primary-foreground/60" data-testid="img-profile-placeholder" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
            
            {/* Header Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4" data-testid="text-name">
                Lebo Khoahlape
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90" data-testid="text-title">
                Founder & Business Development Lead
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                  <Building className="w-4 h-4" />
                  <span>ESPANENG</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>South Africa</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                  <Mail className="w-4 h-4" />
                  <span>lebo@espaneng.com</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-4">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-semibold"
                  onClick={handleContact}
                  data-testid="button-contact"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 px-8 py-3 font-semibold"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* About Section */}
        <section className="section-card bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground" data-testid="heading-about">About</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-about-description">
              Lebo is a dynamic sales and marketing professional with a proven track record in insurance, education, and digital technology ventures. As the visionary behind ESPANENG, she combines strong client acquisition skills with a passion for innovation in education and SME empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-muted rounded-lg" data-testid="card-expertise-insurance">
              <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="font-semibold mb-1">Insurance</h4>
              <p className="text-sm text-muted-foreground">Industry Expertise</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg" data-testid="card-expertise-education">
              <GraduationCap className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="font-semibold mb-1">Education</h4>
              <p className="text-sm text-muted-foreground">Sector Innovation</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg" data-testid="card-expertise-tech">
              <Laptop className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="font-semibold mb-1">Digital Tech</h4>
              <p className="text-sm text-muted-foreground">Technology Ventures</p>
            </div>
          </div>
        </section>

        {/* Role Section */}
        <section className="section-card bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground" data-testid="heading-role">Role at ESPANENG</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Key Responsibilities</h3>
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    data-testid={`item-responsibility-${index}`}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{responsibility}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-primary mb-4">Impact Areas</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center" data-testid="metric-partnerships">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Partnerships</div>
                </div>
                <div className="text-center" data-testid="metric-smes">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">SMEs Engaged</div>
                </div>
                <div className="text-center" data-testid="metric-institutions">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Institutions</div>
                </div>
                <div className="text-center" data-testid="metric-provinces">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Provinces</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-card bg-card rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground" data-testid="heading-skills">Key Strengths</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-muted rounded-lg p-6 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  data-testid={`card-skill-${index}`}
                >
                  <IconComponent className="w-8 h-8 mb-4 text-primary group-hover:text-primary-foreground mx-auto" />
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <p className="text-sm opacity-80">{skill.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Skill Tags */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Core Competencies</h4>
            <div className="flex flex-wrap gap-3">
              {competencyTags.map((tag, index) => (
                <span 
                  key={index}
                  className="skill-tag bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid={`tag-competency-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-card bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 shadow-lg border border-accent/20">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-accent mb-6 mx-auto" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8" data-testid="text-quote">
              "My drive is to see graduates leave with not just a qualification but a portfolio of impact — and SMEs empowered in the process."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-1 h-16 bg-accent"></div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Lebo Khoahlape</div>
                <div className="text-muted-foreground">Founder & Business Development Lead</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-card bg-primary rounded-xl p-8 shadow-lg text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-contact">Let's Connect</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to explore partnerships, discuss business opportunities, or learn more about ESPANENG's innovative approach to education and SME empowerment?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-semibold text-lg"
              onClick={handleContact}
              data-testid="button-send-message"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 px-8 py-4 font-semibold text-lg"
              onClick={handleScheduleCall}
              data-testid="button-schedule-call"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 px-8 py-4 font-semibold text-lg"
              onClick={handleLinkedIn}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">&copy; 2024 Lebo Khoahlape. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">Empowering education and SMEs through innovative partnerships.</p>
        </div>
      </footer>
    </div>
  );
}

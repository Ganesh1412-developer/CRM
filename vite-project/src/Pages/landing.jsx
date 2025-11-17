import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* Navbar */}
      <header className="w-full py-4 shadow-lg bg-white fixed top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-purple-600">CRM Suite</h1>

          <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#features" className="hover:text-purple-600 transition-all duration-300 hover:scale-110">Features</a>
            <a href="#benefits" className="hover:text-purple-600 transition-all duration-300 hover:scale-110">Why Us</a>
            <a href="#pricing" className="hover:text-purple-600 transition-all duration-300 hover:scale-110">Pricing</a>
            <a href="#testimonials" className="hover:text-purple-600 transition-all duration-300 hover:scale-110">Reviews</a>
            <a href="#faq" className="hover:text-purple-600 transition-all duration-300 hover:scale-110">FAQ</a>
          </nav>

          <div className="flex gap-3">
            <Link to="/login">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="border-2 border-purple-500 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 mt-24 py-16">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Grow Your Business <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Faster & Smarter</span>
          </h2>
<br></br>
          <p className="text-gray-600 text-xl">
            The all-in-one CRM platform that helps you manage leads, close deals, automate tasks, and generate invoices—designed for teams who want to work smarter, not harder.
          </p>
<br></br>
          <div className="flex gap-4  ">
            <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Start Free Trial
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
              Book a Demo
            </button>
          </div>
<br></br>
          <p className="text-sm text-gray-500">✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime</p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          {/* CRM Dashboard Illustration */}
          <div className="relative w-full h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CRM</span>
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                <div className="w-20 h-3 bg-gray-200 rounded"></div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Leads</div>
                  <div className="text-lg font-bold text-purple-600">847</div>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Deals</div>
                  <div className="text-lg font-bold text-pink-600">234</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Revenue</div>
                  <div className="text-lg font-bold text-gray-900">$45K</div>
                </div>
              </div>
              
              {/* Chart Representation */}
              <div className="space-y-2">
                <div className="flex items-end gap-1 h-24">
                  <div className="flex-1 bg-purple-300 rounded-t" style={{height: '60%'}}></div>
                  <div className="flex-1 bg-pink-300 rounded-t" style={{height: '80%'}}></div>
                  <div className="flex-1 bg-purple-300 rounded-t" style={{height: '45%'}}></div>
                  <div className="flex-1 bg-pink-300 rounded-t" style={{height: '90%'}}></div>
                  <div className="flex-1 bg-purple-300 rounded-t" style={{height: '70%'}}></div>
                </div>
              </div>
              
              {/* List Items */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h3>
            <p className="text-gray-600 text-lg">Powerful features designed to streamline your sales process and boost productivity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Lead Management", desc: "Capture, track, and nurture leads from multiple sources. Set follow-up reminders and never miss an opportunity to convert." },
              { icon: "👥", title: "Customer Management", desc: "Store complete customer profiles with contact history, preferences, and purchase records in one centralized database." },
              { icon: "🎯", title: "Sales Pipeline", desc: "Visual Kanban board to track deals from prospecting to closing. Drag, drop, and win more deals faster." },
              { icon: "⚡", title: "Task Automation", desc: "Automate repetitive tasks and follow-ups. Set reminders, schedule emails, and stay on top of your to-do list." },
              { icon: "📝", title: "Quotation & Invoices", desc: "Generate professional quotes and invoices in seconds. Track payments and send automated reminders." },
              { icon: "📈", title: "Analytics & Reports", desc: "Real-time dashboards showing sales performance, revenue forecasts, and team productivity metrics." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-purple-200">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose CRM Suite</h3>
            <p className="text-gray-600 text-lg">Join thousands of companies transforming their sales process</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "10x", label: "Faster lead response time" },
              { stat: "35%", label: "Increase in sales conversion" },
              { stat: "5hrs", label: "Saved per employee weekly" },
              { stat: "99.9%", label: "Platform uptime guaranteed" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                <div className="text-purple-600 text-5xl font-bold mb-2 animate-pulse-slow">{item.stat}</div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Quick Setup", desc: "Get started in minutes, not months. Our intuitive interface requires zero training." },
              { icon: "🔒", title: "Bank-Level Security", desc: "Your data is encrypted and protected with enterprise-grade security protocols." },
              { icon: "💬", title: "24/7 Support", desc: "Our expert team is always available to help you succeed via chat, email, or phone." }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-6 group hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 rounded-xl transition-all duration-300">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Pipeline Flow */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Your Sales Journey, Simplified</h3>
            <p className="text-gray-600 text-lg">Track every deal from first contact to closed won</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { icon: "🎯", title: "Lead Capture", desc: "Collect leads from web forms, emails, and calls" },
              { icon: "📞", title: "Qualification", desc: "Score and prioritize hot prospects" },
              { icon: "💼", title: "Proposal", desc: "Send quotes and negotiate terms" },
              { icon: "✅", title: "Closed Won", desc: "Generate invoice and celebrate" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{step.icon}</div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {idx < 3 && <div className="text-purple-600 text-2xl hidden md:block transform hover:scale-125 transition-transform">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Works With Your Favorite Tools</h3>
            <p className="text-gray-600 text-lg">Seamlessly integrate with the apps you already use</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: "💬", name: "WhatsApp" },
              { icon: "📧", name: "Gmail" },
              { icon: "📅", name: "Google Calendar" },
              { icon: "💼", name: "Slack" },
              { icon: "💳", name: "Stripe" },
              { icon: "💰", name: "PayPal" }
            ].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <div className="text-4xl mb-2">{tool.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h3>
            <p className="text-gray-600 text-lg">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-2">Free</h4>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Up to 50 contacts</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Basic lead management</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">1 user account</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Email support</span></li>
              </ul>
              <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Start Free
              </button>
            </div>

            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-2">Basic</h4>
              <p className="text-gray-600 mb-6">For small teams</p>
              <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Up to 1,000 contacts</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Sales pipeline</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Up to 3 users</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Task automation</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Basic reporting</span></li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Trial
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl transform scale-105 hover:scale-110 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">MOST POPULAR</div>
              <h4 className="text-2xl font-bold mb-2">Pro</h4>
              <p className="text-white opacity-90 mb-6">For growing businesses</p>
              <div className="text-4xl font-bold mb-6">$79<span className="text-lg opacity-80">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>Unlimited contacts</span></li>
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>Advanced pipeline</span></li>
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>Up to 10 users</span></li>
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>Full automation</span></li>
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>Advanced analytics</span></li>
                <li className="flex items-start"><span className="text-yellow-400 mr-2">✓</span><span>All integrations</span></li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Everything in Pro</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Unlimited users</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Custom integrations</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Dedicated support</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">SLA guarantee</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-600">Custom training</span></li>
              </ul>
              <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Loved by Teams Worldwide</h3>
            <p className="text-gray-600 text-lg">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initials: "SM", name: "Sarah Mitchell", role: "Sales Director, TechCorp", review: "CRM Suite transformed our sales process. We've seen a 40% increase in conversions within just 3 months. The automation features save us hours every week.", bg: "bg-purple-200", text: "text-purple-700" },
              { initials: "JC", name: "James Chen", role: "Founder, GrowthLabs", review: "The best investment we've made for our business. The interface is intuitive, and the customer support team is incredibly responsive. Highly recommended!", bg: "bg-pink-200", text: "text-pink-700" },
              { initials: "EP", name: "Emily Parker", role: "VP Sales, CloudSoft", review: "We switched from our old CRM and couldn't be happier. The reporting features give us insights we never had before. Our team loves how easy it is to use.", bg: "bg-gray-200", text: "text-gray-700" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.bg} rounded-full flex items-center justify-center ${testimonial.text} font-bold`}>{testimonial.initials}</div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-lg">Got questions? We've got answers</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to set up CRM Suite?",
                a: "Most teams are up and running within 15 minutes. Our intuitive setup wizard guides you through importing contacts, customizing your pipeline, and connecting your favorite tools. No technical expertise required!"
              },
              {
                q: "Can I migrate data from my existing CRM?",
                a: "Absolutely! We support data imports from most major CRMs including Salesforce, HubSpot, and Zoho. Our support team can also assist with custom migrations to ensure a smooth transition."
              },
              {
                q: "Is my data secure?",
                a: "Yes. We use bank-level 256-bit SSL encryption for all data transmission and storage. Your data is backed up daily, and we're fully GDPR and SOC 2 compliant. We'll never share your data with third parties."
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, there are no long-term contracts. You can cancel your subscription at any time from your account settings. If you cancel, you'll retain access until the end of your current billing period."
              },
              {
                q: "Do you offer training for new users?",
                a: "Yes! We provide free onboarding training for all plans, comprehensive video tutorials, help documentation, and live chat support. Enterprise customers also get dedicated training sessions tailored to their team."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also arrange invoice-based billing."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle."
              },
              {
                q: "Is there a mobile app available?",
                a: "Yes! CRM Suite is available on iOS and Android. The mobile app includes all core features so you can manage leads, update deals, and stay productive on the go."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-purple-50 transition-all duration-300"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                  <span className={`text-purple-600 text-2xl flex-shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Sales Process?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of businesses growing faster with CRM Suite</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 opacity-80 text-sm">✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white text-xl font-bold mb-4">CRM Suite</h4>
              <p className="text-sm mb-4">The all-in-one CRM solution for modern sales teams.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">𝕏</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">in</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">f</a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} CRM Suite. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              <a href="mailto:support@crmsuite.com" className="hover:text-white transition-colors">support@crmsuite.com</a> • 
              <a href="tel:+1234567890" className="hover:text-white transition-colors ml-2">+1 (234) 567-890</a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
"use client";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(2);

  const stepperContent = {
    1: {
      label: "Step 1 of 4",
      progress: "25%",
      title: "Choose your tool",
      sub: "Pick the assessment that matches your goal.",
      body: [
        { icon: "📏", text: "BMI Calculator" },
        { icon: "🔥", text: "BMR Calculator" },
        { icon: "🍽️", text: "Calorie Calculator" },
      ],
    },
    2: {
      label: "Step 2 of 4",
      progress: "50%",
      title: "Create your account",
      sub: "Continue with Google or enter your details.",
      body: [
        { icon: "G", text: "Continue with Google" },
        { icon: "✉️", text: "Full name & email" },
      ],
    },
    3: {
      label: "Step 3 of 4",
      progress: "75%",
      title: "Tell us about you",
      sub: "Just five quick fields.",
      body: [
        { icon: "🎂", text: "Age & gender" },
        { icon: "📐", text: "Height & weight" },
      ],
    },
    4: {
      label: "Step 4 of 4",
      progress: "100%",
      title: "Your report is ready",
      sub: "Download or save it to your account.",
      body: [{ icon: "📄", text: "Health_Report.pdf" }],
    },
  };

  return (
    <>
      <Head>
        <title>Falcoon — Free Fitness Assessment Tools</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <div className="site-header">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <div className="site-header__brand-mark">F</div>
            Falcoon
          </div>
          <nav className="site-header__nav">
            <ul className="site-header__links">
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#for-professionals">For professionals</a>
              </li>
            </ul>
          </nav>
          <div className="site-header__actions">
            <button className="btn btn--ghost">Sign in</button>
            <button className="btn btn--primary">Get started</button>
          </div>
        </div>
      </div> */}

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="u-container">
            <span className="u-eyebrow hero__eyebrow">
              🎯 Free assessment tools
            </span>
            <h1 className="hero__title">
              Get your fitness report in{" "}
              <span className="hero__title-accent">60 seconds</span>
            </h1>
            <p className="hero__subtitle">
              Choose from our free health assessment tools. No payment, no app
              to install.
            </p>
            <div className="hero__actions">
              <a href="#tools" className="btn btn--primary">
                Start free assessment
              </a>
              <a href="#how-it-works" className="btn btn--secondary">
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section className="section" id="tools">
          <div className="u-container">
            <div className="section__head">
              <span className="u-eyebrow section__eyebrow">Popular tools</span>
              <h2 className="section__title">Pick an assessment</h2>
              <p className="section__subtitle">
                Choose the tool that matches your goal. Takes 2-3 minutes to
                complete.
              </p>
            </div>

            <div className="tools-grid">
              <ToolCard
                icon="📏"
                title="BMI Calculator"
                description="Measure your body mass and see where you stand."
              />
              <ToolCard
                icon="🔥"
                title="BMR Calculator"
                description="Calculate your basal metabolic rate."
              />
              <ToolCard
                icon="🍽️"
                title="Calorie Calculator"
                description="Find your daily calorie needs."
              />
              <ToolCard
                icon="⚖️"
                title="Body Fat Calculator"
                description="Estimate your body composition."
              />
              <ToolCard
                icon="💧"
                title="Water Intake"
                description="Personalized hydration goals."
                status="soon"
              />
              <ToolCard
                icon="🥗"
                title="Macro Calculator"
                description="Perfect macronutrient balance."
                status="soon"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--alt" id="how-it-works">
          <div className="u-container">
            <div className="section__head">
              <span className="u-eyebrow section__eyebrow">The flow</span>
              <h2 className="section__title">How it works</h2>
            </div>

            <div className="how-it-works">
              <div className="how-it-works__step">
                <div className="how-it-works__number">1</div>
                <h3 className="how-it-works__title">Choose your tool</h3>
                <p className="how-it-works__desc">
                  Pick the assessment that matches your fitness goal.
                </p>
              </div>
              <div className="how-it-works__step">
                <div className="how-it-works__number">2</div>
                <h3 className="how-it-works__title">Answer questions</h3>
                <p className="how-it-works__desc">
                  Quick fields about your health and lifestyle.
                </p>
              </div>
              <div className="how-it-works__step">
                <div className="how-it-works__number">3</div>
                <h3 className="how-it-works__title">Get your report</h3>
                <p className="how-it-works__desc">
                  Instant results you can download or share.
                </p>
              </div>
            </div>

            <div className="phone-demo">
              <MobileStepperDemo
                currentStep={currentStep}
                stepperContent={stepperContent}
                setCurrentStep={setCurrentStep}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="u-container">
            <div className="section__head">
              <span className="u-eyebrow section__eyebrow">Questions?</span>
              <h2 className="section__title">Frequently asked</h2>
            </div>

            <div className="accordion">
              <AccordionItem
                question="Is it really free?"
                answer="Yes, completely free. No payment method required, no hidden costs."
              />
              <AccordionItem
                question="Do I need to create an account?"
                answer="No account needed for a quick assessment. Creating one lets you save and compare results over time."
              />
              <AccordionItem
                question="Can I share my results?"
                answer="Yes, download your report as a PDF or share directly. Perfect for fitness trainers and nutritionists."
              />
              <AccordionItem
                question="How accurate are the results?"
                answer="Our calculators use industry-standard formulas. They're estimates, not medical diagnoses. Consult a doctor for personalized advice."
              />
            </div>
          </div>
        </section>

        {/* FOR PROFESSIONALS */}
        <section className="section section--alt" id="for-professionals">
          <div className="u-container">
            <div className="pro-section__wrapper">
              <div className="pro-section">
                <span className="u-eyebrow">For professionals</span>
                <h2 className="pro-section__title">
                  Embed assessments in your business
                </h2>
                <p className="pro-section__subtitle">
                  Collect contact details and full assessment results in one
                  dashboard — no extra setup.
                </p>
                <ul className="pro-section__list">
                  <li className="pro-section__list-item">
                    <span className="pro-section__list-icon">✓</span>Name
                  </li>
                  <li className="pro-section__list-item">
                    <span className="pro-section__list-icon">✓</span>Email
                  </li>
                  <li className="pro-section__list-item">
                    <span className="pro-section__list-icon">✓</span>Phone
                  </li>
                  <li className="pro-section__list-item">
                    <span className="pro-section__list-icon">✓</span>Fitness
                    goal
                  </li>
                  <li className="pro-section__list-item">
                    <span className="pro-section__list-icon">✓</span>Assessment
                    results
                  </li>
                </ul>
                <a href="#" className="btn btn--secondary">
                  Open lead dashboard
                </a>
              </div>

              <div className="dashboard-preview">
                <div className="dashboard-preview__head">
                  <span className="dashboard-preview__head-title">
                    New leads
                  </span>
                  <span className="dashboard-preview__count">2 today</span>
                </div>

                <LeadCard
                  avatar="JS"
                  name="John Smith"
                  meta={["BMI 29", "Goal: Weight loss"]}
                  badge="New lead"
                  badgeType="new"
                />
                <LeadCard
                  avatar="SK"
                  name="Sarah Khan"
                  meta={["BMI 22", "Goal: Muscle gain"]}
                  badge="Interested"
                  badgeType="interested"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="section section--alt" id="marketplace">
          <div className="u-container">
            <div className="section__head">
              <span className="u-eyebrow section__eyebrow">
                The full library
              </span>
              <h2 className="section__title">
                A marketplace of free assessment tools
              </h2>
              <p className="section__subtitle">
                Start with health, then explore nutrition, fitness, and business
                tools as they launch.
              </p>
            </div>

            <MarketplaceTabs />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="u-container">
            <div className="final-cta">
              <h2 className="final-cta__title">
                Get your first report in 60 seconds
              </h2>
              <p className="final-cta__subtitle">
                No payment, no app to install — just a result you can keep.
              </p>
              <a href="#tools" className="btn btn--primary">
                Start Free Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="u-container site-footer__inner">
          <span className="site-footer__brand">Falcoon</span>
          <ul className="site-footer__links">
            <li>
              <a href="#tools">Tools</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#for-professionals">For professionals</a>
            </li>
          </ul>
          <span className="site-footer__copy">
            © 2026 Falcoon. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

function ToolCard({ icon, title, description, status }) {
  return (
    <div className="tool-card">
      <div className="tool-card__icon">{icon}</div>
      <h3 className="tool-card__title">{title}</h3>
      <p className="tool-card__description">{description}</p>
      {status === "soon" && (
        <span className="tool-card__badge">Coming soon</span>
      )}
      {!status && (
        <a href="#" className="tool-card__link">
          Use tool →
        </a>
      )}
    </div>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}>
      <button
        className="accordion__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion__toggle-text">{question}</span>
        <span className="accordion__toggle-icon">▼</span>
      </button>
      {isOpen && <div className="accordion__content">{answer}</div>}
    </div>
  );
}

function LeadCard({ avatar, name, meta, badge, badgeType }) {
  return (
    <div className="lead-card">
      <div className="lead-card__avatar">{avatar}</div>
      <div className="lead-card__body">
        <p className="lead-card__name">{name}</p>
        <div className="lead-card__meta">
          {meta.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
      <span className={`lead-card__badge lead-card__badge--${badgeType}`}>
        {badge}
      </span>
    </div>
  );
}

function MarketplaceTabs() {
  const [activeTab, setActiveTab] = useState("health");

  const marketplaceData = {
    health: [
      { name: "BMI Calculator", status: "live" },
      { name: "BMR Calculator", status: "live" },
      { name: "Body Fat Calculator", status: "live" },
      { name: "Calorie Calculator", status: "live" },
      { name: "Water Intake Calculator", status: "soon" },
    ],
    nutrition: [
      { name: "Protein Calculator", status: "live" },
      { name: "Macro Calculator", status: "soon" },
      { name: "Meal Planner", status: "soon" },
    ],
    fitness: [
      { name: "One Rep Max Calculator", status: "soon" },
      { name: "Fat Loss Calculator", status: "soon" },
      { name: "Muscle Gain Calculator", status: "soon" },
    ],
    business: [
      { name: "Lead Capture Forms", status: "soon" },
      { name: "Consultation Booking", status: "soon" },
      { name: "Client CRM", status: "soon" },
    ],
  };

  return (
    <div className="marketplace">
      <div className="marketplace__tabs">
        {Object.keys(marketplaceData).map((tab) => (
          <button
            key={tab}
            className={`marketplace__tab ${activeTab === tab ? "marketplace__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="marketplace__grid">
        {marketplaceData[activeTab].map((tool, i) => (
          <div key={i} className="marketplace__tool">
            <span className="marketplace__tool-name">{tool.name}</span>
            <span
              className={`marketplace__tool-tag ${
                tool.status === "live" ? "marketplace__tool-tag--live" : ""
              }`}
            >
              {tool.status === "live" ? "Live" : "Soon"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileStepperDemo({ currentStep, stepperContent, setCurrentStep }) {
  const data = stepperContent[currentStep];

  return (
    <div className="phone-demo__container">
      <div className="phone">
        <div className="phone__notch"></div>
        <div className="phone__body">
          <div className="mobile-stepper">
            <div className="mobile-stepper__header">
              <div className="mobile-stepper__progress-label">{data.label}</div>
              <div className="mobile-stepper__progress-bar">
                <div
                  className="mobile-stepper__progress-fill"
                  style={{ width: data.progress }}
                ></div>
              </div>
            </div>

            <div className="phone__content">
              <p className="phone__content-title">{data.title}</p>
              <p className="phone__content-sub">{data.sub}</p>

              {data.body.map((item, i) => (
                <div key={i} className="phone__fake-card">
                  <span className="phone__fake-card-icon">{item.icon}</span>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {item.text}
                  </span>
                </div>
              ))}

              <div className="phone__cta">
                <button className="btn btn--primary btn--block">
                  {currentStep === 4 ? "Download report" : "Continue"}
                </button>
              </div>
            </div>

            <div className="mobile-stepper__steps">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  className={`mobile-stepper__steps-item ${
                    currentStep === step
                      ? "mobile-stepper__steps-item--active"
                      : ""
                  }`}
                  onClick={() => setCurrentStep(step)}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

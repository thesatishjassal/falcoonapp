"use client";

import StepProgress from "../../app/components/stepprogress";
import StepLaunch from "../../app/components/steplaunch";
import StepPayment from "../components/steppayment";
import StepAutomation from "../../app/components/stepautomation";
import StepHosting from "../../app/components/stephosting";
import StepContact from "../../app/components/stepcontact";
import OrderSummary from "../../app/components/ordersummary";
import { useState } from "react";

const STEPS = ["Launch", "Payment", "Automation", "Hosting", "Details"];

const DEFAULT_STATE = {
  launch: { price: 14999, label: "Fitness Program" },
  payment: { price: 2999, label: "Razorpay" },
  automation: { price: 0, label: null },
  hosting: { price: 0, label: "I have my own hosting" },
  addons: { clientDashboard: false },
  contact: { name: "", email: "", phone: "" },
};

export default function CheckoutPage() {
  const [showSummary, setShowSummary] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState(DEFAULT_STATE);

  const total =
    selections.launch.price +
    selections.payment.price +
    selections.automation.price +
    selections.hosting.price +
    (selections.addons.clientDashboard ? 2999 : 0);

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    if (!selections.contact.name.trim()) {
      alert("Please fill your name");
      return;
    }
    alert(`Thank you ${selections.contact.name}!\nYour order is ready.`);
  };

  return (
    <>
      <div className="checkout">
        <div className="checkout__header">
          <h1>Build Your Funnel</h1>
          <p>Choose smart • Pay once • Launch fast</p>
        </div>
        <div className="checkout__layout  main-grid">
          <div className="checkout__main">
        <StepProgress steps={STEPS} currentStep={currentStep} />
            {currentStep === 1 && (
              <StepLaunch
                selected={selections.launch}
                onChange={(val) =>
                  setSelections((s) => ({ ...s, launch: val }))
                }
                onNext={nextStep}
              />
            )}
            {currentStep === 2 && (
              <StepPayment
                selected={selections.payment}
                onChange={(val) =>
                  setSelections((s) => ({ ...s, payment: val }))
                }
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {currentStep === 3 && (
              <StepAutomation
                selected={selections.automation}
                onChange={(val) =>
                  setSelections((s) => ({ ...s, automation: val }))
                }
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {currentStep === 4 && (
              <StepHosting
                selected={selections.hosting}
                addonDashboard={selections.addons.clientDashboard}
                onChange={(val) =>
                  setSelections((s) => ({ ...s, hosting: val }))
                }
                onAddonChange={(val) =>
                  setSelections((s) => ({
                    ...s,
                    addons: { ...s.addons, clientDashboard: val },
                  }))
                }
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {currentStep === 5 && (
              <StepContact
                contact={selections.contact}
                onChange={(val) =>
                  setSelections((s) => ({ ...s, contact: val }))
                }
                onSubmit={handleSubmit}
                onBack={prevStep}
              />
            )}
          </div>
          <div className="checkout__summary">
            {/* {showSummary && ( */}
            <OrderSummary
              selections={selections}
              total={total}
              onContinue={nextStep}
              isLastStep={currentStep === 5}
            />
            {/* )} */}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

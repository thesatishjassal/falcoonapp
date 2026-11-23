"use client";
import { useState } from "react";

export default function BMIPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
  });

  const calculateBMI = () => {
    const heightM = Number(form.height) / 100;
    return (Number(form.weight) / (heightM * heightM)).toFixed(1);
  };

  const bmi = calculateBMI();

  const getCategory = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="bmi">
      <div className="bmi__card">
        <div className="bmi__progress">
          <div
            className="bmi__progress-fill"
            style={{
              width: `${(step / 5) * 100}%`,
            }}
          />
        </div>

        {step === 1 && (
          <>
            <h1 className="bmi__title">Select Gender</h1>

            <div className="bmi__options">
              <button
                className={`bmi__option ${
                  form.gender === "Male" ? "bmi__option--active" : ""
                }`}
                onClick={() => {
                  setForm({
                    ...form,
                    gender: "Male",
                  });
                  setStep(2);
                }}
              >
                👨 Male
              </button>

              <button
                className={`bmi__option ${
                  form.gender === "Female" ? "bmi__option--active" : ""
                }`}
                onClick={() => {
                  setForm({
                    ...form,
                    gender: "Female",
                  });
                  setStep(2);
                }}
              >
                👩 Female
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="bmi__title">Your Age</h1>

            <input
              type="number"
              className="bmi__input"
              placeholder="29"
              value={form.age}
              onChange={(e) =>
                setForm({
                  ...form,
                  age: e.target.value,
                })
              }
            />

            <button className="bmi__btn" onClick={() => setStep(3)}>
              Continue
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="bmi__title">Height (cm)</h1>

            <input
              type="number"
              className="bmi__input"
              placeholder="175"
              value={form.height}
              onChange={(e) =>
                setForm({
                  ...form,
                  height: e.target.value,
                })
              }
            />

            <button className="bmi__btn" onClick={() => setStep(4)}>
              Continue
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="bmi__title">Weight (kg)</h1>

            <input
              type="number"
              className="bmi__input"
              placeholder="75"
              value={form.weight}
              onChange={(e) =>
                setForm({
                  ...form,
                  weight: e.target.value,
                })
              }
            />

            <button className="bmi__btn" onClick={() => setStep(5)}>
              Calculate BMI
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <div className="bmi__result-circle">{bmi}</div>

            <h2 className="bmi__result-title">{getCategory()}</h2>

            <p className="bmi__result-text">Your BMI Score</p>

            <div className="bmi__scale">
              <span>Underweight</span>

              <span>Normal</span>

              <span>Overweight</span>

              <span>Obese</span>
            </div>

            <button
              className="bmi__btn"
              onClick={() => {
                setStep(1);
                setForm({
                  gender: "",
                  age: "",
                  height: "",
                  weight: "",
                });
              }}
            >
              Calculate Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

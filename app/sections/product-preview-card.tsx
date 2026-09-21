"use client";

import { useState } from "react";
import { productPreview } from "@/data/product-preview";

function ZapIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function ProductPreviewCard() {
  const {
    course,
    lessonTitle,
    steps,
    backLabel,
    nextLabel,
    xpPerStep,
    yourTurn,
  } = productPreview;
  const [revealedSteps, setRevealedSteps] = useState(1);
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const xp = revealedSteps * xpPerStep + (answerRevealed ? yourTurn.xpBonus : 0);
  const totalXp = steps.length * xpPerStep + yourTurn.xpBonus;
  const lessonComplete = revealedSteps === steps.length;

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-brand/[0.05] blur-2xl"
      />
      <div className="relative rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-900/5 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {course}
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold text-neutral-900">
              {lessonTitle}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
              <ZapIcon className="h-3.5 w-3.5" />
              +{xp} XP
            </span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-brand transition-all motion-reduce:transition-none"
                style={{ width: `${(xp / totalXp) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          {steps.map((step, index) => (
            <span
              key={step.equation}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                index < revealedSteps
                  ? "bg-brand text-white"
                  : "border border-neutral-300 text-neutral-500"
              }`}
            >
              {index + 1}
            </span>
          ))}
          <p aria-live="polite" className="text-xs font-medium text-neutral-500">
            Step {revealedSteps} of {steps.length}
          </p>
        </div>

        <ol className="mt-6 space-y-3">
          {steps.slice(0, revealedSteps).map((step, index) => (
            <li
              key={step.equation}
              className={
                index === revealedSteps - 1
                  ? "animate-slide-down rounded-xl border-l-2 border-brand bg-brand/[0.04] p-4 motion-reduce:animate-none"
                  : "p-4"
              }
            >
              <p className="font-heading text-2xl font-semibold text-neutral-900">
                {step.equation}
              </p>
              <p className="mt-1 text-sm text-neutral-600">{step.explanation}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setRevealedSteps((n) => Math.max(1, n - 1))}
            disabled={revealedSteps === 1}
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
          >
            {backLabel}
          </button>
          <button
            type="button"
            onClick={() =>
              setRevealedSteps((n) => Math.min(steps.length, n + 1))
            }
            disabled={lessonComplete}
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
          >
            {nextLabel}
          </button>
        </div>

        {lessonComplete && (
          <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
              {yourTurn.label}
            </p>
            <p className="mt-2 font-heading text-lg font-semibold text-neutral-900">
              {yourTurn.question}
            </p>
            <button
              type="button"
              onClick={() => setAnswerRevealed(true)}
              aria-expanded={answerRevealed}
              disabled={answerRevealed}
              className="mt-4 inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
            >
              {yourTurn.revealLabel}
            </button>
            {answerRevealed && (
              <div
                aria-live="polite"
                className="mt-4 flex flex-wrap items-center gap-3 rounded-lg border border-brand/20 bg-brand/[0.06] p-3"
              >
                <span className="font-heading text-xl font-bold text-brand">
                  {yourTurn.answer}
                </span>
                <span className="text-sm text-neutral-600">
                  {yourTurn.answerExplanation}
                </span>
                <span className="ml-auto rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  +{yourTurn.xpBonus} XP
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

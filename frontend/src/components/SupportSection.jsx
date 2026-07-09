import React from "react";
import { HeartHandshake } from "lucide-react";

const SupportSection = () => {
  return (
    <div className="rounded-2xl bg-brand-950 p-7 text-white overflow-hidden relative">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 ring-1 ring-inset ring-white/15">
            <HeartHandshake className="w-6 h-6 text-brand-200" />
          </div>
          <h2 className="font-display text-xl font-bold">Please Support Us</h2>
        </div>

        <p className="text-brand-100/90 text-[15px] mb-5 leading-relaxed">
          Donate to Blue Gate Initiative. Our programs supporting children&rsquo;s
          education, vulnerable families, and healthcare access rely on your
          generous support. All contributions will be gratefully acknowledged.
        </p>

        <div className="rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 p-5 text-sm">
          <p className="font-semibold text-white mb-3 uppercase tracking-wider text-xs">
            Our Financial Details
          </p>
          <dl className="space-y-2 text-brand-100/90">
            <div className="flex justify-between gap-4">
              <dt>Bank</dt>
              <dd className="font-medium text-white text-right">Wema Bank PLC</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="flex-shrink-0">Account Name</dt>
              <dd className="font-medium text-white text-right">
                Blue Gate Public Health Promotion Initiative
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Account Number</dt>
              <dd className="font-medium text-white text-right">0122653054</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;

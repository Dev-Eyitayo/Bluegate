import React from "react";

/**
 * Unified page-level header used at the top of every public page.
 * Matches the landing-page design system: eyebrow badge, Sora display
 * title, brand accent bar, optional lede paragraph.
 */
const PageHeader = ({ eyebrow, title, subtitle, icon: Icon }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-100 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      {Icon && !eyebrow && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 mb-5">
          <Icon className="w-7 h-7 text-brand-600" />
        </div>
      )}

      <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      <span
        className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500"
        aria-hidden="true"
      />

      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;

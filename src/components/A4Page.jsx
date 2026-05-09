import React from 'react';

export function A4Page({ children, className = '' }) {
  return (
    <div className={`w-[842px] h-[595px] bg-deep-slate border border-border-tech/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto mb-8 relative shrink-0 overflow-hidden print:w-[1123px] print:h-[794px] print:border-none print:shadow-none print:mb-0 print:break-after-page ${className}`}>
      {children}
    </div>
  );
}

"use client";

import { useLeadForm } from "./LeadFormContext";
import { type ReactNode, type MouseEvent } from "react";

export default function CtaButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useLeadForm();

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    open();
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

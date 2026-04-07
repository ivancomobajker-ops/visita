"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type LeadFormContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadFormContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LeadFormContext.Provider>
  );
}

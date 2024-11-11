'use client'

import React, { createContext, useState, useContext } from 'react';

interface PageVisit {
  path: string;
  timeSpent: number;
}

interface PageVisitContextType {
  visitedPages: PageVisit[];
  addPageVisit: (path: string, timeSpent: number) => void;
}

const PageVisitContext = createContext<PageVisitContextType | undefined>(undefined);

export const PageVisitTrackerProvider = ({ children }: { children: React.ReactNode }) => {
  const [visitedPages, setVisitedPages] = useState<PageVisit[]>([]);

  const addPageVisit = (path: string, timeSpent: number) => {
    setVisitedPages((prev) => [
      ...prev,
      { path, timeSpent },
    ]);
  };
console.log(visitedPages)
  return (
    <PageVisitContext.Provider value={{ visitedPages, addPageVisit }}>
      {children}
    </PageVisitContext.Provider>
  );
};

export const usePageVisitTrackerContext = () => {
  const context = useContext(PageVisitContext);
  if (!context) {
    throw new Error('usePageVisitContext must be used within a PageVisitProvider');
  }
  return context;
};

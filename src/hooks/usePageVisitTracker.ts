'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { usePageVisitTrackerContext } from '@/context/PageVisitTrackerContext';

export const usePageVisitTracker = () => {
  const [pageEnterTime, setPageEnterTime] = useState<number>(0);
  const { addPageVisit } = usePageVisitTrackerContext();
  const currentPath = usePathname();

  useEffect(() => {
    setPageEnterTime(Date.now());

    return () => {
      const pageExitTime = Date.now();
      const timeOnPage = pageExitTime - pageEnterTime;

      addPageVisit(currentPath, timeOnPage);

      console.log(`User spent ${timeOnPage}ms on ${currentPath}`);
    };
  }, [currentPath, addPageVisit]);

  return null;
};

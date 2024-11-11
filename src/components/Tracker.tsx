'use client'

import React from 'react'
import { usePageVisitTrackerContext } from '@/context/PageVisitTrackerContext';

function Tracker() {
    const { visitedPages } = usePageVisitTrackerContext();
    console.log(visitedPages)
  return (
    <div className="flex flex-col text-center">
        <h1>Pages Visited</h1>
      <ul>
        {visitedPages.map((page, index) => (
          <li key={index}>
            <strong>Path:</strong> {page.path} <br />
            <strong>Time Spent:</strong> {page.timeSpent} ms
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracker

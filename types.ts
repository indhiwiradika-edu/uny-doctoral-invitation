import React from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface GuestInfo {
  name: string;
}

export interface EventDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
}
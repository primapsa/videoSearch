import { StateRecord } from '@/types';

export const formattViews = (views: number): string => {
  if (views >= 1000000) {
    return `(${(views / 1000000).toFixed(1)}M)`;
  }
  if (views >= 1000) {
    return `(${(views / 1000).toFixed(1)}K)`;
  }
  return `(${views.toString()})`;
};
export const generateNumbers = (from: number, to: number): string[] => {
  const numbers = [];
  for (let year = from; year <= to; year += 1) {
    numbers.push(String(year));
  }
  return numbers;
};
export const generateYears = (from: number): string[] => {
  const current = new Date().getFullYear();
  return generateNumbers(from, current);
};

const compareObj = (first: any, second: any) => {
  JSON.stringify(first) === JSON.stringify(second);
};
export const compareStates = (init: StateRecord, next: StateRecord): boolean => {
  for (const field of Object.keys(next)) {
    if (!(field in init && compareObj(init[field], next[field]))) {
      return false;
    }
  }
  return true;
};

export function isBrowser() {
  return typeof window !== 'undefined';
}

export const wait = (duration: number) => {
  return new Promise((resove) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resove(null);
    }, duration);
  });
};

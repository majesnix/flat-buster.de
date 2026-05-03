const numericSort = (a: string, b: string) => {
  const n = (s: string) => parseInt(s.match(/(\d+)\.jpg$/)?.[1] ?? '0');
  return n(a) - n(b);
};

const toUrls = (glob: Record<string, unknown>) =>
  Object.keys(glob).map(p => p.replace('/public', '')).sort(numericSort);

export const aktuellImages = toUrls(import.meta.glob('/public/img/aktuell/*.jpg'));
export const allgemeinImages = toUrls(import.meta.glob('/public/img/allgemein/*.jpg'));
export const busterKleinImages = toUrls(import.meta.glob('/public/img/buster_klein/*.jpg'));
export const tierfreundeImages = toUrls(import.meta.glob('/public/img/tierfreunde/*.jpg'));
export const welpentreffenImages = toUrls(import.meta.glob('/public/img/welpentreffen/*.jpg'));

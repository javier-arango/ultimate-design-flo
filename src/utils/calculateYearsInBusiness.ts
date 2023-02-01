export default function calculateYearsInBusiness(yearFounded: number): number {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - yearFounded;

  return yearsInBusiness;
}

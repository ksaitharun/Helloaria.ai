export function cn(...classes: (string | undefined | boolean | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export async function getTimezone(): Promise<string> {
  try {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const data = await response.json();
    return data.timezone;
  } catch (error) {
    return 'Asia/Kolkata'; // Default timezone if API fails
  }
}

export async function getCountry(): Promise<string> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    return 'IN'; // Default to India if API fails
  }
}

export function generateWhatsAppLink(timezone: string): string {
  const phoneNumber = '917075471676';
  const message = encodeURIComponent(`Hi Aria, let's begin😊. In ${timezone} timezone, prefer English`);
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function formatPrice(country: string, isProPlan: boolean): string {
  const prices = {
    IN: { basic: 89, pro: 129 },
    US: { basic: 2, pro: 3 },
    GB: { basic: 2, pro: 3 },
    EU: { basic: 2, pro: 3 },
    DEFAULT: { basic: 2, pro: 3 }
  };

  const countryPrices = prices[country as keyof typeof prices] || prices.DEFAULT;
  const price = isProPlan ? countryPrices.pro : countryPrices.basic;
  const currency = country === 'IN' ? '₹' : '$';

  return `${currency}${price}`;
}

export function getCurrencySymbol(country: string): string {
  return country === 'IN' ? '₹' : '$';
}
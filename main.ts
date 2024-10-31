interface Country {
    name: string;
    population: string;
    capital: string;
  }
  
  export const countries: Record<string, Country> = {
    pakistan: { name: 'Pakistan', population: '240 million', capital: 'Islamabad' },
    afghanistan: { name: 'Afghanistan', population: '38 million', capital: 'Kabul' },
    bangladesh: { name: 'Bangladesh', population: '166 million', capital: 'Dhaka' },
    turkey: { name: 'Turkey', population: '84 million', capital: 'Ankara' },
    saudi_arabia: { name: 'Saudi Arabia', population: '35 million', capital: 'Riyadh' },
  };
export interface Race {
  id: number;
  name: string;
  country: string;
  city: string;
  circuit?: string;
  dates: string;
  startDate: Date;
  isSprint: boolean;
  isNewCircuit: boolean;
  isLocalHero: boolean;
  note?: string;
}

export const races2026: Race[] = [
  { id: 1,  name: "Grand Prix of Thailand",     country: "Thailand",      city: "Buriram",               dates: "Feb 27 - Mar 1", startDate: new Date("2026-03-01T09:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 2,  name: "Grand Prix of Brazil",        country: "Brazil",        city: "Goiânia",               dates: "Mar 20-22",      startDate: new Date("2026-03-22T18:00:00Z"), isSprint: true, isNewCircuit: true,  isLocalHero: false, note: "First MotoGP race at Goiânia since 1992" },
  { id: 3,  name: "Grand Prix of the Americas",  country: "USA",           city: "Austin",                dates: "Mar 27-29",      startDate: new Date("2026-03-29T19:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 4,  name: "Grand Prix of Spain",         country: "Spain",         city: "Jerez",                 dates: "Apr 24-26",      startDate: new Date("2026-04-26T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 5,  name: "Grand Prix of France",        country: "France",        city: "Le Mans",               dates: "May 8-10",       startDate: new Date("2026-05-10T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 6,  name: "Grand Prix of Catalunya",     country: "Spain",         city: "Montmeló",              dates: "May 15-17",      startDate: new Date("2026-05-17T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 7,  name: "Grand Prix of Italy",         country: "Italy",         city: "Mugello",               dates: "May 29-31",      startDate: new Date("2026-05-31T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 8,  name: "Grand Prix of Hungary",       country: "Hungary",       city: "Balatonfőkajár",        dates: "Jun 5-7",        startDate: new Date("2026-06-07T13:00:00Z"), isSprint: true, isNewCircuit: true,  isLocalHero: false, note: "New Balaton Park Circuit" },
  { id: 9,  name: "Grand Prix of Czechia",       country: "Czech Republic", city: "Brno",                 dates: "Jun 19-21",      startDate: new Date("2026-06-21T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 10, name: "Grand Prix of the Netherlands", country: "Netherlands", city: "Assen",                 dates: "Jun 26-28",      startDate: new Date("2026-06-28T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 11, name: "Grand Prix of Germany",       country: "Germany",       city: "Hohenstein-Ernstthal",  dates: "Jul 10-12",      startDate: new Date("2026-07-12T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 12, name: "Grand Prix of Great Britain",  country: "Great Britain", city: "Silverstone",          dates: "Aug 7-9",        startDate: new Date("2026-08-09T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 13, name: "Grand Prix of Aragon",        country: "Spain",         city: "Alcañiz",               dates: "Aug 28-30",      startDate: new Date("2026-08-30T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 14, name: "Grand Prix of San Marino",    country: "San Marino",    city: "Misano Adriatico",      dates: "Sep 11-13",      startDate: new Date("2026-09-13T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 15, name: "Grand Prix of Austria",       country: "Austria",       city: "Spielberg",             dates: "Sep 18-20",      startDate: new Date("2026-09-20T13:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 16, name: "Grand Prix of Japan",         country: "Japan",         city: "Motegi",                dates: "Oct 2-4",        startDate: new Date("2026-10-04T06:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 17, name: "Grand Prix of Indonesia",     country: "Indonesia",     city: "Mandalika",             dates: "Oct 9-11",       startDate: new Date("2026-10-11T08:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 18, name: "Grand Prix of Australia",     country: "Australia",     city: "Phillip Island",        dates: "Oct 23-25",      startDate: new Date("2026-10-25T05:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 19, name: "Grand Prix of Malaysia",      country: "Malaysia",      city: "Sepang",                dates: "Oct 30 - Nov 1", startDate: new Date("2026-11-01T08:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 20, name: "Grand Prix of Qatar",         country: "Qatar",         city: "Lusail",                dates: "Nov 6-8",        startDate: new Date("2026-11-08T15:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 21, name: "Grand Prix of Portugal",      country: "Portugal",      city: "Portimão",              dates: "Nov 20-22",      startDate: new Date("2026-11-22T14:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
  { id: 22, name: "Grand Prix of Valencia",      country: "Spain",         city: "Valencia",              dates: "Nov 27-29",      startDate: new Date("2026-11-29T14:00:00Z"), isSprint: true, isNewCircuit: false, isLocalHero: false },
];

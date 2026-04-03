export interface Driver {
  position: number;
  name: string;
  code: string;
  team: string;
  points: number;
  sprintPoints: number;
  nationality: string;
}

export interface Constructor {
  position: number;
  name: string;
  points: number;
  drivers: string[];
  isBigFour: boolean;
  accent: string; // CSS hsl token var name
}

export const drivers2026: Driver[] = [
  { position: 1, name: "Max Verstappen", code: "VER", team: "Red Bull Racing", points: 0, sprintPoints: 0, nationality: "NED" },
  { position: 2, name: "Liam Lawson", code: "LAW", team: "Red Bull Racing", points: 0, sprintPoints: 0, nationality: "NZL" },
  { position: 3, name: "Lewis Hamilton", code: "HAM", team: "Ferrari", points: 0, sprintPoints: 0, nationality: "GBR" },
  { position: 4, name: "Charles Leclerc", code: "LEC", team: "Ferrari", points: 0, sprintPoints: 0, nationality: "MON" },
  { position: 5, name: "Lando Norris", code: "NOR", team: "McLaren", points: 0, sprintPoints: 0, nationality: "GBR" },
  { position: 6, name: "Oscar Piastri", code: "PIA", team: "McLaren", points: 0, sprintPoints: 0, nationality: "AUS" },
  { position: 7, name: "George Russell", code: "RUS", team: "Mercedes", points: 0, sprintPoints: 0, nationality: "GBR" },
  { position: 8, name: "Andrea Kimi Antonelli", code: "ANT", team: "Mercedes", points: 0, sprintPoints: 0, nationality: "ITA" },
  { position: 9, name: "Carlos Sainz", code: "SAI", team: "Williams", points: 0, sprintPoints: 0, nationality: "ESP" },
  { position: 10, name: "Alexander Albon", code: "ALB", team: "Williams", points: 0, sprintPoints: 0, nationality: "THA" },
  { position: 11, name: "Pierre Gasly", code: "GAS", team: "Alpine", points: 0, sprintPoints: 0, nationality: "FRA" },
  { position: 12, name: "Jack Doohan", code: "DOO", team: "Alpine", points: 0, sprintPoints: 0, nationality: "AUS" },
  { position: 13, name: "Nico Hülkenberg", code: "HUL", team: "Audi", points: 0, sprintPoints: 0, nationality: "GER" },
  { position: 14, name: "Gabriel Bortoleto", code: "BOR", team: "Audi", points: 0, sprintPoints: 0, nationality: "BRA" },
  { position: 15, name: "Yuki Tsunoda", code: "TSU", team: "RB", points: 0, sprintPoints: 0, nationality: "JPN" },
  { position: 16, name: "Isack Hadjar", code: "HAD", team: "RB", points: 0, sprintPoints: 0, nationality: "FRA" },
  { position: 17, name: "Fernando Alonso", code: "ALO", team: "Aston Martin", points: 0, sprintPoints: 0, nationality: "ESP" },
  { position: 18, name: "Lance Stroll", code: "STR", team: "Aston Martin", points: 0, sprintPoints: 0, nationality: "CAN" },
  { position: 19, name: "Esteban Ocon", code: "OCO", team: "Haas", points: 0, sprintPoints: 0, nationality: "FRA" },
  { position: 20, name: "Oliver Bearman", code: "BEA", team: "Haas", points: 0, sprintPoints: 0, nationality: "GBR" },
  { position: 21, name: "Sergio Pérez", code: "PER", team: "Cadillac", points: 0, sprintPoints: 0, nationality: "MEX" },
  { position: 22, name: "Valtteri Bottas", code: "BOT", team: "Cadillac", points: 0, sprintPoints: 0, nationality: "FIN" },
];

export const constructors2026: Constructor[] = [
  { position: 1, name: "Red Bull Racing", points: 0, drivers: ["VER", "LAW"], isBigFour: true, accent: "--primary" },
  { position: 2, name: "Ferrari", points: 0, drivers: ["HAM", "LEC"], isBigFour: true, accent: "--racing-red" },
  { position: 3, name: "McLaren", points: 0, drivers: ["NOR", "PIA"], isBigFour: true, accent: "--neon-gold" },
  { position: 4, name: "Mercedes", points: 0, drivers: ["RUS", "ANT"], isBigFour: true, accent: "--neon-cyan" },
  { position: 5, name: "Aston Martin", points: 0, drivers: ["ALO", "STR"], isBigFour: false, accent: "--neon-green" },
  { position: 6, name: "Williams", points: 0, drivers: ["SAI", "ALB"], isBigFour: false, accent: "--cadillac" },
  { position: 7, name: "Alpine", points: 0, drivers: ["GAS", "DOO"], isBigFour: false, accent: "--cadillac" },
  { position: 8, name: "RB", points: 0, drivers: ["TSU", "HAD"], isBigFour: false, accent: "--cadillac" },
  { position: 9, name: "Haas", points: 0, drivers: ["OCO", "BEA"], isBigFour: false, accent: "--muted-foreground" },
  { position: 10, name: "Audi", points: 0, drivers: ["HUL", "BOR"], isBigFour: false, accent: "--audi" },
  { position: 11, name: "Cadillac", points: 0, drivers: ["PER", "BOT"], isBigFour: false, accent: "--cadillac" },
];

export const sprintRounds = ["China", "Miami", "Canada", "Great Britain", "Netherlands", "Singapore"];

// Points systems
export const racePoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // + 1 for fastest lap
export const sprintPoints = [8, 7, 6, 5, 4, 3, 2, 1]; // Top 8

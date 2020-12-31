export {};

let name = 'Atsuhi';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Atsusi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;
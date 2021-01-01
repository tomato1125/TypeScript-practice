export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
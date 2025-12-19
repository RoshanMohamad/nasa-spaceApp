<<<<<<< HEAD
export interface ImpactZone {
    lat: number;
    lng: number;
    radius: number;
    color: string;
    label: string;
=======
export interface MeteorParameters {
  diameter: number; // meters
  velocity: number; // km/s
  composition: 'iron' | 'stony' | 'carbonaceous' | 'comet';
  location: { lat: number; lng: number };
  // NASA asteroid data (optional)
  name?: string;
  nasaId?: string;
  isPotentiallyHazardous?: boolean;
}

export interface ImpactResults {
  impactType: 'surface' | 'airburst';
  craterDiameter: number; // meters
  energyTNT: number; // megatons
  seismicMagnitude: number;
  thermalRadius: number; // km
  blastRadius: { onePsi: number; fivePsi: number; twentyPsi: number }; // km
}

export interface ImpactZone {
  lat: number;
  lng: number;
  radius: number; // meters
  color: string;
  label: string;
}

export interface PresetScenario {
  name: string;
  description: string;
  parameters: Omit<MeteorParameters, 'location'>;
>>>>>>> a5e69b2bc15a91393ccbaa30b0bfe717e4b9b0d1
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  address?: Address;
}

export interface Address {
  country?: string;
  postalCode: string;
  town: string;
  streetName?: string;
  streetNumber?: string;
}

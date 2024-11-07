export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY'
}

export enum RelationshipType {
  MARRIAGE = 'MARRIAGE',
  DOMESTIC_PARTNERSHIP = 'DOMESTIC_PARTNERSHIP',
  DIVORCED = 'DIVORCED',
  SEPARATED = 'SEPARATED'
}

export interface FamilyMember {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  birthYear?: number;
  deathDate?: string;
  gender: Gender;
}

export interface Partnership {
  id: string;
  type: RelationshipType;
  startDate?: string;
  endDate?: string;
  partner: FamilyMember;
}

export interface Family {
  id: string;
  name: string;
  members: FamilyMember[];
}
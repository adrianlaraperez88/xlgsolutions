export interface KeyFocusArea {
  title: string;
  titleEs: string;
  desc: string;
  descEs: string;
}

export interface Service {
  id: string;
  name: string;
  nameEs: string;
  shortDescription: string;
  shortDescriptionEs: string;
  longDescription: string;
  longDescriptionEs: string;
  keyFocusAreas: KeyFocusArea[];
  icon?: string;
}

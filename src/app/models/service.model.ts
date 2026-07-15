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
  directAnswer?: string;
  directAnswerEs?: string;
  caseStudy?: {
    title: string;
    titleEs: string;
    detail: string;
    detailEs: string;
    impact: string;
    impactEs: string;
  };
  regulatoryUpdate?: {
    title: string;
    titleEs: string;
    detail: string;
    detailEs: string;
    date: string;
  };
  expertQuote?: {
    quote: string;
    quoteEs: string;
    author: string;
    role: string;
    roleEs: string;
  };
  comparisonTable?: {
    headers: string[];
    headersEs: string[];
    rows: string[][];
    rowsEs: string[][];
  };
  stepByStepProcess?: {
    step: string;
    stepEs: string;
    title: string;
    titleEs: string;
    desc: string;
    descEs: string;
  }[];
}

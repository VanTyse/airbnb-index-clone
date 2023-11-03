export interface SVGPropTypes {
  color?: string;
  width?: number;
  height?: number;
}

export type VisitType = "stays" | "experiences" | "online experiences";

export type region =
  | "flexible"
  | "africa"
  | "us"
  | "uk"
  | "middle-east"
  | "canada";

export type SearchDetails = {
  region: region;
  date: [Date | null, Date | null];
  people: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
};

type SearchActionType = "update_person" | "update_date" | "update_region";

export type SearchAction<T extends SearchActionType> = {
  type: T;
  payload?: T extends "update_person"
    ? {
        value: string;
      }
    : T extends "update_date"
    ? {
        value: [Date | null, Date | null];
      }
    : T extends "update_region"
    ? {
        value: string;
      }
    : unknown;
};

export type SearchContextType = {
  data: SearchDetails;
  dispatch?: React.Dispatch<
    | SearchAction<"update_person">
    | SearchAction<"update_date">
    | SearchAction<"update_region">
  >;
};

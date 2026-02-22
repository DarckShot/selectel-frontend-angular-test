export type DataType = { sections: ISection[] };

export interface ISection {
  id: number;
  sectionName: string;
  items: IItem[];
}

export interface IItem {
  id: number;
  name: string;
  value: number;
}

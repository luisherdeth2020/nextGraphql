// app/types/contentTypes.ts

export interface Specifications {
    brand: string;
    itemWeight: string;
    itemModelNumber: string;
    dimensions: string;
    colour: string;
  }
  
  export interface Content {
    title: string;
    vatios: string;
    imageUrl: string;
    precie: string;
    description: string;
    specifications: Specifications;
  }
  
  export interface ContentData {
    contents: Content[];
  }
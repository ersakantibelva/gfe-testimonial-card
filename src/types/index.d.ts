declare module "*.png" {
  const value: any;
  export = value;
}

export interface TestimonialCardProps {
  imgSrc: string;
  name: string;
  username: string;
  description: string;
}

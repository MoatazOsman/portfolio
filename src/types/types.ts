import type { ReactElement } from "react";

export interface BenefitType {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface ClassType {
  image: string;
  name: string;
  description?: string
}

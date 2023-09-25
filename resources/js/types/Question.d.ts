import { Choice } from "./Choice";
import { Form } from "./Form";

export interface Question {
  id: string
  name: string;
  title: string;
  description: string;
  type: string;
  status?: string;
  scale?: {
    min_text: string
    max_text: string
    min: number
    max: number
    step: number
  }
  choices?: Choice[]
  form?: Form
  required?: string;
  created_at?: string;
  updated_at?: string;
}
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
  required?: string;
  created_at?: string;
  updated_at?: string;
}
import { Answer } from "./Answer";

export interface Response {
  id: number | string;
  survey_id: number | string;
  client_id: number | string;
  submittted_at: string;
  answers: Answer[];
  created_at: string;
  updated_at: string;
}
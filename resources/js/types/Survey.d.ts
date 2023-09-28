import { Form } from "./Form";
import { User } from "./User.d";

export interface Survey {
  id: string | number
  user_id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  forms: Form[];
  user?: User
  token: string
}
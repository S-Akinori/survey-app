import { Form } from "./Form";

export interface Survey {
  id: string
  client_admin_id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  forms: Form[];
}
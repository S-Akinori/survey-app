import { Survey } from "./Survey";

export interface User {
  id: number;
  name: string;
  company: string;
  department: string;
  start_date: string;
  end_date: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  surveys: Survey[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

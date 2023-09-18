import { Question } from "./Question";

export interface Form {
    id : number;
    client_admin_id: number;
    title: string;
    description: string;
    url?: string;
    status: string;
    questions: Question[];
    created_at: string;
    updated_at: string;
}
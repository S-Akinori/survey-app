import { Question } from "./Question";
import { Survey } from "./Survey";

export interface Form {
    id : number;
    client_admin_id: number;
    title: string;
    description: string;
    url?: string;
    status: string;
    questions: Question[];
    survey?: Survey
    created_at: string;
    updated_at: string;
}
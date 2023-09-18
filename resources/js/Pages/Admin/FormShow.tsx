import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Container, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";

interface Props {
  auth: PageProps['auth'];
  form: Form;
}

interface Form {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

const FormShow = ({ form, auth }: Props) => {
  console.log(form)
  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Container className="py-12">
        <div className="mb-4">
          <Title title={form.title} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        </div>
        <div className="mb-4">
          <div>【説明文】</div>
          <div>{form.description}</div>
        </div>
        <div className="mb-4">
          <Button><Link href={route('admin.form.edit', { id: form.id })}>フォーム編集</Link></Button>
        </div>
        <div className="mt-12">
          {form.questions.map((question) => (
            <div key={question.id} className="mb-12">
              <Title title={question.title} Tag="h3" className="p-4 mb-4 border-b-2 border-main" />
              {question.description && <div className="text-sm mb-4">{question.description}</div>}
              {question.type === 'scale' && question.scale && (
                <div className="mb-4">
                  <QuestionScale question={question} />
                </div>
              )}
              {question.type === 'text' && (
                <div>
                  <TextField
                    type="text"
                    // value={data.title}
                    variant='outlined'
                    // label='質問文'
                    // onChange={onChange}
                    fullWidth
                  />
                </div>
              )}
              {question.type === 'textarea' && (
                <div>
                  <TextField
                    type="text"
                    // value={data.title}
                    variant='outlined'
                    // label='質問文'
                    // onChange={onChange}
                    fullWidth
                    multiline
                    rows={4}
                  />
                </div>
              )}
              <div className="mt-4">
                <Button><Link href={route('admin.question.edit', { id: question.id })}>質問編集</Link></Button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mb-4">
          <h3 className="text-lg font-bold">質問</h3>
          <ul>
            {form.questions.map((question) => (
              <li key={question.id}><Link href={route('admin.question.show', {id: question.id})}>{question.title}</Link></li>
            ))}
          </ul>
        </div> */}
        <div className="mb-4">
          <Button><Link href={route('admin.question.create', { form_id: form.id })}>質問新規作成</Link></Button>
        </div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default FormShow
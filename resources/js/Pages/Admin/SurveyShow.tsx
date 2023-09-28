import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Container, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Head, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";
import { Survey } from "@/types/Survey";
import DeleteAlert from "@/Components/DeleteAlert";

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
}

const FormShow = ({ survey, auth }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [targetId, setTargetId] = React.useState(0);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTargetId(Number(e.currentTarget.value))
    setOpen(true);
  }

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">
        {survey.id == 1 && <span>{survey.user?.name}</span>}
        {survey.id != 1 && <span>{survey.user?.company} | {survey.user?.name} 様</span>}
      </h2>}
    >
      <Head title={survey.title} />
      <Container className="py-12">
        <div className="mb-4">
          <Title title={survey.title} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        </div>
        {survey.description && (<div>{survey.description}</div>)}
        {/* <div className="mb-4">
          <Button><Link href={route('admin.form.edit', { id: form.id })}>フォーム編集</Link></Button>
        </div> */}
        <div className="mt-8">
          <div className="mb-4">
            <p>【フォーム一覧】</p>
            <p>ここに登録されたフォームが個別質問になります。</p>
          </div>
          {survey.forms.map((form) => (
            <div key={form.id} className="mb-12">
              <Title title={form.title} Tag="h3" className="p-4 mb-4 border-b-2 border-main" />
              {form.description && <div className="text-sm mb-4">{form.description}</div>}
              <div className="mt-4">
                <Button><Link href={route('admin.form.show', { id: form.id })}>フォーム詳細</Link></Button>
                {/* <Button className="bg-red-500 text-white ml-4" onClick={handleOpen} value={form.id}>フォーム削除</Button> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mb-4">
          <Button><Link href={route('admin.form.create', { survey_id: survey.id })}>新規フォーム作成</Link></Button>
        </div> */}
        <div className="mb-4">
          <Button><a href={route('admin.client.survey.show', { id: survey.id })} target="_blank">アンケートを表示する</a></Button>
        </div>
        <div className="mb-4">
          <Button onClick={e => setCopy(true)}>アンケートURLを発行</Button>
          {copy && (
            <div className="p-4 border border-main mt-4">
              <div>以下のURLを従業員に共有ください。ログインは各従業員に登録したIDが必要です。</div>
              <p>{route('client.login')}</p>
            </div>
          )}
        </div>
      </Container>
      <DeleteAlert open={open} setOpen={setOpen} routeName="admin.form.destroy" data={{ 'id': targetId }} />
    </AdminAuthenticatedLayout>
  );
}

export default FormShow
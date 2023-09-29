import React, { FormEventHandler } from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps, User } from '@/types';
import { Checkbox, Container, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";
import { Survey } from "@/types/Survey";
import DeleteAlert from "@/Components/DeleteAlert";

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
  user: User
}

interface InputProps {
  form_id: number | string;
  value: boolean;
}

const SurveyShowWithMeta = ({ survey, auth, user }: Props) => {
  console.log(survey)
  const { data, setData, post, put, processing, errors, reset } = useForm<InputProps>();
  const [message, setMessage] = React.useState<string>('');
  const [formId, setFormId] = React.useState<number | string>(0);
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [targetId, setTargetId] = React.useState(0);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTargetId(Number(e.currentTarget.value))
    setOpen(true);
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.survey.user.store', { id: data.form_id, user_id: user.id }), {
      onSuccess: () => {
        setMessage('保存しました。')
        setFormId(data.form_id)
        setTimeout(() => {
          setMessage('')
        }, 3000)
      }
    })
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">
        <span>{user.company} | {user.name} 様</span>
      </h2>}
    >
      <Head title={survey.title} />
      <Container className="py-12">
        <div className="mb-4">
          <Title title={survey.title + ' (表示・非表示設定)'} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        </div>
        {survey.description && (<div>{survey.description}</div>)}
        {/* <div className="mb-4">
          <Button><Link href={route('admin.form.edit', { id: form.id })}>フォーム編集</Link></Button>
        </div> */}
        <div className="mt-8">
          {survey.forms.map((form) => (
            <div key={form.id} className="mb-12">
              <Title title={form.title} Tag="h3" className="p-4 mb-4 border-b-2 border-main" />
              {form.description && <div className="text-sm mb-4">{form.description}</div>}
              <div className="flex items-center">
                <div className="mr-12">
                  <Button><Link href={route('admin.form.user.show', { id: form.id, user_id: user.id })}>フォーム詳細</Link></Button>
                  {/* <Button className="bg-red-500 text-white ml-4" onClick={handleOpen} value={form.id}>フォーム削除</Button> */}
                </div>
                <div>
                  <form className="flex" onSubmit={submit}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked={form.user_form_meta?.value === 0 ? false : true} onChange={e => setData({form_id: form.id, value: e.target.checked})} />} label="表示する" />
                    </FormGroup>
                    <Button>{(formId == form.id && message) ? message : '保存'}</Button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mb-4">
          <Button><Link href={route('admin.form.create', { survey_id: survey.id })}>新規フォーム作成</Link></Button>
        </div> */}
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default SurveyShowWithMeta
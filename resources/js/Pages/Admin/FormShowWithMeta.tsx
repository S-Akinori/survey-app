import React, { FormEventHandler } from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps, User } from '@/types';
import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Link, router, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";
import { Form } from "@/types/Form";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  auth: PageProps['auth'];
  form: Form;
  user: User
}

interface InputProps {
  question_id: number | string;
  value: boolean;
}

const FormShowWithMeta = ({ form, auth, user }: Props) => {
  const { data, setData, post, put, processing, errors, reset } = useForm<InputProps>();
  const [message, setMessage] = React.useState<string>('');
  const [questionId, setQuestionid] = React.useState<number | string>(0);
  const [open, setOpen] = React.useState(false);
  const [targetId, setTargetId] = React.useState(0);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTargetId(Number(e.currentTarget.value))
    setOpen(true);
  };

  const handleClose = () => {
    setTargetId(0)
    setOpen(false);
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.question.user.store', { id: data.question_id, user_id: user.id }), {
      onSuccess: () => {
        setMessage('保存しました。')
        setQuestionid(data.question_id)
        setTimeout(() => {
          setMessage('')
        }, 3000)
      }
    })
  };
  

  console.log(form)

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{user.company} | {user.name} 様</h2>}
    >
      <Container className="py-12">
        {form.survey && (
          <div className="mb-4">
            <Link href={route('admin.survey.user.show', { id: form.survey?.id, user_id: user.id })}><ArrowBackIcon />フォーム一覧へ</Link>
          </div>
        )}
        <div className="mb-4">
          <Title title={form.title} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        </div>
        <div className="mb-4">
          <div>{form.description}</div>
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
              {question.type === 'dropdown' && (
                <div>
                  <FormControl fullWidth>
                    {/* <InputLabel id='type'></InputLabel> */}
                    <Select
                      labelId='type'
                      id='type'
                      name='type'
                      defaultValue={question.choices && question.choices[0].value}
                    // label="質問タイプ"
                    >
                      {question.choices && question.choices.map((choice, index) => (
                        <MenuItem key={choice.id} value={choice.value}>{choice.title}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}
              <div>
                <form className="flex" onSubmit={submit}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked={question.user_question_meta?.value === 0 ? false : true} onChange={e => setData({ question_id: question.id, value: e.target.checked })} />} label="表示する" />
                  </FormGroup>
                  <Button>{(questionId == question.id && message) ? message : '保存'}</Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default FormShowWithMeta
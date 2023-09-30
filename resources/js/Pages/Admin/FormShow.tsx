import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Head, Link, router } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";
import { Form } from "@/types/Form";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  auth: PageProps['auth'];
  form: Form;
}

const FormShow = ({ form, auth }: Props) => {
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

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{form.survey?.user?.company} | {form.survey?.user?.name} 様</h2>}
    >
      <Head title={form.title} />
      <Container className="py-12">
        {form.survey && (
          <div className="mb-4">
            <Link href={route('admin.survey.show', { id: form.survey?.id })}><ArrowBackIcon />フォーム一覧へ</Link>
          </div>
        )}
        <div className="mb-4">
          <Title title={form.title} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        </div>
        <div className="mb-4">
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
              {question.type === 'dropdown' && (
                <div>
                  <FormControl fullWidth>
                    {/* <InputLabel id='type'></InputLabel> */}
                    <Select
                      labelId='type'
                      id='type'
                      name='type'
                      defaultValue={(question.choices?.length) ? question.choices[0].value : ''}
                    // label="質問タイプ"
                    >
                      {question.choices && question.choices.map((choice, index) => (
                        <MenuItem key={choice.id} value={choice.value}>{choice.title}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}
              <div className="flex">
                <div className="mt-4 px-2">
                  <Button><Link href={route('admin.question.edit', { id: question.id })}>質問編集</Link></Button>
                </div>
                <div className="mt-4 px-2">
                  <Button className="bg-red-500 text-white" onClick={handleOpen} value={question.id}>質問削除</Button>
                </div>
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
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='flex justify-center items-center'
        >
          <Box className='p-4 bg-white' sx={{ background: '#fcfcfc' }}>
            <div>
              <h2>削除してよろしいですか？</h2>
              <div className='mt-4 flex justify-end'>
                <Button className="mr-4"><Link method="delete" href={route('admin.question.destroy', { id: targetId })}>はい</Link></Button>
                <Button className="bg-red-500 text-white" onClick={handleClose}>キャンセル</Button>
              </div>
            </div>
          </Box>
        </Modal>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default FormShow
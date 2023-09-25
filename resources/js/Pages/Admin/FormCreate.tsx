import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { ClientAdmin } from '../../types/ClientAdmin';
import { Survey } from '@/types/Survey';

interface InputNameProps {
  title: string;
  description: string;
}

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
}

export default function CommonSurveyCreate({ auth, survey }: Props) {
  console.log(survey)
  const { data, setData, post, processing, errors, reset } = useForm<InputNameProps>({
    title: '',
    description: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.form.store', { survey_id: survey.id }));
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{survey.user?.company} | {survey.user?.name} 様</h2>}
    >
      <Head title="新規フォーム作成" />

      <Container className='py-12'>
        <h2 className='mb-4'>新規フォーム作成</h2>
        <form onSubmit={submit}>
          <div className='mb-4'>
            <TextField
              id='title'
              type="text"
              name='title'
              value={data.title}
              variant='outlined'
              label='タイトル'
              required
              onChange={(e) => setData('title', e.target.value)}
              fullWidth
            />

            <InputError message={errors.title} className="mt-2" />
          </div>
          <div className='mb-4'>
            <TextField
              id='description'
              type="text"
              name='description'
              value={data.description}
              variant='outlined'
              label='説明文'
              onChange={(e) => setData('description', e.target.value)}
              multiline
              rows={3}
              fullWidth
            />
            <InputError message={errors.description} className="mt-2" />
          </div>
          <div className="text-center mt-4">
            <Button className="ml-4" disabled={processing}>
              フォームを登録し質問作成へ
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

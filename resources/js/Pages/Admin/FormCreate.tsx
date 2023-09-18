import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { ClientAdmin } from '../../types/ClientAdmin';

interface InputNameProps {
  title: string;
  description: string;
}

interface Props {
  auth: PageProps['auth'];
  clientAdmin: ClientAdmin;
}

export default function CommonSurveyCreate({ auth, clientAdmin }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm<InputNameProps>({
    title:'',
    description:'',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.form.store'));
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        <h2 className='mb-4'>新規フォーム作成</h2>
        <form onSubmit={submit}>
          <div className='mb-4'>
          <InputLabel id="title">タイトル</InputLabel>

            <TextInput
              id="title"
              type="text"
              name="title"
              value={data.title}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData('title', e.target.value)}
            />

            <InputError message={errors.title} className="mt-2" />
          </div>
          <div className='mb-4'>
          <InputLabel id="description">説明文</InputLabel>

            <TextInput
              id="description"
              type="text"
              name="description"
              value={data.description}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData('description', e.target.value)}
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

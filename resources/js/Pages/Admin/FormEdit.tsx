import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { ClientAdmin } from '../../types/ClientAdmin';
import { Form } from '@/types/Form';

interface InputNameProps {
  title: string;
  description: string;
}

interface Props {
  auth: PageProps['auth'];
  form: Form
}

const FormEdit = ({ auth, form }: Props) => {
  const { data, setData, post, put, processing, errors, reset } = useForm<InputNameProps>({
    title: form.title,
    description: form.description,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    put(route('admin.form.update', { id: form.id }));
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{form.survey?.user?.company} | {form.survey?.user?.name} 様</h2>}
    >
      <Head title="フォーム編集" />

      <Container className='py-12'>
        <h2 className='mb-4'>フォーム編集</h2>
        <form onSubmit={submit}>
          <div className='mb-4'>
            <TextField
              id='title'
              type="text"
              name='title'
              defaultValue={data.title}
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
              defaultValue={data.description}
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
              保存
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default FormEdit
import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container} from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

const inputs: InputProps[] = [
  {
    id: 'company',
    name: 'company',
    type: 'text',
    label: '会社名',
  },
  {
    id: 'department',
    name: 'department',
    type: 'text',
    label: '部署名',
  },
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: '担当者名',
  },
  {
    id: 'email',
    name: 'email',
    type: 'text',
    label: '担当者ID',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'パスワード',
  },
  {
    id: 'start_date',
    name: 'start_date',
    type: 'date',
    label: '開始日',
  },
  {
    id: 'end_date',
    name: 'end_date',
    type: 'date',
    label: '開始日',
  },
]

interface InputProps {
  id: string;
  name: 'company' | 'department' | 'name' | 'email' | 'password' | 'start_date' | 'end_date';
  type: string;
  label: string;
}

interface InputNameProps {
  company: string;
  department: string;
  name: string;
  email: string;
  password: string;
  start_date: string;
  end_date: string;
}

export default function Dashboard({ auth }: PageProps) {

  const { data, setData, post, processing, errors, reset } = useForm<InputNameProps>({
    company: '',
    department: '',
    name: '',
    email: '',
    password: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.clientAdmin.store'));
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        <form onSubmit={submit}>
          {inputs.map((input) => (
            <div className="mt-4">
              <InputLabel htmlFor={input.id} value={input.label} />

              <TextInput
                id={input.id}
                type={input.type}
                name={input.name}
                value={data[input.name]}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={(e) => setData(input.name, e.target.value)}
              />

              <InputError message={errors[input.name]} className="mt-2" />
            </div>
          ))}
          <div className="text-center mt-4">
            <Button className="ml-4" disabled={processing}>
              登録して個別アンケートへ
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

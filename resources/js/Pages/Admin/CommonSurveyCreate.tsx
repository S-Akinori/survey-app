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
  type: string;
}

interface Props {
  auth: PageProps['auth'];
  clientAdmin: ClientAdmin;
}

export default function CommonSurveyCreate({ auth, clientAdmin }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm<InputNameProps>({
    title:'',
    description:'',
    type:'',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.clientAdmin.store'));
  };


  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        test
      </Container>
    </AdminAuthenticatedLayout>
  );
}

import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';

export default function Dashboard({ auth }: PageProps) {
  console.log(auth.user)

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        <div>
          <div className='mb-4'><Button><Link href={route('admin.client.register')}>新規クライアント登録</Link></Button></div>
          <div><Button><Link href={route('admin.users.index')}>クライアントリスト</Link></Button></div>
        </div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

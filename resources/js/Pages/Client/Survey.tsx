import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@/Components/Button';
import ClientAuthenicatedLayout from '../../Layouts/ClientAuthenticatedLayout';

interface Props {
  auth: PageProps['auth']
}

export default function Dashboard({ auth }: Props) {
  return (

    <ClientAuthenicatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="Dashboard" />

      <Container className='py-12'>
        <h2>Survey</h2>
      </Container>
    </ClientAuthenicatedLayout>
  );
}

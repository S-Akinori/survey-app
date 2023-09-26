import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps, User } from '@/types';
import { Head, Link } from "@inertiajs/react";
import { Container } from "@mui/material";
import Button from "@/Components/Button";
import Title from "@/Components/Title";

interface Props {
  auth: PageProps['auth'];
  users: User[];
}

const ClientAdminIndex = ({users, auth }: Props) => {
  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title='クライアント一覧' />
      <Container className="py-14">
        <Title title="クライアント一覧" Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        <ul className="mb-4">
          {users.map((user) => (
            <li key={user.id} className="py-4 border-b flex justify-between">
              <Link href={route('admin.users.show', {id: user.id})}>{user.company} : {user.name}</Link>
              <div>
                <Link href={route('dashboard', {user_id: user.id})} className="pr-4">回答状況</Link>
                <Link href={route('admin.clientAdmin.edit', {id: user.id})} className="pr-4">編集</Link>
                <Link href={route('dashboard', {user_id: user.id})} className="pr-4">csv</Link>
              </div>
            </li>
          ))}
        </ul>
        <div><Button><Link href={route('admin.client.register')}>新規クライアント登録</Link></Button></div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default ClientAdminIndex
import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps, User } from '@/types';
import { Head, Link } from "@inertiajs/react";
import { Container } from "@mui/material";
import Button from "@/Components/Button";
import Title from "@/Components/Title";

interface Props {
  auth: PageProps['auth'];
  user: User;
}

const ClientAdminShow = ({ user, auth }: Props) => {
  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title={user.company + ': ' + user.name + '様'} />
      <Container className="py-14">
        <Title title={user.company + ': ' + user.name + '様'} Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        <div>【アンケート一覧】</div>
        <ul className="mb-4">
          {user.surveys.map((survey) => (
            <li key={survey.id} className="py-4 border-b"><Link href={route('admin.survey.show', { id: survey.id })}>{survey.title}</Link></li>
          ))}
        </ul>
        {/* <div><Button><Link href={route('admin.form.create', { client_admin_id: 1 })}>フォーム作成</Link></Button></div> */}
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default ClientAdminShow
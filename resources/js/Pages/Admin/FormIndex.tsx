import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Link } from "@inertiajs/react";
import { Container } from "@mui/material";
import Button from "@/Components/Button";
import Title from "@/Components/Title";

interface Props {
  auth: PageProps['auth'];
  forms: Form[];
}

interface Form {
  id: number;
  title: string;
}

const FormIndex = ({ forms, auth }: Props) => {
  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Container className="py-14">
        <Title title="フォーム一覧" Tag="h2" className="bg-main text-main-cont p-4 mb-4" />
        <ul className="mb-4">
          {forms.map((form) => (
            <li key={form.id} className="py-4 border-b"><Link href={route('admin.form.show', {id: form.id})}>{form.title}</Link></li>
          ))}
        </ul>
        <div><Button><Link href={route('admin.form.create', {client_admin_id: 1})}>フォーム作成</Link></Button></div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default FormIndex
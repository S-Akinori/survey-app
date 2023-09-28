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

const ClientAdminIndex = ({ users, auth }: Props) => {
  console.log(users)
  const download = (userId: string | number) => {
    const token = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    fetch(route('answers.download'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token || '',
      },
      body: JSON.stringify({ user_id: userId }),
    }).then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${auth.user.name}-answers.csv`;  // 任意のファイル名を設定
        document.body.appendChild(a); // aタグをDOMに追加（非表示）
        a.click();                    // aタグをクリックしてダウンロードを開始
        document.body.removeChild(a); // aタグをDOMから削除
      })
      .catch(error => console.error('Error:', error));
  };
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
              <Link href={route('admin.users.show', { id: user.id })}>{user.company} : {user.name}</Link>
              <div>
                <a target="_blank" href={route('dashboard', { user_id: user.id })} className="pr-4">回答状況</a>
                <Link href={route('admin.clientAdmin.edit', { id: user.id })} className="pr-4">編集</Link>
                {/* <button className="pr-4">csv</button> */}
                <button onClick={() => download(user.id)} className="pr-4">csv</button>
                <a target="_blank" href={route('admin.client.survey.show', { id: user.surveys[0].id })} className="pr-4">アンケート表示</a>
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
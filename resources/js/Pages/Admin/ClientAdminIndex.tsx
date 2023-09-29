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

interface Options {
  method: string;
  headers: {
    'Content-Type': string;
    'X-CSRF-TOKEN': string;
  };
  body: string;
}

async function customFetch(url: string, options: any = {}) {
  let response = await fetch(url, options);

  if (response.status === 419) { // CSRFトークンの期限切れ
    const csrfResponse = await fetch('/refresh-csrf');
    const data = await csrfResponse.json();
    const newToken = data.csrfToken;

    // 新しいトークンをヘッダーにセットしてリクエストを再実行
    options.headers = {
      ...options.headers,
      'X-CSRF-TOKEN': newToken,
    };

    response = await fetch(url, options);
  }
  return response;
}

const ClientAdminIndex = ({ users, auth }: Props) => {
  console.log(users)
  const download = (userId: string | number) => {
    const token = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    customFetch(route('answers.download'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token, // 最初のCSRFトークン
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
      }).catch(error => {
        console.error('There was an error with the request', error);
      });
    }
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
                  <a className="mr-4" href={route('admin.download.file', {client_user_id: user.id ,filename: user.company + '-' + user.name})}>csv</a>
                  <a target="_blank" href={route('admin.client.survey.show', { id: user.surveys[0].id, user_id: user.id })} className="pr-4">アンケート表示</a>
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
import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Container, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Head, Link } from "@inertiajs/react";
import Button from "@/Components/Button";
import Title from "@/Components/Title";
import QuestionScale from "@/Components/QuestionScale";
import { Survey } from "@/types/Survey";
import DeleteAlert from "@/Components/DeleteAlert";

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
}

const CompleteRegisterClient = ({ survey, auth }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [targetId, setTargetId] = React.useState(0);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTargetId(Number(e.currentTarget.value))
    setOpen(true);
  }

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">
        {survey.id == 1 && <span>{survey.user?.name}</span>}
        {survey.id != 1 && <span>{survey.user?.company} | {survey.user?.name} 様</span>}
      </h2>}
    >
      <Head title='クライアント登録完了' />
      <Container className="py-12">
        <h2 className="font-bold text-xl">クライアント登録が完了しました</h2>
        <div className="p-4 border border-main mt-4">
          <div>以下のURLがアンケートURLになりますので従業員に共有ください。ログインは各従業員に登録したIDが必要です。</div>
          <p>{route('client.login')}</p>
        </div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default CompleteRegisterClient
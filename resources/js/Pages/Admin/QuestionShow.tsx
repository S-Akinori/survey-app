import React from "react";

import AdminAuthenticatedLayout from "../../Layouts/AdminAuthenticatedLayout";
import { PageProps } from '@/types';
import { Container, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Question } from "../../types/Question";
import { Link } from "@inertiajs/react";
import Box, { BorderBox } from "@/Components/Box";
import Button from "@/Components/Button";
import Title from "@/Components/Title";

interface Props {
  auth: PageProps['auth'];
  question: Question;
}

const QuestionShow = ({ question, auth }: Props) => {
  console.log(question)
  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Container className="py-12">
        <div className="mb-4">
          <Title title={question.title} Tag="h3" className="bg-main text-main-cont p-4" />
        </div>
        {question.description && (
          <div>{question.description}</div>
        )}
        {question.type === 'scale' && question.scale && (
          <div>
            <div className="md:flex justify-between">
              <BorderBox>A: {question.scale.min_text}</BorderBox>
              <BorderBox>B: {question.scale.max_text}</BorderBox>
            </div>
            <FormControl sx={{ width: '100%' }}>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
                sx={{ justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Aに近い"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Aにやや近い"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Bにやや近い"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Bに近い"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {question.type === 'text' && (
          <div>
            <TextField
              type="text"
              // value={data.title}
              variant='outlined'
              // label='質問文'
              // onChange={onChange}
              fullWidth
            />
          </div>
        )}
        {question.type === 'textarea' && (
          <div>
            <TextField
              type="text"
              // value={data.title}
              variant='outlined'
              // label='質問文'
              // onChange={onChange}
              fullWidth
              multiline
              rows={4}
            />
          </div>
        )}
        <div className="mt-4 text-center">
          <Button><Link href={route('admin.question.edit', { id: question.id })}>編集</Link></Button>
        </div>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default QuestionShow
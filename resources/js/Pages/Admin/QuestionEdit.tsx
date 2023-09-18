import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import Button from '@/Components/Button';
import AdminAuthenticatedLayout from '../../Layouts/AdminAuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { ClientAdmin } from '../../types/ClientAdmin';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { generateRandomString } from '../../functions/generateRandomstring';
import { Question } from '../../types/Question';

interface Props {
  auth: PageProps['auth'];
  question: Question;
}

interface InputProps {
  name: string;
  title: string;
  description: string;
  type: string;
  scale?: {
    minText: string
    maxText: string
    min: number
    max: number
    step: number
  }
}

const QuestionEdit = ({ auth, question}: Props) => {
  const { data, setData, put, processing, errors, reset } = useForm<InputProps>(question.scale ? {
      name: question.name,
      title: question.title,
      description: question.description,
      type: question.type,
      scale: {
        minText: question.scale.min_text,
        maxText: question.scale.max_text,
        min: question.scale.min,
        max: question.scale.max,
        step: question.scale.step,
      }
    } : {
      name: question.name,
      title: question.title,
      description: question.description,
      type: question.type,
    }
  );

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    put(route('admin.question.update', {id: question.id}));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    if(name === 'type' && value === 'scale') {
      newData = { ...data, [name]: value, scale: { minText: '', maxText: '', min: 1, max: 4, step: 1 } }
    } 
    setData(newData)
  }
  
  const onScaleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    const key = name?.split('_')[1]

    if (!key || !data.scale) return
    const newData: InputProps = { ...data, scale: { ...data.scale, [key]: value } }
    setData(newData)
  }

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        <h2 className='mb-4'>質問編集</h2>
        <form onSubmit={submit}>
            <div className='mb-4'>
              <div className='mb-4'>
                <TextField
                  id='title'
                  type="text"
                  name='title'
                  value={data.title}
                  variant='outlined'
                  label='質問文'
                  onChange={onChange}
                  fullWidth
                />
              </div>
              <div className='mb-4'>
                <TextField
                  id='name'
                  type="text"
                  name='name'
                  value={data.name}
                  variant='outlined'
                  label='英語名（inputタグ用）'
                  onChange={onChange}
                  fullWidth
                />
              </div>
              <div className='mb-4'>
                <TextField
                  id='description'
                  type="text"
                  name='description'
                  value={data.description}
                  variant='outlined'
                  label='説明文'
                  onChange={onChange}
                  fullWidth
                />
              </div>
              <div className='mb-4'>
                <FormControl fullWidth>
                  <InputLabel id='type'>質問タイプ</InputLabel>
                  <Select
                    labelId='type'
                    id='type'
                    name='type'
                    value={data.type}
                    label="質問タイプ"
                    onChange={onChange}
                  >
                    <MenuItem value='text'>一行テキスト</MenuItem>
                    <MenuItem value='textarea'>複数行テキスト</MenuItem>
                    <MenuItem value='dropdown'>ドロップダウン</MenuItem>
                    <MenuItem value='radio'>ラジオ</MenuItem>
                    <MenuItem value='scale'>均等目盛り</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {data.type === 'scale' && data.scale && (
                <div>
                  <div className='mb-4'>
                    <TextField
                      id='scale_minText'
                      type="text"
                      name='scale_minText'
                      value={data.scale.minText}
                      variant='outlined'
                      label='最小目盛りのテキスト'
                      onChange={onScaleChange}
                      fullWidth
                    />
                  </div>
                  <div className='mb-4'>
                    <TextField
                      id='scale_maxText'
                      type="text"
                      name='scale_maxText'
                      value={data.scale.maxText}
                      variant='outlined'
                      label='最大目盛りのテキスト'
                      onChange={onScaleChange}
                      fullWidth
                    />
                  </div>
                  <div className='mb-4'>
                    <TextField
                      id='scale_max'
                      type="number"
                      name='scale_max'
                      value={data.scale.max}
                      variant='outlined'
                      label='目盛り数'
                      onChange={onScaleChange}
                    />
                  </div>
                </div>
              )}
            </div>
          <div className="text-center mt-4">
            <Button className="ml-4" disabled={processing}>
              保存
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

export default QuestionEdit
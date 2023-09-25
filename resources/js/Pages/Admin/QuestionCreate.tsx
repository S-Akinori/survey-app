import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps, User } from '@/types';
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
import { Choice } from '@/types/Choice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';

interface Props {
  auth: PageProps['auth'];
  form_id: number;
  user: User
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
  choices?: Choice[]
}

export default function QuestionCreate({ auth, form_id, user }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm<InputProps>({
    name: '',
    title: '',
    description: '',
    type: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.question.store', { form_id: form_id }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    if (name === 'type' && value === 'scale') {
      if (!data.scale) newData = { ...data, [name]: value, scale: { minText: '', maxText: '', min: 1, max: 4, step: 1 } }
    } else if (name === 'type' && value === 'dropdown') {
      if (!data.choices) newData = { ...data, [name]: value, choices: [{ id: generateRandomString(10), title: '', value: '', order: 1 }] }
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

  const addChoice = () => {
    if (!data.choices) return
    const newData: InputProps = { ...data, choices: [...data.choices, { id: generateRandomString(10), title: '', value: '', order: data.choices.length + 1 }] }
    setData(newData)
  }

  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    const key = name?.split('_')[2]
    const id = name?.split('_')[0]

    if (!key || !id || !data.choices) return
    const newData: InputProps = { ...data, choices: data.choices.map(choice => choice.id === id ? { ...choice, [key]: value } : choice) }
    setData(newData)
  }

  const deleteChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id
    if (!id || !data.choices) return
    const newData: InputProps = { ...data, choices: data.choices.filter(choice => choice.id !== id) }
    setData(newData)
  }

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{user.company} | {user.name} 様</h2>}
    >
      <Head title="新規質問作成" />

      <Container className='py-12'>
        <h2 className='mb-4'>新規質問作成</h2>
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
            {/* <div className='mb-4'>
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
            </div> */}
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
                multiline
                rows={2}
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
                    id='scale_step'
                    type="number"
                    name='scale_step'
                    value={(data.scale.max - data.scale.min + 1) / data.scale.step}
                    variant='outlined'
                    label='目盛り数'
                    onChange={onScaleChange}
                  />
                </div>
              </div>
            )}
            {(data.type === 'dropdown' || data.type === 'radio') && (
              <div>
                {data.choices && data.choices.map((choice, index) => (
                  <div key={choice.id} className='flex items-center mb-4'>
                    <div className='mr-4'>選択肢{index + 1}</div>
                    <div className='flex'>
                      <TextField
                        id={choice.id + '_choice_title'}
                        type="text"
                        name={choice.id + '_choice_title'}
                        value={choice.title}
                        variant='outlined'
                        label='タイトル'
                        sx={{ mr: 2 }}
                        onChange={onChoiceChange}
                      />
                      <TextField
                        id={choice.id + '_choice_value'}
                        type="text"
                        name={choice.id + '_choice_value'}
                        value={choice.value}
                        variant='outlined'
                        label='値'
                        sx={{ mr: 2 }}
                        onChange={onChoiceChange}
                      />
                      <TextField
                        id={choice.id + '_choice_order'}
                        type="number"
                        name={choice.id + '_choice_order'}
                        value={choice.order}
                        variant='outlined'
                        label='順番'
                        onChange={onChoiceChange}
                      />
                    </div>
                    <button id={choice.id} name={choice.id} type='button' className='pl-2' onClick={deleteChoice}><DeleteIcon /></button>
                  </div>
                ))}
                <button type='button' className='mt-4' onClick={addChoice}><AddCircleOutlineIcon /> 選択肢追加</button>
              </div>
            )}
          </div>
          <div className="text-center mt-4">
            <Button className="ml-4" disabled={processing}>
              登録
            </Button>
          </div>
        </form>
      </Container>
    </AdminAuthenticatedLayout>
  );
}

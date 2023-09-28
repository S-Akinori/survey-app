import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
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

interface Props {
  auth: PageProps['auth'];
  question: Question;
}

interface InputProps {
  title: string;
  description: string;
  type: string;
  scale?: {
    min_text: string
    max_text: string
    min: number
    max: number
    step: number
  }
  choices?: Choice[]
  required: boolean
}

const QuestionEdit = ({ auth, question }: Props) => {
  const { data, setData, put, processing, errors, reset } = useForm<InputProps>({
    title: question.title,
    description: question.description,
    type: question.type,
    scale: question.scale,
    choices: question.choices,
    required: question.required ? true : false
  });

  console.log(data)

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    put(route('admin.question.update', { id: question.id }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    if (name === 'type' && value === 'scale') {
      if (!data.scale) newData = { ...data, [name]: value, scale: { min_text: '', max_text: '', min: 1, max: 4, step: 1 } }
    } else if (name === 'type' && value === 'dropdown') {
      if (!data.choices) newData = { ...data, [name]: value, choices: [{ id: generateRandomString(10), title: '', value: '', order: 1 }] }
    }
    setData(newData)
  }

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    const newData: InputProps = { ...data, required: checked }
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

  const deleteChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id
    if (!id || !data.choices) return
    const newData: InputProps = { ...data, choices: data.choices.filter(choice => choice.id != id) }
    setData(newData)
  }

  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    const key = name?.split('_')[2]
    const id = name?.split('_')[0]

    if (!key || !id || !data.choices) return
    const newChoices = key === 'title' ? data.choices.map(choice => choice.id == id ? { ...choice, [key]: value, value: value } : choice) : data.choices.map(choice => choice.id == id ? { ...choice, [key]: value } : choice)
    const newData: InputProps = { ...data, choices: newChoices }
    setData(newData)
  }

  console.log(data)

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{question.form?.survey?.user?.company} | {question.form?.survey?.user?.name} 様</h2>}
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
                defaultValue={data.title}
                variant='outlined'
                label='質問文'
                onChange={onChange}
                fullWidth
                required
              />
            </div>
            <div className='mb-4'>
              <TextField
                id='description'
                type="text"
                name='description'
                defaultValue={data.description}
                variant='outlined'
                label='説明文'
                onChange={onChange}
                fullWidth
              />
            </div>
            <div className='mb-4'>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={data.required} onChange={onCheckboxChange} />} label="必須項目にする" />
              </FormGroup>
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
                  required
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
                    defaultValue={data.scale.min_text}
                    variant='outlined'
                    label='最小目盛りのテキスト'
                    onChange={onScaleChange}
                    fullWidth
                    required
                  />
                </div>
                <div className='mb-4'>
                  <TextField
                    id='scale_maxText'
                    type="text"
                    name='scale_maxText'
                    defaultValue={data.scale.max_text}
                    variant='outlined'
                    label='最大目盛りのテキスト'
                    onChange={onScaleChange}
                    fullWidth
                    required
                  />
                </div>
                <div className='mb-4'>
                  <TextField
                    id='scale_max'
                    type="number"
                    name='scale_max'
                    defaultValue={data.scale.max}
                    variant='outlined'
                    label='目盛り数'
                    onChange={onScaleChange}
                    required
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
                        defaultValue={choice.title}
                        variant='outlined'
                        label='タイトル'
                        sx={{ mr: 2 }}
                        onChange={onChoiceChange}
                        required
                      />
                      <TextField
                        id={choice.id + '_choice_value'}
                        type="hidden"
                        name={choice.id + '_choice_value'}
                        defaultValue={choice.value}
                        variant='outlined'
                        label='値'
                        sx={{ display: 'none' }}
                        onChange={onChoiceChange}
                      />
                      <TextField
                        id={choice.id + '_choice_order'}
                        type="number"
                        name={choice.id + '_choice_order'}
                        defaultValue={choice.order}
                        variant='outlined'
                        label='順番'
                        onChange={onChoiceChange}
                        required
                      />
                    </div>
                    <button id={choice.id} name={choice.id} type='button' className='pl-2' onClick={deleteChoice}><DeleteIcon /></button>
                  </div>
                ))}
                <button className='mt-4' onClick={addChoice}><AddCircleOutlineIcon /> 選択肢追加</button>
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
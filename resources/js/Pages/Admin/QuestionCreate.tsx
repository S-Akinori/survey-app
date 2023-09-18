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
  form_id: number;
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

export default function QuestionCreate({ auth, form_id }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm<InputProps>({
    name: '',
    title: '',
    description: '',
    type: '',

  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    post(route('admin.question.store', {form_id: form_id}));
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

  // const onChoiceClick = () => {
  //   const id = generateRandomString()
  //   const newData = data.map(item => {
  //     return { ...item, choices: [...item.choices, { id: id, title: '', value: '' }] }
  //   })
  //   setData(newData)
  // }

  // const onScaleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   const id = name?.split('_')[0]
  //   const key = name?.split('_')[1]

  //   if (!id || !key) return
  //   const newData = data.map((item) => {
  //     if (item.id === id) {
  //       const newScale = { ...item.scale, [key]: value }
  //       return { ...item, scale: newScale }
  //     } else {
  //       return item
  //     }
  //   })
  //   setData(newData)
  // }

  // const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   const id = name?.split('_')[0]
  //   const choiceId = name?.split('_')[1]
  //   const key = name?.split('_')[2]

  //   if (!id || !key || !choiceId) return
  //   const newData = data.map((item) => {
  //     if (item.id === id) {
  //       const newChoices = item.choices.map((choice) => {
  //         if (choice.id === choiceId) {
  //           return { ...choice, [key]: value }
  //         } else {
  //           return choice
  //         }
  //       })
  //       return { ...item, choices: newChoices }
  //     } else {
  //       return item
  //     }
  //   })
  //   setData(newData)
  // }

  return (
    <AdminAuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="管理者ページ" />

      <Container className='py-12'>
        <h2 className='mb-4'>質問を作成します。</h2>
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
                      id='scale_step'
                      type="number"
                      name='scale_step'
                      value={(data.scale.max - data.scale.min  + 1) / data.scale.step}
                      variant='outlined'
                      label='目盛り数'
                      onChange={onScaleChange}
                    />
                  </div>
                </div>
              )}
              {/* {data.type === 'radio' && (
                <div className='mt-4'>
                  <div className='mb-4'>
                    <TextField
                      id={data.id + '_choiceMeta_minText'}
                      type="text"
                      name={data.id + '_choiceMeta_minText'}
                      value={data.choiceMeta?.minText}
                      variant='outlined'
                      label='最小メモリテキスト'
                      onChange={onChange}
                      fullWidth
                    />
                  </div>
                  <div className='mb-4'>
                    <TextField
                      id={data.id + '_choiceMeta_minText'}
                      type="text"
                      name={data.id + '_choiceMeta_minText'}
                      value={data.choiceMeta?.minText}
                      variant='outlined'
                      label='最大メモリテキスト'
                      onChange={onChange}
                      fullWidth
                    />
                  </div>
                  {data.choices?.map((choice, index) => (
                    <div key={choice.id} className='mb-4'>
                      <div className='mb-4'>
                        <TextField
                          id={data.id + '_' + choice.id + '_title'}
                          type="text"
                          name={data.id + '_' + choice.id + '_title'}
                          value={data.description}
                          variant='outlined'
                          label={`選択肢${index + 1} タイトル`}
                          onChange={onChoiceChange}
                          fullWidth
                        />
                      </div>
                      <div className='mb-4'>
                        <TextField
                          id={data.id + '_' + choice.id + '_value'}
                          type="text"
                          name={data.id + '_' + choice.id + '_value'}
                          value={data.description}
                          variant='outlined'
                          label={`選択肢${index + 1} 値`}
                          onChange={onChoiceChange}
                          fullWidth
                        />
                      </div>
                    </div>
                  ))}
                  <button onClick={onChoiceClick}><AddCircleOutlineIcon />選択肢を追加</button>
                </div>
              )} */}
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

import React, { FormEventHandler, SyntheticEvent, useEffect } from "react";
import { Head, Link, router } from '@inertiajs/react';
import { Survey } from "@/types/Survey";
import { Container, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import Title from "@/Components/Title";
import { BorderBox } from "@/Components/Box";
import ClientAuthenicatedLayout from "@/Layouts/ClientAuthenticatedLayout";
import { PageProps } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import { Answer } from "@/types/Answer";
import { Response } from "@/types/Response";

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
  flash: { message: string };
  response: Response;
  user_id: number | string;
}
interface InputProps {
  [key: string]: string
}

const createInitialData = (response: Response): InputProps => {
  let data: InputProps = {}
  if (!response.answers) return data
  response.answers.map((answer: Answer) => {
    data['q_' + answer.question_id] = answer.value
  })
  return data
}

const ClientSurveyShow = ({ auth, survey, response, flash, user_id }: Props) => {
  const { data, setData, post, put, processing, errors, reset } = useForm<InputProps>(response ? createInitialData(response) : {});
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    setData(newData)

  }

  const submit: FormEventHandler = (e) => {
    console.log(data)
    if (survey.id == 1) {
      router.get(route('admin.client.survey.thanks'))
    } else {
      router.get(route('admin.client.survey.show', { id: 1, user_id: user_id }))
    }
  };

  console.log(survey)

  return (
    <ClientAuthenicatedLayout
      user={auth.user}
    // header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title={survey.title} />
      <Container className='py-12'>
        <div>
          <form onSubmit={submit}>
            <div>
              <div className="text-center mb-8">
                <ApplicationLogo width={70} height={70} className="mx-auto" />
                <Title Tag="h1" title={survey.title} />
                <p className="text-sm mt-4">*は必須項目</p>
              </div>
              {survey.forms.map((form) => (form.user_form_meta?.value != 0 ) && (
                <div key={form.id}>
                  <Title title={form.title} Tag="h3" className="p-4 mb-4 bg-main text-main-cont" />
                  <div>
                    {form.questions.map((question, index) => ( 
                      <>
                        {question.user_question_meta?.value != 0 && (
                          <div key={question.id} className="mb-16">
                            <Title title={question.required ? question.title + '*' : question.title} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                            {question.type === 'scale' && question.scale && (
                              <div>
                                <div className="mb-20">
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
                                        control={<Radio onChange={onChange} />}
                                        label="Aに近い"
                                        labelPlacement="bottom"
                                        id={'q_' + question.id}
                                        name={'q_' + question.id}
                                        checked={data['q_' + question.id] === '1'}
                                      />
                                      <FormControlLabel
                                        value="2"
                                        control={<Radio onChange={onChange} />}
                                        label="Aにやや近い"
                                        labelPlacement="bottom"
                                        id={'q_' + question.id}
                                        name={'q_' + question.id}
                                        checked={data['q_' + question.id] === '2'}
                                      />
                                      <FormControlLabel
                                        value="3"
                                        control={<Radio onChange={onChange} />}
                                        label="Bにやや近い"
                                        labelPlacement="bottom"
                                        id={'q_' + question.id}
                                        name={'q_' + question.id}
                                        checked={data['q_' + question.id] === '3'}
                                      />
                                      <FormControlLabel
                                        value="4"
                                        control={<Radio onChange={onChange} />}
                                        label="Bに近い"
                                        labelPlacement="bottom"
                                        id={'q_' + question.id}
                                        name={'q_' + question.id}
                                        checked={data['q_' + question.id] === '4'}
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </div>
                              </div>
                            )}
                            {question.type === 'text' && (
                              <div>
                                <TextField
                                  id={'q_' + question.id}
                                  type="text"
                                  name={'q_' + question.id}
                                  defaultValue={data['q_' + question.id]}
                                  variant='outlined'
                                  onChange={onChange}
                                  fullWidth
                                  required={question.required}
                                />
                              </div>
                            )}
                            {question.type === 'textarea' && (
                              <div>
                                <TextField
                                  id={'q_' + question.id}
                                  type="text"
                                  name={'q_' + question.id}
                                  defaultValue={data['q_' + question.id]}
                                  variant='outlined'
                                  onChange={onChange}
                                  fullWidth
                                  multiline
                                  rows={4}
                                  required={question.required}
                                />
                                <div>{data['q_' + question.id] ? data['q_' + question.id].length : 0}文字</div>
                              </div>
                            )}
                            {question.type === 'dropdown' && question.choices && (
                              <div>
                                <FormControl fullWidth>
                                  <Select
                                    labelId='type'
                                    id={'q_' + question.id}
                                    name={'q_' + question.id}
                                    value={data['q_' + question.id] ? data['q_' + question.id] : question.choices[0].value}
                                    onChange={onChange}
                                    required={question.required}
                                  >
                                    {question.choices.map((choice, index) => (
                                      <MenuItem key={choice.id} value={choice.value}>{choice.title}</MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button className="ml-4" disabled={processing}>
                {survey.id == 1 && <Link href={route('admin.client.survey.thanks')}>回答</Link>}
                {survey.id != 1 && <Link href={route('admin.client.survey.show', { id: 1, user_id: user_id })}>回答して次へ</Link>}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </ClientAuthenicatedLayout>
  )
}

export default ClientSurveyShow
import React, { FormEventHandler, SyntheticEvent, useEffect } from "react";
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
}
interface InputProps {
  [key: string]: string
}

const createInitialData = (response: Response, survey: Survey): InputProps => {
  let data: InputProps = {}
  if (!response) {
    survey.forms.map((form) => {
      form.questions.map((question) => {
        data['q_' + question.id] = ''
      })
    })
  } else {
    response.answers.map((answer: Answer) => {
      data['q_' + answer.question_id] = answer.value
    })
  }
  return data
}

const SurveyShow = ({ auth, survey, response, flash }: Props) => {
  const { data, setData, post, put, processing, errors, reset } = useForm<InputProps>(createInitialData(response, survey));
  console.log(data)
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    setData(newData)
  }

  useEffect(() => {
    setData(createInitialData(response, survey))
  }, [survey.id])

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    if (!response) { //未回答の場合は新規回答
      post(route('client.survey.store', { survey_id: survey.id }));
    } else {
      put(route('client.survey.update', { survey_id: survey.id }));
    }
  };
  return (
    <ClientAuthenicatedLayout
      user={auth.user}
    // header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Container className='py-12'>
        <div>
          {flash && (
            <div className="bg-green-200 text-green-600 p-4 mb-4 rounded">
              {flash.message}
            </div>
          )}
          {!flash && (
            <form onSubmit={submit}>
              <div>
                <div className="text-center mb-8">
                  <ApplicationLogo width={70} height={70} className="mx-auto" />
                  <Title Tag="h1" title={survey.title} />
                </div>
                {survey.forms.map((form) => (
                  <div key={form.id}>
                    <Title title={form.title} Tag="h3" className="p-4 mb-4 bg-main text-main-cont" />
                    <div>
                      {form.questions.map((question, index) => (
                        <div key={question.id} className="mb-16">
                          {question.type === 'scale' && question.scale && (
                            <div>
                              <Title title={question.title + '*'} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                              <div className="mb-20">
                                <div className="md:flex justify-between">
                                  <BorderBox>A: {question.scale.min_text}</BorderBox>
                                  <BorderBox>B: {question.scale.max_text}</BorderBox>
                                </div>
                                <FormControl sx={{ width: '100%' }} required>
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
                              <Title title={question.title + '*'} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                              <TextField
                                id={'q_' + question.id}
                                type="text"
                                name={'q_' + question.id}
                                defaultValue={data['q_' + question.id]}
                                variant='outlined'
                                onChange={onChange}
                                fullWidth
                                required
                              />
                            </div>
                          )}
                          {question.type === 'textarea' && (
                            <div>
                              <Title title={question.title + '*'} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
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
                                required
                              />
                              <div>{data['q_' + question.id] ? data['q_' + question.id].length : 0}文字</div>
                            </div>
                          )}
                          {question.type === 'dropdown' && question.choices && (
                            <div>
                              <Title title={question.title + '*'} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                              <FormControl fullWidth>
                                <Select
                                  labelId='type'
                                  id={'q_' + question.id}
                                  name={'q_' + question.id}
                                  value={data['q_' + question.id]}
                                  onChange={onChange}
                                >
                                  {question.choices.map((choice, index) => (
                                    <MenuItem key={choice.id} value={choice.value}>{choice.title}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button className="ml-4" disabled={processing}>
                  {survey.id === 1 && '回答'}
                  {survey.id !== 1 && '回答して次へ'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </ClientAuthenicatedLayout>
  )
}

export default SurveyShow
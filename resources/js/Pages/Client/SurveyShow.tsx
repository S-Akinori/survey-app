import React, { FormEventHandler, SyntheticEvent, useEffect, useState } from "react";
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
import ScaleInputGroup from "@/Components/ScaleInputGroup";

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
  const [requiredIds, setRequiredIds] = useState<string[]>([])
  const [error, setError] = useState('')
  const { data, setData, post, put, processing, errors, reset } = useForm<InputProps>(createInitialData(response, survey));
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const name = e.target.name
    const value = e.target.value
    let newData = { ...data, [name]: value }
    setData(newData)
  }

  useEffect(() => {
    setData(createInitialData(response, survey))
    const requiredIds: string[] = survey.forms.reduce((accumulator: string[], form) => {
      // user_form_metaがオブジェクトでvalueが0の場合はスキップ
      if (form.user_form_meta && form.user_form_meta.value === 0) {
        return accumulator;
      }

      const ids = form.questions
        .filter((q) => {
          // user_question_metaがオブジェクトでvalueが0の場合はフィルタリング
          if (q.user_question_meta && q.user_question_meta.value === 0) {
            return false;
          }
          return q.required;
        })
        .map((q) => `q_${q.id}`);

      return accumulator.concat(ids);
    }, []);
    setRequiredIds(requiredIds)
  }, [survey.id])

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    const isValid = validation();
    if (!isValid) return
    if (!response) { //未回答の場合は新規回答
      post(route('client.survey.store', { survey_id: survey.id }));
    } else {
      put(route('client.survey.update', { survey_id: survey.id }));
    }
  };

  const validation = () => {
    const missingIds = requiredIds.filter(id => !data[id]);
    console.log(missingIds)
    if (missingIds.length) {
      alert('未入力の項目があります。')
      return false
    } else {
      return true
    }
  }
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
                {survey.forms.map((form) => (form.user_form_meta?.value != 0) && (
                  <div key={form.id}>
                    <Title title={form.title} Tag="h3" className="p-4 mb-4 bg-main text-main-cont" />
                    <div>
                      {form.questions.map((question, index) => (question.user_question_meta?.value != 0) && (
                        <div key={question.id} className="mb-16">
                          <Title title={question.required ? question.title + '*' : question.title} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                          {question.type === 'scale' && question.scale && (
                            <div>
                              <div className="mb-20">
                                <div className="md:flex justify-between">
                                  <BorderBox className="mb-2 md:mb-0">A: {question.scale.min_text}</BorderBox>
                                  <BorderBox>B: {question.scale.max_text}</BorderBox>
                                </div>
                                <ScaleInputGroup
                                  id={'q_' + question.id}
                                  name={'q_' + question.id}
                                  onChange={onChange}
                                  data={data['q_' + question.id]}
                                />
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
                                required={Boolean(question.required)}
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
                                required={Boolean(question.required)}
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
                                  value={data['q_' + question.id]}
                                  onChange={onChange}
                                  required={Boolean(question.required)}
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
import React from "react";
import { Survey } from "@/types/Survey";
import { Container, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Title from "@/Components/Title";
import { BorderBox } from "@/Components/Box";
import ClientAuthenicatedLayout from "@/Layouts/ClientAuthenticatedLayout";
import { PageProps } from "@/types";

interface Props {
  auth: PageProps['auth'];
  survey: Survey;
}
const SurveyShow = ({auth, survey }: Props) => {
  console.log(survey)
  return (
    <ClientAuthenicatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >

      <Container className='py-12'>
        <div>
          {survey.forms.map((form) => (
            <div key={form.id}>
              <Title title={form.title} Tag="h3" className="p-4 mb-4 bg-main text-main-cont" />
              <div>
                {form.questions.map((question, index) => (
                  <div key={question.id} className="mb-16">
                    {question.type === 'scale' && question.scale && (
                      <div>
                        {/* 質問は共通なので最初だけ表示 */}
                        {index === 0 && <Title title={question.title} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />}
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
                      </div>
                    )}
                    {question.type === 'text' && (
                      <div>
                        <Title title={question.title} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                        <TextField
                          id={question.name}
                          type="text"
                          name={question.name}
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
                        <Title title={question.title} Tag="h4" className="py-4 mb-4 border-b-2 border-main" />
                        <TextField
                          id={question.name}
                          type="text"
                          name={question.name}
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ClientAuthenicatedLayout>
  )
}

export default SurveyShow
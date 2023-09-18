import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { BorderBox } from "./Box"
import { Question } from "@/types/Question"

interface Props {
  question: Question
}

const QuestionScale = ({question}: Props) => {
  return (
    <div>
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
    </div>
  )
}

export default QuestionScale
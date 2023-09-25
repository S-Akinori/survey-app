import React, { FormEventHandler, SyntheticEvent } from "react";
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
}

const ThanksPage = ({ auth}: Props) => {

  return (
    <ClientAuthenicatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Container className='py-12'>
        ご回答ありがとうございました。
      </Container>
    </ClientAuthenicatedLayout>
  )
}

export default ThanksPage
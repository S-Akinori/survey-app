import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Box, Button, Container, Modal, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function CreateList({ auth }: PageProps) {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const onChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (files === null) {
      return;
    }
    const file = files[0];
    setFile(file)
    setOpen(true);
    
  }
  const handleClose = () => setOpen(false);

  const uploadFile = () => {
    if (file === null) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    fetch('/api/upload', {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData,
      method: 'POST'
    }).then((res) => {
      console.log(res);
      setOpen(false);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="CreateList" />

      <Container>
        <h2>従業員リスト(csv)</h2>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          href="#file-upload"
        >
          アップロード
          <VisuallyHiddenInput onChange={onChange} type="file" />
        </Button>
      </Container>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='flex justify-center items-center'
      >
        <Box className='p-4 bg-white' sx={{background: '#fcfcfc'}}>
          <h2>「{file?.name}」をアップロードしますか？</h2>
          <div className='mt-4 flex justify-end'>
            <div className='pr-4'>
              <Button variant="contained" onClick={uploadFile}>アップロード</Button>
            </div>
            <div>
              <Button color='error' className='pr-4' variant="contained" onClick={handleClose}>キャンセル</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </AuthenticatedLayout>
  );
}

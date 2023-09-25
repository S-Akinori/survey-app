import React, { FormEventHandler, useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@/Components/Button';
import { Response } from '@/types/Response';

interface Client {
  id: string | number;
  name: string | number;
  user_id: string | number;
  responses: Response[];
  client_id: string;
  created_at: string;
  updated_at: string;

}
interface ClientDataWithPagination {
  data: Client[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{ url: string | null; label: string; active: boolean }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface Props {
  auth: PageProps['auth']
  clientData: ClientDataWithPagination
  target?: string
  total: number
  answerTotal: number
}

interface InputProps {
  target: string
}

export default function Dashboard({ auth, clientData, target = 'all', total, answerTotal }: Props) {
  console.log(clientData)
  const { data, setData, get, post } = useForm<InputProps>({ target: target });
  const [answeredClients, setAnsweredClients] = useState<Client[]>([])
  const [noAnsweredClients, setNoAnsweredClients] = useState<Client[]>([])

  useEffect(() => {
    const answeredClients = clientData.data.filter(client => client.responses.length >= 2)
    const noAnsweredClients = clientData.data.filter(client => client.responses.length < 2)
    setAnsweredClients(answeredClients)
    setNoAnsweredClients(noAnsweredClients)
  }, [])

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(data)
    get(route('dashboard', { target: data.target }));
  };
  const download = () => {
    console.log('downloading')
    const token = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    console.log(token)
    fetch(route('download'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token || '',
      },
      body: JSON.stringify(data),
    }).then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${auth.user.name}.csv`;  // 任意のファイル名を設定
        document.body.appendChild(a); // aタグをDOMに追加（非表示）
        a.click();                    // aタグをクリックしてダウンロードを開始
        document.body.removeChild(a); // aタグをDOMから削除
      })
      .catch(error => console.error('Error:', error));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { 'target': e.target.value }
    setData(newData)
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold leading-tight">{auth.user.name}</h2>}
    >
      <Head title="クライアント管理者ダッシュボード" />

      <Container className='py-12'>
        <div className=''>
          <div className="pb-12">
            <div className="flex justify-center max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className='flex items-center'>
                <div className='md:flex items-center px-4 mb-4'>
                  <div className='md:pr-2 font-bold text-center'>回答状況</div>
                  <Box className='text-center'>{Math.floor(answerTotal * 100 / total)}%</Box>
                </div>
                <div className='md:flex items-center px-4 mb-4'>
                  <div className='md:pr-2 font-bold text-center'>回答数</div>
                  <Box className='text-center'>{answerTotal}名 / {total}名</Box>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <form onSubmit={submit}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                >
                  <FormControlLabel value="all" control={<Radio onChange={onChange} />} checked={data.target === 'all'} label="全員" />
                  <FormControlLabel value="no-answer" control={<Radio onChange={onChange} />} checked={data.target === 'no-answer'} label="未回答" />
                  <FormControlLabel value="answer" control={<Radio onChange={onChange} />} checked={data.target === 'answer'} label="回答済" />
                </RadioGroup>
                <div className='text-center'>
                  <Button>抽出</Button>
                </div>
              </FormControl>
            </form>
          </div>
          <div className='mt-4'>
            <div style={{ maxWidth: '650px' }} className='mx-auto'>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>NO.</TableCell>
                      <TableCell>従業員ID</TableCell>
                      <TableCell>回答状況</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clientData && clientData.data.map((client, index) => (
                      <TableRow
                        key={client.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell scope="row">
                          {clientData.from + index}
                        </TableCell>
                        <TableCell>{client.client_id}</TableCell>
                        <TableCell className={answeredClients.some(item => item.id === client.id) ? '' : 'bg-main text-main-cont'}>
                          {answeredClients.some(item => item.id === client.id) ? '回答済' : '未回答'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='mt-4 flex justify-between'>
                {clientData?.prev_page_url && (
                  <Button className='mr-auto'><Link href={`/dashboard?target=${target}&page=${clientData.current_page - 1}`}>前へ</Link></Button>
                )}
                {clientData?.next_page_url && (
                  <Button className='ml-auto'><Link href={`/dashboard?target=${target}&page=${clientData.current_page + 1}`}>次へ</Link></Button>
                )}
              </div>
            </div>
          </div>
          <div className='mt-4 text-center'>
            <Button onClick={download}>CSVダウンロード</Button>
          </div>
        </div>
      </Container>
    </AuthenticatedLayout>
  );
}

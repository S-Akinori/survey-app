import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import Box from '@/Components/Box';
import { Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@/Components/Button';

function createData(
  id: string,
  state: string
) {
  return { id, state };
}

const rows = [
  createData('00000', '済'),
  createData('00001', '未回答'),
  createData('00002', '済'),
];

interface Client {
  id: string;
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
}

export default function Dashboard({ auth, clientData }: Props) {
  // const [clientData, setClientData] = useState<ClientDataWithPagination>();

  // useEffect(() => {
  //     fetch(`/api/clients?page=${currentPage}`)
  //         .then(response => response.json())
  //         .then(data => setClientData(data));
  // }, [currentPage]);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
    >
      <Head title="Dashboard" />

      <Container className='py-12'>
        <div className="pb-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className='flex items-center'>
              <div className='flex items-center px-4'>
                <div className='pr-2 font-bold'>回答状況</div>
                <Box>20%</Box>
              </div>
              <div className='flex items-center px-4'>
                <div className='pr-2 font-bold'>回答数</div>
                <Box>20名 / 100名</Box>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="all" control={<Radio />} label="全員" />
              <FormControlLabel value="no-answer" control={<Radio />} label="未回答" />
              <FormControlLabel value="answer" control={<Radio />} label="回答済" />
            </RadioGroup>
            <div className='text-center'>
              <Button>抽出</Button>
            </div>
          </FormControl>
        </div>
        <div className='mt-4'>
          <div style={{maxWidth: '650px'}}>
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
                      <TableCell className={client ? 'bg-main text-main-cont' : ''}>未回答</TableCell>
                      {/* <TableCell className={client.s tate === '未回答' ? 'bg-main text-main-cont' : ''}>{client.state}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className='mt-4 flex justify-between'>
              {clientData?.prev_page_url && (
                  <Button className='mr-auto'><Link href={'/dashboard?page=' + (clientData.current_page - 1)}>前へ</Link></Button>
              )}
              {clientData?.next_page_url && (
                  <Button className='ml-auto'><Link href={'/dashboard?page=' + (clientData.current_page + 1)}>次へ</Link></Button>
              )}
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <Button>CSVダウンロード</Button>
        </div>
      </Container>
    </AuthenticatedLayout>
  );
}

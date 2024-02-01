import { Box, FormControl, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { SyntheticEvent, useEffect } from 'react';
import { Api } from '../functions/api/Api';
import { Form, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

const qtyInputFields=2
type Inputs = {
  name: string
  description: Blob
}

const getApiProjects = new Api();

function CreateProject() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    const dataForm=new FormData()
    dataForm.append('name', data.name)
    dataForm.append('description', data.description[0]);
    dataForm.append('type', 'createProject')
    console.log(data.description[0])
    // getApiProjects.setHeaders([{
    //   name: 'Content-type',
    //   value: 'multipart/form-data'
    // }])
    getApiProjects.send(dataForm)
    // navigate('/projects');
  };
  // const navigate = useNavigate();



  useEffect(() => {
    getApiProjects.on('loadRequest', loadRequest);
    getApiProjects.on('loadendRequest', loadendRequest);
    getApiProjects.on('errorRequest', errorRequest);
    getApiProjects.open('POST', 'http://localhost/pet/index.php', true);
    getApiProjects.createListners();
  });


  function loadendRequest(...args: any[]) {
    console.log( args[0].target.responseText, 'LOADED');
    try {
      const url = window.URL.createObjectURL(args[0].target.responseText);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'exampledfsdf.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
console.log('Kirdik')
    }
  }

  function loadRequest(...args: any[]) {
    console.log(args, 'load');
    return 'request';
  }

  function errorRequest(...args: any[]) {
    console.log(args, 'error');
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)} method="POST">

        <input type="text" {...register('name')} name="name"/>
        <input type="file" {...register('description')} name={'description'}/>
        <input type="submit" />
    </form>


  );
}

export { CreateProject };

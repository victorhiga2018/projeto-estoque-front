import React from 'react';
import { Button, TextField } from '@mui/material/';
import { FormularioCadastroStyled, Div, Titulo } from '../styles/FormularioCadastroStyle';

export function FormularioCadastro() {
    return (
        <Div>
            <FormularioCadastroStyled>
                <Titulo>Cadastro de Produtos</Titulo>
                <TextField
                    label="Nome" style={{margin: '0rem 0rem 1rem 0', fontSize: '400px'}} type='text'
                />
                <TextField
                    label="Preco" style={{margin: '0rem 0rem 1rem 0'}} type='number'
                />
                <TextField
                    label="Peso" style={{margin: '0rem 0rem 1rem 0' }} type='number' 
                />
                <Button variant="contained" color="success">Cadastrar</Button>
            </FormularioCadastroStyled>
        </Div>
    );
}

export default FormularioCadastro;
import styled from 'styled-components';

export const FormularioCadastroStyled = styled.div`
    border-radius: 2.5px;
    border: 1.5px solid black;
    color: '#BF4F74';
    border-style: inline;
    width: 17rem;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8.6px;
`;

export const Div = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    text-align: center;
`;

export default {FormularioCadastroStyled, Div, Titulo};
import React from 'react';
import FormularioCadastroStyled from '../styles/FormularioCadastroStyle';

export function FormularioCadastro() {
    return (
        <div>
            <FormularioCadastroStyled>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva sua nota..." />
                <button>Criar Nota</button>
            </FormularioCadastroStyled>
        </div>
    );
}

export default FormularioCadastro;
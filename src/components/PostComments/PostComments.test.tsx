import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve postar 2 comentários', () =>  {
        render(<PostComment />)

        const textareaElement = screen.getByTestId('txt-comment')
        const buttonElement = screen.getByTestId('btn-submit')

        fireEvent.change(textareaElement, {
            target: {
                value: 'Testando o primeiro comentario'
            }
        })
        fireEvent.click(buttonElement)

        expect(screen.getByText('Testando o primeiro comentario')).toBeInTheDocument()

        fireEvent.change(textareaElement, {
            target: {
                value: 'Testando o segundo comentario'
            }
        })
        fireEvent.click(buttonElement)

        expect(screen.getByText('Testando o segundo comentario')).toBeInTheDocument()

        // fireEvent.click(screen.getByTestId('btn-submit'))
    })
});
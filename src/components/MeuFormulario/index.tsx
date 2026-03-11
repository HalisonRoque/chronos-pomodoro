import { useState } from 'react';
import './styles.css'
/**
     * Meu primeiro Formulário
     * criado em 05/02
     * referente a aprendizagem 
     *  
     */
export function MeuFormulario() {
    //ESTADO PARA ARMAZENAR O NOME DIGITADO NO INPUT
    const [nome, setNome] = useState<string>('')

    //ESTADO PARA ARMAZENAR O email DIGITADO NO INPUT
    const [email, setEmail] = useState<string>('')

    //ESTADO PARA GUARDAR OS DADOS ENVIADOS NO FORMULÁRIO
    //ELE COMEÇA COMO NULO, POIS NADA FOI ENVIADO AINDA
    const [enviarDados, setEnviarDados] = useState<{
        nome: string,
        email: string
    } | null>(null);

    //função executada quando o formulário é enviado
    function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
        //EVITA O COMPORTAMENTO PADRÃO DO FORMULÁRIO (recarregar a página várias vezes)

        evento.preventDefault()

        //SALVA OS DADOS DIGITADOS NO ESTADO ENVIARDADOS
        setEnviarDados({
            nome: nome,
            email: email,
        })

        //LIMPA O CAMPO NOME APÓS O ENVIO
        setNome('')
        //LIMPA O CAMPO email APÓS O ENVIO
        setEmail('')
    }

    //Retorno do JSX que será exibido na tela
    return (
        <div className='container'>

            {/*Título do formulário*/}
            <h2>
                Cadastro Simples
            </h2>

            {/*Formulário onde recebe também a função enviarFormulario*/}
            <form onSubmit={enviarFormulario}>
                <input
                    type='text' //TIPO DO INPUT
                    placeholder='Nome' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
                    value={nome} //VALOR CONTROLADO
                    onChange={(evento) => setNome(evento.target.value)} //ATUALIZA O ESTADO
                />

                <input
                    type='email' //TIPO DO INPUT email
                    placeholder='E-mail' //TEXTO EXIBIDO QUANDO ESTÁ VAZIO
                    value={email} //VALOR CONTROLADO
                    onChange={(evento) => setEmail(evento.target.value)} //ATUALIZA O ESTADO
                />

                <button type="submit">Enviar</button>
            </form>

            {/* Renderização condicional:
          só aparece se submittedData NÃO for null 
          
          nota que uso o enviarDados para aparecer essa lista
          o enviarDados é um objeto qure salva os valores dos dados dos inputs
          */}
            {enviarDados && (
                <div className="result">
                    <h3>Dados enviados:</h3>

                    {/* Exibe o nome enviado */}
                    <p>
                        <strong>Nome:</strong> {enviarDados.nome}
                    </p>

                    {/* Exibe o email enviado */}
                    <p>
                        <strong>Email:</strong> {enviarDados.email}
                    </p>
                </div>
            )}
        </div>
    );
}
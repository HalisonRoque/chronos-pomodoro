import { useState } from 'react'
import './styles.css'

type Produto = {
    nome: string
    preco: number
}

export function MeuMercado() {
    // Estados dos inputs
    const [nome, setNome] = useState<string>('')
    const [preco, setPreco] = useState<string>('')

    // Lista de produtos (array)
    const [produtos, setProdutos] = useState<Produto[]>([])

    function adicionarProduto(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()

        if (!nome || !preco) return

        const novoProduto: Produto = {
            nome: nome,
            preco: Number(preco)
        }

        // adiciona o produto na lista
        setProdutos([...produtos, novoProduto])

        // limpa os inputs
        setNome('')
        setPreco('')
    }

    // NOVO: função para excluir um produto pelo index
    function excluirProduto(index: number) {
        const novaLista = produtos.filter((_, i) => i !== index) // remove o item clicado
        setProdutos(novaLista)
    }

    // cálculo do total
    const total = produtos.reduce((soma, produto) => soma + produto.preco, 0)

    return (
        <div className="container">
            <h2>Mercado 🛒</h2>

            <form onSubmit={adicionarProduto}>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />

                <button type="submit">Adicionar</button>
            </form>

            <div className="lista">
                <h3>Itens no carrinho:</h3>

                {produtos.map((produto, index) => (
                    <div key={index} className="item">
                        <span>{produto.nome}</span>
                        <span>R$ {produto.preco.toFixed(2)}</span>
                        {/* NOVO: botão para excluir */}
                        <button onClick={() => excluirProduto(index)}>
                            ❌
                        </button>
                    </div>
                ))}

                {produtos.length > 0 && (
                    <div className="total">
                        Total: R$ {total.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    )
}
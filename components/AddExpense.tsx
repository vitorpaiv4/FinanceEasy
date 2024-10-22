import React, { useState } from 'react';

const AddExpense = () => {
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number | string>(''); // Aceita string inicialmente
  const [category, setCategory] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples para garantir que os campos estão preenchidos
    if (!description || !amount || !category) {
      window.alert("Por favor, preencha todos os campos."); // Alterado para usar window.alert
      return;
    }

    // Lógica para adicionar despesa
    const expenseData = {
      description,
      amount: Number(amount), // Converte para número
      category,
    };

    console.log(expenseData);

    // Limpar os campos
    setDescription('');
    setAmount(''); // Volta a ser string para limpar o campo
    setCategory('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Adicionar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        
        <label className="block mb-2">Valor</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Captura como string
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        
        <label className="block mb-2">Categoria</label>
        <select
          value={category}
          onChange={(e) => setCategory((e.target as HTMLSelectElement).value)} // Cast para HTMLSelectElement
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Selecione uma categoria</option> {/* Garante que o valor inicial é vazio */}
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddExpense;

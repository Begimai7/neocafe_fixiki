import React, { useState } from 'react';
import { weekAddNewFilial } from '../utils/constants/'


const MyForm = () => {
  // Создаем состояние для хранения значений инпутов
  const [inputs, setInputs] = useState(weekAddNewFilial);

  // Обработчик изменения значения инпута
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Обновляем состояние, используя предыдущее состояние
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Вы можете использовать состояние inputs для выполнения дальнейших действий
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Используем метод map для генерации инпутов */}
      {Object.keys(inputs).map((inputName) => (
        <input
          key={inputName}
          type='checkbox'
          name={inputName}
          value={inputs[inputName]}
          onChange={handleInputChange}
        />
      ))}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;
import React, { useState } from "react";
import '../Typescript/Typescript.css';

interface FormData {
  name: string;
  surname: string;
  phone: string;
}

export const TypeScript: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    phone: "",
  });

  // Обработчик изменения данных формы
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Обработчик для отправки формы
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Логика для обработки данных формы
    console.log("Submitted Data:", formData);
    // Здесь можно добавить дополнительную логику, например, отправку данных на сервер
  };

  return (
    <>
      <div className="container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} action="#">
          <label htmlFor="name">
            Введите ваше имя
            <input
              type="text"
              placeholder="Ваше имя"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="surname">
            Введите вашу фамилию
            <input
              type="text"
              placeholder="Ваша фамилия"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            Введите ваш номер телефона
            <input
              type="text"
              placeholder="+998 - ___ __ __"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
};

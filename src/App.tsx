import React from 'react';


const App: React.FC = () => {
 
  const username: string = "Inessa";
  const age: number = 25;
  const isAdmin: boolean = true;

  
  const notAssigned: null = null;
  const notDefined: undefined = undefined;

  
  const numbers: number[] = [1, 2, 3, 4, 5];
  const names: Array<string> = ["Kendis", "Phineas", "and","Ferb"];

 
  const userTuple: [number, string] = [1, "Kendis"];

 
  let flexible: any = "Alex";
  flexible = 30;

  
  const someValue: unknown = "Could be anything";

  // 7. Специальный тип void
  const logMessage = (message: string): void => {
    console.log(message);
  };
  logMessage("This is a message");

  // 8. Специальный тип never
  // функция throwError закомментирована, чтобы избежать ошибки выполнения
  // const throwError = (errorMsg: string): never => {
  //   throw new Error(errorMsg);
  // };

  // 9. Интерфейсы (interface)
  interface User {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
  }

  const user: User = {
    id: 1,
    name: "Alice",
    age: 25,
    isAdmin: false
  };

  // 10. Пользовательский тип через type
  type Status = "active" | "inactive" | "banned";
  const currentStatus: Status = "active";

  // Отображение данных
  return (
    <div className="App">
      <h1>TypeScript Types Demo</h1>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Is Admin: {isAdmin ? "Yes" : "No"}</p>
      <p>Not Assigned: {String(notAssigned)}</p>
      <p>Not Defined: {String(notDefined)}</p>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Names: {names.join(", ")}</p>
      <p>User Tuple: [{userTuple[0]}, {userTuple[1]}]</p>
      <p>Flexible (any): {flexible}</p>
      {typeof someValue === "string" && <p>Unknown value is a string: {someValue}</p>}
      <p>User: {user.name}, Age: {user.age}, Is Admin: {user.isAdmin ? "Yes" : "No"}</p>
      <p>Current Status: {currentStatus}</p>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import ExpenceList from "./expence-tracker/components/ExpenceList";
import EspenseFilter from "./expence-tracker/components/ExpenseFilter";
import ExpenseForm from "./expence-tracker/ExpenseForm";

import categories from "./expence-tracker/categories";
import HeaderApp from "./expence-tracker/components/HeaderApp";
import ProductList from "./components/ProductList";

import { original } from "immer";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-Service";
import useUsers from "./services/hooks/useUsers";

// function App() {
//   const [SelectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "Milk", amount: 10, category: "Groceries" },
//     { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
//     { id: 3, description: "Electricity", amount: 10, category: "Utilities" },
//     { id: 4, description: "movies", amount: 10, category: "Entertainment" },
//   ]);
//   const visibleExpenses = SelectedCategory
//     ? expenses.filter((e) => e.category === SelectedCategory)
//     : expenses;

  const { users, error, isLoading, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "mudasir nahimudin" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };
  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      <div>
        {<p className="text-danger">{error}</p>}
        {isLoading && <div className="sppiner-border"></div>}
        <button className="btn btn-primary m-3" onClick={addUser}>
          Add
        </button>
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div>
        <div className="mb-5">
          <ExpenseForm
            onsubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <EspenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>

        <ExpenceList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div> */}
      <HeaderApp />
    </>
  );


export default App;

interface Person {
  age: number;
  name: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 24,
    name: "Miguel",
    lastName: "Lopez",
    address: {
      country: "Mexico",
      houseNo: "10",
      street: "Main Street",
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

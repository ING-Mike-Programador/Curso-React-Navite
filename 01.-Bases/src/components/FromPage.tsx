import { useForm } from "react-hook-form";
type FromInputs = {
  email: string;
  password: string;
};

export const FromPage = () => {
  const { register, handleSubmit } = useForm<FromInputs>({
    defaultValues: {
      email: "miky.programer@example.com",
      password: "123450",
    },
  });

  const onSubmit = (myForm: FromInputs) => {
    if (myForm.email.trim() != "") {
      console.log({ myForm });
    } else {
      console.log("Escribe un correo");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formularios</h3>
      <div className="flex flex-col space-y-2 w-[500px]">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-blue-800 p-2 rounded-xl"
          {...register("email", { register: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-blue-800 p-2 rounded-xl"
          {...register("password", { register: true })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-xl w-30"
        >
          INGRESAR
        </button>
      </div>
    </form>
  );
};

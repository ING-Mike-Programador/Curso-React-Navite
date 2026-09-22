export default function basicTypes() {
  const name = "Miguel";
  const age: number = 24;
  const isActive: boolean = true;
  const power: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>

      <h3>Tipos basicos</h3>
      <h2>{name} - {age} - {isActive ? 'Activo' : 'Inactivo'}</h2>
      <h4>Power</h4>
      <p>{power.join(', ')}</p>
    </>
  );
}

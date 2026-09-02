export const BasicFunctions = () => {
    const n1 = 10;
    const n2 = 20;
    const addTwoNumbers = (a:number,b:number): number => {
    return a + b;
  }
  
    return (
    <>
    <h3>Funciones basicas</h3>
        <span>
            El resultado de sumar {n1} + {n2} = {addTwoNumbers(n1,n2)}
        </span>

    </>
  )
}

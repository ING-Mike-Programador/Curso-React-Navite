// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { ObjectLiterals } from './typescript/ObjectLiterals'

import { Counter } from "./components/Counter";

// import BasicTypes from './typescript/basicTypes'
function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-5xl font-bold m-5">REACT + TypeScript</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals/> */}
      {/* <BasicFunctions /> */}
      <Counter/>
    </div>
  );
}

export default App;

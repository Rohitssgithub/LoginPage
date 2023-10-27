import React, { forwardRef, useRef } from 'react';

const MyFunctionalComponent = forwardRef((props, ref) => {
  return (
    <div>
      <label>My Input:</label>
      <input ref={ref} type="text" />
    </div>
  );
});

function ForwardRef() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyFunctionalComponent ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ForwardRef;

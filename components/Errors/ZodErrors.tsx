import React from 'react'

type ErrorProps = {
    errors: string[]
}

function ZodErrors({ errors }: ErrorProps) {
    if(!errors) return null;
  return errors.map((err: string, index: number) => (
    <div key={index} className=" text-error text-xs italic mt-1 py-2">
      {err}
    </div>
  ));
}

export default ZodErrors
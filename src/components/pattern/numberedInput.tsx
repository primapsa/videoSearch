import React, { useState } from 'react';
import { numberedInputType } from '@/types';

const NumberedInput = ({ children }: numberedInputType) => {
  const [value, setValue] = useState<number | string>('');

  return <>{children({ value, setValue })}</>;
};

export default NumberedInput;

import React, { useState } from 'react';
import { ToggleMenuType } from '@/types';

const ToggleDropdown = ({ children }: ToggleMenuType) => {
  const [menu, setMenu] = useState<boolean>(false);

  return <>{children({ menu, setMenu })}</>;
};

export default ToggleDropdown;

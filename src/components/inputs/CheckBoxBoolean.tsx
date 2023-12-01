import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface CheckBoxProps {
  checked: boolean;
  onToggleChecked: (checked: boolean) => void;
}

const CheckBoxBoolean: React.FC<CheckBoxProps> = ({ checked, onToggleChecked }) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    onToggleChecked(!checked);
  }

  return (
    <button
      type="button"
      className={`grid place-content-center place-items-center border border-grey-50  w-5 h-5 rounded-[5px] cursor-pointer ${
        checked ? 'bg-accent' : 'bg-white '
      }`}
      onClick={handleClick}
    >
      {checked && <CheckIcon className="w-4 h-4 text-white" />}
    </button>
  );
};
export default CheckBoxBoolean;

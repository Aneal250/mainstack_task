/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import classNames from 'classnames';
import { useCallback } from 'react';
import useDetectClickOut from '@hooks/useDetectClickOut';
import { Items } from 'src/types/data';
import CheckBox from './CheckBox';

interface SelectInputProps {
  items: Items[];
  label: string;
  placeholder: string;
  itemsSelected: Items[];
  setItemsSelected: React.Dispatch<React.SetStateAction<Items[]>>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  items,
  label,
  placeholder,
  itemsSelected,
  setItemsSelected,
}) => {
  const { open, setOpen, triggerRef, nodeRef } = useDetectClickOut();

  const toggleSelectItem = useCallback(
    (itemId: number) => {
      const selectedItem = items.find((item) => item.id === itemId);
      if (!selectedItem) return;

      setItemsSelected((prevItems) =>
        prevItems.some((item) => item.id === itemId)
          ? prevItems.filter((item) => item.id !== itemId)
          : [...prevItems, selectedItem]
      );
    },
    [items]
  );

  return (
    <div className={classNames('w-full relative mt-6')} ref={nodeRef}>
      <label className={classNames('block mb-4  text-accent font-semibold')}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="input-primary pl-5 w-full"
        value={itemsSelected.map((item) => item.type).join(', ')}
        readOnly
        onClick={() => setOpen(true)}
        ref={triggerRef}
      />

      {open && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-[20px] shadow-lg">
          <div className="relative max-h-[405px] overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  'flex items-center gap-x-4 w-full px-6 py-4 border-b border-grey-outline'
                )}
              >
                <CheckBox
                  id={item.id}
                  checked={itemsSelected.some((selectedItem) => selectedItem.id === item.id)}
                  toggleChecked={() => toggleSelectItem(item.id)}
                />
                <span className="text-[13px] font-bold">{`${item.type}`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectInput;

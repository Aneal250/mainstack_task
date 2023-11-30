import React, { useState } from 'react';
import { close } from '@images/index';
import dayjs from 'dayjs';
import Button from './Button';
import DateButton from './button/DateButton';

interface FilterProps {
  closeModal: (value: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ closeModal }) => {
  const [tempDate, setTempDate] = useState<{ from: string; to: string }>({
    from: '',
    to: '',
  });

  return (
    <div className="bg-white w-456px] h-[830px] rounded-[20px] p-4">
      <div className="flex items-center justify-between">
        <p className="text-accent font-bold text-[24px]">Filter</p>
        <div onClick={() => closeModal(false)} aria-hidden="true" className="cursor-pointer">
          <img src={close} alt="" />
        </div>
      </div>

      <div className="flex gap-3 mt-8 mx-auto">
        <Button className="!bg-transparent !h-[36px] text-xs !border !border-grey-50 !text-accent">
          Today
        </Button>
        <Button className="!bg-transparent !h-[36px] text-xs !border !border-grey-50 !text-accent">
          Last 7 days
        </Button>
        <Button className="!bg-transparent !h-[36px] text-xs !border !border-grey-50 !text-accent">
          This Month
        </Button>
        <Button className="!bg-transparent !h-[36px] text-xs !border !border-grey-50 !text-accent">
          Last 3 Month
        </Button>
      </div>

      <p className="mt-12 mb-4">Data Range</p>
      <div className="flex w-full  justify-between gap-x-4">
        <DateButton
          value={tempDate.from}
          onChange={(value) =>
            setTempDate((prev) => ({
              ...prev,
              from: dayjs(value).format('YYYY-MM-DD'),
            }))
          }
          isFrom
        />
        <DateButton
          value={tempDate.to}
          onChange={(value) =>
            setTempDate((prev) => ({ ...prev, to: dayjs(value).format('YYYY-MM-DD') }))
          }
        />
      </div>

      {/* Buttonn */}
      <div className="flex gap-3 mt-8 mx-auto">
        <Button className="!bg-transparent !w-full  text-xs !border !border-grey-50 !text-accent">
          Clear
        </Button>
        <Button className="!bg-accent !w-full  text-xs !border !border-grey-50 !text-white">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;

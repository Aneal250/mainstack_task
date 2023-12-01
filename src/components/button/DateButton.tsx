/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import useDetectClickOut from '@hooks/useDetectClickOut';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import { arrowDown } from '@images/index';

interface DateButtonProps {
  onChange?: (value: string) => void;
  type?: 'button' | 'input';
  value?: string;
  className?: string;
  isFrom?: boolean;
}

const DateButton: React.FC<DateButtonProps> = ({
  onChange,
  type = 'input',
  value = '',
  isFrom,
  className,
}) => {
  const { nodeRef, open, setOpen, triggerRef } = useDetectClickOut<HTMLDivElement>();
  const [dateShown, setDateShown] = useState<string | undefined>(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="relative w-full">
      {type === 'input' ? (
        <div className="relative">
          <input
            type="date"
            className={classNames(`input-primary flex items-center ${className}`, {
              '!text-accent': value,
            })}
            onChange={handleInputChange}
            value={value}
          />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`absolute top-1 bottom-1 w-5 grid place-content-center right-2 bg-grey-50 ${className}`}
          >
            <img src={arrowDown} alt="" className="w-[16px]" />
          </button>
        </div>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          className={`text-accent text-[0.813rem] ring-1 ring-accent py-[0.313rem] px-2.5 rounded-[0.30494rem] flex items-center justify-center gap-1 ${className}`}
        >
          {/* <Icon icon="solar:calendar-linear" className="text-xs leading-none" /> */}
          <span className="font-medium leading-none whitespace-nowrap">
            {' '}
            {dateShown || 'Date Filter'}
          </span>
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, transformOrigin: 'top' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            ref={nodeRef}
            // className="z-10 absolute right-0 top-[calc(100%+5px)]"
            className={classNames(`z-10 absolute top-[calc(100%+5px)]`, {
              'left-0': isFrom,
              'right-0': !isFrom,
            })}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={value ? dayjs(value) : null}
                onChange={(newValue) => {
                  const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
                  onChange?.(formattedDate);
                  setOpen(false);
                  setDateShown(dayjs(newValue).format('DD-MM-YYYY'));
                }}
                className="bg-white from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.12)] rounded-[0.313rem] shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]"
              />
            </LocalizationProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

DateButton.defaultProps = {
  onChange: () => {},
  type: 'input',
  value: '',
  className: '',
  isFrom: false,
};

export default DateButton;

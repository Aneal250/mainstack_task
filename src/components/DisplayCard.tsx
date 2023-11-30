import React from 'react';
import formatCurrency from '@helpers/formateCurrency';
import { info } from '@images/index';
import LoadingText from './LoaderText';

interface DisplayCardProps {
  title: string;
  amount: string;
  loading?: boolean;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, amount, loading }) => {
  return (
    <div className="flex items-start justify-between mb-8">
      {loading ? (
        <div className="flex w-full  flex-col gap-y-6">
          <div className="flex  gap-4 items-center justify-between">
            <LoadingText className="h-[0.25rem]  w-[3rem]" />
            <LoadingText className="h-[0.25rem]  w-[2rem]" />
          </div>
          <LoadingText className="h-[0.3rem]  w-[6rem]" />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <p className="text-sm text-grey-400 mb-2">{title}</p>
            <p className="text-accent font-bold text-[28px]">{formatCurrency(amount, 'USD')}</p>
          </div>
          <img src={info} alt="" />
        </>
      )}
    </div>
  );
};

DisplayCard.defaultProps = {
  loading: false,
};

export default DisplayCard;

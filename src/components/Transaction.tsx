import React from 'react';
import formatCurrency from '@helpers/formateCurrency';
import { arrowDownRed, arrowUpGreen } from '@images/index';
import { Transactoin } from 'src/types/data';
import classNames from 'classnames';
import LoadingText from './LoaderText';

interface TransactionProps {
  transaction: Transactoin;
  loading: boolean;
}

const Transaction: React.FC<TransactionProps> = ({ transaction, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-between my-4">
          <div className="flex w-full  flex-col gap-y-6">
            <div className="flex  gap-4 items-center justify-between">
              <LoadingText className="h-[0.25rem]  w-[4rem]" />
              <LoadingText className="h-[0.25rem]  w-[3rem]" />
            </div>
            <LoadingText className="h-[0.3rem]  w-[6rem]" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between my-4">
          {transaction?.type === 'deposit' ? (
            <>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center justify-center rounded-full bg-[#E3FCF2] h-[48px] w-[48px]">
                  <img src={arrowUpGreen} alt="" className="w-[20px] rotate-[225deg]" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-accent">{transaction.metadata.product_name}</p>
                    <p className="text-grey-400 text-sm">{transaction.metadata.name}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-accent">{formatCurrency(transaction.amount, 'USD')}</p>
                {/* <p className="text-[14px] text-grey-400">Apr, 02, 2022</p> */}
                <p className="text-[14px] text-grey-400">{transaction.date}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-x-5">
                <div className="flex items-center justify-center rounded-full bg-[#F9E3E0] h-[48px] w-[48px]">
                  <img src={arrowDownRed} alt="" className="w-[20px] rotate-[45deg]" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-accent">Cash Withdrawal</p>
                    <p
                      className={classNames(`text-grey-400 text-sm`, {
                        'text-[#0EA163]': transaction.status === 'successful',
                        'text-[#A77A07]': transaction.status === 'pending',
                      })}
                    >
                      {transaction.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-accent">{formatCurrency(transaction.amount, 'USD')}</p>
                {/* <p className="text-[14px] text-grey-400">Apr, 02, 2022</p> */}
                <p className="text-[14px] text-grey-400">{transaction.date}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Transaction;

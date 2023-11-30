import { useState } from 'react';
import { useGetUserTransactions } from '@hooks/query/useFetchData';
import { arrowDown, download } from '@images/index';
import { Transactoin } from 'src/types/data';
import Button from './Button';
import Transaction from './Transaction';
import ModalWrapper from './modal/ModalWrapper';
import Filter from './Filter';

const TransactionSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { data, isLoading } = useGetUserTransactions();

  return (
    <div className="mt-8">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-[24px]">{data?.length} Transactions</p>
          <p className="text-grey-400 text-[14px]">Your transactions for the last 7 days</p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="bg-grey-50 !text-accent" onClick={() => setShowFilter(true)}>
            filter <img src={arrowDown} alt="" className="w-[16px]" />
          </Button>
          <Button className="bg-grey-50 !text-accent">
            Export List <img src={download} alt="" className="w-[16px]" />
          </Button>
        </div>
      </div>

      {/* Card */}

      <div className="mt-8">
        {data?.map((transaction: Transactoin, index: number) => (
          <Transaction key={`${index + 1}`} transaction={transaction} loading={isLoading} />
        ))}
      </div>
      <ModalWrapper
        show={showFilter}
        setShow={setShowFilter}
        component={<Filter closeModal={() => setShowFilter(false)} />}
      />
    </div>
  );
};

export default TransactionSection;

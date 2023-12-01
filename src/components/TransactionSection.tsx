/* eslint-disable no-else-return */
import { useState } from 'react';
import { useGetUserTransactions } from '@hooks/query/useFetchData';
import { arrowDown, download } from '@images/index';
import { TransactionTypes, Items } from 'src/types/data';
import Button from './Button';
import Transaction from './Transaction';
import ModalWrapper from './modal/ModalWrapper';
import Filter from './Filter';

const TransactionSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { data, isLoading } = useGetUserTransactions();
  const [transactionType, setTransactionType] = useState<Items[]>([]);
  const [isFilter, setIsFilter] = useState(false);

  const handleFilter = () => {
    if (isFilter && transactionType.length > 0) {
      return data?.filter((transaction: TransactionTypes) =>
        transactionType.some((type) => type.type === transaction.type)
      );
    }
    return data;
  };

  const clearFilter = () => {
    setTransactionType([]);
    setIsFilter(false);
  };

  const filteredTransactions = handleFilter();

  return (
    <div className="mt-8">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-[24px]">{filteredTransactions?.length} Transactions</p>
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
        {filteredTransactions?.map((transaction: TransactionTypes, index: number) => (
          <Transaction key={`${index + 1}`} transaction={transaction} loading={isLoading} />
        ))}
      </div>
      <ModalWrapper
        show={showFilter}
        setShow={setShowFilter}
        component={
          <Filter
            closeModal={() => setShowFilter(false)}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            setIsFilter={setIsFilter}
            clearFilter={clearFilter}
          />
        }
      />
    </div>
  );
};

export default TransactionSection;

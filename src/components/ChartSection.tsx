import { line } from '@images/index';
import { useGetUserWallet } from '@hooks/query/useFetchData';
import Button from './Button';
import Chart from './Chart';
import DisplayCard from './DisplayCard';

const ChartSection = () => {
  const { data, isLoading } = useGetUserWallet();

  return (
    <div className="flex mt-16 py-4 mx-[145px] gap-x-20 ">
      <div className="flex-1">
        <div className="flex items-center  gap-x-16">
          <div className="flex">
            <div className="flex-col">
              <p className="text-grey-400">Available Balance</p>
              <h6 className="text-accent text-[36px] font-bold">USD 120,500.00</h6>
            </div>
          </div>
          <Button className="!h-[52px] !w-[167px] !px-[28px]  text-white">Withdraw</Button>
        </div>
        <Chart />
        <div>
          <img src={line} alt="" />
          <div className="flex items-center justify-between text-sm text-grey-400">
            <p>Apr 1, 2022</p>
            <p>Apr 30, 2022</p>
          </div>
        </div>
      </div>
      <div className="w-[280px] ">
        <DisplayCard title="Ledger Balance" amount={data?.ledger_balance} loading={isLoading} />
        <DisplayCard title="Total Payout" amount={data?.total_payout} loading={isLoading} />
        <DisplayCard title="Total Revenue" amount={data?.total_revenue} loading={isLoading} />
        <DisplayCard title="Pending Payout" amount={data?.pending_payout} loading={isLoading} />
      </div>
    </div>
  );
};

export default ChartSection;

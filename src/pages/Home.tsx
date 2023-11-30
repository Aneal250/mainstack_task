import ChartSection from '@components/ChartSection';
import { product1, product2, product3, product4 } from '@images/index';
import Container from '@components/Container';
import NavBar from '@components/NavBar';
import TransactionSection from '@components/TransactionSection';

const Home = () => {
  return (
    <Container className="my-4 relative ">
      <NavBar />
      <ChartSection />
      <TransactionSection />
      <div className="flex flex-col gap-y-4 absolute  top-[350px]  -left-[100px] shadow px-2 py-4 rounded-[100px] ">
        <img src={product1} alt="" className="grayscale" />
        <img src={product2} alt="" className="grayscale" />
        <img src={product3} alt="" className="grayscale" />
        <img src={product4} alt="" className="grayscale" />
      </div>
    </Container>
  );
};

export default Home;

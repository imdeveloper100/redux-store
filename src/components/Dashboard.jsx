import Product from "./Product";

const Dashboard = () => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl mx-auto justify-center text-center mb-4 bg-purple-200 px-8 py-4 flex font-bold">Product Dashboard</h2>
      <Product />
    </>
  );
};

export default Dashboard;

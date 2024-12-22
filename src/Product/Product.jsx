import { useProductApi } from "../api/api-hook/useProduct";

const Product = () => {
  const { data, isLoading } = useProductApi();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data?.data?.data.map((item) => (
        <div key={item?.id}>
          <img width={100} src={item?.image} alt={item?.title} />
          <h3>{item?.title}</h3>
          <p>{item?.price}</p>
        </div>
      ))}
    </div>
  );    
};

export default Product;

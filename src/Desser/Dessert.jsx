import { useDessertApi } from "../api/api-hook/useProduct";

const Dessert = () => {
  const { data, isLoading } = useDessertApi();

  return (
    <div>
      {data?.data.data?.length === 0 ? (
        <p>محصولی وجود ندارد</p>
      ) : (
        <>
          {isLoading && <div>Loading...</div>}
          {data?.data?.data.map((item) => (
            <div key={item?.id}>
              <img width={100} src={item?.image} alt={item?.title} />
              <h3>{item?.title}</h3>
              <p>{item?.price}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dessert;

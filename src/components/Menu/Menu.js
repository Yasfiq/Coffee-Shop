import editIcon from "../../assets/images/icon/edit-icon.svg";
import deleteIcon from "../../assets/images/icon/delete-icon.svg";
import { useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, deleteProduct } from "../../actions/productAction";

const Menu = (props) => {
  // const [dataProduct, setDataProduct] = useState([]);
  const dispatch = useDispatch();
  const { result, loading, error, deleteResult, addResult } = useSelector(
    (state) => state.productReducer
  );

  const handledeleteProduct = (name, id) => {
    if (window.confirm(`Are you sure want to delete ${name}`)) {
      dispatch(deleteProduct(id));
      console.log(deleteResult);
      alert("Product data successfully deleted");
      // dataProduct.map((product, i) => {
      //   if (dataProduct[i].id === idP) {
      //     dataProduct.splice(i, 1);
      //   }
      // });
    }
  };

  const checkRole = (dataProduct) => {
    if (localStorage.getItem("@userLogin")) {
      if (JSON.parse(localStorage.getItem("@userLogin")).role === "admin") {
        return (
          <>
            <div className="space-x-3">
              <Link to={`edit/${dataProduct.id}`}>
                <button className="p-3 rounded-full bg-secondary relative">
                  <img src={editIcon} type="svg" alt="edit-icon" width="25" />
                </button>
              </Link>
              <button className="p-3 rounded-full bg-red-500 relative">
                <img
                  src={deleteIcon}
                  alt="delete-icon"
                  width="30"
                  onClick={() => {
                    handledeleteProduct(
                      dataProduct.productname,
                      dataProduct.id
                    );
                  }}
                />
              </button>
            </div>
            <Link to={`${dataProduct.id}`}>
              <button className="btn-primary mt-3">Detail</button>
            </Link>
          </>
        );
      }
    } else {
      return;
    }
  };

  // useEffect(() => {
  //   // console.log("1. Use Effect");
  //   if (deleteResult || addResult) {
  //     dispatch(getProduct(props.category));
  //   }
  //   dispatch(getProduct(props.category, props.order, props.search, props.limit));
  // }, [dispatch, props.category, props.order, props.search, props.limit, deleteResult, addResult]);

  useEffect(() => {
    if (deleteResult || addResult) {
      dispatch(
        getProduct(props.category, props.order, props.search, props.limit)
      );
    } else {
      dispatch(
        getProduct(props.category, props.order, props.search, props.limit)
      );
    }
  }, [
    dispatch,
    props.category,
    props.order,
    props.search,
    props.limit,
    deleteResult,
    addResult,
  ]);

  return (
    <>
      <section className="grid grid-cols-4 py-16 gap-x-10 gap-y-28 container pr-36">
        {result ? (
          result.Data.map((product) => {
            if (localStorage.getItem("@userLogin")) {
              if (
                JSON.parse(localStorage.getItem("@userLogin")).role === "admin"
              ) {
                return (
                  <div>
                    <div
                      key={product.id}
                      className="px-3 py-5 text-center bg-white rounded-3xl shadow-xl"
                    >
                      <img
                        src={`https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${product.productimage[0].filename}.webp`}
                        alt={product.productimage[0].name}
                        className="-mt-20 w-40 h-40 mx-auto rounded-full"
                      />
                      <h4 className="font-poppins text-2xl font-black mt-4">
                        {product.productname}
                      </h4>
                      <p className="price font-bold text-xl my-3">
                        {product.price}
                      </p>
                      {checkRole(product)}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <Link to={`${product.id}`}>
                      <div
                        key={product.id}
                        className="px-3 py-5 text-center bg-white rounded-3xl shadow-xl"
                      >
                        <img
                          src={`https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${product.productimage[0].filename}.webp`}
                          alt={product.productimage[0].name}
                          className="-mt-20 w-40 h-40 mx-auto rounded-full"
                        />
                        <h4 className="font-poppins text-2xl font-black mt-4">
                          {product.productname}
                        </h4>
                        <p className="price font-bold text-xl my-3">
                          {product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              }
            } else {
              return (
                <div>
                  <Link to={`${product.id}`}>
                    <div
                      key={product.id}
                      className="px-3 py-5 text-center bg-white rounded-3xl shadow-xl"
                    >
                      <div
                        className="-mt-20 w-40 h-40 mx-auto rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${product.productimage[0].filename}.webp')`,
                        }}
                      ></div>
                      <h4 className="font-poppins text-2xl font-black mt-4">
                        {product.productname}
                      </h4>
                      <p className="price font-bold text-xl my-3">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            }
          })
        ) : loading ? (
          <div>
            <div className="px-3 py-5 text-center bg-white rounded-3xl shadow-xl">
              <div className="-mt-20 w-40 h-40 mx-auto rounded-full bg-slate-200"></div>
              <h4 className="font-poppins text-2xl font-black mt-4"> </h4>
              <p className="price font-bold text-xl my-3"></p>
            </div>
          </div>
        ) : error ? (
          error
        ) : (
          <p>Data Empty</p>
        )}
      </section>
    </>
  );
};

export default Menu;

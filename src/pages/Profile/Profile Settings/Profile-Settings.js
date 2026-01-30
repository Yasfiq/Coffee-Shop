import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../actions/userAction";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { getUserResult, editStatus } =
    useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUserById(JSON.parse(localStorage.getItem("@userLogin")).id));
  }, [dispatch]);

  if (getUserResult) {
    return (
      <>
        <div className="flex flex-col items-center col-span-4 py-8">
          <div
            className="w-44 h-44 font-rubik rounded-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dgiwfhlhr/image/upload/v1769731269/${getUserResult[0].profile_image}.webp")`,
            }}
          ></div>
          <p className="font-bold text-black text-2xl mt-4">
            {getUserResult[0].name}
          </p>
          <p className="text-base text-black">{getUserResult[0].email}</p>
          <button className="btn-primary font-poppins text-base mt-8">
            Choose photo
          </button>
          <button className="btn-secondary font-poppins text-base mt-3">
            Remove photo
          </button>
          <button className="btn-third font-poppins text-base mt-8">
            Edit Password
          </button>
          {editStatus === true ? (
            <>
              <p className="text-xl font-poppins font-bold mt-8 text-secondary">
                Do you want to save the changes ?
              </p>
              <button className="btn-secondary font-poppins text-base mt-6">
                Save Change
              </button>
              <button
                className="btn-primary font-poppins text-base mt-3"
                onClick={() => dispatch({ type: "EDIT_STATE", status: false })}
              >
                Cancel
              </button>
            </>
          ) : (
            ""
          )}
          <button className="btn-third font-poppins text-base mt-8">
            Log out
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center col-span-4 border-2">
          <div className="w-44 h-44 rounded-full bg-gray-300 animate-pulse"></div>
          <p className="font-rubik font-bold text-black text-2xl animate-pulse mt-4 h-6 w-56 bg-gray-300 mb-2"></p>
          <p className="font-rubik text-base text-black h-5 bg-gray-300 w-40 animate-pulse"></p>
          <button className="bg-gray-300 animate-pulse rounded-xl mt-8 h-12 w-52"></button>
          <button className="bg-gray-300 animate-pulse rounded-xl mt-3 h-12 w-52"></button>
          <button className="bg-gray-300 animate-pulse rounded-xl mt-8 h-12 w-52"></button>
          <p className="mt-8 h-8 w-64 animate-pulse bg-gray-300"></p>
          <button className="bg-gray-300 animate-pulse rounded-xl font-poppins text-base mt-8 h-12 w-52"></button>
          <button className="bg-gray-300 animate-pulse rounded-xl font-poppins text-base mt-3 h-12 w-52"></button>
          <button className="bg-gray-300 animate-pulse rounded-xl font-poppins text-base mt-8 h-12 w-52"></button>
        </div>
      </>
    );
  }
};

export default ProfileSettings;

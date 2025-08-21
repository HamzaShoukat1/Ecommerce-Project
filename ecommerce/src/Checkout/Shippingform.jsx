import { useForm } from "react-hook-form"
import CountriesList from '../Checkout/CountriesList'
/**
 * Shipping form component.
 */
const Shippingform = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();





  return (
    <form
      className="flex flex-col max-w-md mx-auto p-4"
      onSubmit={handleSubmit(onSubmit)}
      
    >
      {/* Full Name */}
      <label
        htmlFor="fullName"
        className="mt-3 mb-1 font-semibold text-xs cursor-pointer"
      >
        Full name*
      </label>
      <input
        id="fullName"
        {...register("fullName", { required: "Full name is required" })}
        placeholder="Enter full name"
        className={`placeholder:text-sm placeholder:text-gray-400
          outline-none rounded-md md:px-2 py-2 border ${
            errors.fullName ? "border-red-500" : "border-gray-200"
          } focus:border-blue-500`}
      />
      {errors.fullName && (
        <p  className="text-red-600 mt-1 text-sm">
          {errors.fullName.message}
        </p>
      )}

      {/* Email */}
      <label
        htmlFor="email"
        className="mt-6 mb-1 font-semibold text-xs cursor-pointer"
      >
        Email*
      </label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Please enter a valid email address",
          },
        })}
        placeholder="Enter your email"
        className={`placeholder:text-sm md:px-2 placeholder:text-gray-400
          outline-none rounded-md  py-2   border ${
            errors.email ? "border-red-500" : "border-gray-200"
          } focus:border-blue-500`}
      />
      {errors.email && (
        <p  className="text-red-600 mt-1 text-sm">
          {errors.email.message}
        </p>
      )}

      {/* Country */}
      <label
        htmlFor="country"
        className="mt-6 mb-1 font-semibold text-xs cursor-pointer"
      >
        Country*
      </label>

     <select
  id="country"
  {...register("country", { required: "Country is required" })}
  // defaultValue=""
  className={`outline-none rounded-md md:px-24 py-3  cursor-pointer border ${
    errors.country ? "border-red-500" : "border-gray-200"
  } text-sm text-gray-700`}
>
  <option  >
    Select your country
  </option>
  {CountriesList.map((country) => (
    <option key={country.code} value={country.name} >
      {country.name}
    </option>
  ))}
</select>

      {errors.country && (
        <p role="alert" className="text-red-600 mt-1 text-sm">
          {errors.country.message}
        </p>
      )}
   
{/* //---- */}
<div className="flex gap-2 mt-3">
  {/* City Field */}
  <div className="flex flex-col w-full">
    <label htmlFor="City" className="font-semibold text-xs mb-1 cursor-pointer">
      City
    </label>
    <input
      id="City"
      type="text"
      {...register('City', {
        required: "Enter a valid City name"
      })}
      placeholder="City name"
      className={`placeholder:text-sm w-25 placeholder:text-gray-400 outline-none focus:border-blue-500  rounded-md py-2 px-2 border ${
        errors.City ? 'border-red-500' : 'border-gray-200'
      }`}
    />
    {errors.City && (
      <p className="text-red-600 mt-1 text-sm">
        {errors.City.message}
      </p>
    )}
  </div>



  {/* State Field */}
  <div className="flex flex-col w-full">
    <label htmlFor="State" className="font-semibold text-xs mb-1 cursor-pointer">
      State
    </label>
    <input
      id="State"
      type="text"
      {...register('State', {
        required: "Enter a valid State"
      })}
      placeholder="State"
      className={`placeholder:text-sm w-25 placeholder:text-gray-400 outline-none  focus:border-blue-500 rounded-md py-2 px-2 border ${
        errors.State ? 'border-red-500' : 'border-gray-200'
      }`}
    />
    {errors.State && (
      <p className="text-red-600 mt-1 text-sm">
        {errors.State.message}
      </p>
    )}
  </div>

  {/* ZipCode Field */}
  <div className="flex flex-col w-full">
    <label htmlFor="ZipCode" className="font-semibold text-xs mb-1 cursor-pointer">
      Zipcode
    </label>
    <input
      id="ZipCode"
      type="text"
      {...register('ZipCode', {
        required: "Enter a valid Zipcode"
      })}
      placeholder="Zipcode"
      className={`placeholder:text-sm w-25 placeholder:text-gray-400 focus:border-blue-500  outline-none rounded-md py-2 px-2 border ${
        errors.ZipCode ? 'border-red-500' : 'border-gray-200'
      }`}
    />
    {errors.ZipCode && (
      <p className="text-red-600 mt-1 text-sm">
        {errors.ZipCode.message}
      </p>
    )}
  </div>
</div>











{/* // */}
       <div className="flex items-center space-x-2 mt-2">
        <input
          id="agreeTerms"
          type="checkbox"
          {...register("agreeTerms", {
            required: "You must agree to the terms and conditions",
          })}
          className=" w-3 h-3  text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="agreeTerms"
          className="text-sm text-gray-700  cursor-pointer"
        >
          I agree to the{" "}
          <a
          
            className="text-blue-400 hover:underline"
          >
            Terms and Conditions
          </a>
          
        </label>
       </div>
    {errors.agreeTerms && (
      <p className="text-red-600 mt-1 text-sm">
        {errors.agreeTerms.message}
      </p>
    )}
  

     
    </form>
  );
};

export default Shippingform;



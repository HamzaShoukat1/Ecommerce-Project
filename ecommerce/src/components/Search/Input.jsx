import { useId, } from "react"

function Input ({
  label,
  type = 'search',
  className = '',
  ...props

},ref)
{
  const id = useId()

  return(
    <div className="w-full">
      {label && <label
      className=""
      htmlFor={id}
      >

        {label}
        </label>}
   <input
   type={type}
   className={`px-3 text-base py-2 w-[20vh] md:w-[90vh] border border-gray-500  rounded-xl bg-[#F0F5FF] justify-center flex ml-0 md:ml-20  focus:outline-none  ${className}`}
   ref={ref}
   {...props}
   id={id}
    />
    </div>
  )

}


export default (Input)
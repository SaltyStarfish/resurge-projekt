// Husk at importere alle Links og Components, der referes til
import ComponentTemplate from "../components/ComponentTemplate"


function FemtipsView() {

  return (
    <div className="flex justify-left items-left w-full max-w-[1102px] mx-auto my-12 px-4 sm:px-6 md:px-0 flex-col gap-[44px] md:gap-[105px]">
      <h1 className="urbanist font-medium text-[80px] mb-4">5 performance-tips...</h1>
      <ComponentTemplate/>
    </div>
  )
}

export default FemtipsView

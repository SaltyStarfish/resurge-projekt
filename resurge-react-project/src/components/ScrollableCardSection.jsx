// Husk at importere alle Links og Components, der referes til


function ScrollableCards({ children }) {

  return (
    <>
      <div className="max-w-screen">
              <div className="mx-auto w-full max-w-max overflow-x-auto hide-scrollbar mb-[105px] mt-20">
                <div className="flex gap-3 md:gap-7.5 overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-20">
                  {children}
                </div>
              </div>
            </div>
    </>
  )
}

export default ScrollableCards
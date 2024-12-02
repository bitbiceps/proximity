import React from 'react'

const SupportCard = () => {
  return (
    <div className="relative h-[480px] w-[400px] bg-app-blue-1 rounded-2xl text-left p-8 cursor-pointer group hover:scale-110 transition-all duration-500">
      {/* Background with Black Overlay */}
      <div className="absolute inset-0 z-0 bg-cardbg bg-cover bg-center rounded-2xl opacity-0 group-hover:opacity-[0.88] transition-opacity duration-500">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-[#FFFFFF] font-semibold text-[20px] mb-4 group-hover:cursor-pointer">
          Publication in Professional or Major Media Outlets
        </p>
        <p className="text-[#FFFFFFB2] text-[18px] font-sans font-normal group-hover:cursor-pointer">
          We ensure your work is  featured in recognized  professional or trade
          publications, as well as other  major media outlets pertinent  to your field.
        </p>
      </div>
    </div>


  )
}

export default SupportCard
import React from 'react'
import img from "../../assets/map/image.svg"
import img1 from "../../assets/map/image1.svg"
import img2 from "../../assets/map/image2.svg"
import img3 from "../../assets/map/image3.svg"
import img4 from "../../assets/map/image4.svg"
import img5 from "../../assets/map/image5.svg"
import img6 from "../../assets/map/image6.svg"
const Hero = ({ inner, label1, label2, label3, label4, label5, label6 }) => {
  return (
    <div className={`relative bg-map-bg  h-[100vh]  bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium`}>
      <div className='text-white text-center text-7xl mt-40 animate-fade-in-up'>
        {label1 && <p className='mb-1'>{label1}</p>}
        {label4 && <p className='mb-1'>{label4.normal} <span className='italic'>{label4.italic}</span></p>}
        {label2 && <p className='mb-8'>{label2}</p>}
        {label3 && <p className='italic'>{label3}</p>}
        {label5 && <p className='text-3xl w-[68%] mx-auto'>{label5}</p>}
        {label6 && <p className='text-3xl w-full text-center'>{label6}</p>}
      </div>
      {/* <div className='absolute top-[200px] left-[70px] h-[70px] w-[70px] '><img src={img} alt='image'></img></div>
      <div className='absolute top-[600px] left-[170px] h-[70px] w-[70px] '><img src={img1} alt='image'></img></div>
      <div className='absolute top-[200px] right-[70px] h-[70px] w-[70px] '><img src={img2} alt='image'></img></div>
      <div className='absolute top-[600px] right-[170px] h-[70px] w-[70px] '><img src={img3} alt='image'></img></div>
      <div className='absolute top-[220px] left-[500px] h-[70px] w-[70px] '><img src={img4} alt='image'></img></div>
      <div className='absolute top-[600px] left-[500px] h-[70px] w-[70px] '><img src={img5} alt='image'></img></div>
      <div className='absolute top-[400px] left-[50px] h-[70px] w-[70px] '><img src={img6} alt='image'></img></div> */}
    </div>
  )
}

export default Hero
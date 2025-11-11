import React from 'react'
import './writBody.css';
import parentPage from '../assets/parentPage.jpg';
import nestedRoutePaths from '../assets/nestedRoutePaths.jpg';


const WritBody = () => {
  return (
    <>
    <div className='writContainer max-w-screen-md bg-blue-300/20 rounded overflow-y-auto mt-[6rem] 
     md:max-w-[55rem] lg:max-w-[65rem] h-[calc(100vh-10rem)] mx-auto px-4 py-6'>
      <div className='subContainer max-w-prose lg:max-w-[55rem] mx-auto'>

        {/* Intro Section */}
        <section className='bg-[rgb(1,1,30)] rounded px-4 py-6 mb-10'>
          <h1 className='text-blue-300 text-2xl mb-2 text-center underline'>1. Creating Nested Routes</h1>
          <h3 className='text-blue-300 underline mb-2'>Description:</h3>
          <p className='text-blue-300 text-sm mb-4 indent-4'>
            Nested routes enable you to embed pages within a web page. When you create a parent page or base page, this base page acts like a frame and should house the sub-pages or children links. When you click a sub-page link, the body within the frame reflects the sub-page content while the frame remains constant.
          </p>
          <h4 className='text-blue-300 mb-2 underline'>Step #1:</h4>
          <p className='text-blue-300'>install react-router-dom // npm i react-router-dom</p>
        </section>

        {/* Step 2 Section */}
        <section className='grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 mb-10'>
          <div className='bg-[rgb(1,1,30)] rounded px-4 py-2 h-full flex flex-col gap-y-2'>
            <h4 className='text-blue-300 underline mb-4'>Step #2</h4>
            <p className='text-blue-300 text-sm indent-4'>
              Establish your parent page with an easily distinguishable file/page name. Though optional, for best practices, you should create a folder to house these files.
            </p>
          </div>
          <div className='flex flex-col justify-between h-full'>
            <img className='img1 rounded w-full max-h-[100%] object-contain' src={parentPage} alt='Parent Page' />
            <p className='bg-[rgb(1,1,30)] text-[10px] text-blue-300 px-2 italic rounded mt-2'>
              Images accredited to: Byte Legacy
            </p>
          </div>
        </section>

        {/* Step 3 Section */}
        <section className='grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 mb-10'>
          <div className='bg-[rgb(1,1,30)] rounded px-4 py-4 h-full flex flex-col gap-y-2'>
            <h4 className='text-blue-300 underline mb-2'>Step #3</h4>
            <p className='text-blue-300 text-sm indent-4'>
              Establish routes with nested route paths. Import Router, Routes, and Route from react-router-dom. Notice in the image how the parent route isn’t closed — it wraps the sub-pages. The parent closure follows the nested declarations. Don’t forget to indent properly.
            </p>
          </div>
          <div className='flex flex-col justify-between h-full'>
            <img className='rounded w-full max-h-[100%] object-contain' src={nestedRoutePaths} alt='Nested Routes' />
            <p className='bg-[rgb(1,1,30)] text-[10px] text-blue-300 px-2 italic rounded mt-2'>
            Images accredited to: Byte Legacy</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className='bg-[rgb(1,1,30)] rounded px-4 py-6 mb-10 max-w-4xl mx-auto'>
          <h1 className='text-blue-300 text-2xl mb-2 underline text-center'>Conclusion</h1>
          <p className='text-blue-300 text-sm indent-4'>
            You’ve now created React Nested Routes. Structuring and designing your parent page is up to your vision. And let’s not forget to thank Byte Legacy for its wonderful tutorials. Much success in your web development journey!
          </p>
        </section>

      </div>
    </div>
    </>
  )
}

export default WritBody
    

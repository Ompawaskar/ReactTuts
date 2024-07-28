
function App() {

   const images = [
      {
         name: "Hell",
         url: "https://www.ietetsec.in/static/media/Hell.d67d3fcf233539cbae60.jpeg",
         className: "rounded-full h-24 w-24 animate-anime0 "
      },
      {
         name: "Holistik",
         url: 'https://www.ietetsec.in/static/media/holistik.3f5538315e432e10388f.jpeg',
         className: "rounded-full h-16 w-16 animate-anime1"
      },
      {
         name: "Siuk",
         url: "https://www.ietetsec.in/static/media/siuk%20(2).18941a99fd80063216be.jpeg",
         className: "rounded-full h-20 w-20 animate-anime2"
      },
      {
         name: "Habhit Wellness",
         url: "https://www.ietetsec.in/static/media/Habhit_Wellness.e1aebf8fed04a4c20d2a.jpeg",
         className: "rounded-full h-22 w-22 animate-anime3"
      },
      {
         name: "Sports Folio",
         url: "https://www.ietetsec.in/static/media/Sports_Folio.558807e556561f883fe0.jpeg",
         className: "rounded-full h-18 w-18 animate-anime4"
      },
      {
         name: "Azorte",
         url: "https://www.ietetsec.in/static/media/Azorte.9520626302e50da6e01d.jpeg",
         className: "rounded-full h-24 w-24 animate-anime5"
      },
   ]

   function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
   }
   const shuffledImages = shuffleArray([...images]);

   return (
      <>
         <div className="">
            <div className='w-full px-4 py-2 text-white  bg-black bg-cover '
             style={{ backgroundImage: `url('https://www.thatfestivalsite.com/home-introduce-bg.svg')` }}>
               <h1 className='text-4xl text-center font-bold mt-4 mb-4 md:mb:0'>Our Sponsors</h1>

               <p className='md:px-40 mb-8 mt-2  text-center opacity-80 hidden md:block'>Throughout its illustrious journey, the IETE has been embraced and uplifted by the unwavering support of numerous sponsors, each a beacon of commitment to technological advancement.</p>
               <img src="SponsorsBg.png" alt="" />

            </div>
            <div className='w-full bg-black py-4 flex gap-3 overflow-x-hidden overflow-y-hidden scrollbar-none webkit-scrollbar-hide whitespace-nowrap'
             style={{ backgroundImage: `url("assets/SponsorsBg.png")` }}>

               <div className='animate-infinite-scroll flex ' >
                  {images.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block ' >
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>
               <div className='animate-infinite-scroll flex '>
                  {images.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block' >
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>
               <div className='animate-infinite-scroll flex '>
                  {images.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block' >
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>

            </div>
            <div className='w-full bg-black py-4 flex gap-3 overflow-x-hidden overflow-y-hidden scrollbar-hide webkit-scrollbar-hide whitespace-nowrap' 
            >
               <div className='animate-infinite-scroll flex ' >
                  {shuffledImages.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block' key={img.url}>
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>
               <div className='animate-infinite-scroll flex '>
                  {shuffledImages.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block' key={img.url}>
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>
               <div className='animate-infinite-scroll flex '>
                  {shuffledImages.map((img) => (
                     <div className='m-4 mx-10 min-w-24 inline-block' key={img.url}>
                        <img src={img.url} alt="" className={img.className} />
                     </div>
                  ))}
               </div>

            </div>
         </div>



      </>
   )
}

export default App

import React from 'react'

const Cards = (props) => {
  console.log("props:", props)
  return (
    <div>
         {/* <div class="md:px-14 lg:px- xl:px-24 2xl:px-32 w-full"> */}
        {/* <!-- course cards  --> */}
        <div class="w-full h-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 md:gap-12 lg:gap-7 xl:gap-12 2xl:gap-16  px-10">
            {/* <!-- first --> */}
            <div class="cards">
              <div class="cards-color-header">
                <div class="card-body">
                  <div class="card-body-text">
                    <p class="card-p">
                      {/* todo:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                      <span class="card-span">Duration :</span> 
                    </p>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-bookmark text-2xl align-middle"
                    ></i>
                  </div>
                </div>
                <div class="html-div">
                  <p class="html-p">{props}</p>
                  <p>
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                  </p>
                </div>
              </div>
              <div class="footer-div">
                <div>
                  <p class="web-development-bold">Web Development</p>
                </div>
                <div>
                  <a href="other-pages/courses-detail.html">
                    <button class="btnbutton">View</button>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      {/* </div> */}

    </div>
  )
}

export default Cards

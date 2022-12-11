import React from 'react'

const Articles = () => {
  return (
    <div className='container-fluid border-bottom d-flex flex-wrap justify-content-between pt-2 pb-2' id="articles-div">
         <div className='d-flex flex-wrap'>
                <span className='text-muted fs-6 articles-margin'>
                <img src="/images/icon1.png" className='margin-right-7' alt="" height="24" />
                    Articles
                </span>
                <small className='text-muted mt-1'>About 2,790,000 results (0.03 sec)</small>
            </div>
        <div className='d-flex flex-wrap'>
            <div className='margin-right-20'>
            <i class="bi bi-mortarboard-fill text-muted margin-right-7"></i>
            <a href='#' className='link-color'>My profile</a>
            </div>
            <div>
                <i class="bi bi-star-fill text-muted margin-right-7"></i>
                <a href='#' className='link-color'>My library</a>
            </div>
        </div>
    </div>
  )
}

export default Articles
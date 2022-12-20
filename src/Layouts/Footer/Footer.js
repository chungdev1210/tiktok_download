import React from 'react'
import './Footer.scss'

export default function Footer() {
   return (
      <footer>
         <div className='container'>
            <div className='row'>
               <div className='col-md-12 col-sm-12 col-lg-6 footer--contact'>
                  <span className='contact'>Liên hệ</span>
                  <span>Điều khoản dịch vụ</span>
                  <span>Chính sách bảo mật</span>
               </div>
               <div className='col-md-12 col-sm-12 col-lg-6 footer-copyright'>
                  <p>© 2019 - 2022 (v17) SnapTik. All rights reserved.</p>
               </div>
            </div>
         </div>
      </footer>
   )
}

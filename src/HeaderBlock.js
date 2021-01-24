import React from 'react'
import './HeaderBlock.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function HeaderBlock({ img, model, btn1, btn2, isShow, name }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="headerBlock" id={name} style={{ backgroundImage: `url('${img}')`, backgroundPosition: 'center', backgroundSize: 'center', backgroundRepeat: "no-repeat" }}>
            <div className='headerBlock__info'>
                <div className='headerBlock__infoText' >
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">{model}</h1>
                    <h4 data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"><span>Schedule a Touchless Test Drive</span></h4>
                </div>
                <div className="headerBlock__space">

                </div>
                <div className='headerBlock__actions'>
                    <button className='headerBlock__buttonPrimary' data-aos="fade-right">{btn1}</button>
                    <button className='headerBlock__buttonSecondary' data-aos="fade-left">{btn2}</button>
                </div>
                {
                    isShow && (
                        <div className="headerBlock__footer">
                            <a href="#">Tesla © 2021</a>
                            <a href="#">Privacy & Legal</a>
                            <a href="#">Recall Info</a>
                            <a href="#">Contact</a>
                            <a href="#">Careers</a>
                            <a href="#">Get Newsletter</a>
                            <a href="#">News</a>
                            <a href="#">Locations</a>
                        </div>
                    )
                }
            </div>

        </div>

    )
}

export default HeaderBlock

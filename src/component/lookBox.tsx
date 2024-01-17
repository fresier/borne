'use client'

import Image from "next/image";
import { useState } from "react";
import {  Modal } from "react-bootstrap"

export default function LookBox()  {

    const [show, setShow] = useState(false);


    return (
        <>
         <div 
            className=''
            style={{
                'position':'absolute',
                'zIndex':'1',
                'top':'0',
                'right':'0',
                'width':'216px',
                'height':'160px',
                'lineHeight':'20px',
                //'backgroundColor':'#1F2A2E'
            }}>
            <a href='#' onClick={() => setShow(true)}>
                <Image alt='help ?' width='216' height='160' src='/assets/img/logo-besoin-daide.png' />
            </a>
        </div>

        <Modal
            show={show} 
            onHide={() => setShow(false)}
            size="xl"
            fullscreen={'md-down'}
            enforceFocus={false}
            // backdrop="static"
            centered
        >
            <input className="form-control m-3" type="text" placeholder="Recherche" aria-label="Recherche" />
        </Modal>
        </>
    )
}
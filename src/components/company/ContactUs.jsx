import React from 'react';
import styled from 'styled-components';
import { FaFax,  FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import KakaoMap from '@/components/layout/KakaoMap'

const ContactUsBlock =styled.div`
    text-align:center;
    margin:50px 0;
    position: relative;
    dispaly:flex;
    justify-content: center;
    .box {
        width:100%;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 50px 0;
        display: flex;
        margin-bottom: 70px;
        // align-item:center;
        .left{
            flex:1;
        }
        .right{
            flex:1;
            ul {
            text-align:left;
            padding-left:30px;
            font-size: 15px;
                li{
                    padding:5px;
                    span{ color:green; }
                    strong { font-weight: 400; }
                }
            }
        }
    }
`

const ContactUs = () => {
    return (
        <ContactUsBlock >
            <div className="box row">
                <div className="left">
                <img src="assets/image/logo_black.png" alt="logo" />
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <span><FaFax />&nbsp;&nbsp;팩스</span> 
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 02-543-0061</strong>
                        </li>
                        <li>
                            <span><IoIosMail />&nbsp;&nbsp;E-Mail</span>
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;msoop04@naver.com</strong>
                        </li>
                        <li>
                            <span><FaMapMarkerAlt />&nbsp;&nbsp;주소</span>
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울특별시 강남구 학동로 42길 65-1 （논현동262-19）</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <KakaoMap />
        </ContactUsBlock>
    );
};

export default ContactUs;
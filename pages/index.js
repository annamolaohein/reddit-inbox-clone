import Navigation from '../components/Navigation'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/js/fontawesome";
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (
    <div css={styles.container}>
      <div className='main'>
        <Navigation />
        <header className='header'>
          <h4 className='noti'>Notifications</h4>
          <div className='underline'>
            <h4 className='msg'>Messages <sup>2</sup></h4>
          </div>

        </header>
        <body>
          <div className='myDiv'>
            <div className='mailIcon1'>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              {/* <p>icon</p> */}
            </div>
            <div className='mailText'>
              <h6>Update on Online Status Indicators</h6>
              <p>Thanks for contributing on Reddit. We wanted to let you know that we are experimenting with Online...</p>
              {/* <div className='myDiv2'>
                <p className='p1'>u/reddit </p>
                <p> <FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1mo</p>
              </div> */}
              <p><span>u/reddit</span><FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1mo</p>
            </div>
          </div>
          <div className='myDiv'>
            <div className='mailIcon2' >
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </div>
            <div className='mailText'>
              <h6>Updates to our User Agreement and Privacy Policy</h6>
              <p>Privacy is core to our DNA, our culture, and our values. We are committed to making our policies cl...</p>
              {/* <div className='myDiv2'>
                <p className='p1'>u/reddit </p>
                <p> <FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1y</p>
              </div> */}
              <p><span>u/reddit</span><FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1y</p>
            </div>
          </div>
          <div className='myDiv'>
            <div className='mailIcon2'>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </div>
            <div className='mailText'>
              <h6>Hello, /u/Few-Run-8773! Welcome to reddit!</h6>
              <p>Hello! Here's some information to get you started with reddit. How it all works Users post to commu...</p>
              {/* <div className='myDiv2'>
                <p className='p1'>u/reddit </p>
                <p> <FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1y</p>
              </div> */}
              <p><span>u/reddit</span><FontAwesomeIcon icon="fa-solid fa-circle" className='circleIcon' />1y</p>
            </div>
          </div>
        </body>
        <footer>
          {/* <FontAwesomeIcon icon="fa-solid fa-house" className='houseIcon' />
          <FontAwesomeIcon icon="fa-regular fa-compass" className='compassIcon' />
          <FontAwesomeIcon icon="fa-solid fa-plus" className='plusIcon' />
          <FontAwesomeIcon icon="fa-regular fa-comment-dots" className='msgIcon' /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-bell" className='notiIcon'/> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-2" /> */}
          <span id="span1" ><FontAwesomeIcon icon="fa-solid fa-house" className='houseIcon' /></span>
          <span id="span1" ><FontAwesomeIcon icon="fa-regular fa-compass" className='compassIcon' /></span>
          <span id="span1" > <FontAwesomeIcon icon="fa-solid fa-plus" className='plusIcon' /></span>
          <span id="span1" > <FontAwesomeIcon icon="fa-regular fa-comment-dots" className='msgIcon' /></span>
          <span id="span2" ><FontAwesomeIcon icon="fa-solid fa-bell" className='notiIcon' /><sup>2</sup></span>

        </footer>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    height: 1120px;
    background-color: #cccccc;
    & .main{
      width: 420px;
      height: 1120px;
      background-color: #f2f2f2;
      margin:auto;
    }
    & .header{
        display: flex;
        width: 100%;
        padding: 0 5%;
        /* text-align: center; */
        background-color: white;
        padding-bottom: 10px;
        text-align: center;
        /* border-bottom:2px solid #0080ff; */
        & .noti{
            width: 50%;
            text-align: end;
           
        }
        & .underline{
          margin-left: 3%;
          width: 50%;
          border-bottom:2px solid #0080ff;
          margin-bottom: -10px;
          & .msg{
            /* padding-left: 40px; */
            & sup{
              color: red;
              /* font-weight: bold; */
            } 
          }
        }
        
        
    }
    body{
      box-shadow: inset 0px 9px 8px -10px #CCC;
      padding-top: 20px;
      .myDiv{
      display: flex;
      width: 100%;
      
      
        & .mailIcon1{
            width: 10%;
            text-align: center;
           
        }
        & .mailIcon2{
            width: 10%;
            text-align: center;
            color: #0080ff;
        }
        & .mailText{
          width: 90%;
          line-height: 20px;
          word-spacing: -1px;
          & p{
            color: #808080;
            font-weight: 600;
            
          }
          & span{
            color: red;
          }
          & .circleIcon{
            font-size: 6px;
            text-align: start;
            margin-left: 10px;
            margin-right: 10px;
          }
          
        }
        /* & .mailText p{
          color: #808080;
          font-weight: 600;
          line-height: 20px;
        } */
      /* & .myDiv2{
        display: flex;
      
        & .p1{
          color: red;
        }
        & .circleIcon{
          font-size: 6px;
          text-align: start;
          margin-left: 10px;
          margin-right: 10px;
        }
      } */

    }
    }
    
    & footer{
      width: 100%;
      height: auto;
      display: flex;
      margin-bottom: 0px;
      /* margin-top: 560px; */
      margin-top: 547px;
      background-color: white;
      padding: 15px 0px;
      box-shadow: inset 0px 11px 8px -10px #CCC;
        /* inset 0px -11px 8px -10px #CCC;  */
      
      /* & .houseIcon,.compassIcon, .plusIcon, .msgIcon{
        color:#a6a6a6;
        width: 20%;
        font-size: 1.5rem;
      } */
      & #span1{
        color:#a6a6a6;
        width: 20%;
        font-size: 1.5rem;
        text-align: center;
      }
      & #span2{
        
        width: 20%;
        font-size: 1.5rem;
        text-align: center;
        & sup{
          color: orange;
          font-weight: bold;
        }
      }
      /* & .notiIcon{
        width: 20%;
        font-size: 1.5rem;
        margin-top: 0;
      } */
     
    }

  `
}
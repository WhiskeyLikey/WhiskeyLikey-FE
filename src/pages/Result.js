import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import logo from './assets/logo.svg';
import drops from './assets/drops.svg';
import titlegraphic from './assets/Graphic_Elements.svg';
import honey from './assets/honey.svg';
import smoky from './assets/smoky.svg';
import vanilla from './assets/vanilla.svg';
import whiskey from './assets/whiskey.svg';
import ballen from './assets/ballen.png';
import save from './assets/save.svg';
import intersect from './assets/Intersect.svg';
import kakao from './assets/kakaotalk.svg';
import mag1 from './assets/mag1.png';
import mag2 from './assets/mag2.png';
import mag3 from './assets/mag3.png';
import likelion from './assets/likelion.svg';
import returnIc from './assets/return.svg';
import { BottomLogo, Logo } from './Start';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {useLocation, Link} from 'react-router-dom';
 
const Result = () => {
  // 이미지 저장
  const cardRef=useRef();
  const onImgDownload=()=>{
    const card=cardRef.current;
    domtoimage.toBlob(card).then(blob=>saveAs(blob, 'WhiskeyLikeyForYou.png'));
  };

  // 링크 복사
  const baseUrl=''; //서버url
  const location=useLocation();
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크를 복사했습니다");
      console.log(text);
    } catch (err) {
      console.log(err);
    }
  };

  // 카카오톡 공유
  const appURI = ''; // 배포된 서비스 도메인
  const localURI = window.location.href; // localhost:3000

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('2876a318025229258708805024d1db25'); // js키
    console.log(Kakao.isInitialized()); // 잘 적용되면 true 반환
  }, []);

  const shareKakao = async () => {
    console.log('shareKakao called');
    try {
      await Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '위스키라이키 WhiskeyLikey',
          description: '나에게 꼭 맞는 위스키는 무엇일까?',
          imageUrl:
            'https://postfiles.pstatic.net/MjAyMzExMDZfMTA3/MDAxNjk5MjU1NTE0MTc3.8RDmFL8Yx_StnoGY5wJ0KExDmq1EkEdc2kUsq1mZXNkg.sEcEyvWGR6JTDrlH_Y1ma_5DovLwRn8OF3EjW8gwTIgg.PNG.mjsonsj/image.png?type=w966',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러 가기',
            link: {
              // 배포 후 수정
              mobileWebUrl: localURI,
              webUrl: localURI,
            },
          },
        ],
      });
      console.log('Kakao.Share.sendDefault completed');
    } catch (error) {
      console.error('Kakao.Share.sendDefault failed', error);
    }
  };
  
  // api
  // const [data, setData]=useState({});
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     try {
  //       // 서버 url
  //       const serverUrl='http://127.0.0.1:8000/';
  //       const endpoint='api/v1/result';

  //       const response=await axios.get(`${serverUrl}${endpoint}`);
  //       setData(response.data);
  
  //     } catch(error){
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // },[])

  return (
    <Wrapper className='wrap'>
      <div className='img-save-area' ref={cardRef} style={{background:'#f3e4bd', paddingTop:'1rem'}}>
        <Logo src={logo}/>
        <div className='rowDiv'>
          <div className='div-1'>
            <h3>나에게 꼭 맞는 위스키는</h3>
            <MainImgDiv>
              {/* <img src={data.whiskey_image} className='whiskey'></img> */}
              <img src={whiskey} className='whiskey'></img>
            </MainImgDiv>
            <div className='resultTxt'>
              {/* <h3 className='name'>{data.name}</h3>
              <p>{data.description}</p> */}
            </div>
          </div>
          <div className='div-2'>
            <Description>
              <div className='title'>
                <img src={titlegraphic}></img>
                <p>Flavor &amp; Aroma</p>
                <img src={titlegraphic}></img>
              </div>
              <div className='pics'>
                {/* {data.flavor_images.map((image, index)=>(
                  <img key={index} src={image}></img>
                ))} */}
              </div>
            </Description>
            <Description>
              <div className='title'>
                <img src={titlegraphic}></img>
                <p>How to drink?</p>
                <img src={titlegraphic}></img>
              </div>
              <div className='pics'>
              {/* {data.drink_images.map((image, index)=>(
                  <img key={index} src={image}></img>
                ))} */}
              </div>
            </Description>
          </div>
        </div>
      </div>
      <CtrlDiv className='ctrlDiv'>
        <div onClick={onImgDownload}>
          <img src={save}></img>
          <p>이미지로 저장</p>
        </div>
        <div>
          <img src={intersect} onClick={()=>handleCopyClipBoard(`${baseUrl}${location.pathname}`)}></img>
          <p>링크<br/>복사하기</p>
        </div>
        <div>
          <img src={kakao} onClick={shareKakao}></img>
          <p>카카오톡으로 공유하기</p>
        </div>
      </CtrlDiv>
        <div className='magDiv'>
          <p style={{color: '#333', fontWeight:'500', fontSize:'1.5rem'}}>Recommended Magazine</p>
          <div className='mags'>
            <Link to='/magazine_1' style={{textDecoration:'none', color: 'black'}}>
              <Mag>
                <img src={mag1}></img>
                <div>🥃 하이볼, 나도 집에서 마셔보자!</div>
              </Mag>
            </Link>
            <Link to='/magazine_2' style={{textDecoration:'none', color: 'black'}}>
              <Mag>
                <img src={mag2}></img>
                <div>🥃 위린이들을 위한 위스키 마시는 법</div>
              </Mag>
            </Link>
            <Link to='/magazine_3' style={{textDecoration:'none', color: 'black'}}>
              <Mag>
                <img src={mag3}></img>
                <div>🌃 서울 위스키 바 추천</div>
              </Mag>
            </Link>
          </div>
        </div>
        <TestAgainBtn>
          <Link to='/'>
          <img src={returnIc}></img>&emsp;테스트 다시하기
          </Link>
        </TestAgainBtn>
        <BottomLogo src={likelion} style={{marginBottom:'1rem'}}/>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-save-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    .div-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .div-2 {
      width: 400px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
    }
  }

  h3 {
    color: #333;
    font-size: 1.75rem;
    font-weight: 500;
  }

  .resultTxt {
    text-align: center;
    width: 376px;
    
    p {
      color: #3f3f3f;
      font-size: 0.8rem;
      font-weight: 500;
    }

  }

  .magDiv {
    text-align: center;
  }

  // background: white;
`;

const MainImgDiv = styled.div`
  width: 355px;
  height: 321px;

  background-image: url(${drops});
  background-size: cover;

  text-align: center;
  margin-bottom: 1rem;
  
  img {
    height: 100%;
    object-fit: contain;
    
  }
`;

`
const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .title {
    color: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;

    img {
      margin: 0 0.5rem;
    }
  }

  .pics {
    width: 100%;
    height: 13rem;
    padding: 0.5rem;
    box-sizing: border-box;

    background: rgba(225, 186, 101, 0.7);
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      min-width: 0;
      margin: 0 0.5rem;
    }
  }
`;

const CtrlDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem auto;

  div {
    width: 60px;
    text-align: center;
    margin: 0 1.5rem;

    img {
      width: 100%;
    }

    img:hover {
      cursor: pointer;
    }
  }
`;

const Mag = styled.div`
  width: 307px;
  height: 219px;
  border-radius: 20px;
  text-align: center;
  background-color: white;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin-bottom: 1.5rem;

  img {
    object-fit: cover;
    height: 169px;
  }

  div {
    height: 60px;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TestAgainBtn=styled.button`
width: 318px;
height: 55px;
padding: 1.5rem;
background: #785440;
color: #fff;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 1.125rem;
font-weight: 700;

border: none;
border-radius: 15px;

&:hover {
  cursor: pointer;
}

a {
  color: #fff;
  text-decoration: none;
}
`

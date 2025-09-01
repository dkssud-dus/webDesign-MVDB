###### Other Language
[English](https://github.com/dkssud-dus/webDesign-MVDB/blob/main/README_en.md) | [한국어](https://github.com/dkssud-dus/webDesign-MVDB/blob/main/README.md) | [日本語](https://github.com/dkssud-dus/webDesign-MVDB/blob/main/README_ja.md)

<br/><br/><br/>

# MVDB
![MainHeader](https://github.com/user-attachments/assets/0f12087b-bdad-483e-a3b4-1c2e87edcdd4)

<br/><br/>

**React 기본기와 API 활용을 실습하는 데 초점을 둔 영화 데이터 기반 개인 프로젝트**
> 이 프로젝트는 영화 데이터 기반의 서비스 흐름을 설계하고 구현하는 데 초점을 맞춘 개인 프로젝트입니다. `TMDB API`를 활용해 API 호출·로딩 상태·에러 처리를 관리하고, `React Router`와 컴포넌트 분리를 통해 유지보수성 높은 구조를 구성했습니다. 메인 페이지와 영화 상세 / 영화 목록 / 마이페이지 / 로그인 / 404 등 총 다섯 개의 서브페이지를 구현하여 사용자가 자연스럽게 탐색하도록 UI·UX 흐름을 정리했습니다. 

<br/><br/><br/>

## Link
- 바로가기 (Web-site): https://thunderous-gelato-2c1546.netlify.app/
- 기획서 (Figma Slide): https://www.figma.com/deck/xPmnWvX6STPm9al7HdCQVZ/-webRedesign--MVDB--Project-Brief-?node-id=1-133&t=yVlVom8J0DNrlHgQ-1
- 디자인 시안 (Figma): https://www.figma.com/design/eyUPSfw92BHOVQn9qYuYzx/-webRedesign--MVDB--Design-Brief-?node-id=0-1&t=AbkKA7D8J3RTQ5Z7-1

<br/>

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Environment & Contribution](#environment--contribution)
- [Contact](#contact)

<br/>

## Overview
### Background
영화 정보는 시각적으로나 콘텐츠 측면에서 사용자와의 상호작용이 다양하게 이루어지는 데이터이다. 이 프로젝트는 TMDB(The Movie Database) API를 활용해, 실제 서비스에서 사용하는 API 연동 방식 학습과 프론트엔드 개발에서의 비동기 데이터 처리, 컴포넌트 설계, 라우팅 구조,  커스텀 훅 활용 등을 종합적으로 연습하는 것을 목표로 하였다. 또한, 영화 데이터를 기반으로 콘텐츠 중심의 UI를 구성하면서,  사용자가 흥미를 잃지 않고 탐색할 수 있는 흐름을 고민하도록 하였다.

<br/>

### Purpose
**React 구조 학습**      
- 페이지 라우팅, props 전달, 상태 관리 등 프론트엔드 구조의 기본을 구현해보는 데 초점을 둔다.

**컴포넌트 설계 및 재사용성 고민**    
- 반복되는 UI 요소(카드, 리스트 등)를 컴포넌트화하고, props와 map 활용을 연습한다.

**사용자 중심 UI 흐름 구성**          
- 사용자가 특정 영화나 배우 정보를 자연스럽게 탐색할 수 있도록 레이아웃과 흐름을 설계한다.

<br/>

### Keywords
`API 중심 개발`
- 서버에서 데이터를 받아와 화면에 표시하기까지의 흐름에 집중
  
`React 구조 설계`
- 컴포넌트 단위 분리, 커스텀 훅, 라우터 사용 등 기본 구조 훈련

`UI 구조와 탐색 흐름`
- 사용자의 영화 탐색 → 상세보기 흐름이 자연스럽게 이어지도록 설계

<br/>

### Schedule
- 2025.07.07. - 2025.07.15.

<br/>

## Tech Stack
**Design / Prototyping** 
- Figma
- Notion
  
**Frontend** 
- React  
   - Axios    
   - React Query (TanStack Query)         
   - React Router         
   - React Bootstrap        
   - React Bootstrap Icons        
   - React Multi Carousel          
   - React Spinners   
- SCSS (CSS Preprocessor)

**Development Environment** 
- VS Code

**Deployment / CI**
- Netlify  

<br/>

## Features
### Core Feature
`React 구조 이해`
- 컴포넌트 단위 설계, 라우팅 처리를 중심으로 학습
- 페이지 전환이 많은 콘텐츠(리스트 ↔ 상세보기)로 구조적 설계 경험

`API 호출 / 비동기 처리`
- TMDB의 영화, 장르, 배우 API 등 데이터 요청
- `axios`를 통한 요청, 로딩 상태, 에러 처리 등 비동기 흐름 경험
  
`컴포넌트화 / 재사용성`
- 영화 카드, 슬라이드 등 재사용 가능한 UI 요소를 컴포넌트로 분리
- `props`와 `map`을 활용해 반복 구조를 효율적으로 구현

<br/>

> `React`의 기본 구조와 `API` 연동을 실습하는데 초점을 맞춘 학습형 프로젝트

<br/>

### [Main Page](https://thunderous-gelato-2c1546.netlify.app/)

<details>
  <summary>Click to expand</summary>

<br/>

![MainHeader](https://github.com/user-attachments/assets/0f12087b-bdad-483e-a3b4-1c2e87edcdd4)

### Header
**Purpose**
- 상단에 고정된 내비게이션과 검색 박스를 통해 사용자가 어디서든 필요한 정보를 빠르게 탐색할 수 있도록 한다.

**Summary**
- `React Bootstrap`의 `Container`, `Button`, `Form` 등 컴포넌트를 활용하여 구현하였다.
- `useState`와 `Router`의 `useNavigate`를 활용해 검색 기능을 구현하였다.      
   - `useState`로 검색 박스의 텍스트를 받아올 수 있도록 한다.           
   - `useNavigate`를 통해 입력된 텍스트를 URL에 붙이도록 한다.    

<br/><br/>

![MainVisual](https://github.com/user-attachments/assets/aa0cc65c-5896-4ef3-a359-e64cc8da5d29)

### Main Visual
**Purpose**
- 인기 영화의 간단한 정보와 이미지를 통해 사용자의 흥미를 유도한다.

**Summary**
- `React Bootstrap`의 `Container`, `Button`, `Modal` 등 컴포넌트를 활용하여 구현하였다.
   - `Modal` 내부에는 해당 인기 영화의 트레일러를 보여줄 수 있도록 하였다.
- `Custom Hook`을 사용해 TMDB의 영화 정보와 해당 영화의 트레일러 정보를 불러올 수 있도록 하였다.

<br/><br/>

![MainSection](https://github.com/user-attachments/assets/658cd79e-4aa6-4c59-a7d6-8e5b071708e6)

### Movie List Slides
**Purpose**
- 섹션 별로 영화 목록을 불러오고, 컴포넌트화하여 재사용성을 높인다.

**Summary**
- `React Multi Carousel`을 사용하여 `슬라이드`를 컴포넌트화하였다.              
   - `Custom Hook`을 사용해 TMDB의 영화 목록을 불러오도록 하였다.          
- `슬라이드` 내부 `카드`도 컴포넌트화 한 것으로, `map`과 `props`를 사용하여 정보의 주고받음을 학습할 수 있도록 하였다.            
   - `Custom Hook`을 사용해 불러온 데이터를 받아 카드 내부를 구현할 수 있도록 하였다.       

<br/>

</details>

<br/>

### [Sub Page: Movie Detail](https://thunderous-gelato-2c1546.netlify.app/movies/843)

<details>
  <summary>Click to expand</summary>

<br/>

![PageMovie](https://github.com/user-attachments/assets/32dba9d7-8417-4e6d-a1ed-cefb27309228)

**Purpose**
- 사용자가 영화 상세 정보와 관람 후기, 추천 영화까지 보는 흐름을 이해해 설계하고 구현한다.

**Summary**
- `Router`의 `useParams`를 사용하여 `URL`을 구성하였다.
- `React Spinners`를 활용하여 사용자가 로딩 중인 상태를 알 수 있도록 하였다.
- `Custom Hook`을 사용해 TMDB에서 해당하는 영화의 정보 및 트레일러, 캐스트, 리뷰 및 관련 영화목록을 불러오도록 하였다.    

<br/>

</details>

<br/>

### [Sub Page: Movies](https://thunderous-gelato-2c1546.netlify.app/movies)

<details>
  <summary>Click to expand</summary>

<br/>

![PageMovies](https://github.com/user-attachments/assets/58993bc9-dbab-4d15-8306-5c4f6c75a670)

**Purpose**
- 페이지 이동으로 접속 시 인기 영화 목록을 보여줄 수 있도록 한다.
- 검색으로 페이지 접속 시 `Header`에서 보낸 검색 텍스트를 받아 결과를 보여줄 수 있도록 한다.
- 이때, 만들어둔 카드 컴포넌트를 활용해 디자인의 일관성을 더한다.

**Summary**
- `Router`의 `useSearchParams`를 통해 URL의 검색어(keyword)를 읽어도록 하였다.             
   - 검색어가 있을 경우, TMDB 검색 API를 호출하였다.             
   - 검색어가 없을 경우, 인기 영화 목록을 불러오도록 하였다.             
   - 이때 역시 `Custom Hook`을 사용하도록 하였다.             
- 검색 결과 또는 인기 영화 데이터를 기반으로 MovieCard 컴포넌트를 반복 렌더링하였다. 

<br/>

</details>

<br/>

### [Sub Page: Mypage](https://thunderous-gelato-2c1546.netlify.app/mypage)

<details>
  <summary>Click to expand</summary>

<br/>

![PageMypage](https://github.com/user-attachments/assets/54bad1d2-c611-4ee0-89ba-aa5ce993fc65)

**Purpose**
- `Bootstrap`의 컴포넌트를 활용하여 레이아웃을 구성한다.

**Summary**
- `Bootstrap`의 `Container`, `Row`, `Col`를 활용하여 레이아웃을 구현하도록 하였다.
- 컴포넌트화 하였던 `슬라이드`를 불러와 재사용하였다.

<br/>

</details>

<br/>

### [Sub Page: Login](https://thunderous-gelato-2c1546.netlify.app/login)

<details>
  <summary>Click to expand</summary>

<br/>

![PageLogin](https://github.com/user-attachments/assets/312ec1f7-71d0-42b4-989c-0ccd366cb516)

**Summary**
- `Bootstrap`의 `Form`, `Button`을 활용하여 레이아웃을 구현하도록 하였다.

<br/>

</details>

<br/>

### [Sub Page: 404](https://thunderous-gelato-2c1546.netlify.app/login/2140u9kdlasfuio32rpow)

<details>
  <summary>Click to expand</summary>

<br/>

![Page404](https://github.com/user-attachments/assets/38f0a164-0475-4df1-8370-ecc1d12f8399)

**Summary**
- `Router`의 `Link`를 활용하여 메인페이지로 다시 돌아갈 수 있도록 하였다.

<br/>

</details>

<br/>

## Environment & Contribution
- OS: Windows 11, Windows 10
- Viewpoint: Desktop(1980px)
- Contribute: 100% 개인 작업 (기획, 디자인, 개발)

<br/>

## Contact
- GitHub: https://github.com/dkssud-dus
- Email: chae3929@gmail.com
- LinkedIn: https://www.linkedin.com/in/dkssud-chaeyeon/

<br/>
<br/>
<br/>

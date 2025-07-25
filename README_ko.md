
---
[README](https://github.com/dkssud-dus/webDesign-MVDB/blob/main/README.md) | [README_ko](https://github.com/dkssud-dus/webDesign-MVDB/blob/main/README_ko.md)

<br/>

`#DesignProject` `#API` `#TMDB` `#Solo`
# **Website Design Project Details:**
### MVDB

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)   
2. [Core Features](#2-Core-Features)   
3. [Page-wise Features](#3-Page-wise-Features)    
   
</br>
</br>
</br>

---

## 1. Project Overview
### 1.1. Background
영화 정보는 시각적으로나 콘텐츠 측면에서 사용자와의 상호작용이 다양하게 이루어지는 데이터이다. 이 프로젝트는 TMDB(The Movie Database) API를 활용해, 실제 서비스에서 사용하는 API 연동 방식 학습과 프론트엔드 개발에서의 비동기 데이터 처리, 컴포넌트 설계, 라우팅 구조,  커스텀 훅 활용 등을 종합적으로 연습하는 것을 목표로 하였다. 또한, 영화 데이터를 기반으로 콘텐츠 중심의 UI를 구성하면서,  사용자가 흥미를 잃지 않고 탐색할 수 있는 흐름을 고민하도록 하였다.

</br>
</br>
</br>

### 1.2. Purpose
**이 프로젝트의 목적 및 목표는 하기의 세 가지로 구성하였다.**
1. **React 구조 학습**      
  페이지 라우팅, props 전달, 상태 관리 등 프론트엔드 구조의 기본을 구현해보는 데 초점을 둔다.

</br>

2. **컴포넌트 설계 및 재사용성 고민**    
  반복되는 UI 요소(카드, 리스트 등)를 컴포넌트화하고, props와 map 활용을 연습한다.
   
</br>

3. **사용자 중심 UI 흐름 구성**          
  사용자가 특정 영화나 배우 정보를 자연스럽게 탐색할 수 있도록 레이아웃과 흐름을 설계한다.

</br>
</br>
</br>

### 1.3. Keywords
1. **API 중심 개발**      
  서버에서 데이터를 받아와 화면에 표시하기까지의 흐름에 집중         
    
</br>

2. **React 구조 설계**     
  컴포넌트 단위 분리, 커스텀 훅, 라우터 사용 등 기본 구조 훈련    
    
</br>

3. **UI 구조와 탐색 흐름**    
  사용자의 영화 탐색 → 상세보기 흐름이 자연스럽게 이어지도록 설계
    
</br>
</br>
</br>

---

## 2. Core Features
### React 구조 이해
1. 컴포넌트 단위 설계, 라우팅 처리를 중심으로 학습
2. 페이지 전환이 많은 콘텐츠(리스트 ↔ 상세보기)로 구조적 설계 경험

</br>
</br>
</br>

### API 호출 / 비동기 처리
1. TMDB의 영화, 장르, 배우 API 등 데이터 요청
2. `axios`를 통한 요청, 로딩 상태, 에러 처리 등 비동기 흐름 경험

</br>
</br>
</br>

### 컴포넌트화 / 재사용성
1. 영화 카드, 슬라이드 등 재사용 가능한 UI 요소를 컴포넌트로 분리
2. `props`와 `map`을 활용해 반복 구조를 효율적으로 구현


</br>
</br>
</br>

### → `React`의 기본 구조와 `API` 연동을 실습하는데 초점을 맞춘 학습형 프로젝트

</br>
</br>
</br>

---

## 3. Page-wise Features

### 3.1. [Main Page](https://thunderous-gelato-2c1546.netlify.app/)

---

### 3.1.1. Header
![MainHeader](https://github.com/user-attachments/assets/0f12087b-bdad-483e-a3b4-1c2e87edcdd4)

<br/>

#### 목적        
1. 

<br/>
   
#### 구현 요약 
1. 

<br/>
<br/>
<br/>

### 3.1.2. Main Visual
![MainVisual](https://github.com/user-attachments/assets/aa0cc65c-5896-4ef3-a359-e64cc8da5d29)

<br/>

#### 목적        
1. 

<br/>
   
#### 구현 요약 
1. 

<br/>
<br/>
<br/>

### 3.1.3. Section
![MainSection](https://github.com/user-attachments/assets/658cd79e-4aa6-4c59-a7d6-8e5b071708e6)

<br/>

#### 목적        
1. 

<br/>
   
#### 구현 요약 
1. 

<br/>
<br/>
<br/>

---

### 3.2. Sub Pages (5)

---

### 3.2.1. [Movie Detail](https://thunderous-gelato-2c1546.netlify.app/movies/843)
![PageMovie](https://github.com/user-attachments/assets/32dba9d7-8417-4e6d-a1ed-cefb27309228)

#### 목적
1. 

<br/>

#### 구현 요약
1. 

</br>
</br>
</br>

### 3.2.2. [Movies](https://thunderous-gelato-2c1546.netlify.app/movies)
![PageMovies](https://github.com/user-attachments/assets/58993bc9-dbab-4d15-8306-5c4f6c75a670)


#### 목적
1. 

<br/>

#### 구현 요약
1. 

</br>
</br>
</br>

### 3.2.3. [Mypage](https://thunderous-gelato-2c1546.netlify.app/mypage)
![PageMypage](https://github.com/user-attachments/assets/54bad1d2-c611-4ee0-89ba-aa5ce993fc65)

#### 목적
1. 

<br/>

#### 구현 요약
1. 

</br>
</br>
</br>

### 3.2.4. [Login](https://thunderous-gelato-2c1546.netlify.app/login)
![PageLogin](https://github.com/user-attachments/assets/312ec1f7-71d0-42b4-989c-0ccd366cb516)


#### 목적
1. 

<br/>

#### 구현 요약
1. 

</br>
</br>
</br>

### 3.2.5. [404](https://thunderous-gelato-2c1546.netlify.app/login/2140u9kdlasfuio32rpow)
![Page404](https://github.com/user-attachments/assets/38f0a164-0475-4df1-8370-ecc1d12f8399)

#### 목적
1. 

<br/>

#### 구현 요약
1. 

</br>
</br>
</br>

---

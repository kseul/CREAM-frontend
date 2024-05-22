# 33기 2차 프로젝트 - cream

## 개요

- 크림 웹페이지 클론코딩 프로젝트
- 클론코딩은 개발 환경 셋팅부터 시작하였으며, 하단 시연 영상은 모두 백엔드와의 데이터 연동을 통해 실제 서비스에서 이용되는 수준으로 구현하였습니다.
- 프로젝트는 11일동안 진행됨에 따라 디자인과 아래 서술한 기능들만 선택하여 구현했습니다.
  - Nav Bar & Footer
  - 소셜 로그인 & 회원가입
  - 상품 페이지
  - 상품 상세
  - 매매입찰
- 2차 프로젝트는 아래 서술한 내용들을 목표로 진행되었습니다.
  - 1차 프로젝트시 각자 해보지 못한 기능들을 구현
  - 스프린트 일정에 맞는 작업 진행과 속도 개선
  - 프론트엔드/백엔드간의 커뮤니케이션 개선
  - 라이브러리의 적극

## 팀원

`Front-End`

- 김슬비, 유지후, 이윤섭, 장수연

`Back-End`

- 강세영

## 사용한 기술

`Front-End`

- React, Javascript, Styled-Component

`Back-End`

- Django, Python, MySQL, AWS(RDS, EC2), Bcrypt, JWT, django-cors

`Cowork`

- Git, Slack, Trello

## 시연 연상

https://youtu.be/v58DAx5gJzE

## 구현 기능
- ✍️ [프로젝트 회고](https://velog.io/@seul06/cream-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)
- Nav Bar & Footer, 소셜 로그인 & 회원가입 (김슬비)

![Jun-19-2022 20-00-52](https://user-images.githubusercontent.com/93895746/174477730-60f5777c-3bd5-4b19-ab14-9889ebb7148e.gif)

  - Nav Bar & Footer

    ```
    - localStorage에서 토큰값 확인 후 로그인&로그아웃 상태 렌더링 
    - nav, footer 레이아웃 작업
    - styled components 작업 
      (GlobalStyle 폰트 설정, react icons 로부터 가져온 아이콘을 사용하고, styled components라이브러리와 함께 적용)
    ```
    
  
  - 소셜 로그인 & 회원가입

    ```
    - 카카오계정과 애플리케이션을 연결하고 토큰을 발급받아 카카오 API를 사용할 수 있도록 하는 기능을 구현한다.
    - 인가 코드 받기: 카카오 로그인 동의 화면을 호출하고, 사용자 동의를 거쳐 인가 코드 발급을 요청한다.
    - 토큰 받기: 인가 코드로 액세스 토큰과 리프레시 토큰 발급을 요청한다.
    - 분기 처리: 요청이 성공적으로 완료되면 진행되고 그렇지 않으면 알림창과 함께 로그인 페이지로 이동된다.
    - 받아온 토큰을 로컬스토리지에 저장하고, 필요에 따라 localStorage.getItem('key')메서드를 활용해서 처리한다.
    - 사용자가 로그인 접속을 거쳐서 메인페이지로 넘어가기 전에 보여줄 페이지에 로딩 스피너 UI를 작성한다.
    - axios 라이브러리 사용, 코드가독성을 높인다.
      (axios를 사용하면 응답 데이터를 기본적으로 JSON 타입으로 사용할 수 있다. 응답 데이터는 언제나 응답 객체의 data 프로퍼티에서 사용할 수 있다.)
    ```

<br/>
<br/>
<br/>




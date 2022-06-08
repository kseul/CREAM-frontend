import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LeftContents = ({ data }) => {
  const { img_url, name_eng } = data;

  return (
    <LeftContentsWrapper>
      <GoodsImageWrapper>
        <GoodsImage src={img_url} alt={name_eng} />
      </GoodsImageWrapper>
      <DealNotice>
        <NoticeWrapper>
          <NoticeHeader>
            <NoticeBadge>주의</NoticeBadge>
            <NoticeTitle>판매 거래 주의사항</NoticeTitle>
          </NoticeHeader>
          <NoticeDesc>반드시 보유한 상품만 판매하세요.</NoticeDesc>
        </NoticeWrapper>
        <NoticeArrow />
      </DealNotice>
    </LeftContentsWrapper>
  );
};

const LeftContentsWrapper = styled.aside`
  width: 37.5rem;
  ${props => props.theme.flex.flexBox('column', '', '')};
  float: left;
  position: fixed;
  padding-right: ${props => props.theme.paddings.xxxl};
`;

const GoodsImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  text-align: center;
`;

const GoodsImage = styled.img`
  width: 80%;
`;

const DealNotice = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  font-size: ${props => props.theme.fontSizes.xs};
  background-color: #fafafa;
  border: ${props => props.theme.borders.lightGray};
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
  padding: ${props => props.theme.paddings.base};
  margin-top: ${props => props.theme.margins.xl};
`;

const NoticeWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '', 'flex-start')};
`;

const NoticeHeader = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'flex-start')};
`;

const NoticeBadge = styled.span`
  color: ${props => props.theme.colors.white};
  background-color: #ff8824;
  padding: 1px ${props => props.theme.paddings.xs};
  margin-right: ${props => props.theme.margins.small};
  border-radius: 2px;
`;

const NoticeTitle = styled.span`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-top: 0.063rem;
`;

const NoticeDesc = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-weight: ${props => props.theme.fontWeights.light};
  margin-top: ${props => props.theme.margins.xs};
`;

const NoticeArrow = styled(AiOutlineArrowRight)`
  font-size: ${props => props.theme.fontSizes.xxl};
`;

export default LeftContents;

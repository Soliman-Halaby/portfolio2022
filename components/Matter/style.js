import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  user-select: none;
  height: 100%;
  position: relative;
`;

export const Box = styled.div`
  position: absolute;
  /* background: #111; */
  /* height: 40px;
      width: 40px; */
  user-select: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grey2};
  text-transform: uppercase;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  padding: 5px 10px;
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
`;

export const Ground = styled.div`
  position: absolute;
  bottom: 74px;
  height: 1px;
  width: 100%;
  left: 0;
  background: #666;
`;
export const Title = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  user-select: none;
  font-size: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MatterContainer = styled.div`
  z-index: 9999;
`;

import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px auto 0;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
`

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px auto 0;
  width: 890px;
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  background-color: ${({ theme }) => theme.colors.contextRed};
`

export const BadgeLabel = styled.span`
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`

export const BadgeIcon = styled.img`
  max-width: 60px;
  max-height: 60px;
`

import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 220px);
  grid-template-columns: 180px repeat(6, 260px) 180px;
  margin-top: 300px;
`

export const GridCell = styled.div`
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.end};
  grid-column-start: ${props => props.column};
  grid-column-end: ${props => props.column + 1};
`

export const TextCell = styled(GridCell)`
  font-size: 36px;
  font-weight: bold;
`

export const IconCell = styled(GridCell)``

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const Badge = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  margin-bottom: 20px;
  background-color: #1e242f;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;
    background-color: #6e32ee;
  }
`

export const Label = styled.span`
  width: 210px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`

export const Icon = styled.img`
  max-width: 60px;
  max-height: 60px;
  z-index: 3;
`

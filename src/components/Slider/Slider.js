import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./SliderStyles"

const Slider = ({ personal, images }) => {
  const { arrowIcon } = useStaticQuery(graphql`
    query {
      arrowIcon: allFile(
        filter: { extension: { eq: "svg" }, relativeDirectory: { eq: "" } }
      ) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `)
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setActiveIndex(personal.length - 1)
    }

    setActiveIndex(activeIndex - 1)
  }

  const nextSlide = () => {
    if (activeIndex === personal.length - 1) {
      return setActiveIndex(0)
    }

    setActiveIndex(activeIndex + 1)
  }

  const getImageURL = (person, idx) => {
    let imageName = activeIndex === idx ? person.imgHoverName : person.imgName
    return images.find(img => img.node.name === imageName).node.publicURL
  }

  const arrowIconSrc = arrowIcon.edges[0].node.publicURL

  return (
    <S.SliderContainer>
      <S.ArrowContainer>
        <S.ArrowButton onClick={prevSlide}>
          <S.LeftArrow src={arrowIconSrc} />
        </S.ArrowButton>
        <S.ArrowButton onClick={nextSlide}>
          <S.RightArrow src={arrowIconSrc} />
        </S.ArrowButton>
      </S.ArrowContainer>
      <S.SliderContent>
        {personal.map((person, idx) => (
          <S.Slide key={person.position}>
            <S.SlideHeader isActive={activeIndex === idx}>
              <S.PersonName>{person.name}</S.PersonName>
              <S.PersonPosition>{person.position}</S.PersonPosition>
            </S.SlideHeader>
            <S.SlideBackground imageURL={getImageURL(person, idx)} />
          </S.Slide>
        ))}
      </S.SliderContent>
    </S.SliderContainer>
  )
}

export default Slider

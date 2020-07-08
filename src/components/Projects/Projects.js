import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./ProjectsStyles"

export default function Projects() {
  const {
    icons,
    projects: { frontmatter },
  } = useStaticQuery(graphql`
    query {
      icons: allFile(
        filter: {
          extension: { eq: "svg" }
          relativeDirectory: { eq: "projectIcons" }
        }
      ) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
      projects: markdownRemark(
        frontmatter: { componentName: { eq: "projects" } }
      ) {
        frontmatter {
          projects {
            name
            text
            row
            column
          }
          title
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.TextCell row={1} column={3}>
        {frontmatter.title}
      </S.TextCell>
      {frontmatter.projects.map((item, idx) => (
        <S.IconCell key={item.name} row={item.row} column={item.column}>
          <S.ProjectItem>
            <S.Badge>
              <S.Icon src={icons.edges[idx].node.publicURL} />
            </S.Badge>
            <S.Label>{item.text}</S.Label>
          </S.ProjectItem>
        </S.IconCell>
      ))}
    </S.Container>
  )
}

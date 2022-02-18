import React from "react"
import { PageLayout } from "../../ui-elements/page-layout/PageLayout"
import { Conference } from "../../../domain/conferences/types/conference-interface"
import { ConferenceList } from "../../ui-elements/conferences/list/ConferenceList"
import { graphql } from "gatsby"

type ConferenceListPage = {
  data: { allConference: { nodes: Conference[] } }
}
export default function ConferenceListPage(props: ConferenceListPage) {
  return (
    <PageLayout title="Conference List">
      <div className="container">
        <h1>Conference List</h1>
        <p>
          If you want to be a Conference Buddy at one of these conferences,
          click the button 🐶 and leave a comment! You are not sure you want to
          be one, but you want to keep updated? Be a Lurker 👀 and get
          notifications.
        </p>
        <ConferenceList conferences={props.data.allConference.nodes} />
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  {
    allConference {
      nodes {
        name
        country
        city
        description
        end_date
        id
        start_date
        url
      }
    }
  }
`

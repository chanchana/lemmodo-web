import React from "react"
import { Box, Card, Grid, OverflowBox, Stack } from "../common"
import { EducationCard } from "../components/EducationCard"
import { ImagesCarousel } from "../components/ImagesCarousel"
import { Section } from "../components/Section"
import { SectionHeading } from "../components/SectionHeader"
import { Timeline } from "../components/Timeline"
import { WorkExperienceCard } from "../components/WorkExperienceCard"
import { Content } from "../constants/content"
import { Parameter } from "../constants/parameter"
import { ResponsiveContext } from "../contexts/responsive"
import { activityImages } from "../data/activities"
import { useNavigation } from "../hooks/useNavigation"
import { Style } from "../styles/style"

export const About = () => {
    const sectionRef = React.useRef(null)
    useNavigation(sectionRef, Parameter.Navigation.About.Path)
    const { isMobile } = React.useContext(ResponsiveContext)
    
    return (
        <div ref={sectionRef}>
            <SectionHeading title={Content.About.Title} subtitle={Content.About.Subtitle} />
            <Stack vertical gap={Style.Spacing.XXL}>
                <Section title={Content.About.WorkExperienceHeading}>
                    <Timeline visibleCount={3} lined={!isMobile}>
                        {[1, 1, 1, 1, 1, 1, 1].map(() => <WorkExperienceCard />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.EducationHeading}>
                    <Timeline visibleCount={3} lined={!isMobile}>
                        {[1].map(() => <EducationCard />)}
                    </Timeline>
                </Section>
                <Section title={Content.About.ActivitiesHeading}>
                    <Card noPadding>
                        <Box padding={Style.Spacing.S}>
                            <ImagesCarousel images={activityImages} />
                        </Box>
                    </Card>
                </Section>
            </Stack>
        </div>
    )
}
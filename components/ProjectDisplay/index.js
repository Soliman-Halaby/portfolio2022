import React, { useState, useRef } from "react";
import { useRouter } from 'next/router'
import Button from "@/components/Buttons/Button";
import { Wrapper, ProjectContainer, Image, RowWrapper, Number, Title } from './style'

const ProjectDisplay = ({
  top, left, title, to, image, index
}) => {
  const [learnMoreCta, setLearnMoreCta] = useState(false);
  const router = useRouter()

  // const displayCta = (to) => {
  //   router.push(`/${to}`)
  // }
  return (
      <Wrapper onClick={() => router.push(`/project/${to}`)} top={top} left={left}>
        <ProjectContainer onMouseOver={() => setLearnMoreCta(true)} onMouseLeave={() => setLearnMoreCta(false)}>
        { learnMoreCta && (
        <Button  
            className='learn-more-cta'              
            to='/cc'
            colored
            label='Learn more'
            withArrow
          />
        // </Button>
        )}
          <Image src='/project-display.png'/>
          <RowWrapper><Number>0{index+1}</Number><Title>{title}</Title></RowWrapper>
        </ProjectContainer>
      </Wrapper>
  );
};

export default ProjectDisplay;

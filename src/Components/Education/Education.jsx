// import React from "react";
// import styled from "styled-components";
// import { VerticalTimeline } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { education } from "../../assets/eudcation";
// import EducationCard from "../../assets/educationCard";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: ralative;
//   z-index: 1;
//   color:white;
// `;

// const Wrapper = styled.div`
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1180px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 960px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   margin-bottom: 48px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 960px) {
//     font-size: 16px;
//   }
// `;

// function Education() {
//   return (
//     <Container id="Education">
//       <Wrapper>
//         <Title>Education</Title>
//         <Desc>
//           My education has been a journey of self-discovery and growth. My
//           educational details are as follows.
//         </Desc>
//         <VerticalTimeline>
//           {education.map((education, index) => (
//             <EducationCard
//               key={`education-${index}`}
//               education={education}
//             />
//           ))}
//         </VerticalTimeline>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Education;
import React from "react";
import "./Education.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import  {education}  from "../../assets/eudcation";
import EducationCard from "../../assets/educationCard";

function Education() {
  return (
    <div className="container" id="Education">
      <div className="wrapper">
        <div className="title">Education</div>
        <div className="desc">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;

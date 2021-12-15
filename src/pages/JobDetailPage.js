import React from 'react';
import styled from "styled-components";
import CompanyHeader from "../components/companyHeader/CompanyHeader";
import JobInfo from "../components/jobInfo/JobInfo";
import {motion} from "framer-motion";
import Footer from "../components/footer/Footer";

const JobDetailPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <Wrapper>
                <CompanyHeader/>
                <JobInfo/>
            </Wrapper>
            <Footer/>
        </motion.div>
    );
};

const Wrapper = styled.div`
  padding: 0 24.65%;

  @media (max-width: 1200px) {
    padding: 0 18%;
  }

  @media (max-width: 900px) {
    padding: 0 5%;
  }
`

export default JobDetailPage;
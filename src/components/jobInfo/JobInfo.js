import React from 'react';
import {JobInfoStyled} from "./JobInfoStyled";
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import {DotStyled, H2Card} from "../globalStyle/GlobalStyle";
import {useStyleContext} from "../../context/style_context";

const JobInfo = () => {
    const {isLight} = useStyleContext()

    return (
        <JobInfoStyled isLight={isLight}>
            <div className="company-info">
                <div className="info">
                    <div className="small-info">
                        <H2Card>1w ago</H2Card>
                        <DotStyled/>
                        <H2Card>Full Time</H2Card>
                    </div>
                    <h1>Senior Software Engineer</h1>
                    <h3>United Kingdom</h3>
                </div>
                <ButtonLoadMore
                    width={'100%'}
                    marginTop={'5rem'}>
                    Apply Now
                </ButtonLoadMore>
            </div>
            <H2Card className='text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus eius laudantium.
                Ad cupiditate dicta excepturi explicabo molestias placeat quae, sapiente soluta totam voluptas!
                A animi architecto at culpa delectus dolore doloremque, doloribus error fugiat id ipsum iusto modi
                neque odit, possimus praesentium quam quas ratione repudiandae saepe sapiente sit tempore totam velit
                veritatis voluptas voluptates voluptatum? Deleniti doloribus et nisi reprehenderit? Asperiores culpa
                dolorum et facilis hic in ipsam numquam vitae voluptates voluptatum? Amet corporis distinctio doloremque
                ducimus harum ipsum quo quod sed sint veritatis? Adipisci dolore eveniet facilis non ratione repudiandae
                similique? Dolor eaque impedit minus nisi similique?
            </H2Card>
            <h1 className='header-text'>Requirements</h1>
            <H2Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consectetur debitis deserunt doloribus
                eum explicabo hic inventore libero quaerat quam quia reiciendis tempore ut, vero vitae voluptatibus.
                Est laboriosam, laborum quidem repellendus repudiandae vitae voluptates. Accusamus, cupiditate delectus
                enim facere itaque labore molestias perspiciatis ratione repellendus velit voluptas voluptates.
            </H2Card>
            <ul>
                <li><H2Card> ipsum dolor sit amet, consectetur.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus expedita magni
                    necessitatibus, quibusdam repudiandae.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur.</H2Card></li>
            </ul>
            <h1 className='header-text'>What You Will Do</h1>
            <H2Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore
                doloremque doloribus esse itaque quas qui, ut veritatis. Accusamus atque aut culpa cum dicta dolor
                dolorem doloribus earum eos esse necessitatibus obcaecati, quaerat qui sequi tenetur vitae, voluptatibus!
            </H2Card>
            <ol>
                <li><H2Card> ipsum dolor sit amet, consectetur.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus expedita magni
                    necessitatibus, quibusdam repudiandae.</H2Card></li>
                <li><H2Card>Lorem ipsum dolor sit amet, consectetur.</H2Card></li>
            </ol>
        </JobInfoStyled>
    );
};

export default JobInfo;
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>

            <CTA>
                <CTALogoOne src="/assets/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>

                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional 
                    fee with a Disney+ subscription. 
                    As of 03/26/21, the price of Disney+ and The Disney Bundle 
                    will increase by $1.
                </Description>
                <CTALogoTwo src="/assets/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
        position: absolute;
        background-image: url("/assets/images/login-background.jpg") ;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        content:"";
        opacity: 0.7;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 13px 0;
    margin-top: 10px;
    margin-bottom: 12px;
    text-align: center;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 10px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`
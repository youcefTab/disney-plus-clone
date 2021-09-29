import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import { collection, doc, onSnapshot, query } from '@firebase/firestore'

function Home() {

    useEffect(() => {
        const q = query(collection(db, "movies"));

        onSnapshot( collection(db, "movies"), (snapshot) => {

            
            console.log(snapshot)
            let tempMovies = snapshot.docs.forEach((doc) => {
                console.log(doc.data())
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
        })

    }, [])
    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    /**add a div before the container */
    &:before{
        background: url('/assets/images/home-background.png') center center / 
        cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

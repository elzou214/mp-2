import styled from "styled-components";
import {Memes} from "../interfaces/Memes.ts";

const AllDiv=styled.div`
    display : flex;
    flex-flow: row wrap;
`;

const SingleMemeDiv=styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const ImgDiv=styled.img`
    width: 50vw;
    margin: auto;
`

const H1Div=styled.h1`
    color: blue;
`


export default function PopularMemes(props:{data:Memes[]}){
    return(
        <AllDiv>
            {

                props.data.map((meme:Memes) =>
                    <SingleMemeDiv key={meme.id}>
                        <H1Div>{meme.name}</H1Div>
                        <ImgDiv src={meme.url} alt={`image of ${meme.name}`}/>

                    </SingleMemeDiv>
                )

            }

        </AllDiv>

    )

}

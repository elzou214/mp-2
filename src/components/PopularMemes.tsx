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


export default function PopularMemes(props:{data:Memes[]}){
    return(
        <AllDiv>
            {

                props.data.map((meme:Memes) =>
                    <SingleMemeDiv key={meme.id}>
                        <h1>{meme.name}</h1>
                        <ImgDiv src={meme.url} alt={`image of ${meme.name}`}/>

                    </SingleMemeDiv>
                )

            }

        </AllDiv>

    )

}

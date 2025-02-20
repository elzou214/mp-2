import { useState, useEffect } from 'react';
import styled from "styled-components";
import './App.css';
import PopularMemes from "./components/PopularMemes.tsx";
import {Memes} from "./interfaces/Memes.ts";

const ParentDiv=styled.div`
  width : 80vw; 
`;

export default function App() {
  const [meme, setMeme] = useState<Memes[]>([]);

  useEffect(() => {
    async function fetchMeme(){
      const res = await fetch("https://api.imgflip.com/get_memes");
      const response = await res.json();
      setMeme(response.data.memes);
    }
    fetchMeme();
    
  },[]);

  return (

    <ParentDiv>
      <PopularMemes data={meme}/>
    </ParentDiv>
    
  )
    
}


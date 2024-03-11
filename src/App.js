import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
const imageList = [
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709598678/programa/nxowso3ieva0vhelxbtl.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709598678/programa/uuagq9d5p4bkagj1xex0.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709598678/programa/tktyaeur3ro1zd9dwob4.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709598678/programa/uf6zdmhr96690bhsyn0b.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709598678/programa/budak3nwlj96rbjnwzuj.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597135/programa/pb006hvwq5z2e2ra0v4v.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597135/programa/glhoda6vx8kqwu9377u9.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597134/programa/hykc0u3lhvgbjkz1siuq.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597134/programa/boqy4pszz8ssvgddmnuk.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597133/programa/ow1gmnkzn8nuvpzwvopi.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597133/programa/fgi12vlgn2g6kmeuijwf.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597133/programa/v7gzzid5yajz9sx5okod.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597133/programa/ekktmiyqtbbzrogsp4de.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597132/programa/ivjfpdosglxedwlycgbt.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1709597132/programa/xi9wg5ojnopulmhz8z3y.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082830/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/m44v7a8aq7hfe7llc0xy.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082830/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/f73lut2ocxniov18tchk.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082829/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/w3w6kvzmgzyyeul3u4uh.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082829/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/dvd9mlgki6wlcosxc69g.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082829/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/zlwh4nntnub51nr8jsya.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710081710/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets/me4yeosdg9xpotommpja.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082828/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/yzq1l3qcnuuxnxuecnhl.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082827/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/zewshggmeehfpssvevdk.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082827/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/hypcgbi3ja6nsbzkd4th.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082826/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/on6zkjaqywhwvolzkgo1.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082826/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/vhj9qet5et0mlz4mxa4p.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082825/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/n349fv8cty8llz5q4pnu.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082825/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/ngrwpvwggbeoipdjfz86.png',
  'https://res.cloudinary.com/djb4ehtlx/image/upload/v1710082825/RECORTE%20CON%20SOMBRAS%20%C3%91-Zpsd-assets1/tts5dzptp7hvvld5yb81.png',
];

const emojiList =imageList;

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect( () => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }, []);

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if(selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  }

  return (
    <Board memoBlocks={shuffledMemoBlocks} animating={animating}  handleMemoClick={handleMemoClick} />
  );
}

export default App;

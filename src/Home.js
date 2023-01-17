import React,{useEffect} from 'react'

function Home() {
  useEffect(() => {
    document.title = 'Home Page';
}, []);
  return (
    <>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo deleniti obcaecati repellendus! Dolorum natus, a ipsa magnam reprehenderit nisi totam odio vero eius quae molestiae beatae provident error. Voluptatibus.
    </>
  )
}

export default Home;
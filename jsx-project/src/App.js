import logo from './logo.svg';
import './App.css';
import image2 from './img2.jpg'

function App() {
  return (
    <>
    <div style={{borderStyle:'solid' , borderColor:'black' , borderWidth:1 ,maxWidth:100}}>

<h1 className="title red">Your name here</h1>

<img src={image2}/>
<img src="img1.jpg"/> 

</div>

<iframe width="900" height="506" src="https://www.youtube.com/embed/Ul0xh7ia3E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

    </>
  );
}

export default App;
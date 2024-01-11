import Navbar from '../components/Navbar'
import '../App.css';
import "../flexbox1.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export default function LearningPage() {
    return (
        <>
            <Navbar />

  <div className="container">
  <div className='titlepage'>
        <h3>Watch and learn</h3>
      </div>
    <main className="main">
      
      <div className='video'>
        <script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
        <iframe src="https://eclass.h5p.com/content/1292151044103452798/embed" aria-label="test" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
      </div>
    </main>
    <aside className="sidebar">
      Sidebar content or information
    </aside>
  </div>

           

            

            

        </>
    )
}


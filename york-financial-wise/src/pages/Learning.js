import Navbar from '../components/Navbar'
import '../App.css';

export default function LearningPage() {
    return (
        <>
            <Navbar />
            <div className='titlepage'>
                <h2>Learning</h2>
                <h3>Quiz and videos</h3>
            </div>


            <div className='video'>
                <script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
                <iframe src="https://eclass.h5p.com/content/1292151044103452798/embed" aria-label="test" width="630" height="405" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
            </div>

        </>
    )
}
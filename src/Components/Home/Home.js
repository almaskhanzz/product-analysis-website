import './Home.css';
import Airpods from '../../Assets/Images/airpods-pro_1.jpg';
import useReviews from '../../hooks/useReviews';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div className='home-container'>
            <div className='home-preview'>
                <div className='heading'>
                    <h1>A magical connection to your devices</h1>
                    <h3>Spatial audio with
                        dynamic head tracking</h3>
                    <p>AirPods Pro are the only in-ear headphones with Active Noise Cancellation that continuously adapts to the geometry of your ear and the fit of the ear tips — blocking out the world so you can focus on what you're listening to.</p>
                    <button>Live Demo</button>
                </div>
                <div className='image-container'>
                    <img src={Airpods} alt="" />
                </div>
            </div>
            <div className='review-container'>
                <h2 className='customer-reviews'>Our Customer Reviews({reviews.length})</h2>
                <div className='review-card'>
                    {
                        reviews.slice(0, 3).map(review =>
                            <div key={review.id} className='reviews'>
                                <div className='review-details'>
                                    <div className='image'>
                                        <img src={review.picture} alt="" />
                                    </div>
                                    <h1 className='review-name'>{review.name}</h1>
                                    <h3 className='review-ratings'>Ratings: <span className='rating-color'>{review.ratings}</span></h3>
                                    <h3 className='review-text'>{review.text}</h3>
                                </div>
                            </div>)
                    }
                </div>
                <div className='btn'>
                    <button onClick={() => navigate('/reviews')}>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
import { Link } from 'react-router-dom';
import rentCategory from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets//jpg/sellCategoryImage.jpg';

export default function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>
      <main>
        {/* Slider */}
        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img src={rentCategory} alt='rent' className='exploreCategoryImg' />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sell'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

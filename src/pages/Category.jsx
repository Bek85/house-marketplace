import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';

export default function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get a reference
        const listingRef = collection(db, 'listings');

        // Create a query
        const q = query(
          listingRef,
          where('type', '==', categoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchListings();
  }, [categoryName]);

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className='categoryListings'>
              {listings.map((listing) => (
                <h3 key={listing.id}>{listing.data.name}</h3>
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No Listings for {categoryName}</p>
      )}
    </div>
  );
}

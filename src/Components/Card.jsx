import React, { useState, useEffect } from 'react';
import './css/Card.css';
import details from './utils/EventDet';
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

function Card() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const querySnapshot = await getDocs(itemsCollection);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(data);
      } catch (err) {
        console.error("Error fetching data ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='contain'>
      <h1 className='text-center' style={{ paddingTop: '30px' }}>
        Our Workshops
      </h1>
      <div className='card-container' id='Card'>
        {items.map((detail, index) => (
          <div className='card' key={index}>
            <div className='card-body'>
              <img src={detail.img} alt='Profile Pic' className='card-image' />
              <div className='card-details'>
                <h5 className='card-title'>{detail.name}</h5>
                <div className='card-text'>
                  <p>{detail.date}</p>
                  <p>{detail.time}</p>
                  <h5>{detail.info}</h5>
                </div>
              </div>
            </div>
            <a href={detail.link} className='card-button' target='_blank' rel='noreferrer'>
              Register now
            </a>
          </div>
        ))}
      </div>
      <p className='text-center link' style={{ paddingBottom: '30px' }}>
        Wanna register for Other Events?{' '}
        <a href='https://forms.gle/Zqob1ZK4VMbtNPXP9' target='_blank' rel='noreferrer'>
          Click Here
        </a>
      </p>
    </div>
  );
}

export default Card;
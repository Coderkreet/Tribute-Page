import React from 'react'
import Shiwaji from '../assets/Shiwaji.jpg'
import Maharaj from '../assets/Maharaj.jpeg'
import '../Components/Herosection.css'

const HeroSection = () => {
  return (
    <div className='container'>
      <img src={Shiwaji} alt="" />
      <headline className='architects-daughter-regular'>
        <span style={{ fontWeight: 'bolder', color: 'orange' }}> “</span>
        It is better to think about the result of the work you are about to do because our next generation will follow the same
        <span style={{ fontWeight: 'bolder', color: 'orange' }}> ”</span>
      </headline>

      <div className='container-hearo'>
        {/* left */}
        <div className='left-div'>
          <h2 style={{fontWeight:'bold'}}>Chhatrapati Shivaji Maharaj</h2>
          <p>(February 19, 1630 - April 3, 1680)</p>
          <p><span style={{fontWeight:'bold'}}>Chhatrapati Shivaji Maharaj  </span>  also spelled as Sivaji was born on 19 February 1630. He was born at Shivneri which is a hill fort in Junnar in Poona, now known as Pune. Chhatrapati Shivaji Maharaj took birth into a family of bureaucrats. His father Shahji Bhonsale was a great Maratha general in the army of Bijapur Sultanate and his mother Jijabai was a great devotee of religion. He was the founder of the great Maratha kingdom of India. He was one of the bravest and marvelous rulers in the 17th century.</p>
          <p>Chhatrapati Shivaji Maharaj was the founder of the Maratha kingdom of India. The kingdom's security was entirely based on religious tolerance and the functional integration of Brahmans, Marathas, and Prabhus. Shivaji Maharaj who was the descendant of a line of prominent nobles was very brave and fought many wars to consolidate India. At that time, India was under the Muslim rulers and divided. The Mughals were in north India and the Muslim sultans of Bijapur as well as of Golconda in the south of India.</p>
          <p>The ancestral estates of Shivaji Maharaj were situated in the Deccan region in the realm of Bijapur sultans. He found the suppression of the Muslim rulers and the persecution of all the Hindus in the region. He was sad due to the devastating condition of the Hindus that by the age of 16 he convinced himself to be the cause of the Hindu’s freedom. It was a conviction that was to sustain him throughout his whole life.</p>
          <p>In 1674 during the summer, Shivaji Maharaj had himself enthroned with great fanfare as an independent sovereign. The entire suppressed Hindu majority rallied to him as their great leader. He ruled his domain for almost six years through a cabinet of eight ministers. Chattrapati Shivaji Maharaj who devout Hindu, who prided himself on the protector of his religion, broke the tradition by commanding that two of his relatives who had been forcibly converted to Islam should be taken back to Hinduism. 

 

Even though both the Christians, as well as the Muslims often kept on imposing their creeds on the population by force, he respected the beliefs and protected the religious places of both communities. Along with Hindus, many Muslims were also in his service. After his coronation, his most remarkable campaign was in the south. During this campaign, he allied with the Sultans and blocked the grand design of the Mughals to spread their rule over the entire subcontinent.</p>
        </div>

        {/* right */}
        <div className='right-div'>
          <img src={Maharaj} alt="" />
          <div>
            <p style={{fontWeight:'bold'}}>BORN</p>
            <p>February 19, 1630, Shivneri Fort, Junnar, Pune, Maharashtra, India</p>

            <p style={{fontWeight:'bold'}} >DIED</p>
            <p>April 3, 1680, Raigad Fort, Maharashtra, India</p>

            <p style={{fontWeight:'bold'}} >RESTING PLACE</p>
            <p>Raigad Fort, Maharashtra, India</p>

            <p style={{fontWeight:'bold'}} >PROFESSION</p>
            <p>Warrior King and Founder of the Maratha Empire</p>

            <p style={{fontWeight:'bold'}} >BOOKS & PUBLICATIONS</p>
            <p>"Shivaji: Hindu King in Islamic India" by James W. Laine<br />
              "Chhatrapati Shivaji" by Setu Madhavrao Pagdi<br />
              "Shivaji and His Times" by Jadunath Sarkar<br />
              "Shivaji: The Great Maratha" by Ranjit Desai</p>

            <p style={{fontWeight:'bold'}} >ASSOCIATED PROJECT</p>
            <p>Fortress Construction, Promotion of Marathi Language and Culture, Administrative Reforms, Naval Fleet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

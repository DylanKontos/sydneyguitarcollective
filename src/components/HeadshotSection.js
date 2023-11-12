import React from 'react';

const HeadshotSection = () => {
  const headshots = [
    {
      name: 'Tobias Dracoulis',
      description: 'is a Sydney based guitarist and teacher who currently holds teaching positions at Reddam House and Sydney Guitar School. He has performed with the UNSW guitar ensemble, the Sydney Classical Guitar Society orchestra and ensemble, as well as numerous solo performances, mainly providing background music at events and functions. He recently completely his Bachelor of Music with first class honours, as well as his Amus A with distinction.',
      imageUrl: require('../assets/Tobi.jpg'),
    },
    {
        name: 'Jonathan Moran',
        description: 'a passionate musician, he has been immersed in the world of classical guitar since 2015. He has honed his skills through dedication, refining his technique under Raffaele Agostino’s Tutelage and with the UNSW Guitar Ensemble. He has attained his Certificate of Music with Honours from the AMEB. He is an active member of the Classical Guitar Society. Currently, Jonathan is dedicated to teaching guitar both privately and at various music schools such as the Sydney Guitar School and Ecole Music Sydney, while in the final stages of his Bachelor of Music at UNSW.',
        imageUrl: require('../assets/Jono.jpg'),
    },
    {
        name: 'Reede Palmer',
        description: 'has been pursuing classical guitar for over six years and studies under Richard Charlton while pursuing a Bachelor of Music (Honours) degree at UNSW. Reede has honed his ensemble skills as a member of the UNSW Guitar Ensemble, and is a founder of 4-Bit Guitar, a group dedicatedto performing and arranging video game music for guitar ensemble.',
        imageUrl: require('../assets/Reede.jpg'),
    },
    {
        name: 'Alexander Frendo',
        description: 'with over 16 years of passion towards classical guitar, Alexander has cultivated a diverse background in various fields, and has learned various forms and styles of music towards an Australian hybridised voice. Alex-ander has developed this over the years through his Bachelor of Music andMaster of Research at Western Sydney University exploring intercultural authenticity towards musical connections and as a founding member of 4-bit Guitar.',
        imageUrl: require('../assets/Alex.jpg'),
    },
    {
        name: 'Josh McLellan',
        description: 'studied as an undergraduate at UNSW under the solo tutelage of renowned guitarist and composer Richard Charlton and participated in the UNSW guitar ensemble under Dr. Janet Agostino. Alongside his continuing involvement playing with The Guitar Collective, Joshua also performs in a number of smaller duos and groups around Sydney and the Blue Mountains.',
        imageUrl: require('../assets/Josh.jpg'),
    },
    {
        name: 'Dylan Kontos',
        description: 'is currently in his 5th year of a Bachelor of Music/Education (Secondary) at UNSW. He has studied under Dr. Josinaldo Costa for 3 years and attained an AMEB Grade 7 with a high distinction. Dylan continues to progress his solo and ensemble playing as a founding member of 4-Bit Guitar and as a member of the UNSW Classical Guitar Ensemble for 4 years.',
        imageUrl: require('../assets/Dylan.jpg'),
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
      {headshots.map((person, index) => (
        <div
          key={index}
          style={{
            margin: '10px',
            textAlign: 'center',
            width: '60%', // Change this width to fit more content on mobile
            maxWidth: '300px',
          }}
        >
          <div style={{ width: '100%', height: 'auto' }}>
            <img
              src={person.imageUrl}
              alt={person.name}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <h4 style={{ fontSize: '1.2em', margin: '5px' }}>{person.name}</h4>
          <p style={{ fontSize: '0.8em', margin: '5px' }}>{person.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeadshotSection;

import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Global.css';
import BeforeAfterSlider from "./BeforeAfterSlider";

import { useNavigate } from 'react-router-dom';

// 1 Bedroom
import furnished1Bed1 from './assets/Apartments/1Bed/furnished1Bed1.png';
import furnished1Bed2 from './assets/Apartments/1Bed/furnished1Bed2.png';
import img1 from './assets/Apartments/1Bed/Radisson_1Bed_7.jpg';
import img2 from './assets/Apartments/1Bed/Radisson_1Bed_6.jpg';
import img3 from './assets/Apartments/1Bed/Radisson_1Bed_8.jpg';
import img4 from './assets/Apartments/1Bed/Radisson_1Bed_13.jpg';
import img5 from './assets/Apartments/1Bed/Radisson_1Bed_1.jpg';
import img6 from './assets/Apartments/1Bed/Radisson_1Bed_14.jpg';
import img7 from './assets/Apartments/1Bed/Radisson_1Bed_3.jpg';
import img8 from './assets/Apartments/1Bed/Radisson_1Bed_4.jpg';
import img9 from './assets/Apartments/1Bed/Radisson_1Bed_5.jpg';
import img10 from './assets/Apartments/1Bed/Radisson_1Bed_10.jpg';
import img11 from './assets/Apartments/1Bed/Radisson_1Bed_2.jpg';

// 2 Bedroom
import furnished2Bed1 from './assets/Apartments/2Bed/furnished2Bed1.png';
import furnished2Bed2 from './assets/Apartments/2Bed/furnished2Bed2.png';
import img12 from './assets/Apartments/2Bed/Radisson_2Bed_22.jpg';
import img13 from './assets/Apartments/2Bed/Radisson_2Bed_17.jpg';
import img14 from './assets/Apartments/2Bed/Radisson_2Bed_5.jpg';
import img15 from './assets/Apartments/2Bed/Radisson_2Bed_6.jpg';
import img16 from './assets/Apartments/2Bed/Radisson_2Bed_16.jpg';
import img17 from './assets/Apartments/2Bed/Radisson_2Bed_20.jpg';
import img18 from './assets/Apartments/2Bed/Radisson_2Bed_21.jpg';
import img19 from './assets/Apartments/2Bed/Radisson_2Bed_7.jpg';
import img20 from './assets/Apartments/2Bed/Radisson_2Bed_9.jpg';
import img21 from './assets/Apartments/2Bed/Radisson_2Bed_10.jpg';
import img22 from './assets/Apartments/2Bed/Radisson_2Bed_18.jpg';
import img23 from './assets/Apartments/2Bed/Radisson_2Bed_11.jpg';
import img24 from './assets/Apartments/2Bed/Radisson_2Bed_15.jpg';
import img25 from './assets/Apartments/2Bed/Radisson_2Bed_4.jpg';

// 3 Bedroom
import furnished3Bed1 from './assets/Apartments/3Bed/furnished3Bed1.png';
import furnished3Bed2 from './assets/Apartments/3Bed/furnished3Bed2.png';
import img26 from './assets/Apartments/3Bed/Radisson_3Bed_3.jpg';
import img27 from './assets/Apartments/3Bed/Radisson_3Bed_2.jpg';
import img28 from './assets/Apartments/3Bed/Radisson_3Bed_15.jpg';
import img29 from './assets/Apartments/3Bed/Radisson_3Bed_14.jpg';
import img30 from './assets/Apartments/3Bed/Radisson_3Bed_13.jpg';
import img31 from './assets/Apartments/3Bed/Radisson_3Bed_9.jpg';
import img32 from './assets/Apartments/3Bed/Radisson_3Bed_10.jpg';
import img33 from './assets/Apartments/3Bed/Radisson_3Bed_16.jpg';
import img34 from './assets/Apartments/3Bed/Radisson_3Bed_18.jpg';
import img35 from './assets/Apartments/3Bed/Radisson_3Bed_7.jpg';
import img36 from './assets/Apartments/3Bed/Radisson_3Bed_8.jpg';
import img37 from './assets/Apartments/3Bed/Radisson_3Bed_4.jpg';
import img38 from './assets/Apartments/3Bed/Radisson_3Bed_5.jpg';

// Studio
import furnishedStudio1 from './assets/Apartments/Studio/furnishedStudio1.png';

// 4 Bedroom
import furnished4Bed1 from './assets/Apartments/4Bed/furnished4Bed1.png';

// Logo
import radissonLogo from './assets/Icons/Radisson-logo.png';

const images = [
  // 1 Bedroom
  { type: '1 Bedroom', before: img1, after: furnished1Bed1, captionBefore: "1 Bed: Living Area View 1", captionAfter: "1 Bed: Living Area Furnished" },
  { type: '1 Bedroom', before: img2, after: furnished1Bed2, captionBefore: "1 Bed: Bedroom View 1", captionAfter: "1 Bed: Bedroom Furnished" },
  { type: '1 Bedroom', before: img2, captionBefore: "1 Bed: Bedroom View 1" },
  { type: '1 Bedroom', before: img3, captionBefore: "1 Bed: Bedroom View 2" },
  { type: '1 Bedroom', before: img4, captionBefore: "1 Bed: Bedroom View 3" },
  { type: '1 Bedroom', before: img5, captionBefore: "1 Bed: Hallway View 1" },
  { type: '1 Bedroom', before: img6, captionBefore: "1 Bed: Hallway View 2" },
  { type: '1 Bedroom', before: img7, captionBefore: "1 Bed: Bedroom View 1" },
  { type: '1 Bedroom', before: img8, captionBefore: "1 Bed: Kitchen View 1" },
  { type: '1 Bedroom', before: img9, captionBefore: "1 Bed: Kitchen View 2" },
  { type: '1 Bedroom', before: img10, captionBefore: "1 Bed: Kitchen View 3" },
  { type: '1 Bedroom', before: img11, captionBefore: "1 Bed: Bathroom" },

  // 2 Bedroom
  { type: '2 Bedroom', before: img12, after: furnished2Bed2, captionBefore: "2 Bed: Living Area View 1", captionAfter: "2 Bed: Living Area Furnished" },
  { type: '2 Bedroom', before: img13, captionBefore: "2 Bed: Living Area View 2" },
  { type: '2 Bedroom', before: img14, after: furnished2Bed1, captionBefore: "2 Bed: 1st Bedroom View 1", captionAfter: "2 Bed: Bedroom Furnished" },
  { type: '2 Bedroom', before: img15, captionBefore: "2 Bed: 1st Bedroom View 2" },
  { type: '2 Bedroom', before: img16, captionBefore: "2 Bed: 2nd Bedroom View 1" },
  { type: '2 Bedroom', before: img17, captionBefore: "2 Bed: 2nd Bedroom View 2" },
  { type: '2 Bedroom', before: img18, captionBefore: "2 Bed: Kitchen View 1" },
  { type: '2 Bedroom', before: img19, captionBefore: "2 Bed: Kitchen View 2" },
  { type: '2 Bedroom', before: img20, captionBefore: "2 Bed: Balcony View 1" },
  { type: '2 Bedroom', before: img21, captionBefore: "2 Bed: Balcony View 2" },
  { type: '2 Bedroom', before: img22, captionBefore: "2 Bed: Balcony View 3" },
  { type: '2 Bedroom', before: img23, captionBefore: "2 Bed: Balcony View 4" },
  { type: '2 Bedroom', before: img24, captionBefore: "2 Bed: Hallway" },
  { type: '2 Bedroom', before: img25, captionBefore: "2 Bed: Bathroom" },

  // 3 Bedroom
  { type: '3 Bedroom', before: img26, after: furnished3Bed1, captionBefore: "3 Bed: Living Area View 1", captionAfter: "2 Bed: Living Area Furnished" },
  { type: '3 Bedroom', before: img27, captionBefore: "3 Bed: Living Area View 2" },
  { type: '3 Bedroom', before: img28, after: furnished3Bed2, captionBefore: "3 Bed: 1st Bedroom View 1", captionAfter: "2 Bed: Bedroom Furnished" },
  { type: '3 Bedroom', before: img29, captionBefore: "3 Bed: 1st Bedroom View 2" },
  { type: '3 Bedroom', before: img30, captionBefore: "3 Bed: 1st Bedroom View 3" },
  { type: '3 Bedroom', before: img31, captionBefore: "3 Bed: 2nd Bedroom View 1" },
  { type: '3 Bedroom', before: img32, captionBefore: "3 Bed: 2nd Bedroom View 2" },
  { type: '3 Bedroom', before: img33, captionBefore: "3 Bed: 3rd Bedroom View 1" },
  { type: '3 Bedroom', before: img34, captionBefore: "3 Bed: 3rd Bedroom View 2" },
  { type: '3 Bedroom', before: img35, captionBefore: "3 Bed: Kitchen View 1" },
  { type: '3 Bedroom', before: img36, captionBefore: "3 Bed: Kitchen View 2" },
  { type: '3 Bedroom', before: img37, captionBefore: "3 Bed: Balcony View 1" },
  { type: '3 Bedroom', before: img38, captionBefore: "3 Bed: Balcony View 2" },

  // Studio
  { type: 'Studio', before: furnishedStudio1, captionBefore: "Studio: Living Area Unfurnished", captionAfter: "Living Area Furnished" },

  // 4 Bedroom
  { type: '4 Bedroom', before: furnished4Bed1, captionBefore: "4 Bed: Bedroom" }
];



function PhotoHeader() {
  const navigate = useNavigate();
  const goToFrenchPhotos = () => navigate('/gallery/fr');
  const [showModal, setShowModal] = useState(false);

  // Contact Leasing Agent Section
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false); // mobile
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileDropdown = () => setShowMobileDropdown(v => !v);


  // Handle Contact button click
  const handleEmailClick = () => {
    window.location.href = 'mailto:location@radissonapartments.ca';
  };

  return (
    <>
      <header className="header lightgray-bg fixed-header">
        <div className="header-left">
          <span
            className="back-arrow"
            aria-label="Back to homepage"
            role="button"
            onClick={() => navigate('/')}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
          >
            ←
          </span>
        </div>
        <div className="header-center">
          <div
            className="header-address"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <img
              src={radissonLogo}
              alt="Riviera Logo"
            />
            <span>RADISSON</span>
          </div>
        </div>
        <div className="header-right">
          <div className="contact-wrapper">
            <button className="nav-header-link" onClick={toggleDropdown}>
              Contact Leasing Agent
            </button>

            {showDropdown && (
              <div className="contact-dropdown">
                <p><strong>Phone:</strong> <a href="tel:5145037171">514-503-7171</a></p>
                <p>
                  <strong>Email:</strong>{' '}
                  <button onClick={handleEmailClick} className="email-link">
                    location@radissonapartments.ca
                  </button>
                </p>
              </div>
            )}
          </div>
          <button className="nav-header-link nav-header-btn" onClick={() => setShowModal(true)}>
            Book A Tour
          </button>
          <button className="nav-header-link nav-header-btn" onClick={goToFrenchPhotos}>FR</button>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Book A Tour</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfkwxTcMgpDVTJkj4jJS93B-x60t5Ceq3lxjR22YWO6PoryVw/viewform?embedded=true"
              width="100%" height="100%" frameBorder="0"
              title="Book A Tour Form"
              style={{ border: '1px solid #ccc', borderRadius: '12px' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function RadissonGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filter, setFilter] = useState('all');

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const slides = [
    { image: furnished2Bed1, title: "Photo Gallery" },
    { image: furnished2Bed2, title: "2-10 Radisson" },
    { image: furnished3Bed1, title: "Affordable Living" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTransitioning(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const groupedPhotos = {
    '1 Bedroom': images.filter(photo => photo.type === '1 Bedroom'),
    '2 Bedroom': images.filter(photo => photo.type === '2 Bedroom'),
    '3 Bedroom': images.filter(photo => photo.type === '3 Bedroom'),
    '4 Bedroom': images.filter(photo => photo.type === '4 Bedroom'),
    'Studio': images.filter(photo => photo.type === 'Studio'),
  };

  const filteredPhotos = filter === 'all' ? null : groupedPhotos[filter];
  const currentPhotos = filter === 'all'
    ? Object.values(groupedPhotos).flat()
    : filteredPhotos;

  return (
    <>
      <PhotoHeader />
      <section 
        className="discover-properties"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div
          className="slides-container"
          style={{
            width: `${(slides.length + 1) * 100}vw`,
            transform: `translateX(-${activeSlide * 100}vw)`,
            transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
          }}
        >
          {slides.map(({ image, title }, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={title} className="building-image" />
              <div className="overlay">
                <h2 className="title">{title}</h2>
              </div>
            </div>
          ))}

          {/* Clone of first slide */}
          <div className="slide" key="clone">
            <img src={slides[0].image} alt={slides[0].title} className="building-image" />
            <div className="overlay">
              <h2 className="title">{slides[0].title}</h2>
            </div>
          </div>
        </div>

        <button className="arrow-button" onClick={nextSlide} aria-label="Next Slide">
          &#8594;
        </button>
      </section>

      <div className="photo-intro ">
        <h2 className="photo-title">Découvrez nos appartements</h2>
        <div className="photo-subtitle">
          <p>
            Découvrez la galerie des appartements Radisson. 
            Faites glisser certaines images à gauche ou à droite pour comparer les versions vides et meublées.
          </p>
        </div>

        {/* Filter Panel */}
        <div className="filter-panel">
          <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
          <button className={filter === '1 Bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('1 Bedroom')}>1 Bedroom</button>
          <button className={filter === '2 Bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('2 Bedroom')}>2 Bedroom</button>
          <button className={filter === '3 Bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('3 Bedroom')}>3 Bedroom</button>
          <button className={filter === '4 Bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('4 Bedroom')}>4 Bedroom</button>
          <button className={filter === 'Studio' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('Studio')}>Studio</button>
        </div>
      </div>

      <hr className="filter-divider" />

      {/* Photo Grid with Before/After Sliders */}
      <div>
        {filter === 'all' ? (
          <>
            {Object.entries(groupedPhotos).map(([type, photos]) => (
              photos.length > 0 && (
                <div key={type}>
                  <h3 className="photo-section-title">{type}</h3>
                  <div className="photo-grid">
                    {photos.map((photo, index) => (
                      photo.after ? (
                        <div className="photo-item" key={index}>
                          <BeforeAfterSlider
                            beforeImage={photo.before}
                            afterImage={photo.after}
                            altBefore={photo.captionBefore}
                            altAfter={photo.captionAfter}
                          />
                          {photo.captionBefore && (
                            <p className="photo-caption">
                              {photo.captionBefore} → {photo.captionAfter}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="photo-item" key={index}>
                          <img
                            src={photo.before}
                            alt={photo.captionBefore || "Apartment photo"}
                            className="single-photo"
                          />
                          {photo.captionBefore && (
                            <p className="photo-caption">{photo.captionBefore}</p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )
            ))}
          </>
        ) : (
          <>
            <h3 className="photo-section-title">{filter}</h3>
            <div className="photo-grid">
              {currentPhotos.map((photo, index) => (
                photo.after ? (
                  <div className="photo-item" key={index}>
                    <BeforeAfterSlider
                      beforeImage={photo.before}
                      afterImage={photo.after}
                      altBefore={photo.captionBefore}
                      altAfter={photo.captionAfter}
                    />
                    {photo.captionBefore && (
                      <p className="photo-caption">
                        {photo.captionBefore} → {photo.captionAfter}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="photo-item" key={index}>
                    <img
                      src={photo.before}
                      alt={photo.captionBefore || "Apartment photo"}
                      className="single-photo"
                    />
                    {photo.captionBefore && (
                      <p className="photo-caption">{photo.captionBefore}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </>
        )}
      </div>

      <span style={{ paddingLeft: "1rem", fontSize: "0.80rem", color: "gray" }}>
        *Some furnished images are virtually staged. Rooms may differ slightly from what is shown.
      </span>


      <footer className="footer lightgray-bg">
        <p>© 2025 Radisson. All rights reserved.</p>
      </footer>
    </>
  );
}


export default RadissonGallery;

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Global.css';
import './Properties.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Studio
import img1 from './assets/Appartements/Cormier/Studio/Cormier_Studio_1.jpg';
import furnishedStudio1 from './assets/Appartements/Cormier/Studio/furnishedStudio1.png';
import img2 from './assets/Appartements/Cormier/Studio/Cormier_Studio_2.jpg';
import img3 from './assets/Appartements/Cormier/Studio/Cormier_Studio_3.jpg';
import img4 from './assets/Appartements/Cormier/Studio/Cormier_Studio_4.jpg';
import img5 from './assets/Appartements/Cormier/Studio/Cormier_Studio_5.jpg';
import img6 from './assets/Appartements/Cormier/Studio/Cormier_Studio_6.jpg';
import img7 from './assets/Appartements/Cormier/Studio/Cormier_Studio_7.jpg';
import img8 from './assets/Appartements/Cormier/Studio/Cormier_Studio_8.jpg';
import img9 from './assets/Appartements/Cormier/Studio/Cormier_Studio_9.jpg';

// 1 Bedroom
import img10 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_1.jpg';
import img11 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_2.jpg';
import img12 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_3.jpg';
import img13 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_4.jpg';
import furnished1Bed1 from './assets/Appartements/Cormier/1Bedroom/furnished1Bed1.png';
import img14 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_5.jpg';
import img15 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_6.jpg';
import img16 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_7.jpg';
import furnished1Bed2 from './assets/Appartements/Cormier/1Bedroom/furnished1Bed2.png';
import img17 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_8.jpg';
import img18 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_9.jpg';
import img19 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_10.jpg';
import img20 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_11.jpg';

// 2 Bedroom
import img21 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_1.jpg';
import furnished2Bed1 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed1.png';
import img22 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_2.jpg';
import img23 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_3.jpg';
import img24 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_4.jpg';
import img25 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_5.jpg';
import img26 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_6.jpg';
import img27 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_7.jpg';
import furnished2Bed2 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed2.png';
import img28 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_8.jpg';
import img29 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_9.jpg';
import img30 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_10.jpg';
import img31 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_11.jpg';
import img32 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_12.jpg';
import img33 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_13.jpg';
import img34 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_15.jpg';
import furnished2Bed3 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed3.png';
import img36 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_17.jpg';

// Icons
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';
import outdoorPoolIcon from './assets/Icons/outdoorPoolIcon.png';
import bbq from './assets/Icons/bbq.png';
import tennis from './assets/Icons/tennis.png';
import dog from './assets/Icons/dog.png';
import cinema from './assets/Icons/cinema.png';

// Logo
import radissonLogo from './assets/Icons/Riviera-logo.png';

// Amenities
import pool from './assets/Amenities/pool1.png';

// View
import balconyview from './assets/Outside/view1.png';

// Outside
import rivieraImage1 from './assets/Outside/drone1.jpg';
import rivieraImage2 from './assets/Outside/drone2.jpg';
import rivieraImage3 from './assets/Outside/drone3.jpg';
import cormierImage1 from './assets/Outside/cormier-outside3.jpg';
import cormierImage2 from './assets/Outside/cormier-outside2.jpg';
import pearsonImage1 from './assets/Outside/80-Pearson-10.jpg';
import pearsonImage2 from './assets/Outside/80-Pearson-3.jpg';


// Amenities
import outdoorPoolImage from './assets/Amenities/pool1.png';
import bbqImage from './assets/Amenities/BBQ.jpg';
import tennisImage from './assets/Amenities/tennis.png';
import gymImage from './assets/Amenities/gym1.jpg';
import laundryImage from './assets/Amenities/laundry_room_2.jpg';
import dogParkImage from './assets/Amenities/dogpark.png';
import cinemaImage from './assets/Amenities/cinema1.jpg';



const images = [
  // Studio
  { src: img1, caption: "Studio: Living Area Unfurnished", type: "Studio", furnished: false },
  { src: furnishedStudio1, caption: "Studio: Living Area Furnished", type: "Studio", furnished: true },
  { src: img2, caption: "Studio: Living Area + Kitchen View 2", type: "Studio", furnished: false },
  { src: img3, caption: "Studio: Entrance + Kitchen", type: "Studio", furnished: false },
  { src: img4, caption: "Studio: Living Area View 1", type: "Studio", furnished: false },
  { src: img5, caption: "Studio: Living Area View 2", type: "Studio", furnished: false },
  { src: img6, caption: "Studio: Living Area View 3", type: "Studio", furnished: false },
  { src: img7, caption: "Studio: Bathroom View 1", type: "Studio", furnished: false },
  { src: img8, caption: "Studio: Bathroom View 2", type: "Studio", furnished: false },
  { src: img9, caption: "Studio: Kitchen", type: "Studio", furnished: false },

  // 1 Bedroom
  { src: img10, caption: "1 Bed: Kitchen", type: "1 Bedroom" },
  { src: img11, caption: "1 Bed: Living Area View 1", type: "1 Bedroom", furnished: false },
  { src: img12, caption: "1 Bed: Living Area View 2", type: "1 Bedroom", furnished: false },
  { src: img13, caption: "1 Bed: Living Area Unfurnished", type: "1 Bedroom", furnished: false },
  { src: furnished1Bed1, caption: "1 Bed: Living Area Furnished", type: "1 Bedroom", furnished: true },
  { src: img14, caption: "1 Bed: Living Area + Entrance", type: "1 Bedroom", furnished: false },
  { src: img15, caption: "1 Bed: Living Area View 4", type: "1 Bedroom", furnished: false },
  { src: img16, caption: "1 Bed: Bedroom View 1", type: "1 Bedroom", furnished: false },
  { src: img17, caption: "1 Bed: Bedroom Unfurnished", type: "1 Bedroom", furnished: false },
  { src: furnished1Bed2, caption: "1 Bed: Bedroom Furnished", type: "1 Bedroom", furnished: true },
  { src: img18, caption: "1 Bed: Bedroom View 3", type: "1 Bedroom", furnished: false },
  { src: img19, caption: "1 Bed: Bathroom", type: "1 Bedroom", furnished: false },
  { src: img20, caption: "1 Bed: Bedroom + Living Area", type: "1 Bedroom", furnished: false },

  // 2 Bedroom
  { src: img21, caption: "2 Bed: Living Area Unfurnished", type: "2 Bedroom", furnished: false },
  { src: furnished2Bed1, caption: "2 Bed: Living Area Furnished", type: "2 Bedroom", furnished: true },
  { src: img22, caption: "2 Bed: Living Area View 2", type: "2 Bedroom", furnished: false },
  { src: img23, caption: "2 Bed: Living Area View 3", type: "2 Bedroom", furnished: false },
  { src: img24, caption: "2 Bed: Kitchen", type: "2 Bedroom", furnished: false },
  { src: img25, caption: "2 Bed: Bathroom View 1", type: "2 Bedroom", furnished: false },
  { src: img26, caption: "2 Bed: Bathroom View 2", type: "2 Bedroom", furnished: false },
  { src: img27, caption: "2 Bed: 1st Bedroom Unfurnished", type: "2 Bedroom", furnished: false },
  { src: furnished2Bed2, caption: "2 Bed: 1st Bedroom Furnished", type: "2 Bedroom", furnished: true },
  { src: img28, caption: "2 Bed: Bedroom 1 View 2", type: "2 Bedroom", furnished: false },
  { src: img29, caption: "2 Bed: Hallway", type: "2 Bedroom", furnished: false },
  { src: img30, caption: "2 Bed: Balcony View 1", type: "2 Bedroom", furnished: false },
  { src: img31, caption: "2 Bed: Balcony View 2", type: "2 Bedroom", furnished: false },
  { src: img32, caption: "2 Bed: Balcony View 3", type: "2 Bedroom", furnished: false },
  { src: img33, caption: "2 Bed: Balcony View 4", type: "2 Bedroom", furnished: false },
  { src: img34, caption: "2 Bed: 2nd Bedroom Unfurnished", type: "2 Bedroom", furnished: false },
  { src: furnished2Bed3, caption: "2 Bed: 2nd Bedroom Furnished", type: "2 Bedroom", furnished: true },
  { src: img36, caption: "2 Bed: Bedroom 2 View 2", type: "2 Bedroom", furnished: false },
];



// Sample units data
const unitsData = [
  { type: 'Studio', size: '448 pi²', price: '$1,220 / month', img: furnishedStudio1 },
  { type: '1 Bedroom', size: '652 pi²', price: '$1,345 / month', img: furnished1Bed2 },
  { type: '2 Bedroom', size: '837-930 pi²', price: '$1,695 / month', img: furnished2Bed2 },
];


function Cormier() {
  const navigate = useNavigate();

  // State for the discover cormier banner
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [viewMode, setViewMode] = useState("cards");

  const slides = [
    { image: furnishedStudio1, title: "Modern Living at Cormier" },
    { image: furnished1Bed1, title: "Spacious & Bright Interiors" },
    { image: furnished1Bed2, title: "Prime Location in Montreal" },
    { image: furnished2Bed1, title: "Designed for Comfort" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return; // prevent spam clicks
    setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 600); // matches transition speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTransitioning(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide]);



  // State for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  

  // Slideshow state
  const [currentIndex, setCurrentIndex] = useState(0);
  // Filter state
  const [filterType, setFilterType] = useState('All');
  // Modal state
  const [showModal, setShowModal] = useState(false);
  // For fade animation
  const [fade, setFade] = useState(true);

  // Refs for smooth scrolling
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const unitsRef1 = useRef(null);
  const locationRef = useRef(null);

  // Sort furnished images first
  const sortedImages = [...images].sort((a, b) => {
    return (b.furnished === true) - (a.furnished === true);
  });

  // Auto slideshow with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]); 

  // Navigation for slideshow with fade
  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const goToIndex = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // Filter units by type
  const filteredUnits = unitsData.filter(unit =>
    filterType === 'All' || unit.type === filterType
  );

  // Smooth scroll to sections
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const padding = 10;

      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - headerHeight - padding;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };


  // Open apply modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle Contact button click
  const handleContactClick = () => {
    window.location.href = 'mailto:location@apartmentsriviera.ca';
  };

  return (
  <>
    {/* Header outside app-container */}
    <header className="header">
      <div className="header-left">
        {/* Desktop links */}
        <div className="desktop-links">
          <button className="nav-header-link" onClick={() => navigate('/home')}>Riviera</button>
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
          <button className="nav-header-link" onClick={() => navigate('/cormier/photos')}>Gallery</button>
          <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -200)}>Available Units</button>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </div>
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
          <span>Radisson</span>
        </div>
      </div>

      <div className="header-right">
        {/* Desktop buttons */}
        <div className="desktop-buttons">
          <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
          <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
          <button className="nav-header-link" onClick={() => navigate('/cormier/fr')}>FR</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => navigate('/home')}>Riviera</button>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
        <button className="nav-header-link" onClick={() => navigate('/cormier/photos')}>Gallery</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Available Units</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
        <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
        <button className="nav-header-link" onClick={() => navigate('/cormier/fr')}>FR</button>
      </div>

    </header>

    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">
        {/* Slideshow */}
        <section className="slideshow-section" aria-label="Building images slideshow">
          <div className="slideshow-container triple-display" role="region" aria-live="polite" style={{ position: 'relative' }}>
            
            {/* Left arrow button */}
            <button
              className="nav-button left"
              onClick={goToPrevious}
              aria-label="Previous image"
              style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ‹
            </button>

            {/* Previous image preview */}
            <img
              src={sortedImages[(currentIndex - 1 + sortedImages.length) % sortedImages.length].src}
              alt={`Previous: ${sortedImages[(currentIndex - 1 + sortedImages.length) % sortedImages.length].caption}`}
              className="side-image"
              onClick={goToPrevious}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToPrevious(); }}
              aria-label="Go to previous image"
            />

            {/* Main image */}
            <img
              key={sortedImages[currentIndex].src}
              src={sortedImages[currentIndex].src}
              alt={sortedImages[currentIndex].caption}
              className={`main-image ${fade ? 'fade-in' : 'fade-out'}`}
            />

            {/* Next image preview */}
            <img
              src={sortedImages[(currentIndex + 1) % sortedImages.length].src}
              alt={`Next: ${sortedImages[(currentIndex + 1) % sortedImages.length].caption}`}
              className="side-image"
              onClick={goToNext}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToNext(); }}
              aria-label="Go to next image"
            />

            {/* Right arrow button */}
            <button
              className="nav-button right"
              onClick={goToNext}
              aria-label="Next image"
              style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ›
            </button>
          </div>
          <p className="caption">{sortedImages[currentIndex].caption}</p>
        </section>

        {/* Book A Tour Section */}
        <section
          className="highlight-hero lightgray-bg reverse"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={images[1].src} alt="Beautiful unit at Cormier" />
            </div>
            <div className="hero-text">
              <h1>Welcome To <br/>Radisson Gardens<br /></h1>
              <p>Affordable Housing, Central Location, Total Comfort.</p>
              <button className="hero-tour-button" onClick={openModal}>
                Book A Tour
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef1}
          className="about-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="about-wrapper">
            <div className="about-image">
              <img
                src={furnished2Bed1}
                alt="Cormier Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>About Radisson</h2>
              <p>
                Welcome to <strong>Radisson</strong>, a beautiful residence in Aylmer, Gatineau,  
                just minutes from the Ottawa River and downtown Ottawa. Designed for comfort, it blends convenience with style  
                to offer a high‑quality living experience.
              </p>
              <p>
                At <strong>Radisson</strong>, recently renovated apartments provide welcoming spaces 
                where comfort and convenience come together for everyday living.
              </p>
              <ul className="about-features">
                <li>Renovated and comfortable design</li>
                <li>Prime location near the Ottawa River, downtown Ottawa, and nearby amenities</li>
                <li>Spacious layouts designed for easy living</li>
                <li>A welcoming, community‑oriented atmosphere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Cards Section */}
        <section 
          className="features-cards-section white-bg" 
          data-aos="fade-up" 
          data-aos-once="true" 
          data-aos-easing="ease-in-out"
        >
          {/* Section Title */}
          <h2>Amenities Offered With Riviera</h2>

          {/* Toggle Button */}
          <div className="view-toggle">
            <button onClick={() => setViewMode(viewMode === "cards" ? "photos" : "cards")}>
              Switch to {viewMode === "cards" ? "Photo View" : "Card View"}
            </button>
          </div>

          {/* Conditional Rendering */}
          {viewMode === "cards" ? (
            <div className="features-cards-container">
              {/* --- Your existing cards (no change) --- */}

              {/* Card 1: Outdoor Pool */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: outdoorPoolImage })}>
                <img src={outdoorPoolIcon} alt="Outdoor Pool icon" className="feature-icon" style={{ width: '140px', height: '140px', marginTop: '30px' }}/>
                <h3>Outdoor Pool</h3>
                <p>Enjoy a refreshing swim in our outdoor pool, perfect for relaxation and leisure.</p>
              </div>

              {/* Card 2: BBQ Area */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbq} alt="BBQ icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>BBQ Area</h3>
                <p>Enjoy outdoor cooking and dining with our BBQ facilities, perfect for gatherings.</p>
              </div>

              {/* Card 4: Tennis Court */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennis} alt="Tennis icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Tennis Court</h3>
                <p>Enjoy a game of tennis on our outdoor court, designed for fun and fitness.</p>
              </div>

              {/* Card 5: Gym */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymIcon} alt="Gym icon" className="feature-icon" />
                <h3>Fitness Centre</h3>
                <p>Stay fit and active with our fully equipped on-site gym, available 24/7 for residents.</p>
              </div>

              {/* Card 6: Laundry */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
                <h3>Laundry Room</h3>
                <p>Convenient on-site laundry with modern washers and dryers.</p>
              </div>

              {/* Card 7: Dog Park */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dog} alt="Dog icon" className="feature-icon" />
                <h3>Dog Park</h3>
                <p>Convenient on-site dog park for your furry friends to play and socialize.</p>
              </div>

              {/* Card 8: Cinema */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinema} alt="Cinema icon" className="feature-icon" style={{ width: '150px', height: '150px'}}/>
                <h3>Cinema Room</h3>
                <p>Enjoy movie nights in our cozy cinema room, complete with comfortable seating and a large screen.</p>
              </div>
            </div>
          ) : (
            <div className="features-photos-container">
              {/* Photo View */}
              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: outdoorPoolImage })}>
                <img src={outdoorPoolImage} alt="Outdoor Pool" className="feature-photo"/>
                <p className="photo-caption">Outdoor Pool</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbqImage} alt="BBQ Area" className="feature-photo"/>
                <p className="photo-caption">BBQ Area</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennisImage} alt="Tennis Court" className="feature-photo"/>
                <p className="photo-caption">Tennis Court</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymImage} alt="Fitness Centre" className="feature-photo"/>
                <p className="photo-caption">Fitness Centre</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={laundryImage} alt="Laundry Room" className="feature-photo"/>
                <p className="photo-caption">Laundry Room</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dogParkImage} alt="Dog Park" className="feature-photo"/>
                <p className="photo-caption">Dog Park</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinemaImage} alt="Cinema Room" className="feature-photo"/>
                <p className="photo-caption">Cinema Room</p>
              </div>
            </div>
          )}
        </section>

        {/* Modal */}
        {selectedAmenity && (
          <div 
            className="modal-overlay" 
            onClick={() => setSelectedAmenity(null)} 
            style={{
              position: 'fixed', 
              top: 0, left: 0, 
              width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.9)', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center', 
              zIndex: 9999
            }}
          >
            {/* Close Button in top-right of overlay */}
            <button 
              onClick={() => setSelectedAmenity(null)} 
              style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                background: 'transparent',
                border: 'none',
                fontSize: '2.5rem',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10000
              }}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Stop click bubbling on image */}
            <div 
              style={{ 
                maxWidth: '70%', 
                maxHeight: '80%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
              }} 
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedAmenity.image} 
                alt={selectedAmenity.title} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  borderRadius: '10px',
                  objectFit: 'contain',
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                }} 
              />
            </div>
          </div>
        )}

        {/* Amenities Pool Highlight Section */}
        <section
          className="amenities-hero lightgray-bg"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={pool} alt="Pool at Cormier" />
            </div>
            <div className="amenities-hero-text">
              <h1>Relax And Refresh By The Pool</h1>
              <p>Enjoy a refreshing swim in a bright, welcoming pool designed for relaxation and leisure.</p>
            </div>
          </div>
        </section>

        {/* Amenities View Highlight Section */}
        <section
          className="amenities-hero lightgray-bg reverse"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={balconyview} alt="View at Cormier" />
            </div>
            <div className="amenities-hero-text">
              <h1>A Stunning View Across the Ottawa River</h1>
              <p>
                Enjoy breathtaking views of the Ottawa River right from your apartment, creating a peaceful and inspiring living environment.
              </p>
            </div>
          </div>
        </section>


        {/* Available Units Section*/}
        <section
          ref={unitsRef1}
          className="units-section coolgray-bg"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <h2>Available Units</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom'].map((type) => {
              // Show all units of this type (no filter)
              const unitsOfType = filteredUnits.filter(u => u.type === type);
              if (unitsOfType.length === 0) return null;

              return (
                <div key={type} className="unit-type-card">
                  <h3>{type}</h3>
                  {unitsOfType.map(({ unit, size, price, img }) => (
                    <div key={unit} className="unit-card">
                      <img src={img} alt={`${type} unit ${unit}`} className="unit-image" />
                      <div className="unit-info">
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Size:</strong> {size}</p>
                        <p><strong>Starting Price:</strong> {price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>


        {/* Location Section */}
        <section
          ref={locationRef}
          className="location-section lightgray-bg"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="modern-location-wrapper">
            <div className="modern-location-text">
              <h2>Discover the Neighborhood</h2>
              <p>
                Nestled in Aylmer, Gatineau, <strong>Radisson</strong> offers easy access to the <b>Ottawa River</b> and is just minutes from <b>downtown Ottawa</b>.  
                Surrounded by cafés, restaurants, and shops, daily conveniences are always within reach, and the <b>University of Ottawa</b> is only a 20‑minute drive away.  
                Radisson is where comfort, convenience, and location come together.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="Cormier Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.091340365991!2d-75.74718305774705!3d45.46457820766836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce034c75804c17%3A0x826bb9c3eae0c0db!2sLes%20Jardins%20Radisson!5e1!3m2!1sen!2sca!4v1754573492201!5m2!1sen!2sca"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      {/* Modal for Apply Now */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '70vw',
              height: '85vh', // tall modal
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              padding: '1rem 2rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button
            onClick={closeModal}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.8rem',
              cursor: 'pointer',
              color: '#555',
              fontWeight: 'bold',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
            <h2 id="modal-title" style={{ marginBottom: '1rem' }}>Book A Tour</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeA9sIxQnhvUlgwuHtZOLB4oNFJ7JxlOmvkbz2Rs2V8KV9JvA/viewform?embedded=true"
              width="100%"
              height="100%"  // fill the modal content height
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Book A Tour Form"
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                flexGrow: 1, // make iframe grow to fill available space
              }}
            />
          </div>
        </div>
      )}

      </div>

      <span style={{ paddingLeft: "1rem", fontSize: "0.80rem", color: "gray" }}>
        *Some furnished images are virtually staged. Rooms may differ slightly from what is shown.
      </span>

      {/* Footer */}
      <footer className="footer lightgray-bg">
        <p>© 2025 Radisson. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Cormier;


import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Global.css';
import './Properties.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

// Icons
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';
import poolIcon from './assets/Icons/outdoorPoolIcon.png';
import airConditioningIcon from './assets/Icons/airConditioning.png';
import kitchenIcon from './assets/Icons/kitchen.svg';
import elevatorIcon from './assets/Icons/elevatorIcon.png';

// Logo
import radissonLogo from './assets/Icons/Radisson-logo.png';

// Outside
import outside1 from './assets/Outside/radisson_outside1.png';
import outside2 from './assets/Outside/radisson_outside2.png';

// Amenities
import pool from './assets/Amenities/pool.jpg';
import gymImage from './assets/Amenities/gym.jpg';
import laundryImage from './assets/Amenities/laundry_room.png';


const images = [
  // 1 Bedroom
  { src: img1, caption: "1 Bed: Living Area View 1", type: "1 Bedroom", furnished: false },
  { src: img2, caption: "1 Bed: Bedroom View 1", type: "1 Bedroom", furnished: false },
  { src: img3, caption: "1 Bed: Bedroom View 2", type: "1 Bedroom", furnished: false },
  { src: img4, caption: "1 Bed: Bedroom View 3", type: "1 Bedroom", furnished: false },
  { src: img5, caption: "1 Bed: Hallway View 1", type: "1 Bedroom", furnished: false },
  { src: img6, caption: "1 Bed: Hallway View 2", type: "1 Bedroom", furnished: false },
  { src: img7, caption: "1 Bed: Bedroom View 1", type: "1 Bedroom", furnished: false },
  { src: img8, caption: "1 Bed: Kitchen View 1", type: "1 Bedroom", furnished: false },
  { src: img9, caption: "1 Bed: Kitchen View 2", type: "1 Bedroom", furnished: false },
  { src: img10, caption: "1 Bed: Kitchen View 3", type: "1 Bedroom", furnished: false },
  { src: img11, caption: "1 Bed: Bathroom", type: "1 Bedroom", furnished: false },
  { src: furnished1Bed1, caption: "1 Bed: Living Area Furnished", type: "1 Bedroom", furnished: true },
  { src: furnished1Bed2, caption: "1 Bed: Bedroom Furnished", type: "1 Bedroom", furnished: true },

  // 2 Bedroom
  { src: img12, caption: "2 Bed: Living Area View 1", type: "2 Bedroom", furnished: false },
  { src: img13, caption: "2 Bed: Living Area View 2", type: "2 Bedroom", furnished: false },
  { src: img14, caption: "2 Bed: 1st Bedroom View 1", type: "2 Bedroom", furnished: false },
  { src: img15, caption: "2 Bed: 1st Bedroom View 2", type: "2 Bedroom", furnished: false },
  { src: img16, caption: "2 Bed: 2nd Bedroom View 1", type: "2 Bedroom", furnished: false },
  { src: img17, caption: "2 Bed: 2nd Bedroom View 2", type: "2 Bedroom", furnished: false },
  { src: img18, caption: "2 Bed: Kitchen View 1", type: "2 Bedroom", furnished: false },
  { src: img19, caption: "2 Bed: Kitchen View 2", type: "2 Bedroom", furnished: false },
  { src: img20, caption: "2 Bed: Balcony View 1", type: "2 Bedroom", furnished: false },
  { src: img21, caption: "2 Bed: Balcony View 2", type: "2 Bedroom", furnished: false },
  { src: img22, caption: "2 Bed: Balcony View 3", type: "2 Bedroom", furnished: false },
  { src: img23, caption: "2 Bed: Balcony View 4", type: "2 Bedroom", furnished: false },
  { src: img24, caption: "2 Bed: Hallway", type: "2 Bedroom", furnished: false },
  { src: img25, caption: "2 Bed: Bathroom", type: "2 Bedroom", furnished: false },
  { src: furnished2Bed1, caption: "2 Bed: Bedroom Furnished", type: "2 Bedroom", furnished: true },
  { src: furnished2Bed2, caption: "2 Bed: Living Area Furnished", type: "2 Bedroom", furnished: true },

  // 3 Bedroom
  { src: img26, caption: "3 Bed: Living Area View 1", type: "3 Bedroom", furnished: false },
  { src: img27, caption: "3 Bed: Living Area View 2", type: "3 Bedroom", furnished: false },
  { src: img28, caption: "3 Bed: 1st Bedroom View 1", type: "3 Bedroom", furnished: false },
  { src: img29, caption: "3 Bed: 1st Bedroom View 2", type: "3 Bedroom", furnished: false },
  { src: img30, caption: "3 Bed: 1st Bedroom View 3", type: "3 Bedroom", furnished: false },
  { src: img31, caption: "3 Bed: 2nd Bedroom View 1", type: "3 Bedroom", furnished: false },
  { src: img32, caption: "3 Bed: 2nd Bedroom View 2", type: "3 Bedroom", furnished: false },
  { src: img33, caption: "3 Bed: 3rd Bedroom View 1", type: "3 Bedroom", furnished: false },
  { src: img34, caption: "3 Bed: 3rd Bedroom View 2", type: "3 Bedroom", furnished: false },
  { src: img35, caption: "3 Bed: Kitchen View 1", type: "3 Bedroom", furnished: false },
  { src: img36, caption: "3 Bed: Kitchen View 2", type: "3 Bedroom", furnished: false },
  { src: img37, caption: "3 Bed: Balcony View 1", type: "3 Bedroom", furnished: false },
  { src: img38, caption: "3 Bed: Balcony View 2", type: "3 Bedroom", furnished: false },
  { src: furnished3Bed1, caption: "2 Bed: Bedroom Furnished", type: "3 Bedroom", furnished: true },
  { src: furnished3Bed2, caption: "2 Bed: Living Area Furnished", type: "3 Bedroom", furnished: true },

  // Studio
  { src: furnishedStudio1, caption: "Studio: Living Area Furnished", type: "Studio", furnished: true },

  // 4 Bedroom
  { src: furnished4Bed1, caption: "4 Bed: Bedroom", type: "4 Bedroom", furnished: false },
];



// Sample units data
const unitsData = [
  { type: 'Studio', size: '530-614 pi²', price: '$1,245 / month', img: furnishedStudio1 },
  { type: '1 Bedroom', size: '682-920 pi²', price: '$1,395 / month', img: furnished1Bed2 },
  { type: '2 Bedroom', size: '933-971 pi²', price: '$1,645 / month', img: furnished2Bed1 },
  { type: '3 Bedroom', size: '1194-1432 pi²', price: '$1,895 / month', img: furnished3Bed2 },
  { type: '4 Bedroom', size: '1430 pi²', price: '$2,145 / month', img: furnished4Bed1 },
];


function Radisson() {
  const navigate = useNavigate();

  // States
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [viewMode, setViewMode] = useState("cards");

  const slides = [
    { image: outside1, title: "Building View: Radisson" },
    { image: furnished1Bed1, title: "Spacious & Bright Interiors" },
    { image: furnished1Bed2, title: "Prime Location in Montreal" },
    { image: furnished2Bed1, title: "Designed for Comfort" },
    { image: furnishedStudio1, title: "Modern Living at Radisson" },
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

  // Contact leasing agent function
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


  // Open apply modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
  <>
    {/* Header outside app-container */}
    <header className="header">
      <div className="header-left">
        {/* Desktop links */}
        <div className="desktop-links">
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
          <button className="nav-header-link" onClick={() => navigate('/gallery')}>Gallery</button>
          <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -150)}>Available Units</button>
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
            alt="Radisson Logo"
          />
          <span>Radisson</span>
        </div>
      </div>

      <div className="header-right">
        {/* Desktop buttons */}
        <div className="desktop-buttons">
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
          <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
          <button className="nav-header-link" onClick={() => navigate('/fr')}>FR</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
        <button className="nav-header-link" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Available Units</button>
        {/* Mobile contact toggle lives INSIDE the mobile menu */}
        <button
          className="nav-header-link"
          onClick={toggleMobileDropdown}
          aria-expanded={showMobileDropdown}
          aria-controls="contact-mobile"
        >
          Contact Leasing Agent
        </button>
        {showMobileDropdown && (
          <div id="contact-mobile" className="contact-dropdown contact-dropdown--mobile">
            <p><strong>Phone:</strong> <a href="tel:5145037171">514-503-7171</a></p>
            <p>
              <strong>Email:</strong>{' '}
              <button onClick={handleEmailClick} className="email-link">
                location@radissonapartments.ca
              </button>
            </p>
          </div>
        )}
        <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
        <button className="nav-header-link" onClick={() => navigate('/fr')}>FR</button>
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
              <img src={furnished2Bed2} alt="Beautiful unit at Radisson" />
            </div>
            <div className="hero-text">
              <h1>Welcome To <br/>Radisson Gardens<br /></h1>
              <p>Affordable Living, Great Location, Complete Comfort.</p>
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
                src={outside1}
                alt="Radisson Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>About Radisson</h2>
              <p>
                Welcome to <strong>Radisson Apartments</strong>, located at 2, 4, 6, 8, and 10 Radisson St in Gatineau.  
                These affordable apartments offer spacious layouts, inclusive utilities, and a convenient location  
                near universities, public transit, and shopping.
              </p>
              <p>
                At <strong>Radisson Apartments</strong>, homes provide bright, inviting spaces  
                where affordable living meets everyday practicality, all in a professionally managed, pet-friendly setting.
              </p>
              <ul className="about-features">
                <li>Affordable and comfortable apartments</li>
                <li>Prime location near Downtown Ottawa and key OC Transpo lines</li>
                <li>Spacious layouts with water, heat, AC, sewer, and trash removal included</li>
                <li>Pet-friendly community</li>
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
          <h2>Amenities Offered With Radisson</h2>

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

              {/* Card 1: Indoor Pool */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: pool })}>
                <img src={poolIcon} alt="Outdoor Pool icon" className="feature-icon" style={{ width: '140px', height: '140px', marginTop: '30px' }}/>
                <h3>Indoor Pool</h3>
                <p>Enjoy a refreshing swim in our outdoor pool, perfect for relaxation and leisure.</p>
              </div>

              {/* Card 2: Gym */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymIcon} alt="Gym icon" className="feature-icon" />
                <h3>Fitness Centre</h3>
                <p>Stay fit and active with our fully equipped on-site gym, available 24/7 for residents.</p>
              </div>

              {/* Card 3: Laundry */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
                <h3>Laundry Room</h3>
                <p>Convenient on-site laundry with modern washers and dryers.</p>
              </div>

              {/* Card 4: Kitchen */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Kitchen", image: img19 })}>
                <img src={kitchenIcon} alt="Kitchen icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Fully Equipped Kitchen</h3>
                <p>Fully equipped kitchen with essential kitchen appliances.</p>
              </div>

              {/* Card 5: Elevator */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: elevator })}>
                <img src={elevatorIcon} alt="BBQ icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Elevator</h3>
                <p>Elevator access to all floors for easy daily living.</p>
              </div>

              {/* Card 6: Air Conditioning */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Air Conditioning", image: ac })}>
                <img src={airConditioningIcon} alt="AC icon" className="feature-icon" />
                <h3>Air Conditioning</h3>
                <p>Comfortable air conditioning to keep your home cool year-round.</p>
              </div>
            </div>
          ) : (
            <div className="features-photos-container">
              {/* Photo View */}
              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: pool })}>
                <img src={pool} alt="Outdoor Pool" className="feature-photo"/>
                <p className="photo-caption">Outdoor Pool</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Kitchen", image: kitchen })}>
                <img src={img19} alt="Kitchen" className="feature-photo"/>
                <p className="photo-caption">Kitchen</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymImage} alt="Fitness Centre" className="feature-photo"/>
                <p className="photo-caption">Fitness Centre</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={laundryImage} alt="Laundry Room" className="feature-photo"/>
                <p className="photo-caption">Laundry Room</p>
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
              <img src={pool} alt="Pool at Radisson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Relax And Unwind In The Indoor Pool</h1>
                <p>Swim anytime in a heated, indoor pool made for year-round relaxation.</p>
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
              <img src={outside2} alt="View at Radisson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Connected Living Near Ottawa</h1>
                <p>
                Nestled in a calm neighborhood with quick access to downtown Ottawa, this location offers seamless convenience to city life while keeping everyday comforts close to home.
                </p>
            </div>
          </div>
        </section>


        {/* Available Units Section*/}
        <section
          ref={unitsRef1}
          className="units-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <h2>Available Units</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4 Bedroom'].map((type) => {
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
              <h2>Discover The Area</h2>
              <p>
                Located in Gatineau’s west end, <strong>Radisson Apartments</strong> offers quick access to the <b>Ottawa River</b>  
                and is just minutes from <b>downtown Ottawa</b>. With cafés, restaurants, and shops nearby,  
                daily essentials are always close at hand. The <b>University of Ottawa</b> is also within a 15-minute drive,  
                making Radisson a perfect blend of comfort, convenience, and location.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="Radisson Map"
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSfkwxTcMgpDVTJkj4jJS93B-x60t5Ceq3lxjR22YWO6PoryVw/viewform?embedded=true"
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

export default Radisson;


// 1. Navigation System
function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        
        // Mobile Menu Cleanup
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// 2. Tab System
function openTab(evt, tabName) {
    // Find parent section
    let section = evt.currentTarget.closest('.page-section');
    
    // Hide all tab content in this section
    let tabContents = section.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active-tab');
    });

    // Deactivate all buttons
    let tabButtons = section.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Activate specific tab and button
    document.getElementById(tabName).classList.add('active-tab');
    evt.currentTarget.classList.add('active');
}

// 3. Mobile Menu Toggle
const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 4. Lightbox (Updated for 9:16 Video Support)
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    
    // Check for image
    const img = element.querySelector('img');
    // Check for video (source tag)
    const videoSource = element.querySelector('source');
    
    // Reset displays
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "none";

    if(img) {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxImg.style.display = "block";
    } 
    else if (videoSource) {
        lightbox.style.display = "block";
        lightboxVideo.src = videoSource.src;
        lightboxVideo.style.display = "block";
        // Optional: Auto play when opening
        lightboxVideo.play().catch(e => console.log("Autoplay blocked"));
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');
    
    lightbox.style.display = "none";
    
    // Pause video when closing so it doesn't keep playing in background
    if(lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    }
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
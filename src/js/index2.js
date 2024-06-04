document.addEventListener('DOMContentLoaded', function() {
    // fade in element
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    // ==========================================

    // carousel feature for cyber project
    var carouselElement = document.getElementById('carouselExampleCaptions2');
    var carouselTextElement = document.getElementById('carouselText2');

    var updateCarouselText = function() {
        var activeItem = carouselElement.querySelector('.carousel-item.active');
        var description = activeItem.getAttribute('data-description');
        carouselTextElement.textContent = description;
    };

    carouselElement.addEventListener('slid.bs.carousel', updateCarouselText);

    // Initialize the text on page load
    updateCarouselText();

    const progressBar = document.querySelector('#progress-bar div');

    window.addEventListener('scroll', function () {
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    });

    new bootstrap.ScrollSpy(document.body, {
        target: '#navbarScroll2',
        offset: 56
    });

});

let currentIndex = 0;
let matches = [];
let currentSearchTerm = '';

function performSearch() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    if (!searchTerm) return;

    if (searchTerm !== currentSearchTerm) {
        currentSearchTerm = searchTerm;
        updateMatches();
        currentIndex = 0;
        if (matches.length > 0) {
            highlightMatches();
            navigateMatches();
        }
    } else {
        navigateMatches();
    }
}

function updateMatches() {
    clearHighlights();
    const elements = document.querySelectorAll('p, label, li');
    const navElement = document.getElementById('navbarScroll2');
    const form = document.querySelector('form[role="search"]');
    const searchInput = document.getElementById('search-input');

    matches = [];
    const regex = new RegExp(currentSearchTerm, 'ig'); // Match any substring, not just whole words
    elements.forEach(element => {
        if (!navElement.contains(element)) {
            const text = element.textContent.toLowerCase();
            let match;
            while ((match = regex.exec(text)) !== null) {
                matches.push({ element, startIndex: match.index, length: currentSearchTerm.length });
            }
        }
    });

    // If no matches are found, display the popover message
    if (matches.length === 0) {
        let messageElement = document.getElementById('no-match-popover');
        
        // Create the span for the popover if it doesn't exist
        if (!messageElement) {
            messageElement = document.createElement('span');
            messageElement.id = 'no-match-popover';
            messageElement.className = 'd-inline-block';
            messageElement.tabIndex = 0;
            form.insertBefore(messageElement, searchInput.nextSibling);
        }

        messageElement.setAttribute('data-bs-toggle', 'popover');
        messageElement.setAttribute('data-bs-trigger', 'manual');
        messageElement.setAttribute('data-bs-content', 'Word Not Found in the searchbar');
        messageElement.setAttribute('data-bs-placement', 'bottom');
        messageElement.style.display = 'inline-block';
        messageElement.style.position = 'absolute';
        messageElement.style.marginLeft = '15%';
        messageElement.style.marginTop = '2.5%';

        const popover = new bootstrap.Popover(messageElement);
        popover.show();

        // Hide the popover after a delay
        setTimeout(() => {
            popover.hide();
        }, 3000);
    }
}

function clearHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize(); // Combine adjacent text nodes
    });
    matches = [];

    const messageElement = document.getElementById('no-match-message');
    if (messageElement) {
        messageElement.remove();
    }
}

function highlightMatches() {
    matches.forEach(match => {
        const { element, startIndex, length } = match;
        const text = element.textContent;

        // Split the text into three parts: before, match, after
        const beforeText = text.slice(0, startIndex);
        const matchedText = text.slice(startIndex, startIndex + length);
        const afterText = text.slice(startIndex + length);

        // Clear the element content
        element.textContent = '';

        // Append new nodes
        element.appendChild(document.createTextNode(beforeText));
        
        const span = document.createElement('span');
        span.className = 'highlight';
        span.textContent = matchedText;
        element.appendChild(span);
        
        element.appendChild(document.createTextNode(afterText));
    });
}

function navigateMatches() {
    if (matches.length === 0) return;

    const currentHighlightedElement = document.querySelector('.highlight.selected');
    if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove('selected');
        currentHighlightedElement.style.outline = '';
    }
    
    const nextIndex = (currentIndex + 1) % matches.length;
    const nextMatch = matches[nextIndex];
    const nextHighlightedElement = nextMatch.element.querySelector('.highlight');

    nextHighlightedElement.classList.add('selected');
    nextHighlightedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nextHighlightedElement.style.outline = '2px solid red';

    currentIndex = nextIndex;
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    clearHighlights();
    currentSearchTerm = '';
    currentIndex = 0;
}

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

document.getElementById('clear-btn').addEventListener('click', clearSearch);
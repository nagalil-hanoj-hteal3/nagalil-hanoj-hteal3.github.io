document.addEventListener('DOMContentLoaded', function() {
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
        // else {
        //     showPopover();
        // }
    } else {
        navigateMatches();
    }
}

function updateMatches() {
    clearHighlights();
    const elements = document.querySelectorAll('p, label, li');
    matches = [];
    const regex = new RegExp(currentSearchTerm, 'ig'); // Match any substring, not just whole words
    elements.forEach(element => {
        const text = element.textContent.toLowerCase();
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push({ element, startIndex: match.index, length: currentSearchTerm.length });
        }
    });
}

function clearHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize(); // Combine adjacent text nodes
    });
    matches = [];
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

// function showPopover() {
//     const popoverButton = document.getElementById('popover-btn');
//     $(popoverButton).popover('show');
//     setTimeout(() => {
//         $(popoverButton).popover('hide');
//     }, 2000);
// }

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

document.getElementById('clear-btn').addEventListener('click', clearSearch);
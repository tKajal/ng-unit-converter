export const BLOGS = [
    {
        uid: 1,
        id: 'why-use-rem-over-px',
        title: 'Why Use REM Over PX in Modern Web Design?',
        date: 'April 12, 2025',
        author: 'Admin',
        excerpt:
            'Learn why REM units are better for accessibility and responsive design in modern websites.',
        readTime: '3 min read',
        content: [
            'Choosing the right CSS unit is a critical decision in modern web development. While PX has been widely used, REM offers better scalability and accessibility.',
            'PX is an absolute unit that does not adapt well to user preferences or different screen sizes, making layouts harder to maintain.',
            'REM stands for Root EM and is relative to the root html font size. This allows entire layouts to scale by changing just one value.',
            'REM improves accessibility because it respects browser font-size settings, which helps visually impaired users.',
            'For modern applications, especially Angular and React projects, REM should be the default choice for typography and spacing.',
            'PX can still be used for borders, icons, and precise visual elements, but layout and text should rely on REM.'
        ]
    },
    {
        uid: 2,
        id: 'em-vs-rem',
        title: 'Understanding EM vs REM – Which One to Use?',
        date: 'April 10, 2025',
        author: 'Admin',
        excerpt:
            'A deep dive into how EM and REM behave differently and how to choose the right one.',
        readTime: '3 min read',
        content: [
            'EM units are relative to the parent element, which can cause compounding issues.',
            'REM units are always relative to the root element, making them predictable.',
            'Use EM for small components and REM for global layout and typography.'
        ]
    },
    {
        uid: 3,
        id: 'px-to-percent',
        title: 'Converting PX to Percent: A Practical Guide',
        date: 'April 8, 2025',
        author: 'Admin',
        excerpt:
            'Explore use cases for percentage units in CSS and how to convert them from pixel-based layouts.',
        readTime: '3 min read',
        content: [
            'Percentage units are useful for fluid layouts.',
            'They depend on parent container dimensions.',
            'Using percentages helps create flexible grid systems.'
        ]
    }
];

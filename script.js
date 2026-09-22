/* =========================================================
   PORTFOLIO DATA
   ========================================================= */

const samples = [
    {
        section: "Visual Editing",
        title: "Mulan Video Edit",
        description:
            "Made with After Effects. Uses film grain, flicker, and low FPS to create a nostalgic vibe.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229021189",
        width: 3,
        height: 4,
        alt: "Mulan Video Edit",
        placeholder: false,
        order: 1
    },

    {
        section: "Visual Editing",
        title: "Visual Editing Project 02",
        description: "Add your project description here.",
        mediaType: "video",
        media: "videos/visual-editing-02.mp4",
        cover: "images/visual-editing-02-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Visual editing project",
        placeholder: true,
        order: 2
    },

    {
        section: "Film",
        title: "Film Project 01",
        description: "Add your project description here.",
        mediaType: "video",
        media: "videos/film-01.mp4",
        cover: "images/film-01-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Film project",
        placeholder: true,
        order: 1
    },

    {
        section: "Motion",
        title: "Motion Project 01",
        description: "Add your project description here.",
        mediaType: "video",
        media: "videos/motion-01.mp4",
        cover: "images/motion-01-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Motion graphics project",
        placeholder: true,
        order: 1
    },

    {
        section: "Art & Illustration",
        title: "Art Project 01",
        description: "Add your project description here.",
        mediaType: "image",
        media: "images/art-01.jpg",
        width: 1200,
        height: 1500,
        alt: "Art and illustration project",
        placeholder: true,
        order: 1
    },

    {
        section: "Web & Interface",
        title: "Web Project 01",
        description: "Add your project description here.",
        mediaType: "image",
        media: "images/web-01.jpg",
        width: 1600,
        height: 1000,
        alt: "Web design project",
        placeholder: true,
        order: 1
    },

    {
        section: "Graphic Design",
        title: "Graphic Design Project 01",
        description: "Add your project description here.",
        mediaType: "image",
        media: "images/graphic-01.jpg",
        width: 1200,
        height: 1200,
        alt: "Graphic design project",
        placeholder: true,
        order: 1
    },

    {
        section: "Editorial",
        title: "Editorial Project 01",
        description: "Add your project description here.",
        mediaType: "image",
        media: "images/editorial-01.jpg",
        width: 1200,
        height: 1600,
        alt: "Editorial project",
        placeholder: true,
        order: 1
    },

    {
        section: "3D & Spatial",
        title: "3D & Spatial Project 01",
        description: "Add your project description here.",
        mediaType: "image",
        media: "images/3d-01.jpg",
        width: 1600,
        height: 1000,
        alt: "3D and spatial project",
        placeholder: true,
        order: 1
    }
];


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   VIMEO
   ========================================================= */

function createVimeoEmbedURL(url) {
    try {
        const parsedURL = new URL(url);

        const match = parsedURL.pathname.match(/\/(\d+)(?:\/)?$/);

        if (!match) {
            return url;
        }

        const videoID = match[1];

        return `https://player.vimeo.com/video/${videoID}?title=0&byline=0&portrait=0&dnt=1`;
    } catch (error) {
        return url;
    }
}


/* =========================================================
   MEDIA
   ========================================================= */

function createMediaHTML(sample) {
    const mediaType = sample.mediaType || "image";

    if (sample.placeholder) {
        return `
            <div class="media-placeholder">
                <div class="placeholder-type">
                    ${escapeHTML(mediaType)}
                </div>

                <div class="placeholder-title">
                    ${escapeHTML(sample.title)}
                </div>

                <div class="placeholder-path">
                    ${escapeHTML(sample.media || "Media coming soon")}
                </div>
            </div>
        `;
    }

    if (mediaType === "vimeo") {
        const embedURL = createVimeoEmbedURL(sample.media);

        return `
            <iframe
                class="vimeo-video"
                src="${escapeHTML(embedURL)}"
                title="${escapeHTML(sample.title)}"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
    }

    if (mediaType === "video") {
        return `
            <video
                class="portfolio-video"
                controls
                playsinline
                preload="metadata"
                ${sample.cover ? `poster="${escapeHTML(sample.cover)}"` : ""}
            >
                <source
                    src="${escapeHTML(sample.media)}"
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
        `;
    }

    return `
        <img
            src="${escapeHTML(sample.media)}"
            alt="${escapeHTML(sample.alt || sample.title)}"
            loading="lazy"
        >
    `;
}


/* =========================================================
   CREATE SAMPLE
   ========================================================= */

function createSampleHTML(sample, index) {
    /*
       Get the real aspect ratio from the project's
       width and height.

       Example:
       3 / 4 = 0.75

       We then calculate the largest possible size
       where BOTH dimensions stay at or below 600px.

       3:4 -> 450 x 600
       1:1 -> 600 x 600
       16:9 -> 600 x 337.5
    */

    const width = Number(sample.width) || 16;
    const height = Number(sample.height) || 9;

    const ratio = width / height;

    let maxMediaWidth;
    let maxMediaHeight;

    if (ratio >= 1) {
        maxMediaWidth = 600;
        maxMediaHeight = 600 / ratio;
    } else {
        maxMediaHeight = 600;
        maxMediaWidth = 600 * ratio;
    }

    return `
        <article
            class="sample ${index === 0 ? "active" : ""}"
            data-sample
            style="
                --media-ratio: ${ratio};
                --media-max-width: ${maxMediaWidth}px;
                --media-max-height: ${maxMediaHeight}px;
            "
        >

            <div class="media-frame">

                <div class="media-content">
                    ${createMediaHTML(sample)}

                    <div class="media-record">
                        <span class="media-record-dot"></span>
                        <span>REC</span>
                    </div>
                </div>

            </div>

            <div class="sample-info">
                <div class="sample-title">
                    ${escapeHTML(sample.title)}
                </div>

                <div class="sample-description">
                    ${escapeHTML(sample.description)}
                </div>
            </div>

        </article>
    `;
}


/* =========================================================
   GROUP SAMPLES BY SECTION
   ========================================================= */

function groupSamplesBySection() {
    const grouped = {};

    samples
        .slice()
        .sort((a, b) => {
            return (a.order || 0) - (b.order || 0);
        })
        .forEach((sample) => {
            if (!grouped[sample.section]) {
                grouped[sample.section] = [];
            }

            grouped[sample.section].push(sample);
        });

    return grouped;
}


/* =========================================================
   CREATE PORTFOLIO
   ========================================================= */

function createPortfolio() {
    const portfolio = document.getElementById("portfolio");

    if (!portfolio) {
        return;
    }

    const grouped = groupSamplesBySection();

    const sections = Object.entries(grouped);

    portfolio.innerHTML = sections
        .map(([sectionName, sectionSamples], sectionIndex) => {
            const sectionNumber = String(sectionIndex + 1).padStart(2, "0");

            const samplesHTML = sectionSamples
                .map((sample, index) => {
                    return createSampleHTML(sample, index);
                })
                .join("");

            return `
                <section class="work-section">

                    <div class="work-background-title">
                        ${escapeHTML(sectionName)}
                    </div>

                    <div class="container">

                        <div class="work-heading">

                            <div class="work-heading-inner">

                                <span class="work-number">
                                    ${sectionNumber}
                                </span>

                                <h3>
                                    ${escapeHTML(sectionName)}
                                </h3>

                            </div>

                        </div>

                    </div>


                    <div
                        class="carousel"
                        data-carousel
                    >
                        ${samplesHTML}
                    </div>


                    <div class="container">

                        <div class="carousel-controls">

                            <div class="controls-row">

                                <button
                                    class="carousel-button"
                                    type="button"
                                    data-prev
                                    aria-label="Previous project"
                                >
                                    ←
                                </button>

                                <div class="progress-track">
                                    <div
                                        class="progress-fill"
                                        data-progress-fill
                                    ></div>

                                    <div
                                        class="progress-marker"
                                        data-progress-marker
                                    ></div>
                                </div>

                                <button
                                    class="carousel-button"
                                    type="button"
                                    data-next
                                    aria-label="Next project"
                                >
                                    →
                                </button>

                            </div>

                            <div class="carousel-meta">

                                <span>
                                    <span data-current>01</span>
                                    /
                                    <span data-total>
                                        ${String(sectionSamples.length).padStart(2, "0")}
                                    </span>
                                </span>

                                <span>
                                    ${escapeHTML(sectionName)}
                                </span>

                            </div>

                        </div>

                    </div>

                </section>
            `;
        })
        .join("");

    initializeCarousels();
}


/* =========================================================
   CAROUSELS
   ========================================================= */

function initializeCarousels() {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach((carousel) => {
        const samplesInCarousel =
            carousel.querySelectorAll("[data-sample]");

        const section = carousel.closest(".work-section");

        if (!section || !samplesInCarousel.length) {
            return;
        }

        const previousButton =
            section.querySelector("[data-prev]");

        const nextButton =
            section.querySelector("[data-next]");

        const currentDisplay =
            section.querySelector("[data-current]");

        const progressFill =
            section.querySelector("[data-progress-fill]");

        const progressMarker =
            section.querySelector("[data-progress-marker]");


        function getClosestSampleIndex() {
            const carouselRect = carousel.getBoundingClientRect();

            const carouselCenter =
                carouselRect.left + carouselRect.width / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            samplesInCarousel.forEach((sample, index) => {
                const rect = sample.getBoundingClientRect();

                const sampleCenter =
                    rect.left + rect.width / 2;

                const distance =
                    Math.abs(sampleCenter - carouselCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            return closestIndex;
        }


        function updateActiveSample() {
            const activeIndex = getClosestSampleIndex();

            samplesInCarousel.forEach((sample, index) => {
                sample.classList.toggle(
                    "active",
                    index === activeIndex
                );
            });

            if (currentDisplay) {
                currentDisplay.textContent =
                    String(activeIndex + 1).padStart(2, "0");
            }

            const total = samplesInCarousel.length;

            const progress =
                total <= 1
                    ? 100
                    : (activeIndex / (total - 1)) * 100;

            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }

            if (progressMarker) {
                progressMarker.style.left = `${progress}%`;
            }
        }


        function scrollToSample(index) {
            if (!samplesInCarousel[index]) {
                return;
            }

            samplesInCarousel[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }


        previousButton?.addEventListener("click", () => {
            const currentIndex = getClosestSampleIndex();

            const nextIndex =
                Math.max(currentIndex - 1, 0);

            scrollToSample(nextIndex);
        });


        nextButton?.addEventListener("click", () => {
            const currentIndex = getClosestSampleIndex();

            const nextIndex =
                Math.min(
                    currentIndex + 1,
                    samplesInCarousel.length - 1
                );

            scrollToSample(nextIndex);
        });


        let scrollTimeout;

        carousel.addEventListener(
            "scroll",
            () => {
                clearTimeout(scrollTimeout);

                scrollTimeout = setTimeout(() => {
                    updateActiveSample();
                }, 80);
            },
            { passive: true }
        );


        window.addEventListener("resize", updateActiveSample);


        updateActiveSample();
    });
}


/* =========================================================
   YEAR
   ========================================================= */

function updateYear() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    createPortfolio();
    updateYear();
});

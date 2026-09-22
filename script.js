/* =========================================================
   PEASLEE STUDIO PORTFOLIO
   =========================================================

   THIS FILE CONTROLS YOUR PORTFOLIO PROJECTS.

   TO ADD YOUR REAL WORK:

   IMAGES:
   mediaType: "image"
   media: "images/my-image.jpg"

   VIMEO:
   mediaType: "vimeo"
   media: "https://vimeo.com/123456789"

   LOCAL VIDEO:
   mediaType: "video"
   media: "videos/my-video.mp4"

   The width and height should match the original
   dimensions of your media so the portfolio can
   preserve the correct aspect ratio.

   ========================================================= */


/* =========================================================
   PORTFOLIO PROJECTS
   ========================================================= */

const samples = [

    /* =====================================================
       01 — VISUAL EDITING
       ===================================================== */

    {
        section: "Visual Editing",
        title: "Mulan",
        description: "Made with After Effects. Uses film grain, flicker, and low FPS to create a nostalgic vibe.",
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
        title: "Poster Presentation Teaser",
        description: "Made with After Effects. A teaser video played to introduce a poster on display about Korean typography.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229044900",
        width: 9,
        height: 16,
        alt: "Poster Presentation Teaser",
        placeholder: false,
        order: 2
    },
   {
        section: "Visual Editing",
        title: "Anne with an E",
        description: "Made with After Effects. Typography practice.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229046371",
        width: 16,
        height: 9,
        alt: "Anne with an E",
        placeholder: false,
        order: 3
    },
   {
        section: "Visual Editing",
        title: "Toph, Avatar the Last Airbender",
        description: "Made with After Effects. Twixtor and shake experimentation.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229040215",
        width: 4,
        height: 3,
        alt: "Toph Video Edit",
        placeholder: false,
        order: 4
    },
   {
        section: "Visual Editing",
        title: "Renee, All for the Game",
        description: "Made with After Effects. Practicing working with static images.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229041072",
        width: 1,
        height: 1,
        alt: "Renee, All for the Game",
        placeholder: false,
        order: 5
    },
   {
        section: "Visual Editing",
        title: "Technoblade",
        description: "Made with After Effects. Focused on heavy-hitting transitions to reduce the static feeling of each image.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229041735",
        width: 3,
        height: 4,
        alt: "Technoblade",
        placeholder: false,
        order: 6
    },


    /* =====================================================
       02 — FILM
       ===================================================== */

    {
        section: "Film",
        title: "Film Project",
        description: "Add a short description of this film project.",
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
        section: "Film",
        title: "Film Project 02",
        description: "Add a short description of this film project.",
        mediaType: "video",
        media: "videos/film-02.mp4",
        cover: "images/film-02-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Film project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       03 — MOTION
       ===================================================== */

    {
        section: "Motion",
        title: "Motion Graphics Project",
        description: "Add a short description of this motion project.",
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
        section: "Motion",
        title: "Motion Project 02",
        description: "Add a short description of this animation.",
        mediaType: "video",
        media: "videos/motion-02.mp4",
        cover: "images/motion-02-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Motion graphics project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       04 — ART & ILLUSTRATION
       ===================================================== */

    {
        section: "Art & Illustration",
        title: "Illustration Project",
        description: "Add a short description of this artwork.",
        mediaType: "image",
        media: "images/art-01.jpg",
        width: 1600,
        height: 1200,
        alt: "Art and illustration project",
        placeholder: true,
        order: 1
    },

    {
        section: "Art & Illustration",
        title: "Artwork Project 02",
        description: "Add a short description of this artwork.",
        mediaType: "image",
        media: "images/art-02.jpg",
        width: 1600,
        height: 1200,
        alt: "Art and illustration project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       05 — WEB & INTERFACE
       ===================================================== */

    {
        section: "Web & Interface",
        title: "Web Design Project",
        description: "Add a short description of this web or interface project.",
        mediaType: "image",
        media: "images/web-01.jpg",
        width: 1600,
        height: 1000,
        alt: "Web design project",
        placeholder: true,
        order: 1
    },

    {
        section: "Web & Interface",
        title: "Interface Project 02",
        description: "Add a short description of this interface project.",
        mediaType: "image",
        media: "images/web-02.jpg",
        width: 1600,
        height: 1000,
        alt: "Interface design project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       06 — GRAPHIC DESIGN
       ===================================================== */

    {
        section: "Graphic Design",
        title: "Graphic Design Project",
        description: "Add a short description of this graphic design project.",
        mediaType: "image",
        media: "images/graphic-design-01.jpg",
        width: 1600,
        height: 1200,
        alt: "Graphic design project",
        placeholder: true,
        order: 1
    },

    {
        section: "Graphic Design",
        title: "Graphic Design Project 02",
        description: "Add a short description of this graphic design project.",
        mediaType: "image",
        media: "images/graphic-design-02.jpg",
        width: 1600,
        height: 1200,
        alt: "Graphic design project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       07 — EDITORIAL
       ===================================================== */

    {
        section: "Editorial",
        title: "Editorial Project",
        description: "Add a short description of this editorial project.",
        mediaType: "image",
        media: "images/editorial-01.jpg",
        width: 1600,
        height: 1200,
        alt: "Editorial design project",
        placeholder: true,
        order: 1
    },

    {
        section: "Editorial",
        title: "Editorial Project 02",
        description: "Add a short description of this editorial project.",
        mediaType: "image",
        media: "images/editorial-02.jpg",
        width: 1600,
        height: 1200,
        alt: "Editorial design project",
        placeholder: true,
        order: 2
    },


    /* =====================================================
       08 — 3D & SPATIAL
       ===================================================== */

    {
        section: "3D & Spatial",
        title: "3D & Spatial Project",
        description: "Add a short description of this 3D or spatial project.",
        mediaType: "image",
        media: "images/3d-spatial-01.jpg",
        width: 1600,
        height: 1200,
        alt: "3D and spatial design project",
        placeholder: true,
        order: 1
    },

    {
        section: "3D & Spatial",
        title: "Spatial Project 02",
        description: "Add a short description of this spatial project.",
        mediaType: "image",
        media: "images/3d-spatial-02.jpg",
        width: 1600,
        height: 1200,
        alt: "3D and spatial design project",
        placeholder: true,
        order: 2
    }

];


/* =========================================================
   SECTION ORDER
   ========================================================= */

const sectionOrder = [
    "Visual Editing",
    "Film",
    "Motion",
    "Art & Illustration",
    "Web & Interface",
    "Graphic Design",
    "Editorial",
    "3D & Spatial"
];


/* =========================================================
   GENERATE PORTFOLIO
   ========================================================= */

const portfolio = document.getElementById("portfolio");


function createPortfolio() {

    portfolio.innerHTML = "";

    sectionOrder.forEach((sectionName, sectionIndex) => {

        const sectionSamples = samples
            .filter(sample => sample.section === sectionName)
            .sort((a, b) => a.order - b.order);


        /*
         * If a section has no projects, don't display it.
         */

        if (sectionSamples.length === 0) {
            return;
        }


        const section = document.createElement("section");

        section.className = "work-section";


        section.innerHTML = `

            <div class="work-background-title">
                ${escapeHTML(sectionName)}
            </div>


            <div class="container">

                <div class="work-heading">

                    <div class="work-heading-inner">

                        <span class="work-number">
                            ${String(sectionIndex + 1).padStart(2, "0")}
                        </span>

                        <h3>
                            ${escapeHTML(sectionName)}
                        </h3>

                    </div>

                </div>

            </div>


            <div
                class="carousel"
                data-section="${escapeAttribute(sectionName)}"
            >

                ${sectionSamples
                    .map((sample, index) =>
                        createSampleHTML(sample, index)
                    )
                    .join("")}

            </div>


            <div class="container">

                <div class="carousel-controls">

                    <div class="controls-row">

                        <button
                            class="carousel-button previous-button"
                            type="button"
                            aria-label="Previous sample"
                        >
                            ◀
                        </button>


                        <div class="progress-track">

                            <div class="progress-fill"></div>

                            <div class="progress-marker"></div>

                        </div>


                        <button
                            class="carousel-button next-button"
                            type="button"
                            aria-label="Next sample"
                        >
                            ▶
                        </button>

                    </div>


                    <div class="carousel-meta">

                        <span class="carousel-counter">
                            01 / ${String(sectionSamples.length).padStart(2, "0")}
                        </span>

                        <span>
                            ${escapeHTML(sectionName)}
                        </span>

                    </div>

                </div>

            </div>

        `;


        portfolio.appendChild(section);

        initializeCarousel(section);

    });

}


/* =========================================================
   CREATE SAMPLE
   ========================================================= */

function createSampleHTML(sample, index) {

    const activeClass =
        index === 0 ? "active" : "";


    const aspectRatio =
        sample.width && sample.height
            ? `${sample.width} / ${sample.height}`
            : "16 / 9";


    let mediaHTML;


    /* =====================================================
       PLACEHOLDER
       ===================================================== */

    if (sample.placeholder) {

        const placeholderType =
            sample.mediaType === "vimeo"
                ? "VIMEO"
                : sample.mediaType === "video"
                    ? "VIDEO"
                    : "IMAGE";


        mediaHTML = `

            <div
                class="media-content"
                style="aspect-ratio: ${aspectRatio};"
            >

                <div class="media-placeholder">

                    <div class="placeholder-type">
                        ${placeholderType}
                    </div>

                    <div class="placeholder-title">
                        ADD MEDIA HERE
                    </div>

                    <div class="placeholder-path">
                        ${escapeHTML(sample.media)}
                    </div>

                </div>

            </div>

        `;

    }


    /* =====================================================
       IMAGE
       ===================================================== */

    else if (sample.mediaType === "image") {

        mediaHTML = `

            <div
                class="media-content"
                style="aspect-ratio: ${aspectRatio};"
            >

                <img
                    src="${escapeAttribute(sample.media)}"
                    alt="${escapeAttribute(sample.alt || sample.title)}"
                    loading="lazy"
                >

            </div>

        `;

    }


    /* =====================================================
       VIMEO VIDEO
       ===================================================== */

    else if (sample.mediaType === "vimeo") {

        const vimeoURL =
            createVimeoEmbedURL(sample.media);


        mediaHTML = `

            <div
                class="media-content"
                style="aspect-ratio: ${aspectRatio};"
            >

                <iframe
                    class="vimeo-video"
                    src="${escapeAttribute(vimeoURL)}"
                    title="${escapeAttribute(sample.title)}"
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                ></iframe>

            </div>

        `;

    }


    /* =====================================================
       LOCAL VIDEO FILE
       ===================================================== */

    else {

        const poster =
            sample.cover
                ? `poster="${escapeAttribute(sample.cover)}"`
                : "";


        mediaHTML = `

            <div
                class="media-content"
                style="aspect-ratio: ${aspectRatio};"
            >

                <video
                    class="portfolio-video"
                    src="${escapeAttribute(sample.media)}"
                    ${poster}
                    preload="metadata"
                    playsinline
                    controls
                ></video>

            </div>

        `;

    }


    return `

        <article
            class="sample ${activeClass}"
            data-sample
        >

            <div class="media-frame">

                ${
                    index === 0
                        ? `
                            <div class="media-record">
                                <span class="media-record-dot"></span>
                                REC
                            </div>
                        `
                        : ""
                }


                ${mediaHTML}

            </div>


            <div class="sample-info">

                <h4 class="sample-title">
                    ${escapeHTML(sample.title)}
                </h4>

                <p class="sample-description">
                    ${escapeHTML(sample.description || "")}
                </p>

            </div>

        </article>

    `;

}


/* =========================================================
   VIMEO URL
   =========================================================

   Accepts:

   https://vimeo.com/123456789

   and converts it into:

   https://player.vimeo.com/video/123456789
   ========================================================= */

function createVimeoEmbedURL(urlString) {

    try {

        const url =
            new URL(urlString);


        /*
         * Extract the numeric Vimeo video ID.
         */

        const pathParts =
            url.pathname
                .split("/")
                .filter(Boolean);


        /*
         * The video ID is the last numeric-looking
         * part of the URL.
         */

        let videoID = "";


        for (let i = pathParts.length - 1; i >= 0; i--) {

            if (/^\d+$/.test(pathParts[i])) {

                videoID = pathParts[i];

                break;

            }

        }


        if (!videoID) {

            console.error(
                "Could not find Vimeo video ID:",
                urlString
            );

            return urlString;

        }


        /*
         * Vimeo player parameters.
         *
         * title=0
         * Hide video title when supported.
         *
         * byline=0
         * Hide creator information when supported.
         *
         * portrait=0
         * Hide creator avatar when supported.
         *
         * dnt=1
         * Enable Do Not Track mode.
         */

        return (
            `https://player.vimeo.com/video/${videoID}` +
            `?title=0&byline=0&portrait=0&dnt=1`
        );

    } catch (error) {

        console.error(
            "Could not create Vimeo embed URL:",
            urlString
        );


        return urlString;

    }

}


/* =========================================================
   CAROUSEL
   ========================================================= */

function initializeCarousel(section) {

    const carousel =
        section.querySelector(".carousel");


    const samplesInCarousel =
        Array.from(
            carousel.querySelectorAll("[data-sample]")
        );


    const previousButton =
        section.querySelector(".previous-button");


    const nextButton =
        section.querySelector(".next-button");


    const progressFill =
        section.querySelector(".progress-fill");


    const progressMarker =
        section.querySelector(".progress-marker");


    const counter =
        section.querySelector(".carousel-counter");


    if (samplesInCarousel.length === 0) {
        return;
    }


    let activeIndex = 0;


    /*
     * Find which card is closest to the center
     * of the carousel.
     */

    function updateActiveSample() {

        const center =
            carousel.scrollLeft
            + carousel.clientWidth / 2;


        let closestIndex = 0;
        let closestDistance = Infinity;


        samplesInCarousel.forEach(
            (sample, index) => {

                const sampleCenter =
                    sample.offsetLeft
                    + sample.offsetWidth / 2;


                const distance =
                    Math.abs(
                        sampleCenter - center
                    );


                if (distance < closestDistance) {

                    closestDistance = distance;
                    closestIndex = index;

                }

            }
        );


        activeIndex = closestIndex;


        samplesInCarousel.forEach(
            (sample, index) => {

                sample.classList.toggle(
                    "active",
                    index === activeIndex
                );

            }
        );


        updateProgress();

    }


    /*
     * Update progress bar and counter.
     */

    function updateProgress() {

        const progress =
            samplesInCarousel.length > 1
                ? (
                    activeIndex
                    / (samplesInCarousel.length - 1)
                ) * 100
                : 0;


        progressFill.style.width =
            `${progress}%`;


        progressMarker.style.left =
            `${progress}%`;


        counter.textContent =
            `${String(activeIndex + 1).padStart(2, "0")} / ${String(samplesInCarousel.length).padStart(2, "0")}`;

    }


    /*
     * Scroll to a particular sample.
     */

    function goToSample(index) {

        if (index < 0) {
            index = 0;
        }


        if (index >= samplesInCarousel.length) {

            index =
                samplesInCarousel.length - 1;

        }


        const sample =
            samplesInCarousel[index];


        const targetLeft =
            sample.offsetLeft
            - (carousel.clientWidth / 2)
            + (sample.offsetWidth / 2);


        carousel.scrollTo({

            left: targetLeft,

            behavior: "smooth"

        });

    }


    /*
     * Previous button
     */

    previousButton.addEventListener(
        "click",
        () => {

            goToSample(activeIndex - 1);

        }
    );


    /*
     * Next button
     */

    nextButton.addEventListener(
        "click",
        () => {

            goToSample(activeIndex + 1);

        }
    );


    /*
     * Track manual horizontal scrolling.
     */

    carousel.addEventListener(
        "scroll",
        updateActiveSample,
        { passive: true }
    );


    /*
     * Recalculate on window resize.
     */

    window.addEventListener(
        "resize",
        updateActiveSample
    );


    /*
     * Initial state.
     */

    requestAnimationFrame(
        () => {

            updateActiveSample();

        }
    );


    /*
     * Keyboard accessibility.
     */

    carousel.addEventListener(
        "keydown",
        event => {

            if (event.key === "ArrowLeft") {

                goToSample(activeIndex - 1);

            }


            if (event.key === "ArrowRight") {

                goToSample(activeIndex + 1);

            }

        }
    );

}


/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeHTML(value) {

    if (
        value === undefined ||
        value === null
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("current-year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   START SITE
   ========================================================= */

createPortfolio();

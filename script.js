/* =========================================================
   PEASLEE STUDIO PORTFOLIO
   =========================================================

   THIS FILE CONTROLS YOUR PORTFOLIO PROJECTS.

   To add your real work:

   1. Put your image/video in the "images" or "videos" folder.
   2. Find the corresponding project below.
   3. Replace the placeholder information.

   Example:

   media: "videos/my-video.mp4"

   or:

   media: "images/my-image.jpg"

   ========================================================= */


/* =========================================================
   PORTFOLIO PROJECTS
   =========================================================

   Each project has:

   section       = Which portfolio category it belongs to
   title         = Project title
   description   = Short project description
   mediaType     = "image" or "video"
   media         = Path to your image/video
   cover         = Optional video thumbnail/poster
   width         = Original media width
   height        = Original media height
   alt           = Accessibility description
   placeholder   = true while you haven't added the media

   ========================================================= */

const samples = [

    /* =====================================================
       01 — VISUAL EDITING
       ===================================================== */

    {
        section: "Visual Editing",
        title: "Visual Editing Project",
        description: "Add a short description of this editing project.",
        mediaType: "youtube",
        media: "https://youtube.com/shorts/Iq5IKd7Y8oQ?feature=share",
        width: 1080,
        height: 1920,
        alt: "Visual editing project",
        placeholder: false,
        order: 1
    },

    {
        section: "Visual Editing",
        title: "Visual Editing Project 02",
        description: "Add a short description of this editing project.",
        mediaType: "video",
        media: "videos/visual-editing-02.mp4",
        cover: "images/visual-editing-02-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Visual editing project",
        placeholder: true,
        order: 2
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

    const activeClass = index === 0 ? "active" : "";

    const aspectRatio =
        sample.width && sample.height
            ? `${sample.width} / ${sample.height}`
            : "16 / 9";


    let mediaHTML;


    /*
     * PLACEHOLDER
     *
     * This is what you'll see until you replace
     * placeholder: true with placeholder: false.
     */

    if (sample.placeholder) {

        mediaHTML = `

            <div
                class="media-content"
                style="aspect-ratio: ${aspectRatio};"
            >

                <div class="media-placeholder">

                    <div class="placeholder-type">
                        ${sample.mediaType === "video" ? "VIDEO" : "IMAGE"}
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

    /*
     * IMAGE
     */

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
/*
 * YOUTUBE VIDEO
 */

else if (sample.mediaType === "youtube") {

    let youtubeURL = sample.media;

    /*
     * Convert a normal YouTube URL or YouTube Shorts URL
     * into an embeddable YouTube URL.
     */

    try {

        const url = new URL(sample.media);

        let videoID = "";

        /*
         * YouTube Shorts:
         * youtube.com/shorts/VIDEO_ID
         */

        if (url.pathname.startsWith("/shorts/")) {

            videoID =
                url.pathname.split("/shorts/")[1].split("/")[0];

        }

        /*
         * Normal YouTube videos:
         * youtube.com/watch?v=VIDEO_ID
         */

        else if (url.searchParams.get("v")) {

            videoID =
                url.searchParams.get("v");

        }

        /*
         * youtu.be/VIDEO_ID
         */

        else if (url.hostname === "youtu.be") {

            videoID =
                url.pathname.substring(1).split("/")[0];

        }


        if (videoID) {

            youtubeURL =
                `https://www.youtube.com/embed/${videoID}`;

        }

    } catch (error) {

        console.error(
            "Could not convert YouTube URL:",
            sample.media
        );

    }


    mediaHTML = `

        <div
            class="media-content"
            style="aspect-ratio: ${aspectRatio};"
        >

            <iframe
                class="youtube-video"
                src="${escapeAttribute(youtubeURL)}"
                title="${escapeAttribute(sample.title)}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

        </div>

    `;

}


/*
 * REGULAR VIDEO FILE
 */

else {

    const poster = sample.cover
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
   CAROUSEL
   ========================================================= */

function initializeCarousel(section) {

    const carousel = section.querySelector(".carousel");

    const samplesInCarousel =
        Array.from(carousel.querySelectorAll("[data-sample]"));

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
            carousel.scrollLeft + carousel.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;


        samplesInCarousel.forEach((sample, index) => {

            const sampleCenter =
                sample.offsetLeft + sample.offsetWidth / 2;

            const distance =
                Math.abs(sampleCenter - center);


            if (distance < closestDistance) {

                closestDistance = distance;
                closestIndex = index;

            }

        });


        activeIndex = closestIndex;


        samplesInCarousel.forEach((sample, index) => {

            sample.classList.toggle(
                "active",
                index === activeIndex
            );

        });


        updateProgress();

    }


    /*
     * Update progress bar and counter.
     */

    function updateProgress() {

        const progress =
            samplesInCarousel.length > 1
                ? (activeIndex / (samplesInCarousel.length - 1)) * 100
                : 0;


        progressFill.style.width = `${progress}%`;

        progressMarker.style.left = `${progress}%`;


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
            index = samplesInCarousel.length - 1;
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

    previousButton.addEventListener("click", () => {

        goToSample(activeIndex - 1);

    });


    /*
     * Next button
     */

    nextButton.addEventListener("click", () => {

        goToSample(activeIndex + 1);

    });


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
     * Initial state
     */

    requestAnimationFrame(() => {

        /*
         * The first project starts as active.
         */

        updateActiveSample();

    });


    /*
     * Keyboard accessibility.
     */

    carousel.addEventListener("keydown", event => {

        if (event.key === "ArrowLeft") {

            goToSample(activeIndex - 1);

        }

        if (event.key === "ArrowRight") {

            goToSample(activeIndex + 1);

        }

    });

}


/* =========================================================
   VIDEO CONTROLS
   =========================================================

   Recreates the play-button behavior from the original
   React MediaBox component.
   ========================================================= */

function initializeVideos() {

    document
        .querySelectorAll(".video-play-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const mediaContent =
                    button.closest(".media-content");

                const video =
                    mediaContent.querySelector("video");


                if (!video) {
                    return;
                }


                video.play();

                button.style.display = "none";

            });

        });


    /*
     * When the video starts playing, remove the custom
     * play button.
     */

    document
        .querySelectorAll(".portfolio-video")
        .forEach(video => {

            video.addEventListener("play", () => {

                const button =
                    video.parentElement.querySelector(
                        ".video-play-button"
                    );

                if (button) {
                    button.style.display = "none";
                }

            });


            /*
             * If video is paused before ending, bring the
             * play button back.
             */

            video.addEventListener("pause", () => {

                if (!video.ended) {

                    const button =
                        video.parentElement.querySelector(
                            ".video-play-button"
                        );

                    if (button) {
                        button.style.display = "flex";
                    }

                }

            });

        });

}


/* =========================================================
   HTML ESCAPING
   =========================================================

   These functions prevent project titles/descriptions
   from accidentally being interpreted as HTML.
   ========================================================= */

function escapeHTML(value) {

    if (value === undefined || value === null) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

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

initializeVideos();

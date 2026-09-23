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
        width: 2,
        height: 3,
        alt: "Technoblade",
        placeholder: false,
        order: 6
    },


    /* =====================================================
       02 — FILM
       ===================================================== */

    {
        section: "Film",
        title: "The Abuse of Russian Female Figure Skaters",
        description: "Premiere Pro. Full video essay on YouTube. Research, story, script, clip sourcing, arrangement, and editing all done by me.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229042488",
        width: 16,
        height: 9,
        alt: "The Abuse of Russian Female Figure Skaters",
        placeholder: false,
        order: 1
    },

    {
        section: "Film",
        title: "Medica Commercial",
        description: "Made with Premiere Pro. Created during my internship with a healthcare organization.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229046370",
        width: 16,
        height: 9,
        alt: "Medica Commercial",
        placeholder: false,
        order: 2
    },

    {
        section: "Film",
        title: "Lemon Aide Society Promotional Video",
        description: "Promotional video for a girls leadership organization. Made in Premiere Pro.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229272365",
        width: 16,
        height: 9,
        alt: "Lemon Aide Society Promotional Video",
        placeholder: false,
        order: 3
    },

    {
        section: "Film",
        title: "Raina, Title Design",
        description: "Made with Premiere Pro. Title design practice.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229042500",
        width: 16,
        height: 9,
        alt: "Raina, Title Design",
        placeholder: false,
        order: 4
    },


    /* =====================================================
       03 — MOTION
       ===================================================== */

    {
        section: "Motion",
        title: "Medica Icon Animations",
        description: "Medica icons & graphics animated. Made in After Effects.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229045041",
        width: 1,
        height: 1,
        alt: "Medica Icon Animations",
        placeholder: false,
        order: 1
    },

    {
        section: "Motion",
        title: "Do Not Trust the Eraser",
        description: "Poetry type animation. Made in After Effects.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229042307",
        width: 16,
        height: 9,
        alt: "Do not trust the eraser",
        placeholder: false,
        order: 2
    },

    {
        section: "Motion",
        title: "Medica Holiday Video - DRAFT",
        description: "First draft of a concept for Medica's holiday video campaign.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229045083",
        width: 9,
        height: 16,
        alt: "Medica Holiday Video - DRAFT",
        placeholder: false,
        order: 3
    },

    {
        section: "Motion",
        title: "Puppet on Strings",
        description: "Poetry type animation. Made in After Effects.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229042668",
        width: 2,
        height: 3,
        alt: "Puppet on Strings",
        placeholder: false,
        order: 4
    },

    {
        section: "Motion",
        title: "Animation Project",
        description: "Hand drawn animation with effects added during editing.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229043010",
        width: 16,
        height: 9,
        alt: "Animation project",
        placeholder: false,
        order: 5
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
       08 — DIGITAL GAME DESIGN
       ===================================================== */

    {
        section: "Digital Game Design",
        title: "Platformer Game",
        description: "A platformer game created in Unity.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229046618",
        width: 16,
        height: 9,
        alt: "Platformer Game",
        placeholder: false,
        order: 1
    },

    {
        section: "Digital Game Design",
        title: "Jumping Game",
        description: "A jumping game created in Unity.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229046369",
        width: 16,
        height: 9,
        alt: "Jumping Game",
        placeholder: false,
        order: 2
    },

    {
        section: "Digital Game Design",
        title: "Ball Catching Game",
        description: "A ball catching game created in Unity.",
        mediaType: "vimeo",
        media: "https://vimeo.com/1229041912",
        width: 16,
        height: 9,
        alt: "Ball Catching Game",
        placeholder: false,
        order: 3
    },


    /* =====================================================
       09 — 3D & SPATIAL
       ===================================================== */

    {
        section: "3D & Spatial",
        title: "3D Project",
        description: "Add a short description of this spatial design project.",
        mediaType: "image",
        media: "images/spatial-01.jpg",
        width: 1600,
        height: 1200,
        alt: "3D and spatial design project",
        placeholder: true,
        order: 1
    },

    {
        section: "3D & Spatial",
        title: "Spatial Project 02",
        description: "Add a short description of this spatial design project.",
        mediaType: "image",
        media: "images/spatial-02.jpg",
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
    "Digital Game Design",
    "3D & Spatial"
];


/* =========================================================
   CREATE PORTFOLIO
   ========================================================= */

function createPortfolio() {

    const portfolio =
        document.getElementById("portfolio");


    if (!portfolio) {
        return;
    }


    portfolio.innerHTML = "";


    sectionOrder.forEach(
        (sectionName, sectionIndex) => {

            const sectionSamples =
                samples

                    .filter(
                        sample =>
                            sample.section === sectionName
                    )

                    .sort(
                        (a, b) =>
                            a.order - b.order
                    );


            if (!sectionSamples.length) {
                return;
            }


            const section =
                document.createElement("section");


            section.className =
                "work-section";


            section.dataset.section =
                sectionName;


            /*
             * Large background section title.
             */

            const backgroundTitle =
                document.createElement("div");


            backgroundTitle.className =
                "work-bg-title";


            backgroundTitle.textContent =
                sectionName;


            section.appendChild(
                backgroundTitle
            );


            /*
             * Section heading.
             */

            const heading =
                document.createElement("div");


            heading.className =
                "work-heading";


            const headingInner =
                document.createElement("div");


            headingInner.className =
                "work-heading-inner";


            const number =
                document.createElement("span");


            number.className =
                "work-number";


            number.textContent =
                String(sectionIndex + 1)
                    .padStart(2, "0");


            const headingTitle =
                document.createElement("h3");


            headingTitle.textContent =
                sectionName;


            headingInner.appendChild(
                number
            );


            headingInner.appendChild(
                headingTitle
            );


            heading.appendChild(
                headingInner
            );


            section.appendChild(
                heading
            );


            /*
             * Carousel wrapper.
             */

            const carouselWrapper =
                document.createElement("div");


            carouselWrapper.className =
                "carousel-wrapper";


            /*
             * Carousel.
             */

            const carousel =
                document.createElement("div");


            carousel.className =
                "carousel";


            carousel.tabIndex = 0;


            /*
             * Create three copies of the sample list.
             *
             * The middle copy is the "real" copy.
             * This allows the carousel to loop endlessly
             * in either direction.
             */

            const carouselSamples = [
                ...sectionSamples,
                ...sectionSamples,
                ...sectionSamples
            ];


            carouselSamples.forEach(
                (sample, index) => {

                    const sampleElement =
                        createSampleHTML(
                            sample,
                            index % sectionSamples.length
                        );


                    sampleElement.dataset.physicalIndex =
                        index;


                    sampleElement.dataset.logicalIndex =
                        index % sectionSamples.length;


                    carousel.appendChild(
                        sampleElement
                    );

                }
            );


            carouselWrapper.appendChild(
                carousel
            );


            /*
             * Previous button.
             */

            const previousButton =
                document.createElement("button");


            previousButton.className =
                "carousel-button carousel-button-prev";


            previousButton.type =
                "button";


            previousButton.setAttribute(
                "aria-label",
                `Previous ${sectionName} project`
            );


            previousButton.innerHTML =
                "←";


            /*
             * Next button.
             */

            const nextButton =
                document.createElement("button");


            nextButton.className =
                "carousel-button carousel-button-next";


            nextButton.type =
                "button";


            nextButton.setAttribute(
                "aria-label",
                `Next ${sectionName} project`
            );


            nextButton.innerHTML =
                "→";


            carouselWrapper.appendChild(
                previousButton
            );


            carouselWrapper.appendChild(
                nextButton
            );


            section.appendChild(
                carouselWrapper
            );


            /*
             * Carousel controls.
             */

            const controls =
                document.createElement("div");


            controls.className =
                "carousel-controls";


            const progress =
                document.createElement("div");


            progress.className =
                "carousel-progress";


            const progressTrack =
                document.createElement("div");


            progressTrack.className =
                "carousel-progress-track";


            const progressFill =
                document.createElement("div");


            progressFill.className =
                "carousel-progress-fill";


            const progressMarker =
                document.createElement("div");


            progressMarker.className =
                "carousel-progress-marker";


            progressTrack.appendChild(
                progressFill
            );


            progressTrack.appendChild(
                progressMarker
            );


            progress.appendChild(
                progressTrack
            );


            const counter =
                document.createElement("div");


            counter.className =
                "carousel-counter";


            counter.textContent =
                `01 / ${String(sectionSamples.length).padStart(2, "0")}`;


            const sectionLabel =
                document.createElement("div");


            sectionLabel.className =
                "carousel-section-name";


            sectionLabel.textContent =
                sectionName;


            controls.appendChild(
                progress
            );


            controls.appendChild(
                counter
            );


            controls.appendChild(
                sectionLabel
            );


            section.appendChild(
                controls
            );


            portfolio.appendChild(
                section
            );


            initializeCarousel(
                carousel,
                sectionSamples,
                previousButton,
                nextButton,
                progressFill,
                progressMarker,
                counter
            );

        }
    );

}


/* =========================================================
   CREATE SAMPLE HTML
   ========================================================= */

function createSampleHTML(
    sample,
    logicalIndex
) {

    const article =
        document.createElement("article");


    article.className =
        "sample";


    if (logicalIndex === 0) {

        article.classList.add(
            "active"
        );

    }


    article.dataset.logicalIndex =
        logicalIndex;


    /*
     * Calculate the aspect ratio.
     */

    const width =
        Number(sample.width) || 16;


    const height =
        Number(sample.height) || 9;


    const ratio =
        width / height;


    /*
     * The sample must fit inside:
     *
     * 800px wide
     * 700px tall
     *
     * while preserving its aspect ratio.
     */

    const maxWidth =
        800;


    const maxHeight =
        700;


    let sampleWidth =
        maxWidth;


    let sampleHeight =
        sampleWidth / ratio;


    if (sampleHeight > maxHeight) {

        sampleHeight =
            maxHeight;


        sampleWidth =
            sampleHeight * ratio;

    }


    /*
     * Store the calculated dimensions as CSS variables.
     */

    article.style.setProperty(
        "--sample-width",
        `${sampleWidth}px`
    );


    article.style.setProperty(
        "--sample-height",
        `${sampleHeight}px`
    );


    article.style.setProperty(
        "--sample-max-width",
        `${sampleWidth}px`
    );


    /*
     * Media frame.
     */

    const mediaFrame =
        document.createElement("div");


    mediaFrame.className =
        "sample-media";


    mediaFrame.style.aspectRatio =
        `${width} / ${height}`;


    mediaFrame.dataset.mediaType =
        sample.mediaType;


    /*
     * Placeholder.
     */

    if (sample.placeholder) {

        const placeholder =
            document.createElement("div");


        placeholder.className =
            "sample-placeholder";


        placeholder.innerHTML = `
            <span>PROJECT PREVIEW</span>
        `;


        mediaFrame.appendChild(
            placeholder
        );

    }


    /*
     * Image.
     */

    else if (
        sample.mediaType === "image"
    ) {

        const image =
            document.createElement("img");


        image.src =
            sample.media;


        image.alt =
            sample.alt || sample.title;


        image.loading =
            "lazy";


        mediaFrame.appendChild(
            image
        );

    }


    /*
     * Vimeo.
     */

    else if (
        sample.mediaType === "vimeo"
    ) {

        const iframe =
            document.createElement("iframe");


        iframe.src =
            createVimeoEmbedURL(
                sample.media
            );


        iframe.title =
            sample.title;


        iframe.allow =
            "autoplay; fullscreen; picture-in-picture";


        iframe.allowFullscreen =
            true;


        iframe.loading =
            "lazy";


        iframe.dataset.vimeo =
            "true";


        mediaFrame.appendChild(
            iframe
        );

    }


    /*
     * Local video.
     */

    else if (
        sample.mediaType === "video"
    ) {

        const video =
            document.createElement("video");


        video.src =
            sample.media;


        video.controls =
            true;


        video.playsInline =
            true;


        video.preload =
            "metadata";


        mediaFrame.appendChild(
            video
        );

    }


    /*
     * REC indicator.
     */

    if (logicalIndex === 0) {

        const recordLabel =
            document.createElement("div");


        recordLabel.className =
            "sample-rec";


        recordLabel.innerHTML =
            "<span></span> REC";


        mediaFrame.appendChild(
            recordLabel
        );

    }


    article.appendChild(
        mediaFrame
    );


    /*
     * Sample information.
     */

    const info =
        document.createElement("div");


    info.className =
        "sample-info";


    const title =
        document.createElement("h4");


    title.textContent =
        sample.title;


    const description =
        document.createElement("p");


    description.className =
        "sample-description";


    description.innerHTML =
        formatDescription(
            sample.description || ""
        );


    info.appendChild(
        title
    );


    info.appendChild(
        description
    );


    article.appendChild(
        info
    );


    return article;

}


/* =========================================================
   VIMEO EMBED URL
   ========================================================= */

function createVimeoEmbedURL(
    url
) {

    const match =
        String(url).match(
            /vimeo\.com\/(?:video\/)?(\d+)/
        );


    if (!match) {

        return url;

    }


    const videoID =
        match[1];


    return (
        `https://player.vimeo.com/video/${videoID}` +
        `?title=0` +
        `&byline=0` +
        `&portrait=0` +
        `&dnt=1`
    );

}


/* =========================================================
   PAUSE MEDIA
   ========================================================= */

function pauseMedia(
    sampleElement
) {

    if (!sampleElement) {
        return;
    }


    /*
     * Pause local videos.
     */

    sampleElement
        .querySelectorAll("video")
        .forEach(video => {

            video.pause();

        });


    /*
     * Pause Vimeo videos.
     *
     * The Vimeo Player SDK is loaded dynamically below.
     */

    sampleElement
        .querySelectorAll(
            'iframe[data-vimeo="true"]'
        )
        .forEach(iframe => {

            if (
                window.Vimeo &&
                window.Vimeo.Player
            ) {

                try {

                    const player =
                        new window.Vimeo.Player(
                            iframe
                        );


                    player.pause().catch(
                        () => {}
                    );

                }

                catch (error) {

                    /*
                     * Ignore player errors.
                     * The iframe may not have initialized yet.
                     */

                }

            }

        });

}


/* =========================================================
   PAUSE ALL INACTIVE MEDIA
   ========================================================= */

function pauseInactiveMedia(
    activeSample
) {

    document
        .querySelectorAll(".sample")
        .forEach(sample => {

            if (sample !== activeSample) {

                pauseMedia(
                    sample
                );

            }

        });

}


/* =========================================================
   LOAD VIMEO PLAYER SDK
   ========================================================= */

function loadVimeoSDK() {

    if (
        window.Vimeo &&
        window.Vimeo.Player
    ) {

        return;

    }


    if (
        document.querySelector(
            'script[data-vimeo-player-sdk="true"]'
        )
    ) {

        return;

    }


    const script =
        document.createElement("script");


    script.src =
        "https://player.vimeo.com/api/player.js";


    script.async =
        true;


    script.dataset.vimeoPlayerSdk =
        "true";


    document.head.appendChild(
        script
    );

}


loadVimeoSDK();


/* =========================================================
   INITIALIZE CAROUSEL
   ========================================================= */

function initializeCarousel(
    carousel,
    sectionSamples,
    previousButton,
    nextButton,
    progressFill,
    progressMarker,
    counter
) {

    const sampleCount =
        sectionSamples.length;


    if (!sampleCount) {
        return;
    }


    const samplesInCarousel =
        Array.from(
            carousel.querySelectorAll(
                ".sample"
            )
        );


    /*
     * The carousel contains:
     *
     * [COPY 1] [COPY 2] [COPY 3]
     *
     * We keep the user in the middle copy.
     */

    const middleStart =
        sampleCount;


    let activePhysicalIndex =
        middleStart;


    let scrollCorrectionPending =
        false;


    /*
     * Get the sample closest to the center
     * of the visible carousel.
     */

    function getClosestSample() {

        const center =
            carousel.scrollLeft
            + carousel.clientWidth / 2;


        let closestIndex =
            0;


        let closestDistance =
            Infinity;


        samplesInCarousel.forEach(
            (sample, index) => {

                const sampleCenter =
                    sample.offsetLeft
                    + sample.offsetWidth / 2;


                const distance =
                    Math.abs(
                        sampleCenter - center
                    );


                if (
                    distance <
                    closestDistance
                ) {

                    closestDistance =
                        distance;


                    closestIndex =
                        index;

                }

            }
        );


        return closestIndex;

    }


    /*
     * Convert a physical copy into a logical index.
     */

    function getLogicalIndex(
        physicalIndex
    ) {

        return (
            (
                physicalIndex % sampleCount
                + sampleCount
            ) % sampleCount
        );

    }


    /*
     * Update active sample.
     */

    function updateActiveSample() {

        const closestIndex =
            getClosestSample();


        /*
         * Keep the active state visually updated.
         */

        samplesInCarousel.forEach(
            (sample, index) => {

                sample.classList.toggle(
                    "active",
                    index === closestIndex
                );

            }
        );


        /*
         * If the user reaches either outside copy,
         * quietly move them back to the corresponding
         * position in the middle copy.
         */

        const minimumIndex =
            sampleCount;


        const maximumIndex =
            sampleCount * 2 - 1;


        if (
            closestIndex < minimumIndex ||
            closestIndex > maximumIndex
        ) {

            if (
                scrollCorrectionPending
            ) {

                return;

            }


            scrollCorrectionPending =
                true;


            const logicalIndex =
                getLogicalIndex(
                    closestIndex
                );


            const targetIndex =
                middleStart
                + logicalIndex;


            /*
             * Preserve the user's visual position while
             * switching to the middle copy.
             */

            const currentSample =
                samplesInCarousel[
                    closestIndex
                ];


            const targetSample =
                samplesInCarousel[
                    targetIndex
                ];


            const currentCenter =
                currentSample.offsetLeft
                + currentSample.offsetWidth / 2;


            const currentScrollCenter =
                carousel.scrollLeft
                + carousel.clientWidth / 2;


            const offsetFromCenter =
                currentCenter
                - currentScrollCenter;


            const targetCenter =
                targetSample.offsetLeft
                + targetSample.offsetWidth / 2;


            carousel.scrollTo({

                left:
                    targetCenter
                    - carousel.clientWidth / 2
                    + offsetFromCenter,

                behavior: "auto"

            });


            activePhysicalIndex =
                targetIndex;


            samplesInCarousel.forEach(
                (sample, index) => {

                    sample.classList.toggle(
                        "active",
                        index === targetIndex
                    );

                }
            );


            pauseInactiveMedia(
                samplesInCarousel[targetIndex]
            );


            updateProgress();


            setTimeout(
                () => {

                    scrollCorrectionPending =
                        false;

                },
                50
            );


            return;

        }


        activePhysicalIndex =
            closestIndex;


        const activeSample =
            samplesInCarousel[
                activePhysicalIndex
            ];


        pauseInactiveMedia(
            activeSample
        );


        updateProgress();

    }


    /*
     * Progress bar and counter use the logical
     * sample index, not the physical copy.
     */

    function updateProgress() {

        const logicalIndex =
            getLogicalIndex(
                activePhysicalIndex
            );


        /*
         * Use the number of samples as the loop,
         * rather than treating the last sample as
         * the absolute end.
         */

        const progress =
            sampleCount > 1
                ? (
                    logicalIndex
                    / (sampleCount - 1)
                ) * 100
                : 0;


        progressFill.style.width =
            `${progress}%`;


        progressMarker.style.left =
            `${progress}%`;


        counter.textContent =
            `${String(logicalIndex + 1).padStart(2, "0")} / ${String(sampleCount).padStart(2, "0")}`;

    }


    /*
     * Move to a physical sample.
     */

    function moveToPhysicalSample(
        index,
        smooth = true
    ) {

        const sample =
            samplesInCarousel[index];


        if (!sample) {
            return;
        }


        const targetLeft =
            sample.offsetLeft
            - (carousel.clientWidth / 2)
            + (sample.offsetWidth / 2);


        carousel.scrollTo({

            left: targetLeft,

            behavior:
                smooth
                    ? "smooth"
                    : "auto"

        });

    }


    /*
     * Move to a logical sample while targeting
     * the middle copy.
     */

    function goToLogicalSample(
        index
    ) {

        const logicalIndex =
            (
                index % sampleCount
                + sampleCount
            ) % sampleCount;


        const targetIndex =
            middleStart
            + logicalIndex;


        moveToPhysicalSample(
            targetIndex,
            true
        );

    }


    /*
     * Previous button.
     */

    previousButton.addEventListener(
        "click",
        () => {

            const logicalIndex =
                getLogicalIndex(
                    activePhysicalIndex
                );


            goToLogicalSample(
                logicalIndex - 1
            );

        }
    );


    /*
     * Next button.
     */

    nextButton.addEventListener(
        "click",
        () => {

            const logicalIndex =
                getLogicalIndex(
                    activePhysicalIndex
                );


            goToLogicalSample(
                logicalIndex + 1
            );

        }
    );


    /*
     * Track manual horizontal scrolling.
     */

    carousel.addEventListener(
        "scroll",
        () => {

            updateActiveSample();

        },
        {
            passive: true
        }
    );


    /*
     * Recalculate on resize.
     */

    window.addEventListener(
        "resize",
        () => {

            moveToPhysicalSample(
                activePhysicalIndex,
                false
            );


            updateActiveSample();

        }
    );


    /*
     * Initial state.
     *
     * Center the FIRST logical sample in the
     * MIDDLE copy.
     *
     * Because the middle copy is surrounded by
     * the other two copies, the LAST sample is
     * immediately to its left and the SECOND
     * sample is immediately to its right.
     */

    requestAnimationFrame(
        () => {

            moveToPhysicalSample(
                middleStart,
                false
            );


            requestAnimationFrame(
                () => {

                    updateActiveSample();

                }
            );

        }
    );


    /*
     * Keyboard accessibility.
     */

    carousel.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "ArrowLeft"
            ) {

                event.preventDefault();


                const logicalIndex =
                    getLogicalIndex(
                        activePhysicalIndex
                    );


                goToLogicalSample(
                    logicalIndex - 1
                );

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                event.preventDefault();


                const logicalIndex =
                    getLogicalIndex(
                        activePhysicalIndex
                    );


                goToLogicalSample(
                    logicalIndex + 1
                );

            }

        }
    );

}


/* =========================================================
   DESCRIPTION LINKS
   =========================================================

   Descriptions support simple Markdown-style links:

   [link text](https://example.com)

   Example:

   description:
       "Watch the full project on [YouTube](https://youtube.com/...)."

   ========================================================= */

function formatDescription(
    value
) {

    const escaped =
        escapeHTML(value);


    return escaped.replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
        (
            match,
            text,
            url
        ) => {

            return `
                <a
                    href="${url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >${text}</a>
            `;

        }
    );

}


/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeHTML(
    value
) {

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


function escapeAttribute(
    value
) {

    return escapeHTML(
        value
    );

}


/* =========================================================
   FIT LARGE HEADINGS TO THEIR CONTAINERS
   ========================================================= */

function fitTextToContainer(
    element,
    container = element.parentElement,
    fillContainer = false
) {

    if (
        !element ||
        !container
    ) {

        return;

    }


    const originalSize =
        parseFloat(
            getComputedStyle(
                element
            ).fontSize
        );


    /*
     * Temporarily remove width constraints
     * so we can measure the natural text width.
     */

    element.style.fontSize =
        "100px";


    element.style.width =
        "max-content";


    const naturalWidth =
        element.scrollWidth;


    if (!naturalWidth) {

        element.style.fontSize =
            `${originalSize}px`;


        element.style.width =
            "";


        return;

    }


    const availableWidth =
        container.clientWidth;


    const fittedSize =
        100 *
        (
            availableWidth
            / naturalWidth
        );


    element.style.fontSize =
        fillContainer
            ? `${fittedSize}px`
            : `${Math.min(
                originalSize,
                fittedSize
            )}px`;


    element.style.width =
        "100%";

}


/* =========================================================
   FIT LARGE HEADINGS
   ========================================================= */

function fitLargeHeadings() {

    /*
     * HERO — HANNAH
     *
     * Always fill the entire available hero container.
     */

    const heroHeading =
        document.querySelector(
            ".hero-content > h1"
        );


    if (heroHeading) {

        fitTextToContainer(
            heroHeading,
            heroHeading.parentElement,
            true
        );

    }


    /*
     * SKILLS + FOOTER
     *
     * These can shrink when necessary, but should
     * never become wider than their container.
     */

    document
        .querySelectorAll(
            ".skills-section h2, footer h2"
        )
        .forEach(
            heading => {

                fitTextToContainer(
                    heading,
                    heading.parentElement,
                    false
                );

            }
        );


    /*
     * WORK SECTION HEADINGS
     *
     * The number badge takes up some horizontal space,
     * so the h3 gets the remaining width.
     */

    document
        .querySelectorAll(
            ".work-heading h3"
        )
        .forEach(
            heading => {

                const parent =
                    heading.parentElement;


                if (!parent) {
                    return;
                }


                parent.style.minWidth =
                    "0";


                heading.style.minWidth =
                    "0";


                heading.style.flex =
                    "1";


                fitTextToContainer(
                    heading,
                    heading,
                    false
                );

            }
        );

}


/* =========================================================
   INITIALIZE HEADING FIT
   ========================================================= */

function initializeHeadingFit() {

    fitLargeHeadings();


    if (
        window.ResizeObserver
    ) {

        const observer =
            new ResizeObserver(
                () => {

                    fitLargeHeadings();

                }
            );


        const containers =
            document.querySelectorAll(
                ".hero-content, " +
                ".skills-section .container, " +
                "footer .container, " +
                ".work-heading-inner"
            );


        containers.forEach(
            container => {

                observer.observe(
                    container
                );

            }
        );

    }

    else {

        window.addEventListener(
            "resize",
            fitLargeHeadings
        );

    }

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById(
        "current-year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   START SITE
   ========================================================= */

createPortfolio();

initializeHeadingFit();

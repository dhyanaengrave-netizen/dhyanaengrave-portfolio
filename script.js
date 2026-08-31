const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = document.querySelectorAll(".navigation a");


menuButton.addEventListener("click", function () {

    menuButton.classList.toggle("active");
    navigation.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuButton.classList.remove("active");
        navigation.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

/* ==================================
   SERVICE GALLERY PRODUCT DATA
================================== */

const serviceGalleryData = {

    reliefGallery: Array.from({ length: 10 }, function (_, index) {

        const number = index + 1;

        const names = [
            "Traditional Wall Panel",
            "Temple Sculpture Design",
            "Luxury Relief Panel",
            "Decorative Door Relief",
            "Floral Carving Panel",
            "Portrait Relief Model",
            "Furniture Carving Design",
            "Architectural Wall Design",
            "Stone Carving Design",
            "Custom Relief Artwork"
        ];

        const categories = [
            "3D RELIEF DESIGN",
            "TEMPLE RELIEF",
            "DECORATIVE PANEL",
            "DOOR RELIEF",
            "FLORAL RELIEF",
            "PORTRAIT RELIEF",
            "FURNITURE RELIEF",
            "ARCHITECTURAL RELIEF",
            "STONE RELIEF",
            "CUSTOM 3D RELIEF"
        ];
        const descriptions = [
    "Intricately carved peacock relief with flowing feather details, designed for premium wall panels, furniture and luxury CNC interiors.",

    "Elegant circular floral relief medallion created for ceilings, feature walls and decorative architectural CNC applications.",

    "Highly detailed mosque relief model suitable for Islamic wall art, religious interiors and architectural CNC carving.",

    "Decorative door relief designed with balanced carving depth for wooden doors, entrance panels and premium furniture work.",

    "Detailed floral carving panel prepared for furniture, wall decoration and CNC production in wood, MDF or Corian.",

    "Portrait relief model created from a reference image with careful face detailing and CNC-ready depth control.",

    "Furniture carving design prepared for beds, cabinets, headboards and luxury wooden interior applications.",

    "Architectural wall relief designed for large feature walls, reception areas and decorative CNC panel production.",

    "Stone carving relief optimized for marble, stone and deep CNC engraving with clean production geometry.",

    "Custom 3D relief artwork created according to the client’s reference, size, material and CNC machine requirements."
];

        return {
            image: `images/relief-${number}.webp`,
            alt: names[index],
            category: categories[index],
            title: names[index],
            description: descriptions[index],
            detail1: "Format: STL / OBJ / TAP / RLF",
            detail2: "Custom dimensions available",
            detail3: "Preview before delivery",
            button: "Request This Design"
            
        };

    }),


    photo3dGallery: Array.from({ length: 10 }, function (_, index) {

        const number = index + 1;

        const names = [
            "Portrait Photo Relief",
            "Religious Photo Relief",
            "Portrait Model",
            "Memorial Relief Design",
            "Photo Relief",
            "Portrait Relief",
            "Historical Figure Relief",
            "Custom Face Sculpture",
            "Artwork to 3D Model",
            "Custom Photo Conversion"
        ];

        return {
            image: `images/photo-3d-${number}.webp`,
            alt: names[index],
            category: "PHOTO TO 3D",
            title: names[index],
            description:
                "Reference photo converted into a clean and detailed CNC-ready 3D relief model.",
            detail1: "Format: STL / OBJ",
            detail2: "Face and detail correction",
            detail3: "Custom relief depth",
            button: "Request This Design"
        };

    }),


    vectorGallery: Array.from({ length: 10 }, function (_, index) {

        const number = index + 1;

        const names = [
            "Decorative Cutting Pattern",
            "CNC Pattern",
            "Mandala Vector Artwork",
            "Laser Cut Vector Design",
            "Jali Cutting Pattern",
            "CNC Decorative Element",
            "Furniture Cutting Design",
            "Vector Conversion",
            "Furniture Side Ornament",
            "Custom 2D Artwork"
        ];

        return {
            image: `images/vector-${number}.webp`,
            alt: names[index],
            category: "VECTOR & 2D DESIGN",
            title: names[index],
            description:
                "Clean scalable vector artwork prepared for CNC cutting, engraving and manufacturing.",
            detail1: "Format: DXF / EPS / SVG",
            detail2: "Clean closed cutting paths",
            detail3: "Custom dimensions available",
            button: "Request This Design"
        };

    }),


    cncFileGallery: Array.from({ length: 10 }, function (_, index) {

        const number = index + 1;

        const names = [
            "Production-Ready STL",
            "CNC FILE PREPARATION",
            "OBJ File Preparation",
            "Mesh Repair Service",
            "Model Scale Correction",
            "CNC Toolpath Preparation",
            "Relief Depth Optimization",
            "Large Model Sectioning",
            "Temple Structure Design",
            "Decorative Column Design"
        ];

        return {
            image: `images/cnc-file-${number}.webp`,
            alt: names[index],
            category: "CNC FILE PREPARATION",
            title: names[index],
            description:
                "Professional file preparation and optimization according to CNC machine requirements.",
            detail1: "Correct size and scale",
            detail2: "Clean production geometry",
            detail3: "Machine-ready delivery",
            button: "Request This Service"
        };
        

    }),
    murtiGallery: Array.from({ length: 10 }, function (_, index) {

    const number = index + 1;

    const names = [
        "Lord Rama with Sage Vishwamitra",
        "Ram and Sita Divine Blessing",
        "Guru Vashistha Blessing Lord Rama",
        "Lord Rama, Sita & Lakshman in Exile",
        "First Meeting of Rama and Hanuman",
        "Hanuman Meeting Sita in Ashok Vatika",
        "Vibhishana Surrenders to Lord Rama",
        "Hanuman Carrying the Sanjeevani Mountain",
        "Lord Rama vs Ravana",
        "Sita's Agni Pariksha"
    ];

    const categories = [
        "RAMA & VISHWAMITRA",
        "DIVINE ASSEMBLY",
        "ROYAL BLESSING CEREMONY",
        "VANVAS SCENE",
        "RAMA & HANUMAN",
        "ASHOK VATIKA",
        "VIBHISHANA SHARANAGATI",
        "SANJEEVANI MISSION",
        "RAMA VS RAVANA",
        "SITA'S AGNI PARIKSHA"
    ];

   const descriptions = [

"High-detail CNC-ready 3D relief depicting Sage Vishwamitra guiding and blessing Lord Rama. Expertly designed for temple interiors, devotional wall panels, and precision CNC carving projects.",

"Intricately crafted 3D relief featuring Lord Rama, Goddess Sita, and revered sages in a sacred Ramayana assembly. Optimized for temple décor and premium CNC carving.",

"Detailed CNC-ready 3D relief showcasing Lord Rama and Goddess Sita receiving blessings during a royal ceremony. Perfect for devotional wall panels and temple projects.",

"Beautiful Ramayana relief portraying Lord Rama, Goddess Sita, and Lakshmana during their sacred forest exile (Vanvas). Designed for accurate CNC carving and religious artwork.",

"High-detail devotional relief illustrating the divine meeting of Lord Rama and Hanuman. Carefully sculpted for temple interiors, wall panels, and premium CNC production.",

"Detailed 3D relief depicting Hanuman meeting Goddess Sita in Ashok Vatika and delivering Lord Rama's message. Expertly prepared for CNC carving and devotional projects.",

"Premium CNC-ready 3D relief portraying Vibhishana surrendering to Lord Rama and seeking his divine protection. Ideal for temples, spiritual spaces, and religious artwork.",

"Intricately designed 3D relief featuring Hanuman carrying the Sanjeevani Mountain to save Lakshmana during the Ramayana war. Optimized for precision CNC carving.",

"Epic Ramayana battle relief depicting Lord Rama confronting Ravana in the final battle of Lanka. Crafted for temple interiors, devotional wall panels, and premium CNC production.",

"High-detail CNC-ready 3D relief illustrating Goddess Sita's Agni Pariksha in the presence of Lord Rama and Hanuman. Designed for temple interiors, devotional wall panels, and religious artwork."

];

    return {
        image: `images/murti-${number}.webp`,
        alt: names[index],
        category: categories[index],
        title: names[index],
        description: descriptions[index],
        detail1: "Format: STL / OBJ",
        detail2: "High-detail CNC-ready model",
        detail3: "Custom dimensions available",
        button: "Request This Design"
    };

})
    

};


/* ==================================
   CREATE PRODUCT CARDS
================================== */

function createGalleryCard(product, index) {

    const card = document.createElement("article");

    card.className = "gallery-card";

    card.innerHTML = `
        <div class="gallery-image">

            <img
                src="${product.image}"
                alt="${product.alt}"
                loading="lazy"
            >

            <span class="gallery-image-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

        </div>

        <div class="gallery-details">

            <span class="gallery-category">
                ${product.category}
            </span>

            <h4>${product.title}</h4>

            <p>${product.description}</p>

            <ul>
                <li>${product.detail1}</li>
                <li>${product.detail2}</li>
                <li>${product.detail3}</li>
            </ul>

            <a
                href="#contact"
                class="gallery-button"
            >
                ${product.button}
                <span>↗</span>
            </a>

        </div>
    `;

    return card;

}


Object.entries(serviceGalleryData).forEach(function ([galleryId, products]) {

    const gallery = document.getElementById(galleryId);

    if (!gallery) {
        return;
    }

    products.forEach(function (product, index) {

        gallery.appendChild(
            createGalleryCard(product, index)
        );

    });

});


/* ==================================
   SERVICE ACCORDION
================================== */


const serviceToggles =
    document.querySelectorAll(".service-toggle");

serviceToggles.forEach(function (toggle) {

    toggle.addEventListener("click", function () {

        const currentWrapper =
            toggle.closest(".service-wrapper");

        const isAlreadyOpen =
            currentWrapper.classList.contains("active");

        /* Sabhi open galleries band karo */

        document
            .querySelectorAll(".service-wrapper")
            .forEach(function (wrapper) {

                wrapper.classList.remove("active");

                const wrapperButton =
                    wrapper.querySelector(".service-toggle");

                if (wrapperButton) {
                    wrapperButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

        /* Selected gallery open karo */

        if (!isAlreadyOpen) {

            currentWrapper.classList.add("active");

            toggle.setAttribute(
                "aria-expanded",
                "true"
            );

            /* Purani gallery collapse hone ke baad
               selected service par screen wapas lao */

            setTimeout(function () {

                currentWrapper.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 500);

        }

    });

});
/* =================================
   PROCESS CARDS SLIDERS
================================= */

const processCards =
    document.querySelectorAll(".process-card-slider");

processCards.forEach(function (card, cardIndex) {

    const slides =
        card.querySelectorAll(".process-slide");

    if (slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    /* Har card ko thoda alag time se start karna */

    setTimeout(function () {

        setInterval(function () {

            slides[currentSlide].classList.remove("active");

            currentSlide =
                (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");

        }, 4000);

    }, cardIndex * 700);

});
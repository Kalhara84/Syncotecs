/**
 * ========================================================
 * CircuitHubs Technologies PVT LTD - Website Data File
 * ========================================================
 * You can easily edit all website content (texts, services,
 * team members, and contact info) directly in this file.
 */

window.SITE_DATA = {

  // ------------------------------------------------------
  // 1. HERO SECTION (Main Banner)
  // ------------------------------------------------------
  hero: {
    heroImage: "Assets/img/banner1.png",
    labelHtml: "Technology solutions <span class=\"hero-dash\">——</span>",
    titleHtml: "Technology<br>solutions for<br><em>your business</em>",
    description: "We support expanding our clients' technological capabilities and empowering their workforce, so businesses can unlock new opportunities, drive innovation, and achieve sustainable growth. This approach fosters a dynamic and resilient environment that keeps organizations competitive in a rapidly evolving digital landscape.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Explore Services"
  },

  // ------------------------------------------------------
  // 2. ABOUT US SECTION
  // ------------------------------------------------------
  aboutUs: {
    titleHtml: "CircuitHubs Technologies PVT LTD: Purpose Driven, Future Ready <em>Solutions</em>",
    paragraphs: [
      "CircuitHubs Technologies PVT LTD is built on a vision of staying ahead of what is next. We provide purpose-driven technology solutions to businesses worldwide, delivering agile, adaptive, and future-ready enterprise services designed to solve both today's challenges and tomorrow's opportunities.",
      "Our focus is on driving measurable results that accelerate growth, optimize operations, and enhance every aspect of your business. Each solution is tailored to meet the unique goals and requirements of your organization.",
      "We work closely with our clients to transform their technology landscape, ensuring it aligns seamlessly with a digitally empowered future.",
      "Above all, we create solutions that delight stakeholders, reduce effort, improve efficiency, and go beyond meeting needs to exceeding expectations for employees, customers, and partners."
    ]
  },

  // ------------------------------------------------------
  // 3. SERVICES SECTION (7 Core Services)
  // ------------------------------------------------------
  services: {
    label: "Our Expertise",
    titleHtml: "What We <em>Offer</em>",
    subtitle: "Comprehensive IT and technology services tailored to power, secure, and grow your business.",
    cards: [
      {
        title: "All Softwares & IT Solutions",
        description: "Custom software development, web applications, enterprise software integrations, and turnkey IT solutions designed to streamline your business workflows and drive innovation.",
        icon: "fas fa-laptop-code",
        colorClass: "card-color-1",
        href: "#contact"
      },
      {
        title: "IT Issues Handling & Support",
        description: "Rapid response IT troubleshooting, operating system support, virus removal, software conflict resolution, and dedicated helpdesk assistance to keep your operations running smoothly.",
        icon: "fas fa-headset",
        colorClass: "card-color-2",
        href: "#contact"
      },
      {
        title: "Laptop & Desktop Repair & Maintenance",
        description: "Professional hardware diagnostics, chip-level motherboard repairs, display & keyboard replacements, thermal cleaning, and preventative servicing for all major computer brands.",
        icon: "fas fa-screwdriver-wrench",
        colorClass: "card-color-3",
        href: "#contact"
      },
      {
        title: "Computer Hardware & Accessories Supply",
        description: "Supply and procurement of brand-new laptops, customized high-performance desktop PCs, monitors, printers, original components, and genuine computer accessories.",
        icon: "fas fa-cart-shopping",
        colorClass: "card-color-4",
        href: "#contact"
      },
      {
        title: "CCTV Systems Installation & Security",
        description: "Complete setup of high-resolution IP and HD surveillance camera systems, remote smartphone live-view configuration, DVR/NVR setup, and reliable maintenance services.",
        icon: "fas fa-video",
        colorClass: "card-color-5",
        href: "#contact"
      },
      {
        title: "Computer Networking Solutions",
        description: "Design and installation of structured office LAN/WAN networks, server rack setup, Wi-Fi access points, router/switch configuration, VPNs, and secure firewall implementations.",
        icon: "fas fa-network-wired",
        colorClass: "card-color-6",
        href: "#contact"
      },
      {
        title: "IT Staffing & Technical Workforce",
        description: "Providing experienced, skilled IT personnel, on-site technical support officers, and system administrators to fulfill your corporate workforce and project staffing requirements.",
        icon: "fas fa-user-tie",
        colorClass: "card-color-7",
        href: "#contact"
      }
    ]
  },

  // ------------------------------------------------------
  // 4. TEAM SECTION
  // ------------------------------------------------------
  team: {
    label: "Our People",
    titleHtml: "Meet Our <em>Team</em>",
    subtitle: "Leadership and specialists driving innovation and service excellence at<br><strong>CircuitHubs Technologies PVT LTD</strong>",
    members: [
      {
        name: "Kasun Akshitha",
        title: "Director",
        theme: "teal",
        image: "Assets/img/team/Kasun_Akshitha.jpeg",
        email: "kasuna@circuithubstechnologies.com",
        socials: [
          { icon: "fas fa-envelope", href: "mailto:kasuna@circuithubstechnologies.com", title: "Email" },
          { icon: "fab fa-linkedin-in", href: "#", title: "LinkedIn" },
          { icon: "fas fa-phone-alt", href: "tel:+94706717131", title: "Call" }
        ]
      },
      {
        name: "Pasan",
        title: "Software Engineer",
        theme: "teal",
        image: "Assets/img/team/Pasan.jpg.jpeg",
        email: "pasansawmya@gmail.com",
        socials: [
          { icon: "fas fa-envelope", href: "mailto:pasansawmya@gmail.com", title: "Email" },
          { icon: "fab fa-linkedin-in", href: "#", title: "LinkedIn" },
          { icon: "fas fa-phone-alt", href: "tel:+94723466524", title: "Call" }
        ]
      }
    ]
  },

  // ------------------------------------------------------
  // 5. FOOTER & CONTACT SECTION
  // ------------------------------------------------------
  footer: {
    visionTitle: "Our Vision",
    visionText: "To drive business innovation with advanced IT solutions that create new viewpoints and unlimited opportunities for our clients.",
    ourMissionTitle: "Our Mission",
    ourMissionText: "To drive business excellence by creating innovative technology solutions that inspire growth and success for our clients across Sri Lanka and beyond.",
    missionTitle: "Contact Us",
    missionContacts: [
      {
        href: "mailto:info@circuithubstechnologies.com",
        icon: "fas fa-envelope",
        text: "Business inquiries - info@circuithubstechnologies.com"
      },
      {
        href: "mailto:sales@circuithubstechnologies.com",
        icon: "fas fa-file-signature",
        text: "Tender Submissions - sales@circuithubstechnologies.com"
      },
      {
        href: "tel:+94772411373",
        icon: "fas fa-phone-alt",
        text: "0772411373 / 0774070137"
      },
      {
        href: "https://maps.google.com/?q=471/3+Highlevel+Road+Makumbura+Pannipitiya+Sri+Lanka",
        icon: "fas fa-map-marker-alt",
        text: "471/3, Highlevel Road, Makumbura, Pannipitiya, Sri Lanka",
        targetBlank: true
      }
    ],
    followTitle: "Follow Us On",
    socialLinks: [
      {
        href: "#",
        icon: "fab fa-facebook-f",
        title: "Facebook"
      },
      {
        href: "#",
        icon: "fab fa-linkedin-in",
        title: "LinkedIn"
      }
    ],
    addressTitle: "Our Address",
    addressHtml: "471/3, Highlevel Road, Makumbura, Pannipitiya,<br>Sri Lanka",
    copyrightHtml: "Copyright &copy; 2026 <strong>CircuitHubs Technologies PVT LTD</strong>",
    bottomLinks: [
      {
        label: "About Us",
        href: "#about"
      },
      {
        label: "Services",
        href: "#services"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ]
  }
};

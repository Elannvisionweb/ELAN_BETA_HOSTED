import breakfreePhoto from "/src/assets/zonals/breakfree_photo.jpg";
import breakfreeQr from "/src/assets/zonals/breakfree_qr.jpg";
import vividMotionPhoto from "/src/assets/zonals/vivid_motion_photo.jpg";
import vividMotionQr from "/src/assets/zonals/vivid_motion_qr.jpg";
import syncdSoulsPhoto from "/src/assets/zonals/syncd_souls_photo.jpg";
import syncdSoulsQr from "/src/assets/zonals/syncd_souls_qr.jpg";
import glitzPhoto from "/src/assets/zonals/glitz_and_glamour_photo.jpg";
import glitzQr from "/src/assets/zonals/glitz_and_glamour_qr.jpg";
import campusIdolPhoto from "/src/assets/zonals/campus_idol_photo.jpg";
import campusIdolQr from "/src/assets/zonals/campus_idol_qr.jpg";

export const zonalsMeta = {
  title: "ZONAL ELIMINATIONS",
  edition: "ELAN & ηVISION 2027",
  totalPrize: "₹2,00,000",
  tagline: "A Chance To Perform In The Grand Finals Of Elan & ηVision",
  intro:
    "Before the big stage lights up at Elan & ηVision, it all begins here. The Zonal Eliminations are your first shot at the spotlight across North and South India, offering a chance to showcase your craft and earn a direct place in the Grand Finale at IIT Hyderabad.",
  format:
    "This is the first round of competition. Top-performing participants from both North and South Zonals will be invited to perform live at the Grand Finale during Elan & ηVision.",
  grandFinale: "8th Jan To 10th Jan 2027 At Elan & ηVision, IIT Hyderabad",
  perks: [
    { title: "Grand Finale Stage", desc: "Guaranteed live performance slot at the Grand Finale during Elan & ηVision" },
    { title: "Official Certificates", desc: "Merit and participation recognition authenticated by IIT Hyderabad" },
    { title: "Concert Access", desc: "Exclusive VIP artist & backstage access to star pro-nights" },
    { title: "Goodies & Merch", desc: "Official fest merchandise kit and exclusive gift hampers" },
  ],
};

export const zonalRegions = {
  south: {
    id: "south",
    name: "South Zonal",
    shortName: "South Zone",
    code: "SZ-HYD-2027",
    eyebrow: "SOUTHERN REGION ELIMINATIONS",
    hub: "Southern Hub",
    date: "10th October",
    venue: "",
    applicationStatus: "Active • Accepting South Region Applications",
    coveredStates: "Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Kerala & Goa",
    applicationNotice:
      "Collegiate performers and independent teams from Southern states submit applications through the South Zonal portal below. Shortlisted entries earn a direct berth to the Grand Finale.",
    contacts: [
      { name: "Vaishnavi Ramkrishna", role: "South Zonal Lead", phone: "+91 9686252699", tel: "+919686252699" },
      { name: "Surya Sri", role: "South Operations Lead", phone: "+91 91544 28402", tel: "+919154428402" },
      { name: "Pravin Parate", role: "Logistics Coordinator", phone: "+91 80554 46009", tel: "+918055446009" },
    ],
    events: [
      {
        id: "breakfree",
        name: "Breakfree",
        category: "Group Dance",
        badge: "Flagship Group Dance",
        description:
          "A group dance event that brings together coordination, creativity, and the strength of performing together as a team.",
        prizePool: "₹50,000/-",
        prizeNumeric: 50000,
        date: "10th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/breakfree-elan-nvision-2026-elan-nvision-iit-hyderabad-1599826?ref=south-zonal",
        contact: {
          name: "Vaishnavi Ramkrishna",
          phone: "+91 9686252699",
          tel: "+919686252699",
        },
        image: breakfreePhoto,
        qrImage: breakfreeQr,
      },
      {
        id: "vivid-motion",
        name: "Vivid Motion",
        category: "Solo Dance",
        badge: "Solo Dance Showcase",
        description:
          "An individual dance event that showcases personal style, artistry, and stage presence in a solo performance.",
        prizePool: "₹25,000/-",
        prizeNumeric: 25000,
        date: "10th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/break-free-solo-elan-nvision-2026-elan-nvision-iit-hyderabad-1600402?ref=south-zonal",
        contact: {
          name: "Surya Sri",
          phone: "+91 91544 28402",
          tel: "+919154428402",
        },
        image: vividMotionPhoto,
        qrImage: vividMotionQr,
      },
      {
        id: "syncd-souls",
        name: "Sync'd Souls",
        category: "Duet / Trio Dance",
        badge: "Duet & Trio Dance",
        description:
          "A dance competition for pairs or trios that celebrates coordination, connection, and storytelling through shared movement.",
        prizePool: "₹40,000/-",
        prizeNumeric: 40000,
        date: "10th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/synced-souls-elan-nvision-2026-elan-nvision-iit-hyderabad-1600387?ref=south-zonal",
        contact: {
          name: "Pravin Parate",
          phone: "+91 80554 46009",
          tel: "+918055446009",
        },
        image: syncdSoulsPhoto,
        qrImage: syncdSoulsQr,
      },
      {
        id: "glitz-and-glamour",
        name: "Glitz And Glamour",
        category: "Fashion",
        badge: "Fashion & Runway",
        description:
          "A fashion event that highlights confidence, presentation, and the art of styling on stage.",
        prizePool: "₹50,000/-",
        prizeNumeric: 50000,
        date: "10th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/glitz-and-glamour-elan-nvision-2026-elan-nvision-iit-hyderabad-1599845?ref=south-zonal",
        contact: {
          name: "Amir Shaikh",
          phone: "+91 98906 43997",
          tel: "+919890643997",
        },
        image: glitzPhoto,
        qrImage: glitzQr,
      },
      {
        id: "campus-idol",
        name: "Campus Idol",
        category: "Solo Singing",
        badge: "Vocal Talent Hunt",
        description:
          "A solo singing competition that celebrates vocal talent, musical expression, and the individuality of every performer on stage.",
        prizePool: "₹40,000/-",
        prizeNumeric: 40000,
        date: "10th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/campus-idol-elan-nvision-2026-iit-hyderabad-1599650?ref=south-zonal",
        contact: {
          name: "Priyanshu Sharma",
          phone: "+91 90506 24137",
          tel: "+919050624137",
        },
        image: campusIdolPhoto,
        qrImage: campusIdolQr,
      },
    ],
  },
  north: {
    id: "north",
    name: "North Zonal",
    shortName: "North Zone",
    code: "NZ-DEL-2027",
    eyebrow: "NORTHERN REGION ELIMINATIONS",
    hub: "Northern Hub",
    date: "18th October",
    venue: "",
    applicationStatus: "Active • Accepting North Region Applications",
    coveredStates: "Delhi NCR, Punjab, Haryana, Uttar Pradesh, Rajasthan, Chandigarh & Uttarakhand",
    applicationNotice:
      "Collegiate performers and independent teams from Northern states submit applications through the North Zonal portal below. Selected participants advance directly to the IIT Hyderabad Grand Finale.",
    contacts: [
      { name: "Priyanshu Sharma", role: "North Zonal Head", phone: "+91 90506 24137", tel: "+919050624137" },
      { name: "Amir Shaikh", role: "North Operations Lead", phone: "+91 98906 43997", tel: "+919890643997" },
      { name: "Anushka", role: "North Outreach Head", phone: "+91 93585 15278", tel: "+919358515278" },
    ],
    events: [
      {
        id: "breakfree",
        name: "Breakfree",
        category: "Group Dance",
        badge: "Flagship Group Dance",
        description:
          "A group dance event that brings together coordination, creativity, and the strength of performing together as a team.",
        prizePool: "₹50,000/-",
        prizeNumeric: 50000,
        date: "18th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/breakfree-elan-nvision-2026-elan-nvision-iit-hyderabad-1599826?ref=north-zonal",
        contact: {
          name: "Amir Shaikh",
          phone: "+91 98906 43997",
          tel: "+919890643997",
        },
        image: breakfreePhoto,
        qrImage: breakfreeQr,
      },
      {
        id: "vivid-motion",
        name: "Vivid Motion",
        category: "Solo Dance",
        badge: "Solo Dance Showcase",
        description:
          "An individual dance event that showcases personal style, artistry, and stage presence in a solo performance.",
        prizePool: "₹25,000/-",
        prizeNumeric: 25000,
        date: "18th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/break-free-solo-elan-nvision-2026-elan-nvision-iit-hyderabad-1600402?ref=north-zonal",
        contact: {
          name: "Priyanshu Sharma",
          phone: "+91 90506 24137",
          tel: "+919050624137",
        },
        image: vividMotionPhoto,
        qrImage: vividMotionQr,
      },
      {
        id: "syncd-souls",
        name: "Sync'd Souls",
        category: "Duet / Trio Dance",
        badge: "Duet & Trio Dance",
        description:
          "A dance competition for pairs or trios that celebrates coordination, connection, and storytelling through shared movement.",
        prizePool: "₹40,000/-",
        prizeNumeric: 40000,
        date: "18th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/synced-souls-elan-nvision-2026-elan-nvision-iit-hyderabad-1600387?ref=north-zonal",
        contact: {
          name: "Anushka",
          phone: "+91 93585 15278",
          tel: "+919358515278",
        },
        image: syncdSoulsPhoto,
        qrImage: syncdSoulsQr,
      },
      {
        id: "glitz-and-glamour",
        name: "Glitz And Glamour",
        category: "Fashion",
        badge: "Fashion & Runway",
        description:
          "A fashion event that highlights confidence, presentation, and the art of styling on stage.",
        prizePool: "₹50,000/-",
        prizeNumeric: 50000,
        date: "18th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/glitz-and-glamour-elan-nvision-2026-elan-nvision-iit-hyderabad-1599845?ref=north-zonal",
        contact: {
          name: "Amir Shaikh",
          phone: "+91 98906 43997",
          tel: "+919890643997",
        },
        image: glitzPhoto,
        qrImage: glitzQr,
      },
      {
        id: "campus-idol",
        name: "Campus Idol",
        category: "Solo Singing",
        badge: "Vocal Talent Hunt",
        description:
          "A solo singing competition that celebrates vocal talent, musical expression, and the individuality of every performer on stage.",
        prizePool: "₹40,000/-",
        prizeNumeric: 40000,
        date: "18th Oct",
        venue: "",
        unstopUrl: "https://unstop.com/p/campus-idol-elan-nvision-2026-iit-hyderabad-1599650?ref=north-zonal",
        contact: {
          name: "Priyanshu Sharma",
          phone: "+91 90506 24137",
          tel: "+919050624137",
        },
        image: campusIdolPhoto,
        qrImage: campusIdolQr,
      },
    ],
  },
};

// Default backwards compatibility export
export const zonalEvents = zonalRegions.south.events;

export const festHighlights = [
  { value: "50,000+", label: "Attendees", detail: "Drawing crowds from IIT Hyderabad and beyond" },
  { value: "12,500+", label: "Participants", detail: "Competing across cultural, technical, and literary events" },
  { value: "30+", label: "Competitions", detail: "Spanning cultural, technical, and literary domains" },
  { value: "50+", label: "Annual Events", detail: "Including walkathons, tree plantation drives, and blood donation camps" },
  { value: "1.2M+", label: "Instagram Reach", detail: "Engaged audience across official social handles" },
  { value: "15+", label: "Media Partners", detail: "Eenadu, The Hindu, Telangana Today, ETV, NTV, Red FM, Big FM" },
];

export const pastArtists = [
  "Darshan Raval",
  "Papon",
  "Mohit Chauhan",
  "Zakir Khan",
  "The Local Train",
  "When Chai Met Toast",
  "The Yellow Diary",
  "Shreya Baruah",
  "Shirley Setia",
  "Gajendra Verma",
  "DJ Tasha",
  "Pranav Sharma",
  "The Deccan Project",
  "Anuj Rehan",
];

export const generalContacts = {
  unstopInfo: "Check out our Unstop page for more details for competitions: link",
  contacts: [
    { name: "Anushka", phone: "+91 93585 15278", tel: "+919358515278" },
    { name: "Gouresh", phone: "+91 98336 46382", tel: "+919833646382" },
  ],
  email: "elan.nvision.outreach@sa.iith.ac.in",
};

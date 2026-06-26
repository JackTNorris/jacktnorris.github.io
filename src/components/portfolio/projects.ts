import mountie_mobile_img from './portfolio-images/mountie-mobile.png'
import pmu_recovery_img from './portfolio-images/pmu-recovery-project.png'
import hoghacks_img from './portfolio-images/hoghacks.png'
import atari_breakout_gif from './portfolio-images/atari-breakout.gif'
import commander_impeach_img from './portfolio-images/commander-impeach.png'
import paper_route_img from './portfolio-images/paper-route.png'
import sictoc_img from './portfolio-images/sictoc.png'
import sensus_img from './portfolio-images/sensus.png'
import iron_man_helmet_gif from './portfolio-images/iron-man.gif'
import kitty_cam_img from './portfolio-images/kitty-cam.jpg'
import breadboard_computer_img from './portfolio-images/breadboard-comp.jpg'
import autodiff_img from './portfolio-images/auto-diff.png'
import personal_website_img from './portfolio-images/personal-website.png'
import swiss_army_knife_img from './portfolio-images/swiss-army-knife.png'
import chess_img from './portfolio-images/chess.png'
import qwirkle_img from './portfolio-images/qwirkle.png'
import gym_img from './portfolio-images/gym.jpg'
import library_img from './portfolio-images/library.jpg'
import galeano_work_img from './portfolio-images/galeano-work.png'
import computer_lab_img from './portfolio-images/computer-lab.jpg'

export type TechnologyUsed = 'Assembly' | 'WebSockets' | 'RDKit' | 'Pandas' | 'PyTorch' | 'Breadboarding ' | 'Arduino' | 'React' | 'Unity' | 'C++' | 'Python' | 'C#' | 'Java' | 'Kotlin' | 'Firebase' | 'Docker' | 'Express' | 'Node.js' | 'P4' | 'Mininet' | 'NumPy' | 'WebRTC' | 'MQTT' | 'ESP32' | 'React Native' | 'Javascript' | 'HTML/CSS' | 'Github Pages';

export type PortfolioProject = {
    id: string,
    title: string,
    description: string,
    tag:"🧪 research" | "🧠 general software" |  "💪 hardware" | "🕹️ games" |  "🔮 other"
    link?: string,
    year: number,
    imageSrc?: string,
    technologiesUsed?: TechnologyUsed[]
}
export const projects: PortfolioProject[] = [
    {
        id: 'galeano-work',
        title: 'Benchmarking ML Methods for Antibiotic Discovery',
        description: 'Research project I conducted with Dr. Diego Galeano during my time in the Peace Corps. Utilized the dataset cultivated by Stokes et al. (DOI: 10.1038/s41586-019-1671-1) to train and thoroughly benchmark various machine learning methods for predicting antibiotic activity of small molecules against E. Coli. Discovered simpler models that rivaled the performance of the GNN presented by Stokes et al. First author conference publication currently under review for IBERAMIA \'26.',
        tag: '🧪 research',
        year: 2026,
        imageSrc: galeano_work_img,
        technologiesUsed: ['Python', 'RDKit', 'PyTorch']
    },
    {
        id: 'qwirkle',
        title: 'Online Qwirkle',
        description: 'A multiplayer online version of the board game Qwirkle built with vanilla HTML, CSS, and Javascript. Interfaces with a Node.js backend via basic REST API and web sockets.',
        link: 'https://jacktnorris.dev/qwirkle-online/',
        tag: '🕹️ games',
        year: 2026,
        imageSrc: qwirkle_img,
        technologiesUsed: ['Express', 'Docker', 'WebSockets', 'HTML/CSS', 'Javascript']
    },
    {
        id: 'personal-website',
        title: 'Personal Website',
        description: 'A fast & responsive personal website built with React and minimal existing UI components to showcase some projects and blog posts. Interfaces with an Express API I Dockerized and deployed, facilitating integration with the Spotify API. Also displays a few interesting simulations such as Conway\'s Game of Life, Boids, and the Three Body Problem.',
        link: 'https://jacktnorris.dev',
        tag: '🧠 general software',
        year: 2026,
        imageSrc: personal_website_img,
        technologiesUsed: ['React', 'Express', 'Docker', 'Firebase']
    },
    {
        id: 'pmu-recovery-project',
        title: 'PMU Recovery with Programmable Switches',
        description: 'A culmination of the research I conducted with Dr. Kevin Jin during my undergraduate degree. We proposed and evaluated the usage of programmable network switches as a means of reconstructing missing data in power grid communication networks. Instead of relying on a single control center to detect and reconstructing missing power grid measurements, we offload some of this computation to the network itself. Resulted in first-author publication in SmartGridComm \'25',
        link: 'https://ieeexplore.ieee.org/document/11204568/',
        tag: '🧪 research',
        year: 2024,
        imageSrc: pmu_recovery_img,
        technologiesUsed: ['Python', 'P4', 'Mininet']

    },
    {
        id: 'commander-impeach',
        title: 'Commander Impeach',
        description: 'A flappy bird-esque game I made in high school in which you try to achieve the latest impeachment date for Trump by dodging various obstacles. Published it on Google Play, but have since taken it down.',
        link: 'https://github.com/JackTNorris/Commander-Impeach',
        tag: '🕹️ games',
        year: 2018,
        imageSrc: commander_impeach_img,
        technologiesUsed: ['Unity', 'C#']
    },
    {
        id: 'mountie-mobile',
        title: 'Mountie Mobile',
        description: 'A mobile app and website I made with some buddies in high school for keeping up with school events. Included push notifications, event calendars, and a custom CMS for event organizers. Worked with school administration to get it published on the app store and google play.',
        link: 'https://apps.apple.com/cl/app/mountie-mobile/id1479474681',
        tag: '🧠 general software',
        year: 2019,
        imageSrc: mountie_mobile_img,
        technologiesUsed: ['React Native', 'Firebase', 'Javascript']

    },
    {
        id: 'paper-route',
        title: 'Paper Route',
        description: 'A 2D side scroller game where you play as a small paper man trying to avoid rocks, scisors, and thumbtacks, built with Unity and C#, and left unfinished.',
        link: 'https://github.com/JackTNorris/Paper-Game',
        tag: '🕹️ games',
        year: 2019,
        imageSrc: paper_route_img,
        technologiesUsed: ['Unity', 'C#']
    },
    {
        id: 'atari-breakout',
        title: 'Atari Breakout',
        description: 'One of the first games I built from scratch: Atari Breakout clone built using a very rudimentary graphics library in C++ (only native function were putPixel calls). Features basic collision detection, scoring, and multiple "levels" of difficulty.',
        link: 'https://github.com/JackTNorris/Atari-Breakout',
        tag: '🕹️ games',
        year: 2017,
        imageSrc: atari_breakout_gif,
        technologiesUsed: ['C++']
    },
    {
        id: 'breadboard-computer',
        title: '8-Bit Computer on a Breadboard',
        description: 'An in progress 8-bit computer I started my senior year of college and have been working on while serving in the Peace Corps. Keep an eye out on my project blog for updates! Built with the kits and tutorials of Ben Eater.',
        tag: '💪 hardware',
        year: 2024,
        technologiesUsed: ['Assembly', 'Arduino'],
        imageSrc: breadboard_computer_img
    },
    {
        id: 'sictoc',
        title: 'SicToc',
        description: 'An app I built during the 2020 UARK hackathon that enabled users to send messages to people in their nearby vicinity to stimulate social connection. Won 1st place overall (and a pretty sick computer monitor!).',
        link: 'https://github.com/JackTNorris/SICTOC',
        tag: '🧠 general software',
        year: 2020,
        imageSrc: sictoc_img,
        technologiesUsed: ['React Native', 'Firebase', 'Javascript']
    },
    {
        id: 'chess',
        title: 'Chess',
        description: 'A lightweight chess game I built with vanilla javascript, HTML, and CSS. Currently features basic movement and capturing logic, with plans to implement check/checkmate detection, algorithmic notation, and an AI opponent. Currently building some backend logic for future online play',
        link: 'https://jacktnorris.dev/chess/',
        tag: '🕹️ games',
        year: 2025,
        technologiesUsed: ['Javascript', 'HTML/CSS', 'Express'],
        imageSrc: chess_img
    },
    {
        id: 'iron-man-helmet',
        title: 'Iron Man Helmet',
        description: 'An Arduino powered iron man helmet I built out of cardboard while in high school. Included moving faceplate and light up eyes. Designed the circuitry and hinge mechanism myself. Was a fun project that got me interested in hardware and embedded programming.',
        tag: '💪 hardware',
        year: 2017,
        imageSrc: iron_man_helmet_gif,
        technologiesUsed: ['Arduino', 'C++']
    },
    {
        id: 'android-swiss-army-knife',
        title: 'Android Swiss Army Knife',
        description: 'A multifunctional Android app I built with a team of student my junior year of college with a team using the MVVM paradigm. Features a metal detector, compass, barometer, speedometer, and a few other utility apps.',
        tag: '🧠 general software',
        year: 2023,
        link: 'https://github.com/JackTNorris/Android_Swiss_Army_Knife',
        imageSrc: swiss_army_knife_img,
        technologiesUsed: ['Kotlin']
    },
    {
        id: 'auto-differentiation-engine',
        title: 'Simple Automatic Differentiation Engine',
        description: 'A simple automatic differentiation engine I built to better understand the mathematics behind neural networks. Implemented from scratch in Python with NumPy, and subsequently tested by training a neural net on the MNIST dataset',
        link: 'https://github.com/JackTNorris/jtn-nn',
        tag: '🧪 research',
        year: 2025,
        imageSrc: autodiff_img,
        technologiesUsed: ['Python', 'NumPy']
    },
    {
        id: 'kitty-cam',
        title: 'Kitty Cam',
        description: 'A rudimentary app I built to keep an eye on my cat when away from home. Didn\'t want to buy a camera system, so this is designed to convert a spare cell phone into a camera. Features real-time serverless video streaming over WebRTC and authentication via Firebase Auth.',
        tag: '🧠 general software',
        year: 2024,
        imageSrc: kitty_cam_img,
        technologiesUsed: ['React Native', 'Firebase', 'WebRTC']
    },
    {
        id: 'vna-grapher',
        title: 'VNA Grapher',
        description: 'An Android app that interfaces over bluetooth with the ZEENKO Vector Network Analyzer. Uses Android Bluetooth API to both send a receive bluetooth signals from a VNA device. Developed over a summer while working part-time in Dr. Ryan Tian\'s UARK nanotechnology research lab.',
        tag: '🧠 general software',
        year: 2024,
        technologiesUsed: ['Kotlin'],
        link: 'https://github.com/JackTNorris/VNAGrapher/tree/main'
    },
    {
        id: 'sensus',
        title: 'Sensus',
        description: 'A mobile app x device I developed freshman year of college that used bluetooth low energy to measure the occupancy of a room. Developed and deployed BLE detection code to an ESP32 which interfaced with an MQTT server, allowing a React Native app I built to displayed occupancy updates in real time.',
        tag: '🧠 general software',
        year: 2021,
        imageSrc: sensus_img,
        technologiesUsed: ['React Native', 'ESP32', 'MQTT']
    },
    {
        id: 'computer-lab-for-peace-corps',
        title: 'Computer Lab for Peace Corps',
        description: 'Sourced and set up a small computer lab for a the high school in my community in rural Paraguay. Worked with community stakeholders to source devices via donations through programs like Labdoo, configured outdated Windows devices to run Ubuntu, and advocated with professors for the installation of Wi-Fi.',
        tag: '🔮 other',
        imageSrc: computer_lab_img,
        year: 2025,
    },
    {
        id: 'outdoor-gym-peace-corps',
        title: 'Outdoor Gym for Peace Corps',
        imageSrc: gym_img,
        description: 'Sourced and set up a small outdoor gym for my community in rural Paraguay. Worked with a local carpenter and professor to source materials and construction labor. Taught basic exercise and calisthenics to community members',
        tag: '🔮 other',
        year: 2025,
    },
    {
        id: 'acm-hackathon-website',
        title: 'ACM HogHacks Website',
        description: 'Co-developed a responsive website for the ACM HogHacks to convey event information, schedule, and sponsors to attendees. Built with React and hosted on GitHub pages.',
        link: 'https://uark-acm.github.io/hoghacks/',
        tag: '🧠 general software',
        year: 2024,
        imageSrc: hoghacks_img,
        technologiesUsed: ['React']
    },
    {
        id: 'community-library-peace-corps',
        title: 'Community Library for Peace Corps',
        description: 'Building a small library for the high school and escuela in my community in rural Paraguay. Coordinated the delivery of a 5000lb international book donation with my school\'s directora for use in 3 community libraries throughout Paraguay.',
        imageSrc: library_img,
        tag: '🔮 other',
        year: 2026,
    },
];
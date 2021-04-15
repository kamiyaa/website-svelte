import IBMSummary from "../data/experiences/IBMSummary.svelte";
import IBM from "../data/experiences/IBM.svelte";

import OPSSummary from "../data/experiences/OPSSummary.svelte";
import OPS from "../data/experiences/OPS.svelte";

import SpireTradingSummary from "./experiences/SpireTradingSummary.svelte";
import SpireTrading from "./experiences/SpireTrading.svelte";

import UofTSummary from "../data/experiences/UofTSummary.svelte";
import UofT from "../data/experiences/UofT.svelte";

const EXPERIENCE_LIST =
[
    {
        title: "Quantitative Software Developer",
        company: "SpireTrading",
        company_url: "https://spiretrading.com/",
        start_date: "May 2020",
        end_date: "Aug 2020",
        icon_url: "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/spiretrading_icon.png",
        tags: [
            "Python", "FSA", "Arbitrage", "Bitcoin", "TSX", "QBTC.U", "matplotlib", "numpy"
        ],
        summary: SpireTradingSummary,
        content: SpireTrading,
    },
    {
        title: "Open Source Runtime Developer",
        company: "IBM",
        company_url: "https://www.ibm.com/",
        start_date: "May 2019",
        end_date: "Apr 2020",
        icon_url: "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/ibm_icon.png",
        tags: [
            "C", "Java", "Docker", "Jenkins", "Appsody", "Maven", "Capstone", "Linux", "AIX",
            "z/OS", "PowerPC", "Systemz",
        ],
        summary: IBMSummary,
        content: IBM,
    },
    {
        title: "Teaching Assistant",
        company: "University of Toronto",
        company_url: "https://www.utoronto.ca/",
        start_date: "Sept 2017",
        end_date: "Dec 2019",
        icon_url: "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/uoft_icon.png",
        tags: [
            "C",
            "Python",
            "Java",
            "Shell",
            "SVN",
            "Design Patterns",
            "OOP/SOLID design",
            "Pipes/Sockets",
        ],
        summary: UofTSummary,
        content: UofT,
    },
    {
        title: "Application Programmer",
        company: "Ontario Public Service",
        company_url: "https://www.ontario.ca/",
        start_date: "May 2018",
        end_date: "Aug 2018",
        icon_url: "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/ontario_icon.jpg",
        tags: [
            "Java",
            "JasperReports",
            "Vbscript",
            "HP Quality Center",
            "HP UFT",
        ],
        summary: OPSSummary,
        content: OPS,
    },
];

export default EXPERIENCE_LIST;

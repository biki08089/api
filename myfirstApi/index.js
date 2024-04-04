const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/dataBase");
const PORT = process.env.PORT || 2089;
const cors = require("cors");
app.use(express.json());
app.use(cors());

console.log("fhdffddhdljhgkdfhgjfdkjghfdhghggdfghfghhghfghghfdhg");

app.listen(PORT, () => {
  console.log("We are running on " + PORT);
});
app.get("/page=1", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 3,
    blogs: [
      {
        id: 1,
        title: "Bias and Fairness in AI Algorithms",
        description:
          "This topic explores the challenges of bias in AI algorithms and the importance of ensuring fairness and equity in AI systems. It examines how biases in training data, algorithmic design, and decision-making processes can lead to discriminatory outcomes, perpetuate social inequalities, and undermine trust in AI technologies. Ethical considerations include identifying and mitigating biases, promoting diversity and inclusion in AI development teams, and implementing transparency and accountability measures to ensure fair and equitable AI systems.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231150/FutureAI/Ethical/eql1xtbjvqfz90rirtg4.png",
        tag: "EthicalUses",
      },
      {
        id: 2,
        title: "Transparency and Explainability in AI Decision-Making",
        description:
          "This topic focuses on the ethical imperative of transparency and explainability in AI systems to enable users to understand how decisions are made and to hold AI systems accountable for their actions. It examines challenges such as the opacity of complex AI algorithms, black-box decision-making processes, and the lack of interpretability in AI systems. Ethical considerations include developing transparent AI models, providing explanations for AI decisions, and empowering users to challenge and understand AI outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231148/FutureAI/Ethical/u69wkbz4k98obgbeefhi.jpg",
        tag: "EthicalUses",
      },
      {
        id: 3,
        title: "Privacy and Data Protection in AI Systems",
        description:
          "This topic explores the ethical implications of privacy and data protection in AI development, deployment, and use. It examines issues such as data collection, storage, sharing, and consent, as well as the risks of privacy violations, data breaches, and surveillance in AI systems. Ethical considerations include respecting individuals' privacy rights, implementing robust data protection measures, and ensuring informed consent and data governance frameworks to safeguard sensitive personal information in AI applications.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231147/FutureAI/Ethical/hr9dpy6cap2b4lahprff.jpg",
        tag: "EthicalUses",
      },
      {
        id: 4,
        title: "Accountability and Responsibility in AI Development",
        description:
          "This topic focuses on the ethical principles of accountability and responsibility in AI development and deployment processes. It examines challenges such as the attribution of responsibility for AI decisions, the liability of AI developers and users, and the need for mechanisms to address harms and errors caused by AI systems. Ethical considerations include establishing clear lines of accountability, defining legal and ethical responsibilities for AI stakeholders, and implementing mechanisms for recourse and redress in cases of AI-related harm or injustice.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231146/FutureAI/Ethical/nu2rcymyjh77gtcjc2qt.webp",
        tag: "EthicalUses",
      },
      {
        id: 5,
        title: "Ethical Use of AI in Autonomous Systems",
        description:
          "This topic explores the ethical dilemmas and societal implications of deploying AI in autonomous systems, including autonomous vehicles, drones, and robots. It examines challenges such as safety, liability, and moral decision-making in AI-driven autonomous systems, as well as the potential impacts on human autonomy, privacy, and dignity. Ethical considerations include designing AI systems with built-in safety mechanisms, adhering to ethical principles such as the principle of beneficence and non-maleficence, and fostering public dialogue and engagement on the ethical implications of autonomous AI technologies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231146/FutureAI/Ethical/geu4yvjbgnynyiqf0mfm.jpg",
        tag: "EthicalUses",
      },
      {
        id: 6,
        title: "Medical Imaging Analysis",
        description:
          " This topic involves the application of AI algorithms to analyze medical images such as X-rays, MRI scans, and CT scans. AI can assist radiologists in detecting abnormalities, diagnosing diseases, and monitoring treatment progress with higher accuracy and efficiency. The use of AI in medical imaging analysis can help improve diagnostic accuracy, reduce interpretation errors, and expedite patient care.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/kvhsipjtgvza9ch97wjj.jpg",
        tag: "health",
      },
      {
        id: 7,
        title: "Predictive Analytics for Patient Outcomes",
        description:
          " This topic focuses on using AI-driven predictive analytics to forecast patient outcomes and identify individuals at risk of developing certain diseases or medical conditions. By analyzing electronic health records, genetic data, and lifestyle factors, AI models can predict patient outcomes, such as hospital readmissions, disease progression, or adverse events. This proactive approach enables healthcare providers to intervene early, personalize treatment plans, and improve patient outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230959/FutureAI/Health/oei2teirfw335nbou0m2.webp",
        tag: "health",
      },
      {
        id: 8,
        title: "Drug Discovery and Development",
        description:
          " AI technologies are increasingly being used in pharmaceutical research and development to accelerate the discovery and optimization of new drugs and therapies. AI algorithms analyze biological data, chemical structures, and clinical trial data to identify potential drug candidates, predict their efficacy and safety profiles, and optimize drug design. AI-driven drug discovery can help expedite the development of novel treatments, reduce research and development costs, and address unmet medical needs more effectively.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230960/FutureAI/Health/g5qtb5w0rdcryudiiwh9.png",
        tag: "health",
      },
      {
        id: 9,
        title: "Remote Patient Monitoring",
        description:
          " This topic involves the use of AI-powered remote monitoring devices and wearable sensors to track patients' health metrics and vital signs outside of traditional clinical settings. AI algorithms analyze real-time data streams, such as heart rate, blood pressure, and activity levels, to detect changes in health status and alert healthcare providers to potential issues. Remote patient monitoring using AI enables early intervention, improves patient engagement, and facilitates personalized care delivery, particularly for individuals with chronic conditions or those requiring post-acute care.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/sd3whm6ddmazwsh7wbbf.webp",
        tag: "health",
      },
      {
        id: 10,
        title: "Personalized Medicine and Treatment Planning",
        description:
          " This topic explores the use of AI-driven personalized medicine approaches to tailor treatment plans and interventions to individual patients' genetic, molecular, and clinical profiles. AI algorithms analyze patient data, including genomic information, biomarkers, and treatment responses, to identify optimal treatment strategies and predict patient outcomes. Personalized medicine powered by AI enables precision diagnostics, targeted therapies, and individualized care pathways, leading to improved treatment efficacy, fewer adverse effects, and better patient outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/qhpzrktbb9x2icjk5xoo.jpg",
        tag: "health",
      },
    ],
  };
  res.json(aiData);
});

app.get("/page=2", (req, res) => {
  const aiData = {
    page: 2,
    totalpages: 3,
    blogs: [
      {
        id: 11,
        title: "Autonomous Vehicle Perception and Decision-Making",
        description:
          " This topic focuses on the development of AI algorithms for perception and decision-making in autonomous vehicles. It covers techniques such as computer vision, sensor fusion, and deep learning to enable vehicles to perceive their environment, detect objects, and make real-time decisions to navigate safely and efficiently.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/sigqzpfexz6cuhfwv4tn.jpg",
        tag: "autonomous",
      },
      {
        id: 12,
        title: "Safety and Reliability in Autonomous Driving Systems",
        description:
          " This topic explores the challenges and approaches to ensuring the safety and reliability of autonomous driving systems. It addresses issues such as robustness to adverse conditions, validation and verification of AI algorithms, fail-safe mechanisms, and risk assessment methodologies to mitigate the potential hazards associated with autonomous vehicles.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/xh72weztvxudaqso7uut.webp",
        tag: "autonomous",
      },
      {
        id: 13,
        title: "Regulatory and Legal Frameworks for Autonomous Vehicles",
        description:
          " This topic examines the regulatory and legal considerations surrounding the deployment and operation of autonomous vehicles. It covers topics such as liability, insurance, licensing, and compliance with existing traffic laws and regulations, as well as the need for new legislation and standards to address the unique challenges posed by autonomous driving technologies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/boosarby0r7xdvvs9tib.jpg",
        tag: "autonomous",
      },
      {
        id: 14,
        title: "Ethical Dilemmas in Autonomous Vehicle Decision-Making",
        description:
          " This topic explores the ethical dilemmas faced by autonomous vehicles when making critical decisions in complex scenarios. It discusses issues such as moral reasoning, prioritization of human safety, and trade-offs between different ethical principles, as well as societal expectations and cultural differences in ethical norms regarding autonomous driving behavior.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/vh8dmfewhlsigyjoothl.jpg",
        tag: "autonomous",
      },
      {
        id: 15,
        title: "Integration of Autonomous Vehicles into Urban Mobility Systems",
        description:
          " This topic focuses on the integration of autonomous vehicles into existing urban mobility systems, including public transportation networks, ride-sharing services, and smart city infrastructure. It examines the potential benefits of autonomous mobility, such as reduced traffic congestion, improved accessibility, and enhanced transportation equity, as well as challenges related to infrastructure adaptation, public acceptance, and socioeconomic impacts.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230787/FutureAI/Autonomous/xishjv77zghby9dijgjr.jpg",
        tag: "autonomous",
      },
      {
        id: 16,
        title: "Algorithmic Trading and High-Frequency Trading",
        description:
          " This topic explores the use of AI algorithms in algorithmic trading and high-frequency trading (HFT) to analyze market data, execute trades, and manage portfolios at high speeds and frequencies. AI-driven trading systems leverage machine learning, natural language processing, and predictive analytics to identify market trends, execute buy or sell orders, and optimize trading strategies, leading to improved trading performance and risk management.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230610/FutureAI/Trading/yzbzq5wmwvsx4j85vymn.jpg",
        tag: "trading",
      },
      {
        id: 17,
        title: "Fraud Detection and Prevention",
        description:
          " This topic focuses on the application of AI techniques such as machine learning and anomaly detection to detect and prevent fraudulent activities in financial transactions and operations. AI-driven fraud detection systems analyze large volumes of transactional data, identify suspicious patterns or behaviors, and flag potentially fraudulent activities in real time, enabling financial institutions to mitigate risks, protect assets, and safeguard customer trust.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230611/FutureAI/Trading/vkzsiem5ce1jwyxd7x4p.webp",
        tag: "trading",
      },
      {
        id: 18,
        title: "Credit Scoring and Risk Assessment",
        description:
          " This topic examines the use of AI-based credit scoring models and risk assessment tools to evaluate borrowers' creditworthiness and assess the likelihood of default or delinquency. AI algorithms analyze diverse data sources, including financial history, credit reports, and alternative data sources, to generate predictive credit scores and risk profiles, enabling lenders to make informed lending decisions, manage credit risk, and enhance loan portfolio performance.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230611/FutureAI/Trading/bk0ryxnxufsbowlztwri.webp",
        tag: "trading",
      },
      {
        id: 19,
        title: "Personalized Financial Advice and Wealth Management",
        description:
          " This topic explores the use of AI-powered robo-advisors and digital wealth management platforms to deliver personalized financial advice and investment strategies to individual investors. AI algorithms analyze investors' financial goals, risk tolerance, and market preferences to recommend diversified investment portfolios, optimize asset allocations, and automate portfolio rebalancing, providing cost-effective and accessible wealth management solutions.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230616/FutureAI/Trading/n4czu8isry4fywldsdzm.png",
        tag: "trading",
      },
      {
        id: 20,
        title: "Compliance and Regulatory Reporting",
        description:
          " This topic focuses on the role of AI technologies in automating compliance processes and regulatory reporting requirements in the financial industry. AI-driven compliance solutions leverage natural language processing, pattern recognition, and data analytics to interpret regulatory guidelines, monitor transactions for compliance violations, and generate accurate and timely regulatory reports, helping financial institutions adhere to regulatory standards, mitigate compliance risks, and streamline regulatory compliance processes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230616/FutureAI/Trading/jmcu1nvahwg4ad3bfnhm.jpg",
        tag: "trading",
      },
    ],
  };
  res.json(aiData);
});

app.get("/page=3", (req, res) => {
  const aiData = {
    page: 3,
    totalpages: 3,
    blogs: [
      {
        id: 21,
        title: "Climate Modeling and Prediction",
        description:
          " This topic involves the use of AI and machine learning techniques to improve climate modeling and prediction. AI algorithms analyze complex climate data, such as temperature, precipitation, and atmospheric dynamics, to generate more accurate forecasts of future climate patterns and trends. Enhanced climate prediction capabilities enable policymakers, researchers, and stakeholders to better understand climate change impacts, assess risks, and develop effective mitigation and adaptation strategies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230290/FutureAI/Climate/k9zwettlkfjlfvzmivap.jpg",
        tag: "climate",
      },
      {
        id: 22,
        title: "Renewable Energy Optimization",
        description:
          " This topic focuses on leveraging AI technologies to optimize the integration and management of renewable energy sources, such as solar, wind, and hydroelectric power, into the energy grid. AI algorithms analyze data on energy production, demand, and storage to optimize the operation of renewable energy systems, improve energy efficiency, and maximize renewable energy utilization. By facilitating the transition to clean and sustainable energy sources, AI contributes to reducing greenhouse gas emissions and mitigating climate change.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230293/FutureAI/Climate/bmhcktro6pd5fmfcjcn6.webp",
        tag: "climate",
      },
      {
        id: 23,
        title: "Climate Monitoring and Adaptation",
        description:
          " This topic explores the use of AI-powered monitoring systems to track environmental changes, assess climate impacts, and support climate adaptation efforts. AI algorithms analyze satellite imagery, sensor data, and other environmental datasets to monitor changes in land use, biodiversity, and ecosystem health. By providing real-time insights into environmental trends and vulnerabilities, AI helps policymakers and communities make informed decisions and implement adaptive measures to mitigate the effects of climate change.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230290/FutureAI/Climate/irncsthmyjf76xj6yxpu.jpg",
        tag: "climate",
      },
      {
        id: 24,
        title: "Natural Disaster Prediction and Response",
        description:
          "This topic involves the application of AI techniques for predicting and mitigating the impacts of natural disasters, such as hurricanes, wildfires, and floods, exacerbated by climate change. AI algorithms analyze geospatial data, weather patterns, and historical disaster records to forecast the likelihood and severity of extreme events, enabling early warning systems and emergency preparedness efforts. AI-driven disaster response systems facilitate rapid deployment of resources, coordination of rescue operations, and recovery efforts in affected areas, reducing human casualties and property damage.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230289/FutureAI/Climate/slcrpbbnhq6srl2kvaaj.avif",
        tag: "climate",
      },
      {
        id: 25,
        title: "Carbon Emission Reduction and Climate Policy",
        description:
          " This topic examines the role of AI in developing innovative solutions for reducing carbon emissions and informing climate policy decisions. AI-powered tools analyze data on energy consumption, transportation patterns, and industrial processes to identify opportunities for emissions reduction and optimize resource allocation. Additionally, AI-enabled climate models simulate the potential impacts of different policy interventions, helping policymakers evaluate the effectiveness of mitigation strategies and prioritize actions to achieve climate goals.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230289/FutureAI/Climate/hkedgthkbl0ykfg4ywbj.avif",
        tag: "climate",
      },
      {
        id: 26,
        title: "Personalized Learning and Adaptive Education",
        description:
          " This topic explores the use of AI technologies to personalize learning experiences and adapt educational content to individual students' needs, preferences, and learning styles. AI algorithms analyze students' performance data, learning progress, and cognitive profiles to deliver personalized recommendations, adaptive learning pathways, and targeted interventions, enhancing engagement, mastery, and retention of educational concepts.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230076/FutureAI/Education/icuagpft94ztgjc2bqj7.jpg",
        tag: "education",
      },
      {
        id: 27,
        title: "Intelligent Tutoring Systems",
        description:
          " This topic focuses on the development of AI-driven intelligent tutoring systems (ITS) that provide individualized instruction, feedback, and support to students in various subjects and domains. ITS leverage machine learning, natural language processing, and educational data mining techniques to simulate human tutoring interactions, diagnose students' learning difficulties, and scaffold learning activities, fostering deeper understanding and mastery of academic content.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230076/FutureAI/Education/cc0rvtpdxrrbbxsutanq.jpg",
        tag: "education",
      },
      {
        id: 28,
        title: "Automated Grading and Assessment",
        description:
          " This topic examines the application of AI technologies for automating grading and assessment processes in education. AI algorithms analyze students' written responses, quizzes, and assignments, using natural language processing and machine learning techniques to assess comprehension, provide feedback, and evaluate learning outcomes accurately and efficiently. Automated grading systems save educators time, enable timely feedback, and support formative assessment practices.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230076/FutureAI/Education/lcj7mva5ghw7szslsvyt.webp",
        tag: "education",
      },
      {
        id: 29,
        title: "Educational Data Analytics and Predictive Modeling",
        description:
          " This topic explores the use of AI-driven educational data analytics and predictive modeling to analyze large-scale educational data sets and derive actionable insights for improving teaching and learning outcomes. AI algorithms analyze student performance data, demographic information, and learning behaviors to identify patterns, predict academic success, and inform instructional decision-making, enabling educators to tailor interventions and support strategies to students' needs proactively.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230077/FutureAI/Education/l89bmzndxeksav7w3awm.jpg",
        tag: "education",
      },
      {
        id: 30,
        title: "Virtual Teaching Assistants and Chatbots",
        description:
          " This topic examines the role of AI-powered virtual teaching assistants and chatbots in providing on-demand support, information, and guidance to students and educators. Virtual assistants leverage natural language processing and conversational AI techniques to answer questions, provide explanations, and assist with administrative tasks, enhancing access to educational resources, fostering self-directed learning, and promoting teacher-student interactions in digital learning environments.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230080/FutureAI/Education/bioc6dfsxl6xmrnbc6kc.png",
        tag: "education",
      },
    ],
  };
  res.json(aiData);
});

app.get("/ethicaluse", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 1,
    blogs: [
      {
        id: 1,
        title: "Bias and Fairness in AI Algorithms",
        description:
          "This topic explores the challenges of bias in AI algorithms and the importance of ensuring fairness and equity in AI systems. It examines how biases in training data, algorithmic design, and decision-making processes can lead to discriminatory outcomes, perpetuate social inequalities, and undermine trust in AI technologies. Ethical considerations include identifying and mitigating biases, promoting diversity and inclusion in AI development teams, and implementing transparency and accountability measures to ensure fair and equitable AI systems.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231150/FutureAI/Ethical/eql1xtbjvqfz90rirtg4.png",
        tag: "EthicalUses",
      },
      {
        id: 2,
        title: "Transparency and Explainability in AI Decision-Making",
        description:
          "This topic focuses on the ethical imperative of transparency and explainability in AI systems to enable users to understand how decisions are made and to hold AI systems accountable for their actions. It examines challenges such as the opacity of complex AI algorithms, black-box decision-making processes, and the lack of interpretability in AI systems. Ethical considerations include developing transparent AI models, providing explanations for AI decisions, and empowering users to challenge and understand AI outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231148/FutureAI/Ethical/u69wkbz4k98obgbeefhi.jpg",
        tag: "EthicalUses",
      },
      {
        id: 3,
        title: "Privacy and Data Protection in AI Systems",
        description:
          "This topic explores the ethical implications of privacy and data protection in AI development, deployment, and use. It examines issues such as data collection, storage, sharing, and consent, as well as the risks of privacy violations, data breaches, and surveillance in AI systems. Ethical considerations include respecting individuals' privacy rights, implementing robust data protection measures, and ensuring informed consent and data governance frameworks to safeguard sensitive personal information in AI applications.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231147/FutureAI/Ethical/hr9dpy6cap2b4lahprff.jpg",
        tag: "EthicalUses",
      },
      {
        id: 4,
        title: "Accountability and Responsibility in AI Development",
        description:
          "This topic focuses on the ethical principles of accountability and responsibility in AI development and deployment processes. It examines challenges such as the attribution of responsibility for AI decisions, the liability of AI developers and users, and the need for mechanisms to address harms and errors caused by AI systems. Ethical considerations include establishing clear lines of accountability, defining legal and ethical responsibilities for AI stakeholders, and implementing mechanisms for recourse and redress in cases of AI-related harm or injustice.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231146/FutureAI/Ethical/nu2rcymyjh77gtcjc2qt.webp",
        tag: "EthicalUses",
      },
      {
        id: 5,
        title: "Ethical Use of AI in Autonomous Systems",
        description:
          "This topic explores the ethical dilemmas and societal implications of deploying AI in autonomous systems, including autonomous vehicles, drones, and robots. It examines challenges such as safety, liability, and moral decision-making in AI-driven autonomous systems, as well as the potential impacts on human autonomy, privacy, and dignity. Ethical considerations include designing AI systems with built-in safety mechanisms, adhering to ethical principles such as the principle of beneficence and non-maleficence, and fostering public dialogue and engagement on the ethical implications of autonomous AI technologies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712231146/FutureAI/Ethical/geu4yvjbgnynyiqf0mfm.jpg",
        tag: "EthicalUses",
      },
    ],
  };
  res.json(aiData);
});
app.get("/health", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 1,
    blogs: [
      {
        id: 6,
        title: "Medical Imaging Analysis",
        description:
          " This topic involves the application of AI algorithms to analyze medical images such as X-rays, MRI scans, and CT scans. AI can assist radiologists in detecting abnormalities, diagnosing diseases, and monitoring treatment progress with higher accuracy and efficiency. The use of AI in medical imaging analysis can help improve diagnostic accuracy, reduce interpretation errors, and expedite patient care.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/kvhsipjtgvza9ch97wjj.jpg",
        tag: "health",
      },
      {
        id: 7,
        title: "Predictive Analytics for Patient Outcomes",
        description:
          " This topic focuses on using AI-driven predictive analytics to forecast patient outcomes and identify individuals at risk of developing certain diseases or medical conditions. By analyzing electronic health records, genetic data, and lifestyle factors, AI models can predict patient outcomes, such as hospital readmissions, disease progression, or adverse events. This proactive approach enables healthcare providers to intervene early, personalize treatment plans, and improve patient outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230959/FutureAI/Health/oei2teirfw335nbou0m2.webp",
        tag: "health",
      },
      {
        id: 8,
        title: "Drug Discovery and Development",
        description:
          " AI technologies are increasingly being used in pharmaceutical research and development to accelerate the discovery and optimization of new drugs and therapies. AI algorithms analyze biological data, chemical structures, and clinical trial data to identify potential drug candidates, predict their efficacy and safety profiles, and optimize drug design. AI-driven drug discovery can help expedite the development of novel treatments, reduce research and development costs, and address unmet medical needs more effectively.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230960/FutureAI/Health/g5qtb5w0rdcryudiiwh9.png",
        tag: "health",
      },
      {
        id: 9,
        title: "Remote Patient Monitoring",
        description:
          " This topic involves the use of AI-powered remote monitoring devices and wearable sensors to track patients' health metrics and vital signs outside of traditional clinical settings. AI algorithms analyze real-time data streams, such as heart rate, blood pressure, and activity levels, to detect changes in health status and alert healthcare providers to potential issues. Remote patient monitoring using AI enables early intervention, improves patient engagement, and facilitates personalized care delivery, particularly for individuals with chronic conditions or those requiring post-acute care.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/sd3whm6ddmazwsh7wbbf.webp",
        tag: "health",
      },
      {
        id: 10,
        title: "Personalized Medicine and Treatment Planning",
        description:
          " This topic explores the use of AI-driven personalized medicine approaches to tailor treatment plans and interventions to individual patients' genetic, molecular, and clinical profiles. AI algorithms analyze patient data, including genomic information, biomarkers, and treatment responses, to identify optimal treatment strategies and predict patient outcomes. Personalized medicine powered by AI enables precision diagnostics, targeted therapies, and individualized care pathways, leading to improved treatment efficacy, fewer adverse effects, and better patient outcomes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230958/FutureAI/Health/qhpzrktbb9x2icjk5xoo.jpg",
        tag: "health",
      },
    ],
  };
  res.json(aiData);
});
app.get("/autonomous", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 1,
    blogs: [
      {
        id: 11,
        title: "Autonomous Vehicle Perception and Decision-Making",
        description:
          " This topic focuses on the development of AI algorithms for perception and decision-making in autonomous vehicles. It covers techniques such as computer vision, sensor fusion, and deep learning to enable vehicles to perceive their environment, detect objects, and make real-time decisions to navigate safely and efficiently.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/sigqzpfexz6cuhfwv4tn.jpg",
        tag: "autonomous",
      },
      {
        id: 12,
        title: "Safety and Reliability in Autonomous Driving Systems",
        description:
          " This topic explores the challenges and approaches to ensuring the safety and reliability of autonomous driving systems. It addresses issues such as robustness to adverse conditions, validation and verification of AI algorithms, fail-safe mechanisms, and risk assessment methodologies to mitigate the potential hazards associated with autonomous vehicles.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/xh72weztvxudaqso7uut.webp",
        tag: "autonomous",
      },
      {
        id: 13,
        title: "Regulatory and Legal Frameworks for Autonomous Vehicles",
        description:
          " This topic examines the regulatory and legal considerations surrounding the deployment and operation of autonomous vehicles. It covers topics such as liability, insurance, licensing, and compliance with existing traffic laws and regulations, as well as the need for new legislation and standards to address the unique challenges posed by autonomous driving technologies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/boosarby0r7xdvvs9tib.jpg",
        tag: "autonomous",
      },
      {
        id: 14,
        title: "Ethical Dilemmas in Autonomous Vehicle Decision-Making",
        description:
          " This topic explores the ethical dilemmas faced by autonomous vehicles when making critical decisions in complex scenarios. It discusses issues such as moral reasoning, prioritization of human safety, and trade-offs between different ethical principles, as well as societal expectations and cultural differences in ethical norms regarding autonomous driving behavior.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230788/FutureAI/Autonomous/vh8dmfewhlsigyjoothl.jpg",
        tag: "autonomous",
      },
      {
        id: 15,
        title: "Integration of Autonomous Vehicles into Urban Mobility Systems",
        description:
          " This topic focuses on the integration of autonomous vehicles into existing urban mobility systems, including public transportation networks, ride-sharing services, and smart city infrastructure. It examines the potential benefits of autonomous mobility, such as reduced traffic congestion, improved accessibility, and enhanced transportation equity, as well as challenges related to infrastructure adaptation, public acceptance, and socioeconomic impacts.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230787/FutureAI/Autonomous/xishjv77zghby9dijgjr.jpg",
        tag: "autonomous",
      },
    ],
  };
  res.json(aiData);
});
app.get("/trading", (req, res) => {
  const aiData = {
    page: 1,
    totalpages:1,
    blogs: [
      {
        id: 16,
        title: "Algorithmic Trading and High-Frequency Trading",
        description:
          " This topic explores the use of AI algorithms in algorithmic trading and high-frequency trading (HFT) to analyze market data, execute trades, and manage portfolios at high speeds and frequencies. AI-driven trading systems leverage machine learning, natural language processing, and predictive analytics to identify market trends, execute buy or sell orders, and optimize trading strategies, leading to improved trading performance and risk management.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230610/FutureAI/Trading/yzbzq5wmwvsx4j85vymn.jpg",
        tag: "trading",
      },
      {
        id: 17,
        title: "Fraud Detection and Prevention",
        description:
          " This topic focuses on the application of AI techniques such as machine learning and anomaly detection to detect and prevent fraudulent activities in financial transactions and operations. AI-driven fraud detection systems analyze large volumes of transactional data, identify suspicious patterns or behaviors, and flag potentially fraudulent activities in real time, enabling financial institutions to mitigate risks, protect assets, and safeguard customer trust.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230611/FutureAI/Trading/vkzsiem5ce1jwyxd7x4p.webp",
        tag: "trading",
      },
      {
        id: 18,
        title: "Credit Scoring and Risk Assessment",
        description:
          " This topic examines the use of AI-based credit scoring models and risk assessment tools to evaluate borrowers' creditworthiness and assess the likelihood of default or delinquency. AI algorithms analyze diverse data sources, including financial history, credit reports, and alternative data sources, to generate predictive credit scores and risk profiles, enabling lenders to make informed lending decisions, manage credit risk, and enhance loan portfolio performance.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230611/FutureAI/Trading/bk0ryxnxufsbowlztwri.webp",
        tag: "trading",
      },
      {
        id: 19,
        title: "Personalized Financial Advice and Wealth Management",
        description:
          " This topic explores the use of AI-powered robo-advisors and digital wealth management platforms to deliver personalized financial advice and investment strategies to individual investors. AI algorithms analyze investors' financial goals, risk tolerance, and market preferences to recommend diversified investment portfolios, optimize asset allocations, and automate portfolio rebalancing, providing cost-effective and accessible wealth management solutions.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230616/FutureAI/Trading/n4czu8isry4fywldsdzm.png",
        tag: "trading",
      },
      {
        id: 20,
        title: "Compliance and Regulatory Reporting",
        description:
          " This topic focuses on the role of AI technologies in automating compliance processes and regulatory reporting requirements in the financial industry. AI-driven compliance solutions leverage natural language processing, pattern recognition, and data analytics to interpret regulatory guidelines, monitor transactions for compliance violations, and generate accurate and timely regulatory reports, helping financial institutions adhere to regulatory standards, mitigate compliance risks, and streamline regulatory compliance processes.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230616/FutureAI/Trading/jmcu1nvahwg4ad3bfnhm.jpg",
        tag: "trading",
      },
    ],
  };
  res.json(aiData);
});
app.get("/climate", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 1,
    blogs: [
      {
        id: 21,
        title: "Climate Modeling and Prediction",
        description:
          " This topic involves the use of AI and machine learning techniques to improve climate modeling and prediction. AI algorithms analyze complex climate data, such as temperature, precipitation, and atmospheric dynamics, to generate more accurate forecasts of future climate patterns and trends. Enhanced climate prediction capabilities enable policymakers, researchers, and stakeholders to better understand climate change impacts, assess risks, and develop effective mitigation and adaptation strategies.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230290/FutureAI/Climate/k9zwettlkfjlfvzmivap.jpg",
        tag: "climate",
      },
      {
        id: 22,
        title: "Renewable Energy Optimization",
        description:
          " This topic focuses on leveraging AI technologies to optimize the integration and management of renewable energy sources, such as solar, wind, and hydroelectric power, into the energy grid. AI algorithms analyze data on energy production, demand, and storage to optimize the operation of renewable energy systems, improve energy efficiency, and maximize renewable energy utilization. By facilitating the transition to clean and sustainable energy sources, AI contributes to reducing greenhouse gas emissions and mitigating climate change.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230293/FutureAI/Climate/bmhcktro6pd5fmfcjcn6.webp",
        tag: "climate",
      },
      {
        id: 23,
        title: "Climate Monitoring and Adaptation",
        description:
          " This topic explores the use of AI-powered monitoring systems to track environmental changes, assess climate impacts, and support climate adaptation efforts. AI algorithms analyze satellite imagery, sensor data, and other environmental datasets to monitor changes in land use, biodiversity, and ecosystem health. By providing real-time insights into environmental trends and vulnerabilities, AI helps policymakers and communities make informed decisions and implement adaptive measures to mitigate the effects of climate change.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230290/FutureAI/Climate/irncsthmyjf76xj6yxpu.jpg",
        tag: "climate",
      },
      {
        id: 24,
        title: "Natural Disaster Prediction and Response",
        description:
          "This topic involves the application of AI techniques for predicting and mitigating the impacts of natural disasters, such as hurricanes, wildfires, and floods, exacerbated by climate change. AI algorithms analyze geospatial data, weather patterns, and historical disaster records to forecast the likelihood and severity of extreme events, enabling early warning systems and emergency preparedness efforts. AI-driven disaster response systems facilitate rapid deployment of resources, coordination of rescue operations, and recovery efforts in affected areas, reducing human casualties and property damage.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230289/FutureAI/Climate/slcrpbbnhq6srl2kvaaj.avif",
        tag: "climate",
      },
      {
        id: 25,
        title: "Carbon Emission Reduction and Climate Policy",
        description:
          " This topic examines the role of AI in developing innovative solutions for reducing carbon emissions and informing climate policy decisions. AI-powered tools analyze data on energy consumption, transportation patterns, and industrial processes to identify opportunities for emissions reduction and optimize resource allocation. Additionally, AI-enabled climate models simulate the potential impacts of different policy interventions, helping policymakers evaluate the effectiveness of mitigation strategies and prioritize actions to achieve climate goals.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230289/FutureAI/Climate/hkedgthkbl0ykfg4ywbj.avif",
        tag: "climate",
      }
    ],
  };
  res.json(aiData);
});
app.get("/education", (req, res) => {
  const aiData = {
    page: 1,
    totalpages: 1,
    blogs: [
      {
        id: 27,
        title: "Intelligent Tutoring Systems",
        description:
          " This topic focuses on the development of AI-driven intelligent tutoring systems (ITS) that provide individualized instruction, feedback, and support to students in various subjects and domains. ITS leverage machine learning, natural language processing, and educational data mining techniques to simulate human tutoring interactions, diagnose students' learning difficulties, and scaffold learning activities, fostering deeper understanding and mastery of academic content.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230076/FutureAI/Education/cc0rvtpdxrrbbxsutanq.jpg",
        tag: "education",
      },
      {
        id: 28,
        title: "Automated Grading and Assessment",
        description:
          " This topic examines the application of AI technologies for automating grading and assessment processes in education. AI algorithms analyze students' written responses, quizzes, and assignments, using natural language processing and machine learning techniques to assess comprehension, provide feedback, and evaluate learning outcomes accurately and efficiently. Automated grading systems save educators time, enable timely feedback, and support formative assessment practices.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230076/FutureAI/Education/lcj7mva5ghw7szslsvyt.webp",
        tag: "education",
      },
      {
        id: 29,
        title: "Educational Data Analytics and Predictive Modeling",
        description:
          " This topic explores the use of AI-driven educational data analytics and predictive modeling to analyze large-scale educational data sets and derive actionable insights for improving teaching and learning outcomes. AI algorithms analyze student performance data, demographic information, and learning behaviors to identify patterns, predict academic success, and inform instructional decision-making, enabling educators to tailor interventions and support strategies to students' needs proactively.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230077/FutureAI/Education/l89bmzndxeksav7w3awm.jpg",
        tag: "education",
      },
      {
        id: 30,
        title: "Virtual Teaching Assistants and Chatbots",
        description:
          " This topic examines the role of AI-powered virtual teaching assistants and chatbots in providing on-demand support, information, and guidance to students and educators. Virtual assistants leverage natural language processing and conversational AI techniques to answer questions, provide explanations, and assist with administrative tasks, enhancing access to educational resources, fostering self-directed learning, and promoting teacher-student interactions in digital learning environments.",
        image: "https://res.cloudinary.com/dnw1ttr02/image/upload/v1712230080/FutureAI/Education/bioc6dfsxl6xmrnbc6kc.png",
        tag: "education",
      },
    ],
  };
  res.json(aiData);
});

dbConnect();

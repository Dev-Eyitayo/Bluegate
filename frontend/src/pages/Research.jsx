import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const behaviouralSlides = [
    {
        image: "/assets/updatedImages/ImplementationResearch.jpg",
        title: "",
    },
    {
        image: "/assets/updatedImages/ImplementationResearch2.jpg",
        title: "",
    }
];

const environmentSlides = [
    {
        image: "/assets/updatedImages/EnvironmentalResearch1.jpg",
        title: "",
    },
    {
        image: "/assets/updatedImages/EnvironmentalResearch2.jpg",
        title: "",
    }
];

export default function Research() {
    return (
        <div className="min-h-screen bg-sky-200/10 text-gray-800">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold text-sky-800 mb-6">
                    Research Services
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                    Evidence-driven insights for stronger public health policies and interventions.
                </p>
            </section>

            {/* Introduction */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-20">
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-sky-100 shadow-sm">
                    <p className="text-slate-700 leading-relaxed text-justify mb-6">
                        At <strong>Blue Gate Public Health Promotion Initiative</strong>, we believe that <strong>effective public health solutions must be grounded in evidence</strong>. Our research services are designed to provide <em>actionable insights</em> that inform policies, improve interventions, and strengthen community health outcomes.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-justify mb-6">
                        We work with <strong>government agencies, NGOs, international development partners, and academic institutions</strong> to design and implement rigorous research studies tailored to local contexts.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-justify font-medium text-sky-800">
                        Our research approach emphasizes <strong>participatory methods, ethical rigor, and real-world applicability</strong>, ensuring that findings translate into <em>lasting impact</em>.
                    </p>
                </div>
            </section>

            {/* Our Research Services - Single Column */}
            <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-32">
                <h2 className="text-2xl font-bold text-sky-800 text-center">
                    Our Research Services
                </h2>

                {/* 1. Behavioural and Social Research */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-xl text-left font-bold text-sky-800 mb-6">
                            1. Behavioural and Social Research
                        </h3>
                    </div>

                    {/* Image First */}
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
                        <ImageCarousel slides={behaviouralSlides} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-slate-700">
                        <p className="leading-relaxed">
                            We conduct high-quality behavioural and social research to understand the factors that shape health practices and community decision-making.
                        </p>

                        <div>
                            <p className="font-semibold mb-3">Our work explores:</p>
                            <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-sky-600">
                                <li>Health-seeking behaviours</li>
                                <li>Gender norms and social dynamics</li>
                                <li>Risk perception and communication patterns</li>
                                <li>Cultural and community influences on public health outcomes</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold mt-6 mb-3">Methods include:</p>
                            <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-sky-600">
                                <li>Surveys and structured interviews</li>
                                <li>Focus group discussions</li>
                                <li>Participatory action research</li>
                                <li>Ethnographic studies</li>
                                <li>Human-centered design approaches</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. RCTs and Impact Evaluation */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-xl text-left font-bold text-sky-800 mb-6">
                            2. Randomized Controlled Trials (RCTs) & Impact Evaluation
                        </h3>
                    </div>

                    {/* Placeholder Image */}
                    {/* <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-200 shadow-md">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                            <p className="text-slate-500 text-lg">[RCT Study Design Image]</p>
                        </div>
                    </div> */}

                    <div className="space-y-6 text-slate-700">
                        <p className="leading-relaxed">
                            We design and implement <strong>Randomized Controlled Trials (RCTs)</strong> and <strong>mixed-method impact evaluations</strong> to rigorously assess the effectiveness of public health interventions.
                        </p>

                        <div>
                            <p className="font-semibold mb-3">Our services include:</p>
                            <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-sky-600">
                                <li>Study design and protocol development</li>
                                <li>Randomization strategy and sampling</li>
                                <li>Baseline and endline data collection</li>
                                <li>Process evaluation and monitoring</li>
                                <li>Statistical analysis and reporting</li>
                            </ul>
                        </div>

                        <p className="italic mt-6">
                            <strong>Outcome:</strong> Clear, credible evidence on <em>what works, for whom, and under what conditions</em> — enabling partners to scale effective programs and refine or discontinue ineffective ones.
                        </p>
                    </div>
                </div>

                {/* 3. Environmental & Toxicology Research */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-xl text-left font-bold text-sky-800 mb-6">
                            3. Environmental & Toxicology Research
                        </h3>
                    </div>

                    {/* Image First */}
                    {/* <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
                        <ImageCarousel slides={environmentSlides} />
                    </div> */}

                    <div className="space-y-6 text-slate-700">
                        <p className="leading-relaxed">
                            We investigate how <strong>environmental exposures and ecological conditions</strong> influence disease patterns and public health outcomes. Our research examines the interactions between environmental hazards, human behavior, and biological responses — enabling partners to design policies and programs that <strong>protect communities and prevent disease</strong>.
                        </p>

                        <div>
                            <p className="font-semibold mb-3">Focus Areas:</p>
                            <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-sky-600">
                                <li>Water, Sanitation and Hygiene (WASH)</li>
                                <li>Air quality and atmospheric pollution</li>
                                <li>Solid waste and hazardous waste management</li>
                                <li>Occupational and community exposure assessments</li>
                                <li>Climate change vulnerability and resilience</li>
                                <li>Environmental Toxicology and Non-Communicable Diseases (NCDs)</li>
                            </ul>
                        </div>

                        {/* Highlight Box */}
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-3 text-lg">
                                Environmental Toxicology and NCD Risk
                            </h4>
                            <p className="text-sm mb-4">
                                We explore how environmental toxicants — including <strong>heavy metals, pesticides, endocrine-disrupting chemicals, industrial emissions, and contaminated food/water sources</strong> — contribute to the rising burden of non-communicable diseases such as:
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                                <div>• Hypertension & CVD</div>
                                <div>• Diabetes</div>
                                <div>• Cancers</div>
                                <div>• Reproductive disorders</div>
                                <div>• Developmental conditions</div>
                                <div>• Neurological disorders</div>
                            </div>

                            <p className="font-semibold mt-5 text-sm">Our Capabilities:</p>
                            <ul className="text-sm text-slate-600 space-y-1 mt-3 list-disc list-inside marker:text-amber-700">
                                <li>Exposure assessment and biological sampling</li>
                                <li>Heavy metals testing in soil, water, food, and biological samples</li>
                                <li>Risk factor and dose-response analysis</li>
                                <li>Epidemiological study design and implementation</li>
                                <li>Geospatial mapping (GIS) of pollution and disease clusters</li>
                                <li>Community and occupational toxicology awareness programs</li>
                                <li>Policy translation to support pollution control and mitigation efforts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
                        <ImageCarousel slides={environmentSlides} />
                    </div>

                </div>
            </section>
        </div>
    );
}



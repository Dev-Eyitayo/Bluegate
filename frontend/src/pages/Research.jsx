import React from "react";
import { Users, FlaskConical, Leaf } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";

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

const ListSection = ({ label, items }) => (
    <div>
        <p className="font-semibold text-slate-900 mb-3">{label}</p>
        <ul className="space-y-2.5 text-slate-600">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const ServiceHeading = ({ icon: Icon, number, children }) => (
    <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 text-brand-600 flex-shrink-0">
            <Icon className="w-6 h-6" />
        </span>
        <h3 className="font-display text-xl font-bold text-slate-900">
            <span className="text-brand-600 mr-2">{number}.</span>
            {children}
        </h3>
    </div>
);

export default function Research() {
    return (
        <div className="min-h-screen text-slate-800">
            {/* Hero Section */}
            <section className="py-14 px-4 sm:px-6 max-w-4xl mx-auto">
                <PageHeader
                    eyebrow="Consultancy"
                    title="Research Services"
                    subtitle="Evidence-driven insights for stronger public health policies and interventions."
                />
            </section>

            {/* Introduction */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-16">
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-soft">
                    <p className="text-slate-600 leading-relaxed mb-6">
                        At <strong className="text-slate-900">Blue Gate Public Health Promotion Initiative</strong>, we believe that{" "}
                        <strong className="text-slate-900">effective public health solutions must be grounded in evidence</strong>. Our
                        research services are designed to provide <em>actionable insights</em> that inform policies,
                        improve interventions, and strengthen community health outcomes.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        We work with <strong className="text-slate-900">government agencies, NGOs, international development partners,
                        and academic institutions</strong> to design and implement rigorous research studies tailored to
                        local contexts.
                    </p>
                    <p className="rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100 px-5 py-4 leading-relaxed font-medium text-brand-900">
                        Our research approach emphasizes <strong>participatory methods, ethical rigor, and real-world
                        applicability</strong>, ensuring that findings translate into <em>lasting impact</em>.
                    </p>
                </div>
            </section>

            {/* Our Research Services - Single Column */}
            <section className="py-14 px-4 sm:px-6 max-w-4xl mx-auto space-y-20">
                <div className="text-center">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                        Our Research Services
                    </h2>
                    <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
                </div>

                {/* 1. Behavioural and Social Research */}
                <div className="space-y-8">
                    <ServiceHeading icon={Users} number={1}>
                        Social and Behavioural Research
                    </ServiceHeading>

                    {/* Image First */}
                    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
                        <ImageCarousel slides={behaviouralSlides} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-slate-600">
                        <p className="leading-relaxed">
                            We conduct high-quality behavioural and social research to understand the factors that shape health practices and community decision-making.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ListSection
                                label="Our work explores:"
                                items={[
                                    "Health-seeking behaviours",
                                    "Gender norms and social dynamics",
                                    "Risk perception and communication patterns",
                                    "Cultural and community influences on public health outcomes",
                                ]}
                            />
                            <ListSection
                                label="Methods include:"
                                items={[
                                    "Surveys and structured interviews",
                                    "Focus group discussions",
                                    "Participatory action research",
                                    "Ethnographic studies",
                                    "Human-centered design approaches",
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* 2. RCTs and Impact Evaluation */}
                <div className="space-y-8">
                    <ServiceHeading icon={FlaskConical} number={2}>
                        Randomized Controlled Trials (RCTs) &amp; Impact Evaluation
                    </ServiceHeading>

                    <div className="space-y-6 text-slate-600">
                        <p className="leading-relaxed">
                            We design and implement <strong className="text-slate-900">Randomized Controlled Trials (RCTs)</strong> and{" "}
                            <strong className="text-slate-900">mixed-method impact evaluations</strong> to rigorously assess the
                            effectiveness of public health interventions.
                        </p>

                        <ListSection
                            label="Our services include:"
                            items={[
                                "Study design and protocol development",
                                "Randomization strategy and sampling",
                                "Baseline and endline data collection",
                                "Process evaluation and monitoring",
                                "Statistical analysis and reporting",
                            ]}
                        />

                        <p className="italic border-l-2 border-brand-200 pl-4 text-slate-500">
                            <strong className="text-slate-700">Outcome:</strong> Clear, credible evidence on{" "}
                            <em>what works, for whom, and under what conditions</em> — enabling partners to scale
                            effective programs and refine or discontinue ineffective ones.
                        </p>
                    </div>
                </div>

                {/* 3. Environmental & Toxicology Research */}
                <div className="space-y-8">
                    <ServiceHeading icon={Leaf} number={3}>
                        Environmental &amp; Toxicology Research
                    </ServiceHeading>

                    <div className="space-y-6 text-slate-600">
                        <p className="leading-relaxed">
                            We investigate how <strong className="text-slate-900">environmental exposures and ecological conditions</strong>{" "}
                            influence disease patterns and public health outcomes. Our research examines the interactions
                            between environmental hazards, human behavior, and biological responses — enabling partners to
                            design policies and programs that <strong className="text-slate-900">protect communities and prevent disease</strong>.
                        </p>

                        <ListSection
                            label="Focus Areas:"
                            items={[
                                "Water, Sanitation and Hygiene (WASH)",
                                "Air quality and atmospheric pollution",
                                "Solid waste and hazardous waste management",
                                "Occupational and community exposure assessments",
                                "Climate change vulnerability and resilience",
                                "Environmental Toxicology and Non-Communicable Diseases (NCDs)",
                            ]}
                        />

                        {/* Highlight Box */}
                        <div className="bg-amber-50 p-6 md:p-7 rounded-2xl border border-amber-200">
                            <h4 className="font-display font-bold text-amber-900 mb-3 text-lg">
                                Environmental Toxicology and NCD Risk
                            </h4>
                            <p className="text-sm mb-4 leading-relaxed text-amber-950/80">
                                We explore how environmental toxicants — including <strong>heavy metals, pesticides,
                                endocrine-disrupting chemicals, industrial emissions, and contaminated food/water
                                sources</strong> — contribute to the rising burden of non-communicable diseases such as:
                            </p>
                            <ul className="grid grid-cols-2 gap-2.5 text-sm text-amber-950/80">
                                {[
                                    "Hypertension & CVD",
                                    "Diabetes",
                                    "Cancers",
                                    "Reproductive disorders",
                                    "Developmental conditions",
                                    "Neurological disorders",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="font-semibold mt-6 mb-3 text-sm text-amber-900">Our Capabilities:</p>
                            <ul className="text-sm text-amber-950/80 space-y-2">
                                {[
                                    "Exposure assessment and biological sampling",
                                    "Heavy metals testing in soil, water, food, and biological samples",
                                    "Risk factor and dose-response analysis",
                                    "Epidemiological study design and implementation",
                                    "Geospatial mapping (GIS) of pollution and disease clusters",
                                    "Community and occupational toxicology awareness programs",
                                    "Policy translation to support pollution control and mitigation efforts",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 shadow-soft">
                        <ImageCarousel slides={environmentSlides} />
                    </div>
                </div>
            </section>
        </div>
    );
}

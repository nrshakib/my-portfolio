import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
    return (
        <section id="experience" className="md:mt-[550px] sm:mt-[300px]">
            <h5>Skills I Have</h5>
            <h2>My Experiences</h2>
            <div className="container grid grid-cols-1 gap-8">
                {/* Front End Section*/}
                <div className="bg-[var(--color-bg-variant)] p-10 rounded-[2rem] border border-transparent transition-all hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default md:w-[80%] md:mx-auto md:p-8 sm:w-full sm:p-4">
                    <h3 className="text-center mb-8 text-[var(--color-primary)]">Frontend Development</h3>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-3 sm:p-4">
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>HTML & CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>BootStrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>SCSS</h4>
                                <small className="text-light">Moderate</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>JavaScript(ES6)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>ReactJs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>NextJs</h4>
                                <small className="text-light">Moderate</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>RTK Query</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="flex gap-4">
                            <HiBadgeCheck className="mt-1.5 text-[var(--color-primary)]" />
                            <div>
                                <h4>Material UI, Ant Design</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Back End Section (Commented out but structure preserved if needed) */}
                {/* <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            ...
          </div>
        </div> */}
            </div>
        </section>
    );
};

export default Experience;

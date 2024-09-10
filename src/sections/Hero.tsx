import faceEmoji from "@/assets/images/bujujan.png";
import rabat from '@/assets/images/Rabat.jpg';
import eye from '@/assets/images/eye.png';
import grainImage from '@/assets/images/grain.jpg';
import githubwhite from '@/assets/images/githubwhite.png';
import mail from '@/assets/images/mail.png';
import html from '@/assets/images/html.png';
import css from '@/assets/images/css.png';
import javascript from '@/assets/images/javascript.png';
import typescript from '@/assets/images/typescript.png';
import angular from '@/assets/images/angular.png';
import react from '@/assets/images/react.png';
import nextjs from '@/assets/images/nextjs.png';
import nodejs from '@/assets/images/node.png';
import figma from '@/assets/images/figma.png';
import java from '@/assets/images/java.png';
import framer from '@/assets/images/framer.png';
import pentool from '@/assets/images/pentool.png';
import linkedin from '@/assets/images/linkedin.png';
import cube from '@/assets/images/cubes.png';



export const HeroSection = () => {
    return (
        <div className="flex flex-col flex-wrap relative items-center pt-52 pb-16 z-0">
            <div className="absolute -inset-0 -z-30 opacity-10" style={{backgroundImage: `url(${grainImage.src})`}}></div>
            <div className="cube ml-[200px] floatTilt filter blur-sm absolute -inset-0 -z-30 opacity-[20%]" style={{backgroundImage: `url(${cube.src})`, backgroundRepeat: 'no-repeat'}}></div>
            <div className="cube floatTilt size-[400px] ml-[1700px] mt-[100px] filter blur-lg absolute -inset-0 -z-30 opacity-[20%]" style={{backgroundImage: `url(${cube.src})`, backgroundRepeat: 'no-repeat'}}></div>
            <div className="cube size-[500px] m-96 floatTilt absolute filter blur-2xl -inset-0 -z-30 opacity-[20%]" style={{backgroundImage: `url(${cube.src})`, backgroundRepeat: 'no-repeat'}}></div>
            <div className="container justify-center flex flex-col md:grid-cols-2 md:flex-row md:w-[100%] lg:w-[65%] w-full h-full">
                <div className="flex flex-col md:flex-col lg:flex-row w-full gap-6">

                    <div className="grid grid-rows-2 gap-12 px-7 py-7 box rounded-3xl w-full md:w-[100%] h-72 slideInRight">
                        <div className="flex items-center gap-14 overflow-hidden">
                            <div className="bg-black/20 size-20 rounded-full shadow-inner">
                                <img src={faceEmoji.src} alt=""/>   
                            </div>
                            <h1 className="text-3xl text-center font-rubik-mono overflow-hidden">Abdellah Bujujan</h1>
                        </div>
                        <div className="">
                            <p className="pb-4 w-[90%]">I am a Software Engineering student, Web developer, I specialize in Front-end,
                                also a Web Designer.
                            </p>
                            <div className="flex flex-shrink-0 items-center gap-4 box bg-black/10 w-[55%] md:w-[30%] lg:w-[45%] py-1 px-3 anim">
                                <div className="size-3 bg-green-500 rounded-full"></div>
                                <div>
                                    <p>Available For Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-[100%] gap-4">
                        <div className="flex justify-center w-full box rounded-2xl h-14 items-center overflow-hidden slideInLeft">
                            <ul className="flex w-full md:w-[90%] gap-14 scroll-triggered">
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                                <li className="flex-shrink-0">★ Software Engineer <b>Student</b> ★</li>
                            </ul>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="h-[215px] w-full md:w-72 box overflow-hidden slideInUp">
                                <img src={rabat.src} alt="" className="object-cover w-full h-full rounded-3xl" />
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col gap-5">
                                <div className="box size-24 w-full flex justify-between items-center px-8 md:px-16 slideInLeftdelay">
                                    <div>
                                        <p className="text-xs text-gray-500">2024 CV</p>
                                        <h1 className="text-3xl font-rubik-mono">Resume</h1>
                                    </div>
                                    <a href="/CV-Bujujan.pdf" target="_blank"><img src={eye.src} alt="" className="size-9 hover:cursor-pointer" /></a>
                                </div>
                                <div className="flex justify-center items-center box size-24 w-full slideInLeftlate">
                                    <p className="text-3xl font-rubik-mono">SOON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center md:flex-col w-[100%] md:w-[100%] lg:w-[65%] lg:flex-row py-4 gap-4">
                <div className="flex flex-col gap-4 w-full md:w-[100%]">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex justify-center items-center box size-40 w-full md:w-[50%] slideInRightlate">
                            <a href="https://github.com/Bujujan" target="_blank"><img src={githubwhite.src} alt="" className="size-20"/></a>
                        </div>
                        <div className="flex justify-center items-center box size-40 w-full md:w-[50%] slideInRightdelay">
                            <a href="mailto:bujujan.ru@gmail.com"><img src={mail.src} alt="" className="size-14 w-[70px]"/></a>
                        </div>
                    </div>

                    <div className="md:w-[100%] slideInRightlater">
                        <div className="box size-40 center w-full md:w-full">
                            <a href="https://www.linkedin.com/in/abdellah-boujoujan/" target="_blank"><img src={linkedin.src} alt="" className="size-24"/></a>
                        </div>
                    </div>
                </div>

                <div className="box w-full md:w-[100%] lg:w-[60%] flex flex-col p-8 gap-4 slideInUpdelay ">
                    <h1 className="text-4xl font-rubik-mono">Skills</h1>
                    <div className="flex justify-center">
                        <ul className="grid grid-cols-3 md:flex gap-4">
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={html.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={css.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={javascript.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={typescript.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={angular.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={react.src} alt="" className="size-12"/></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <ul className="grid grid-cols-3 md:flex gap-4 md:gap-4">
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={nextjs.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={nodejs.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={java.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={figma.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={framer.src} alt="" className="size-12"/></li>
                            <li className="box anim flex-shrink-0 bg-black/20 size-24 center"><img src={pentool.src} alt="" className="size-12"/></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};
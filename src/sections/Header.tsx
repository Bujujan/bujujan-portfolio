import grainImage from '@/assets/images/grain.jpg';

export const Header = () => {
    return (
        <div className="absolute flex justify-center items-center top-20 w-full z-30">
            
            <nav className="flex gap-1 p-1 box backdrop-blur">
                <a href="" className="nav-item">All</a>
                {/* <a href="" className="nav-item">Skills</a>
                <a href="" className="nav-item">Projects</a> */}
                <a href="mailto:bujujan.ru@gmail.com" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
            </nav>
        
        </div>
    );
};
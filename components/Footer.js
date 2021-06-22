import Image from 'next/image';
import download from '../images/download.svg'

function Footer() {
    return (
        <div className="flex items-center justify-center flex-col p-5">
            <div>
                <Image 
                    src={download}
                    alt="logo"
                />
            </div>
            <div>
                <h1>© 2021 All right reserved - Dolo</h1>
            </div>
        </div>
    )
}

export default Footer
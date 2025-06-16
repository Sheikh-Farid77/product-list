import LogoIcon from '../../assets/logo.svg'

export default function Logo(){
    return (
        <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={LogoIcon} alt="" />
              </a>
    );
}
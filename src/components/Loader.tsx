import logo from '../assets/images/logo.png';

export const Loader = () => {
    return (
      <div className="-translate-y-20 flex w-screen min-h-screen justify-center items-center">
        <img src={logo} className="animate-spin w-24" />
      </div>
    );
}
import { RiMenuFill } from 'react-icons/ri';

const MobileSidebar: React.FC = () => {
  return (
    <nav className="lg:hidden bg-Secondary dark:bg-DarkSecondary block bottom-0 w-full min-h-screen">
      <ul className='fixed w-full flex justify-center items-center bottom-0 left-0 bg-Primary dark:bg-DarkPrimary'>
        <li>
          <RiMenuFill />
        </li>
        <li>
          <RiMenuFill />
        </li>
        <li>
          <RiMenuFill />
        </li>
        <li>
          <RiMenuFill />
        </li>
      </ul>
    </nav>
  )
};

export default MobileSidebar;
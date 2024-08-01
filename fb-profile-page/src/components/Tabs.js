
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';

export default function Tabs() {
  return (
    <div className="bg-zinc-800 text-cyan-50 shadow-md pt-2">

      <Divider  className='bg-gray-600 my-4'/>
      <div className="container mx-auto flex justify-between px-4 pt-4">
        
        <div className="flex space-x-6 ">
          <button className="focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500" >Posts</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>About</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>Mentions</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>Reviews</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>Followers</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>Photos</button>
          <button className='focus:border-b-4 border-blue-600 pb-4 focus:text-blue-500'>More</button>
          
        </div>
        <button className="text-white w-11 h-8 bg-zinc-600 rounded-md hover:bg-zinc-500">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </div>
  );
}

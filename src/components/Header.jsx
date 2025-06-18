import {FiBell, FiSearch, FiChevronDown} from 'react-icons/fi';

export const Header = () => {
  return (
      <header className="flex items-center justify-between mb-6">
        <div className="text-xl font-semibold text-gray-700">Overview</div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'/>
            <input type="text" placeholder='Search something...' 
              className='w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 focus:outline-none focus:rign-indigo-300 text-sm'
            />
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <button className='relative'>
            <FiBell className='text-gray-500 hover:text-gray-700 text-xl'/>
            <span className='absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full'></span>
          </button>

          <div className='flex items-center gap-2 cursor-pointer'>
            <span className='text-sm font-medium text-gray-700'>Jesus Jo</span>
            <FiChevronDown className='text-gray-500'/>
          </div>

        </div>
      </header>
  )
}

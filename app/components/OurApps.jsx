import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurApps = () => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
    const [details, setDetails] = useState([
        { name: 'John Doe', number: '9988776655', token: 101 },
        { name: 'Amelia Smith', number: '1234567890', token: 102 },
    ]);

    const handleAddDetails = () => {
            if (name && number && location) {
            const newToken = details.length ? details[details.length - 1].token + 1 : 101;
            setDetails([...details, { name, number, location, token: newToken }]);
            setName('');
            setNumber('');
            setLocation('');
            }
        };

        const [selectedOption, setSelectedOption] = useState('');
        const [isConfirmed, setIsConfirmed] = useState(false);
        
            const handleOptionChange = (e) => {
            setSelectedOption(e.target.value);
            setIsConfirmed(false);
            };
        
            const handleConfirm = () => {
            toast.success(`You will be reminded ${selectedOption} before your appointment`);
            setIsConfirmed(true);
            };
            

    return (
        <div className='h-[180vh] mt-60 flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-5xl author-semibold text-center'>Designed for Unmatched <span className='text-purple-400'>Simplicity</span><br/> and <span className='text-blue-400'>Effortless Use</span></h1>
            <p className='author-medium text-gray-400 text-xl text-center'>Our Apps have been meticulously designed to provide unparalleled simplicity<br/> and seamless User Experience</p>
            <div className='px-4 sm:px-10 md:px-20 mt-10 h-full w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-4 gap-4'>
        <div className='col-span-1 row-span-2 border-2 border-gray-600 rounded-3xl flex items-center justify-center'>
            <div className='h-[90%] w-[90%] flex items-center justify-center rounded-2xl border-2 border-gray-600 p-4 relative overflow-hidden'>
                <div className='h-full w-full absolute rounded-full -z-10 bg-gradient-to-br from-purple-800/30 scale-[1.5]'/>
                <div className='w-full author-medium'>
                    <h1 className='author-semibold text-3xl mb-4'>Enter your details</h1>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='block w-full mb-2 p-2 border-2 rounded focus:outline-none border-gray-600/30 bg-transparent focus:bg-gray-600/30'
                    />
                    <input
                        type='text'
                        placeholder='Phone Number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className='block w-full mb-2 p-2 border-2 rounded focus:outline-none border-gray-600/30 bg-transparent focus:bg-gray-600/30'
                    />
                    <input
                        type='text'
                        placeholder='Location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='block w-full mb-2 p-2 border-2 rounded focus:outline-none border-gray-600/30 bg-transparent focus:bg-gray-600/30'
                    />
                    <button
                        onClick={handleAddDetails}
                        className='block w-1/2 p-2 bg-[#0f72a3] text-white rounded mt-2'
                    >
                        Add Patient
                    </button>
                </div>
            </div>
        </div>
        <div className='col-span-1 sm:col-span-2 row-span-2 border-2 border-gray-600 rounded-3xl flex items-center justify-center'>
            <div className='h-[90%] w-[95%] bg-transparent border-2 border-gray-600 text-black rounded-3xl p-4 mt-4 relative overflow-hidden'>
                <div className='h-full w-full absolute rounded-full -z-10 bg-gradient-to-br from-purple-800/30 scale-[1.5]'/>
                <AnimatePresence>
                    <div className='w-full flex items-center justify-between text-white'>
                        <h1 className='w-1/4 author-medium flex items-center justify-center text-2xl'>Token Number</h1>
                        <h1 className='w-3/4 flex items-center justify-center text-2xl author-medium'>Name</h1>
                    </div>
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            className='px-2 mb-3 bg-[#cfddec] rounded shadow flex items-center justify-between'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className='border-r-2 w-1/4 border-black py-2 pr-2 author-medium text-2xl flex items-center justify-center'>{detail.token}</p>
                            <p className='author-medium text-2xl'>{detail.name}</p>
                            {/* <p><strong>Phone Number:</strong> {detail.number}</p> */}
                            {/* <p><strong>Location:</strong> {detail.location}</p> */}
                            <hr className='my-2' />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
        <div className='col-span-1 sm:col-span-2 row-span-2 border-2 border-gray-600 rounded-3xl flex items-center justify-center'>
            <div className='h-[90%] w-[95%] bg-transparent border-2 border-gray-600 text-black rounded-3xl p-4 mt-4 relative overflow-hidden flex flex-col gap-4 items-center justify-center '>
                <div className='h-full w-full absolute rounded-full -z-10 bg-gradient-to-br from-sky-800/30 scale-[1.5]'/>
                <AnimatePresence>
                    <h1 className='text-4xl author-bold text-gray-400'>Your token Number is</h1>
                    <h1 className='font-bold text-white text-7xl'>103</h1>
                    <p className='author-regular text-white '>Your estimated Time is : <span>12:30 PM</span></p>
                    <button className='bg-white px-4 py-2 rounded-xl'>
                        <h1 className='author-regular text-xl'>Set a Reminder</h1>
                    </button>
                </AnimatePresence>
            </div>
        </div>
        <div className='col-span-1 row-span-2 border-2 border-gray-600 rounded-3xl flex items-center justify-center'>
            <div className='h-[90%] w-[90%] flex flex-col items-center justify-center rounded-2xl bg-[#] p-4 overflow-hidden relative'>
                <div className='h-full w-full absolute rounded-full -z-10 bg-gradient-to-br from-sky-800/30 scale-[1.5]'/>
                <div className='mb-4'>
                    <h1 className='text-white author-semibold text-3xl mb-4'>Select Reminder Time</h1>
                    <div className='text-white author-medium'>
                        <label className='block mb-2'>
                            <input
                                type='radio'
                                value='30 minutes'
                                checked={selectedOption === '30 minutes'}
                                onChange={handleOptionChange}
                                className='mr-2'
                            />
                            30 minutes before
                        </label>
                        <label className='block mb-2'>
                            <input
                                type='radio'
                                value='45 minutes'
                                checked={selectedOption === '45 minutes'}
                                onChange={handleOptionChange}
                                className='mr-2'
                            />
                            45 minutes before
                        </label>
                        <label className='block mb-2'>
                            <input
                                type='radio'
                                value='1 hour'
                                checked={selectedOption === '1 hour'}
                                onChange={handleOptionChange}
                                className='mr-2'
                            />
                            1 hour before
                        </label>
                    </div>
                    {selectedOption && !isConfirmed && (
                        <button
                            onClick={handleConfirm}
                            className='mt-4 p-2 bg-[#108daf] text-white rounded author-medium'
                        >
                            Confirm
                        </button>
                    )}
                </div>
                <ToastContainer />
            </div>
        </div>
    </div>
</div>
    )
}

export default OurApps
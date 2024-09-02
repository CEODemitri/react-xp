import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground shadow-sm w-60 h-96 bg-gradient-to-b from-peru-200/15 to-gainsboro-700/40">
      <div className=" grid grid-rows-8 grid-cols-4 pt-6">
        <img src={doctor.image} width="80" className="rounded-full max-h-20 col-start-1 row-start-1 col-span-3 row-span-2 ml-2" alt="Avatar" />
        <div className="gap-1 flex flex-col text-sm md:text-base col-start-1 row-start-3 row-span-3 col-span-4 mx-auto">
          <div className="text-gainsboro-100 dark:text-gainsboro-300 text-xl bg-peru-200/40 w-fit rounded-2xl px-2">{doctor.specialty}</div>
          <div className="font-semibold text-gainsboro-600">{doctor.name}</div>
          <div className='text-gainsboro-800 text-xs'>{doctor.telemedicine ? 'Available for telemedicine' : 'Not available for telemedicine'}</div>
          
          <div className="text-gray-500 dark:text-black text-center">{doctor.hours}</div>
        </div>
        <button className="whitespace-nowrap text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gainsboro-700 text-primary-foreground hover:bg-primary/90 h-12 rounded-b-md uppercase w-full row-start-7 row-span-1 col-span-4 mt-[0.22em] tracking-widest">
        Book
      </button>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    telemedicine: PropTypes.bool.isRequired,
    hours: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default DoctorCard;
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6" data-v0-t="card">
      <div className="p-6 flex items-center gap-4">
        <img src={doctor.image} width="80" height="60" className="rounded-full" alt="Avatar" />
        <div className="grid gap-4 text-sm md:grid-cols-2 md:text-base">
          <div className="font-semibold">{doctor.name}</div>
          <div>{doctor.telemedicine ? 'Available for telemedicine' : 'Not available for telemedicine'}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xl">{doctor.specialty}</div>
          <div className="text-gray-500 dark:text-gray-400">{doctor.hours}</div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gainsboro-300 text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-8 ml-auto">
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

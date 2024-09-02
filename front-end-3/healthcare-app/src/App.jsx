import LoginButton from "./Components/LoginButton"
import DoctorCard from './Components/DoctorCard';
import ScheduleVisit from "./Components/ScheduleVisit";
import NavBar from "./Components/NavBar";


function App() {
  const embid = {
    name: 'Dr. Embid Joel',
    specialty: 'Dermatology',
    telemedicine: true,
    hours: '3:00 PM - 5:00 PM',
    image: '../src/assets/drembid.avif'
  };

  const rogers = {
    name: 'Dr. Rogers Mister',
    specialty: 'Teethology',
    telemedicine: true,
    hours: '3:30 PM - 6:00 PM',
    image: '../src/assets/drrogers.jpeg'
  }

  const barney = {
    name: 'Dr. Dino Barney',
    specialty: 'Lielogy',
    telemedicine: true,
    hours: '5:30 PM - 7:00 PM',
    image: '../src/assets/drbarney.jpeg'
  }

  return (
    <>
      <div className="max-h-screen gap-4 flex bg-peru-100 dark:bg-gainsboro-800 overflow-hidden">
        <div className="mx-4 grid">
          <NavBar  className="col-span-4"/>
          
           {/* main section */}
          <div className="flex flex-col gap-4 md:gap-8 col-start-4 col-span-8">
          
            
            <div className="flex flex-col p-4 gap-6 overflow-auto">
              <ScheduleVisit/>
              <form className="flex items-center gap-4 md:gap-8">
                <div className="relative w-full max-w-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none pl-8 dark:bg-gray-950"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
              <div className="flex gap-8 flex-wrap">
                <DoctorCard doctor={embid} />
                <DoctorCard doctor={rogers} />
                <DoctorCard doctor={barney} />
              </div>

              {/* Saving for data */}
              {/* <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                data-v0-t="card"
              >
                <div className="p-6 flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    className="rounded-full"
                    alt="Avatar"
                  />
                  <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                    <div className="font-semibold">Dr. John Smith</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Cardiology
                    </div>
                    <div>Available for telemedicine</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      10:00 AM - 12:00 PM
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
                    Book
                  </button>
                </div>
              </div>

              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                data-v0-t="card"
              >
                <div className="p-6 flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    className="rounded-full"
                    alt="Avatar"
                  />
                  <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                    <div className="font-semibold">Dr. Emily Johnson</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Pediatrics
                    </div>
                    <div>Available for telemedicine</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      1:00 PM - 3:00 PM
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
                    Book
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

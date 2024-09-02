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
      <div className="grid min-h-screen py-4 gap-4 lg:grid-cols-1 bg-peru-100 dark:bg-gainsboro-800">
        <div className="mx-4">
          <NavBar />
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2 dark:bg-gradient-to-b from-gainsboro-600 to-60% px-2 rounded-md">
              <h1 className="text-2xl font-semibold">Consultations</h1>
              <p>Use our wizard to find the right recipe for you before you commit.</p>
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
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10">
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
                    className="h-4 w-4"
                  >
                    <line x1="21" x2="14" y1="4" y2="4"></line>
                    <line x1="10" x2="3" y1="4" y2="4"></line>
                    <line x1="21" x2="12" y1="12" y2="12"></line>
                    <line x1="8" x2="3" y1="12" y2="12"></line>
                    <line x1="21" x2="16" y1="20" y2="20"></line>
                    <line x1="12" x2="3" y1="20" y2="20"></line>
                    <line x1="14" x2="14" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="10" y2="14"></line>
                    <line x1="16" x2="16" y1="18" y2="22"></line>
                  </svg>
                  <span className="sr-only">Filter</span>
                </button>
              </form>
            </div>
            
            <div className="grid gap-4">
              <ScheduleVisit/>
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

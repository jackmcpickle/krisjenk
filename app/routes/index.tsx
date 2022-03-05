import { MailIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/solid';

export default function Index() {
  return (
      <div className="overflow-hidden">
          <div className="bgd-rotator"></div>
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="flex items-center justify-center text-base font-semibold tracking-wide text-gray-200 uppercase">
                      <VideoCameraIcon className="mr-2 w-7 h-7" />
                      <span>Cinematographer</span>
                  </h2>
                  <h1 className="relative z-10 mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Kris Jenkinson</h1>

                  <div className="my-6">
                      <img src="/krisjenk.jpeg" alt="kris jenk" className="inline-block rounded-full max-w-[250px]" />
                  </div>
                  <p className="max-w-xl mx-auto mt-5 text-xl text-stone-100">Freelance cinematographer based in Adelaide, Australia.</p>
                  <p className="flex items-center justify-center mt-6 text-gray-100">
                      <a href="tel:+61438125886" className="transition-colors hover:text-white">
                          <PhoneIcon className="mr-2 w-7 h-7" />
                      </a>
                      <a href="mailto:kris@krisjenkinson.com" className="transition-colors hover:text-white">
                          <MailIcon className="mr-2 w-7 h-7" />
                      </a>
                  </p>
              </div>
          </div>
      </div>
  );
}

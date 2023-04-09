export default function Timeline() {
  return (
    <div className="-z-30 mt-8">
      <div>
        <h3 className="text-3xl text-left pl-8">About</h3>
      </div>
      <div className="ml-10 max-h-screen mb-20 mt-8">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6 pr-4">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              SRE engineer{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Current
              </span>
            </h3>
            <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
              JettyCloud LLC.
              <p>March 2021</p>
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Deploying through internal utilities. Responsible for managing and
              executing the deployment process of applications and services
              within an organization using internal tools and utilities. Primary
              focus is to ensure the reliability, availability, and scalability
              of deployments.
            </p>
          </li>
          <li className="mb-10 ml-6 pr-4">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              NetOps engineer
            </h3>
            <time className="block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500">
              Hyundai AutoEver
              <p>December 2020 — February 2021</p>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Responsible for managing and maintaining network infrastructure.
              Responsibilities include configuring and optimizing network
              devices, ensuring network security, troubleshooting network
              issues, and designing network solutions to meet business needs.
            </p>
          </li>
          <li className="ml-6 pr-4">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Network engineer
            </h3>
            <time className="block mb-2  font-normal leading-none text-gray-400 dark:text-gray-500">
              BFT LLC.
              <p>May 2019 — December 2020</p>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Configuring and optimizing network infrastructure using
              Linux-based solutions. My responsibilities include managing and
              maintaining Linux servers, configuring network devices, ensuring
              network security.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default function TripBanner() {
  return (
    <div
      id="currTripContainer"
      class="container flex flex-col w-3/4 justify-content-center my-5"
    >
      <div
        id="trip-details-container"
        class="container d-flex flex-row flex-wrap border rounded-lg overflow-clip justify-content-around bg-secondary-subtle shadow-sm bg-white/25"
      >
        <div class="container col rounded-top text-center p-2">
          <p class="m-0 text-2xl font-bold ">Tokyo 2024</p>
          <p class="m-0">MM/DD/YYYY - MM/DD/YYYY</p>
        </div>

        <div class="bg-white p-2 ">
          <div class="columns-1 flex flex-row flex-wrap align-items-end">
            <p id="tripDest" class="align-self-end my-0 fs-6">
              Destination: Tokyo, Japan
            </p>
          </div>

          <div class="column-1 flex flex-row flex-wrap align-items-end border-bottom">
            <p id="tripAdd" class="align-self-end my-0 fs-6">
              Address: TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN,
              107-6245
            </p>
          </div>

          <a
            class="md:hidden mb-1 text-decoration-none text-center text-secondary"
            data-bs-toggle="collapse"
            data-bs-target="#tripDetails2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Trip Details
          </a>

          <div
            id="tripDetailsDropdown"
            class="row columns-3 flex border-t-1 flex-row align-items-baseline justify-around pt-2 px-0 mx-0 mt-2 "
          >
            <div class="w-full flex flex-row p-0">
              <h5 class="align-self-baseline me-2 mb-0 fs-6">Travelers:</h5>
              <p class="align-self-baseline mb-0 fs-6">5</p>
            </div>

            <div class="w-full flex flex-row p-0">
              <h5 class="align-self-baseline me-2 mb-0 fs-6">Reason:</h5>
              <p class="align-self-baseline mb-0 fs-6">Vacation</p>
            </div>

            <div class="w-full flex flex-row p-0">
              <h5 class="align-self-baseline me-2 mb-0 fs-6">
                Transportation:
              </h5>
              <p class="align-self-baseline mb-0 fs-6">Mixed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

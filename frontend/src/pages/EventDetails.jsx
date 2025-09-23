import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { FaClock, FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";

const cleanPrice = (priceString) => {
  if (!priceString) return "";
  return priceString.replace(/\p{Sc}/gu, "").trim();
};

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, loading, error } = useFetch(`/eventId/${id}`);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-light py-5">
          <section className="container">
            <p className="text-center">Loading Event Details...</p>
          </section>
        </main>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <main className="bg-light py-5">
          <section className="container">
            <p className="text-center text-danger">{error}</p>
          </section>
        </main>
      </>
    );
  }
  if (!event) {
    return (
      <>
        <Header />
        <main className="bg-light py-5">
          <section className="container">
            <p className="text-center alert alert-danger">
              Event Details Not Found.
            </p>
          </section>
        </main>
      </>
    );
  }

  const [year, month, day] = event.date.split("-").map(Number);
  const [timePart, ampm] = event.time.split(" ");

  let [hours, minutes] = timePart.split(":").map(Number);

  if (ampm === "PM" && hours !== 12) {
    hours += 12;
  } else if (ampm === "AM" && hours === 12) {
    hours = 0;
  }

  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);

  return (
    <>
      <Header />
      <main className="bg-light">
        <section className="container">
          <div className="row justify-content-between g-5">
            <div className="col-md-7 mb-5">
              <h2 className="fw-bold mb-3">{event.title}</h2>
              <small className="mt-2 text-secondary">Hosted By: </small>
              <h6 className="fw-semibold mb-4">
                {event.title.split(" ")[0].trim()} Expert
              </h6>
              <div className="mb-4">
                <img
                  src={event.thumbnailURL}
                  alt={event.title}
                  className="card-img-top"
                  style={{ height: "175px", objectFit: "cover" }}
                />
              </div>
              <h3 className="mt-4">Details: </h3>
              <p>{event.description}</p>
              <h3 className="mt-4">Additional Details: </h3>
              <p>
                <strong>Dress Code: </strong>
                {event.dressCode}
              </p>
              <p>
                <strong>Age Restrictions: </strong>
                {event.ageRestriction}
              </p>
              <h3 className="mt-4">Event Tags: </h3>
              <div className="d-flex flex-wrap gap-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge bg-danger rounded-pill px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center mb-3 text-muted">
                  <FaClock className="me-3 fs-6" />
                  <div>
                    <p className="mb-0">
                      {formatDate(startDate)} at {formatTime(startDate)} to
                    </p>
                    <p className="mb-0">
                      {formatDate(endDate)} at {formatTime(endDate)}
                    </p>
                  </div>
                </div>
                {(event.venue || event.address) && (
                  <div className="d-flex mb-3 align-items-center text-muted">
                    <FaLocationDot className="me-3 fs-6" />
                    <div>
                      <p className="mb-0">{event.venue}</p>
                      <p className="mb-0">{event.address}</p>
                    </div>
                  </div>
                )}
                <div className="d-flex mb-3 align-items-center text-muted">
                  <FaIndianRupeeSign className="me-3 fs-6" />
                  <div>
                    <p className="mb-0">{cleanPrice(event.price)}</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 fw-bold mb-3">
                Speakers: ({event.speaker.length}){" "}
              </h3>
              <div className="d-flex flex-wrap gap-5">
                {event.speaker.map((expert) => (
                  <div
                    key={expert._id}
                    className="card p-3 shadow-sm border-0 text-center"
                    style={{ width: "170px" }}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="rounded-circle mb-2 mx-auto"
                      style={{
                        width: "90px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fw-semibold">{expert.name}</p>
                    <small className="text-muted">{expert.designation.split(",")[0].trim()}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventDetails;
 
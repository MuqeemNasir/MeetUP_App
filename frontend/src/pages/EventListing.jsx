import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const EventListing = ({ searchQuery }) => {
  const [eventType, setEventType] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const { data, loading, error } = useFetch("/", []);

  const filteredEvents = data?.filter((event) => {
    if(eventType !== "All" && event.eventType !== eventType){
      return false
    }
    const query = searchQuery.trim().toLowerCase()
    if(!query){
      return true
    }
    return(
      event.title.toLowerCase().includes(query) ||
      event.tags?.some((tag) => tag.toLowerCase().includes(query))
    )

})

  const visibleEvents = showAll ? filteredEvents : filteredEvents?.slice(0, 6);

  return (
    <>
      <div className="bg-light">
        <section className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-9">
              <h1>Meetup Events</h1>
            </div>
            <div className="col-md-auto text-end">
              <select
                id=""
                className="form-select form-select-sm w-auto text-muted"
                style={{
                  minWidth: "150px",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                  padding: "0.25rem 1.5rem 0.25rem 0.5rem",
                }}
                value={eventType}
                onChange={(e) => {
                  setEventType(e.target.value);
                  setShowAll(false);
                }}
              >
                <option value="All">Both Events</option>
                <option value="Online">Online Events</option>
                <option value="Offline">Offline Events</option>
              </select>
            </div>
          </div>
        </section>
        <section className="container py-4">
          <div>
            {loading && "Loading..."}
            {error && <p className="text-danger">{error}</p>}
            {filteredEvents?.length === 0 && (
              <p className="text-muted text-center">
                No events match your search.
              </p>
            )}
          </div>
          <div className="row">
            {visibleEvents?.map((event) => {
              const dateObj = new Date(event.date);
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              });
              const formattedYear = dateObj.getFullYear();
              return (
                <div className="col-md-4 mb-5 mb-md-4" key={event._id}>
                  <Link
                    to={`/events/${event._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card shadow-sm border-0">
                      <div className="position-relative">
                        <img
                          src={event.thumbnailURL}
                          alt={event.title}
                          className="card-img-top"
                          style={{ height: "175px", objectFit: "cover" }}
                        />
                        <span
                          className={`badge position-absolute top-0 start-0 m-1 ${
                            event.eventType === "Online"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                          style={{ fontSize: "0.7rem", padding: "0.4em 0.6em" }}
                        >
                          {event.eventType}
                        </span>
                      </div>
                    </div>
                    <small
                      className="text-muted mb-1"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {formattedDate} {formattedYear} | {event.time}
                    </small>
                    <h5 className="card-title">{event.title}</h5>
                  </Link>
                </div>
              );
            })}
          </div>
          {filteredEvents?.length > 6 && (
            <div className="text-center mt-3">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "See Less Events" : "See All Events"}
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default EventListing;

import * as React from "react";

function Dashboard(props): JSX.Element {
  return (
    <>
      <div className="app-container">
        <section className="section-card">
          <h1>Dashboard</h1>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-6">
              <article className="area-card"></article>
            </div>
            <div className="col-6">
              <article className="area-card"></article>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <article className="area-card"></article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;

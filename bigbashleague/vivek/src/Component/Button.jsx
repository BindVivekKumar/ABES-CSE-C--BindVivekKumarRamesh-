import React from "react";

export default function Button() {
  return (
    <div>
      <button type="button" className="btn me-4">Basic</button>
      <button type="button" className="btn btn-primary me-4">Primary</button>
      <button type="button" className="btn btn-secondary me-4">Secondary</button>
      <button type="button" className="btn btn-success me-4">Success</button>
      <button type="button" className="btn btn-info me-4">Info</button>
      <button type="button" className="btn btn-warning me-4">Warning</button>
      <button type="button" className="btn btn-danger me-4">Danger</button>
      <button type="button" className="btn btn-dark me-4">Dark</button>
      <button type="button" className="btn btn-light me-4">Light</button>
      <button type="button" className="btn btn-link">Link</button>
    </div>
  );
}

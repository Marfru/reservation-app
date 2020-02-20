import React from "react";

const Book = () => (
  <main className="mx-grid__main">
    <h1>Book hotel</h1>
    <h2>Order and confirm your stay</h2>
    <div className="mx-grid-block">
      <div className="mx-grid-block__container">
        <form>
          <span>Guests</span>
          <select name="guests">
            <option value="1 Guest">1 Guest</option>
            <option value="2 Guests">2 Guests</option>
            <option value="3 Guests">3 Guests</option>
            <option value="4 Guests">4 Guests</option>
            <option value="5 Guests">5 Guests</option>
            <option value="6 Guests">6 Guests</option>
            <option value="7 Guests">7 Guests</option>
            <option value="8 Guests">8 Guests</option>
          </select>
          <div className="mx-form__duo">
            <label className="mx-form__single">
              <span>Check In</span>
              <input type="text" value="12:30" />
            </label>
            <label className="mx-form__single">
              <span>Check out</span>
              <input type="text" value="16:30" />
            </label>
          </div>
          <input type="submit" value="Book now" />
        </form>
      </div>
    </div>
  </main>
);

export default Book;

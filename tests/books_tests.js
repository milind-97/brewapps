const request = require("supertest");
const { expect } = require("chai");
const app = require("../server"); // Import your Express app
const connectdb = require('../db_connection')

describe("Book Routes", () => {
  
  // Test case for adding a book
  it("should add a book", (done) => {
    request(app)
      .post("/api/books")
      .send({
        "author": "i am",
        "title": "DOde",
        "summary": "TEST"
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  // Test case for getting a list of books
  it("should return a list of books", (done) => {
    request(app)
      .get("/api/books")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.equal(true);
        done();
      });
  });

  // Test case to update a book
  it("should update a book", (done) => {
    request(app)
      .patch("/api/books/653f773f8165ff9c2a597660") // Specify a valid book ID to update
      .send({
        "author": "i am",
        "title": "BOOKS UPDATED",
        "summary": "TEST"
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  // Test case to delete a book (specify a valid book ID to delete)
  it("should delete a book", (done) => {
    request(app)
      .delete("/api/books/your-book-id-here") // Specify a valid book ID to delete
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  after((done) => {
    // Your cleanup code here, if needed
    // For example, you can clean up any test data that was created during testing
    done();
  });
});

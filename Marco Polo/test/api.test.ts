import request from "supertest";
import app from "../src/app";

describe("GET /?end=30", () => {
  it("should return 200 OK", () => {
    return request(app).get("/?end=30").expect(200);
  });
});

describe("GET /?end=1500", () => {
  it("should return 200 OK", () => {
    return request(app).get("/?end=1500").expect(200);
  });
});

describe("GET /?end=5000", () => {
  it("should return 200 OK", () => {
    return request(app).get("/?end=5000").expect(200);
  });
});

describe("GET /?end=1000000", () => {
  it("should return 200 OK", () => {
    return request(app).get("/?end=1000000").expect(200);
  });
});
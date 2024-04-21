const supertest = require("supertest");
const httpServer = require("../../app");
const blogs = require("../../model/blogs");

describe("/blogs/draft Route", () => {
  it("GET /blogs/draft works", async () => {
    const response = await supertest(httpServer).get("/blogs/draft");
    expect(response.headers["content-type"]).toBe("application/json");
    expect(response.status).toBe(200);
  });

  it("GET /blogs/draft?id works", async () => {
    const response = await supertest(httpServer).get(`/blogs/draft?id=1`);
    // expect(response.headers["content-type"]).toBe("application/json");
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });
});
it("POST /blogs/draft works", async () => {
  const bookToAdd = {
    title: "New test book",
    description: "New book description",
    author: "Alabi Abdullah",
    body: "New book body",
  };
  const response = await supertest(httpServer)
    .post("/blogs/draft")
    .send(bookToAdd);
  //   expect(response.headers["content-type"]).toBe("application/json");
  expect(response.status).toBe(201);
  expect(response.body.title).toBe("New test book");
  expect(response.body.author).toBe("Alabi Abdullah");
  expect(response.body.description).toBe("New book description");
  expect(response.body.body).toBe("New book body");
});

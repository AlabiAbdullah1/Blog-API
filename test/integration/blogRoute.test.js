const supertest = require("supertest");
const httpServer = require("../../app");
const blogs = require("../../model/blogs");

describe("publishedblog Route", () => {
  it("GET /blogs/published works", async () => {
    const response = await supertest(httpServer).get("/blogs/published");
    // expect(response.headers["content-type"]).toBe("application/json");
    expect(response.status).toBe(200);
  });

  //   it("GET /blog/published?id works", async () => {
  //     const response = await supertest(httpServer).get(
  //       `/blogs.published?id=${req.params.id}`
  //     );
  //     expect(response.headers["content-type"]).toBe("application/json");
  //     expect(response.status).toBe(200);
  //     expect(response.body._id).toBe(req.params.id);
  //   });
  // });

  //   it("DELETE /books works", async () => {
  //     const response = await supertest(httpServer).delete("/books?id=5");
  //     expect(response.headers["content-type"]).toBe("application/json");
  //     expect(response.status).toBe(200);
  //     expect(response.body.message).toBe("Book deleted");

  //     const response2 = await supertest(httpServer).get("/books");
  //     expect(response2.headers["content-type"]).toBe("application/json");
  //     expect(response2.status).toBe(200);
  //     expect(response2.body.length).toBe(5);
  //   });
});

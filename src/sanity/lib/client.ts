//sanity/sanityClient.ts
import { createClient } from "next-sanity";



export const sanityClient = createClient({
  projectId: "ckmfdvkv",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "sk3kNiqgZiEq24BWQ85qPy9K5xNrJgxCAtMQ9Jzzf3QN6wOUx41OCQ9N6zK0J6XdLLNa4f8K3CwRlXfPzsrPey93wZTNben2JEStBSYKVdqSK4FPPjtClEvpVrdwmXEdiXGYesE9CzOOgiLjzYOtGCjpHVwJY2XYqLENytJavXbwT9mKxrCc",
  useCdn: false,           
});



//sanity/sanityClient.ts
import { createClient } from "next-sanity";



export const sanityClient = createClient({
  projectId: "dys4b966",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "skkcO1pMdJm00m3paMeJromGlkyY7roV5Nsz4Tak4pJ31hY54VZZsfvQB2RF9vw50cPp8EvnqE79otpTgRekHch6JkyDTd90VbH0GCUKRzaYJkX076AKbmld5aOCiLkRZOr9ItXddlCZDUzFKxkkvlFnfvQmCEZXJBGAUtHlMKoM6Cga6Cg0",
  useCdn: false,           
});



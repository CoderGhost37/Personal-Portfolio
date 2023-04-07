import { defineField, defineType } from "sanity";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({ 
        name: "role", 
        title: "Role", 
        type: "string" 
    }),
    defineField({ 
        name: "startingDate", 
        title: "Starting Date", 
        type: "date" 
    }),
    defineField({ 
        name: "endingDate", 
        title: "Starting Date", 
        type: "date" 
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Desc",
      type: "text",
    }),
  ],
});

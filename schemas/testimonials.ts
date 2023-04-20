import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desgn",
      title: "Designation",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "feedback",
      title: "Feedback",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

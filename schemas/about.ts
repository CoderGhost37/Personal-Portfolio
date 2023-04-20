import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "para1",
      title: "Paragraph-1",
      type: "text",
    }),
    defineField({
      name: "para2",
      title: "Paragraph-2",
      type: "text",
    }),
    defineField({
      name: "para3",
      title: "Paragraph-3",
      type: "text",
    }),
    defineField({
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "clients",
      title: "Satisfied Clients",
      type: "string",
    }),
    defineField({
      name: "projects",
      title: "Projects Completed",
      type: "string",
    }),
    defineField({
      name: "yoe",
      title: "Years Of Experience",
      type: "string",
    }),
  ],
});

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const ctx = {
     getAboutData: async () => {
          const about = await prisma.about.findFirst();

          return about!;
     },

     getExperiencesData: async () => {
          const experiences = await prisma.experience.findMany();
          return experiences;
     },

     getTechnosData: async () => {
          const technoTypes = await prisma.technoType.findMany({
               include: {
                    items: true,
               },
          });
          return technoTypes;
     },

     getProjectsData: async () => {
          const projects = await prisma.project.findMany();
          return projects;
     },

     getAllBlogData: async () => {
          const blogs = await prisma.blog.findMany();
          return blogs;
     },

     getBlogArticleData: async (slug: string) => {
          const article = await prisma.blog.findFirst({
               where: {
                    slug
               }
          });
          return article;
     }
};

export default ctx;
/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/profile.jpg"
              width={280}
              height={280}
              alt="Developer"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link
                target="_blank"
                href={data.contactInfo.github}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                target="_blank"
                href={data.contactInfo.twitter}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link
                target="_blank"
                href={data.contactInfo.linkedin}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  target="_blank"
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project) => (
            <Dialog.Root key={project.title}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/10 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-left shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_25px_70px_-35px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative w-full overflow-hidden">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                      <Image
                        src={project.cover}
                        alt={`${project.title} cover`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-95 transition duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {project?.live_url && (
                        <Link
                          target="_blank"
                          href={project.live_url}
                          prefetch={false}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/20"
                        >
                          <GlobeIcon className="h-4 w-4" />
                        </Link>
                      )}
                      {project?.code_repo_url && (
                        <Link
                          target="_blank"
                          href={project.code_repo_url}
                          prefetch={false}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/20"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity data-[state=open]:opacity-100 data-[state=closed]:opacity-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-[#0b1021] shadow-2xl ring-1 ring-white/10 transition-opacity data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
                  <div className="relative max-h-[85vh] overflow-y-auto p-5 sm:p-6">
                    <div className="relative mb-5 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-black">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={project.cover}
                          alt={`${project.title} large`}
                          fill
                          sizes="(min-width: 1024px) 70vw, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <Dialog.Title className="text-2xl font-semibold text-white">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-3 text-base text-gray-300">
                      {project.description}
                    </Dialog.Description>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project?.live_url && (
                        <Link
                          target="_blank"
                          href={project.live_url}
                          prefetch={false}
                        >
                          <Button>
                            <GlobeIcon className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project?.code_repo_url && (
                        <Link
                          target="_blank"
                          href={project.code_repo_url}
                          prefetch={false}
                        >
                          <Button variant="outline">
                            <GitHubLogoIcon className="h-4 w-4 mr-2" />
                            Open Repository
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </section>
      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section
        id="testimonials"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Testimonials</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.testimonials.map((t) => (
            <Card className="p-6 text-left" key={t.id}>
              <blockquote className="font-medium lg:text-og">
                &ldquo;{t.feedback}.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar>
                  <Image
                    height={50}
                    width={50}
                    alt="testimonial avatar"
                    src={t.avatar}
                  />
                </Avatar>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t.title} @ <Link href={t.link}>
                      {t.company}
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Blogs Section */}
      <section
        id="blogs"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Blogs</h2>

        <div className="flex flex-col space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={post.link}>
              <h3 className="text-xl md:text-3xl font-semibold">
                {post.title}
              </h3>
              <p className="md:text-lg font-light">{post.description}</p>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Published at: {post.publishDate}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

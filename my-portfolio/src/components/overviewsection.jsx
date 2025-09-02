"use client";

import { Box } from "@mui/material";

export default function Overview() {

    return (
        <Box>
<section className="max-w-5xl mx-auto text-center py-20 px-6">
  <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
    Full Stack Developer | MERN & Cloud Specialist
  </h1>
  
  <p className="text-xl leading-relaxed text-gray-700 mb-6">
    I’m <strong>Rajan</strong>, a passionate and results-driven{" "}
    <strong>Full Stack Developer</strong> specializing in{" "}
    <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I design and
    develop scalable, high-performance applications with clean architecture
    and seamless user experiences.
  </p>
  
  <p className="text-lg leading-relaxed text-gray-600 mb-6">
    Beyond MERN, I work extensively with{" "}
    <strong>Next.js, Redux, TypeScript</strong>, and modern UI frameworks. 
    I also leverage tools like <strong>Figma</strong> and <strong>Canva</strong> 
    for design workflows, ensuring smooth collaboration between development 
    and design teams.
  </p>
  
  <p className="text-lg leading-relaxed text-gray-600 mb-6">
    On the DevOps side, I have hands-on experience in{" "}
    <strong>Docker, Kubernetes, AWS (EC2, S3, CloudFront), Cloudflare R2</strong>, 
    and deploying applications on both <strong>Linux & Windows servers</strong>. 
    I use <strong>Git & GitHub</strong> for version control and CI/CD pipelines 
    to ensure reliable, production-ready deployments.
  </p>
  
  <p className="text-lg leading-relaxed text-gray-600 mb-8">
    Currently open to{" "}
    <strong>internships</strong>, <strong>freelance projects</strong>, and{" "}
    <strong>full-time opportunities</strong> where I can contribute my 
    expertise, collaborate with dynamic teams, and continue growing as a 
    developer.
  </p>
  
  <div className="flex justify-center gap-4">
    <a
      href="/Rajan_Resume.pdf"
      target="_blank"
      className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    >
      Download Resume
    </a>
    <a
      href="#projects"
      className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
    >
      View My Work
    </a>
  </div>
</section>



        </Box>
    );
}